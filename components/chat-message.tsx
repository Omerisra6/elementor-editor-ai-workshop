import type { ChatMessage } from "@/lib/types"
import { cn } from "@/lib/utils"

interface ChatMessageProps {
  message: ChatMessage
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
              message.content
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
