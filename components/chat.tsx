"use client"

import { useState, useEffect, useRef } from "react"
import type { ChatMessage } from "@/lib/types"
import { sendMessage } from "@/lib/api/chat"
import { ChatMessageComponent } from "./chat-message"
import { ChatInput } from "./chat-input"

export function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  /**
   * Add a new message to the chat
   */
  const addMessage = (role: "user" | "assistant", content: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random()}`,
      role,
      content,
    }
    setMessages((prev) => [...prev, newMessage])
    return newMessage
  }

  /**
   * Update the last message in the chat
   * Useful for streaming responses (future implementation)
   */
  const updateLastMessage = (content: string) => {
    setMessages((prev) => {
      const updated = [...prev]
      if (updated.length > 0) {
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content,
        }
      }
      return updated
    })
  }

  /**
   * Handle sending a message
   */
  const handleSendMessage = async (content: string) => {
    // Add user message
    addMessage("user", content)
    setIsLoading(true)

    try {
      // Send to API and get response
      const response = await sendMessage([...messages, { id: "temp", role: "user", content }])

      // Add assistant response
      addMessage("assistant", response.content)
    } catch (error) {
      console.error("Error sending message:", error)
      addMessage("assistant", "Sorry, I encountered an error. Please try again or connect the Vercel AI SDK.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {messages.map((message) => (
            <ChatMessageComponent key={message.id} message={message} />
          ))}
          {isLoading && (
            <ChatMessageComponent
              message={{
                id: "loading",
                role: "assistant",
                content: "",
              }}
              isLoading
            />
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  )
}
