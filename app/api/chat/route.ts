import { assistants } from '@/app/play/paly';
import { openai } from '@ai-sdk/openai';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, assistantId }: { messages: UIMessage[], assistantId?: number } = await req.json();

  const selectedAssistant = assistants.find(a => a.id === assistantId) || assistants[0];

  const modelMessages = convertToModelMessages(messages);

  const messagesWithSystem = [
    { role: 'system' as const, content: selectedAssistant.systemPrompt },
    ...modelMessages
  ];

  const result = streamText({
    model: openai('gpt-4o'),
    messages: messagesWithSystem,
    temperature: 0.7,
  });

  return result.toUIMessageStreamResponse();
}
