import { assistants } from '@/app/play/paly';
import { bankingTools } from '@/lib/tools';
import { streamText, UIMessage, convertToModelMessages, stepCountIs } from 'ai';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

async function loadDatasetContent(filename: string): Promise<string> {
  try {
    const filePath = join(process.cwd(), 'public', filename);
    const content = await readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Error loading dataset ${filename}:`, error);
    return '';
  }
}

export async function POST(req: Request) {
  const { messages, assistantId }: { messages: UIMessage[], assistantId?: number } = await req.json();

  const selectedAssistant = assistants.find(a => a.id === assistantId) || assistants[0];

  // Load dataset files and append to system prompt
  let enhancedSystemPrompt = selectedAssistant.systemPrompt;
  
  if (selectedAssistant.datasets && selectedAssistant.datasets.length > 0) {
    enhancedSystemPrompt += '\n\n--- AVAILABLE DATA ---\n';
    
    for (const dataset of selectedAssistant.datasets) {
      const content = await loadDatasetContent(dataset);
      if (content) {
        enhancedSystemPrompt += `\n\n### ${dataset}:\n\`\`\`\n${content}\n\`\`\`\n`;
      }
    }
  }

  const modelMessages = convertToModelMessages(messages);

  const messagesWithSystem = [
    { role: 'system' as const, content: enhancedSystemPrompt },
    ...modelMessages
  ];

  console.log(messagesWithSystem);

  const result = streamText({
    model: 'openai/gpt-4o',
    messages: messagesWithSystem,
    tools: bankingTools,
    stopWhen: stepCountIs(5), // Allow up to 5 steps for multi-step tool calls
    temperature: 0.1,
    topP: 0.3,
    presencePenalty: 0.6,
    frequencyPenalty: 0.8,
  });

  return result.toUIMessageStreamResponse();
}
