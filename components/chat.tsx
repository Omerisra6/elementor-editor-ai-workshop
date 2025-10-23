"use client"

import { useState, useEffect, useRef } from "react"
import { ChatMessageComponent } from "./chat-message"
import { ChatInput } from "./chat-input"
import { useChat } from "@ai-sdk/react";

export function Chat() {
    const { messages, sendMessage } = useChat();
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
   * Handle sending a message
   */
  const handleSendMessage = async ( text: string ) => {

    setIsLoading(true)

    try {
      await sendMessage( { text } )

    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {messages.map((message) => (
            <ChatMessageComponent key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  )
}
