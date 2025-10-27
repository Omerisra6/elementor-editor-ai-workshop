import type { ChatMessage } from "@/lib/types"
import { cn } from "@/lib/utils"
import { UIMessage } from "ai";

interface ChatMessageProps {
  message: UIMessage
  isLoading?: boolean
}

export function ChatMessageComponent({ message, isLoading }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex w-full gap-4 px-4 py-6 text-pretty", isUser ? "bg-background" : "bg-muted/30")}>
      <div className="flex w-full max-w-3xl mx-auto gap-4">
        {/* Avatar */}
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md text-sm font-medium",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border",
          )}
        >
          {isUser ? "You" : "AI"}
        </div>

        {/* Message Content */}
        <div className="flex-1 space-y-2">
          <div className="text-sm font-medium text-foreground">{isUser ? "You" : "Assistant"}</div>
          <div className="text-sm text-foreground leading-relaxed">
            {isLoading ? (
              <div className="flex items-center gap-1">
                <span className="animate-pulse">●</span>
                <span className="animate-pulse delay-75">●</span>
                <span className="animate-pulse delay-150">●</span>
              </div>
            ) : (
                message.parts.map((part, i) => {
                    if (part.type === 'text') {
                        return <div key={`${message.id}-${i}`}>{part.text}</div>;
                    }
                    
                    // Handle tool invocations
                    if (part.type.startsWith('tool-')) {
                        const toolPart = part as any;
                        const toolName = part.type.replace('tool-', '');
                        
                        // Show tool calls with available data
                        return (
                            <div key={`${message.id}-${i}`}>
                                {/* Tool Call */}
                                <div className="my-2 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded">🔧 Tool Call</span>
                                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{toolName}</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground font-mono">
                                        {toolPart.args ? JSON.stringify(toolPart.args, null, 2) : 
                                         toolPart.input ? JSON.stringify(toolPart.input, null, 2) : 'No input'}
                                    </div>
                                </div>
                                {/* Tool Result - only show if available */}
                                {(toolPart.result || toolPart.output) && (
                                    <div className="my-2 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-mono bg-green-100 dark:bg-green-900 px-2 py-0.5 rounded">✓ Tool Result</span>
                                            <span className="text-xs font-semibold text-green-700 dark:text-green-300">{toolName}</span>
                                        </div>
                                        <div className="text-xs text-muted-foreground font-mono whitespace-pre-wrap">
                                            {typeof (toolPart.result || toolPart.output) === 'object' 
                                                ? JSON.stringify(toolPart.result || toolPart.output, null, 2)
                                                : String(toolPart.result || toolPart.output)
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    }
                    
                    return null;
                })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
