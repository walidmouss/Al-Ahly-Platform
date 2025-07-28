"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Send,
  Phone,
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  Circle,
  MessageSquare,
  Users,
  Plus,
} from "lucide-react"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1)
  const [message, setMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Mike Johnson",
      role: "Head Coach",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Great session today! The team is really improving.",
      timestamp: "2 min ago",
      unread: 0,
      online: true,
      type: "direct",
    },
    {
      id: 2,
      name: "Eagles Team Chat",
      role: "Team Group",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Don't forget about tomorrow's early training session",
      timestamp: "15 min ago",
      unread: 3,
      online: false,
      type: "group",
      members: 25,
    },
    {
      id: 3,
      name: "Sarah Williams",
      role: "Assistant Coach",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I've updated the drill library with new exercises",
      timestamp: "1 hour ago",
      unread: 1,
      online: true,
      type: "direct",
    },
    {
      id: 4,
      name: "Coaching Staff",
      role: "Staff Group",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Meeting scheduled for Friday at 3 PM",
      timestamp: "2 hours ago",
      unread: 0,
      online: false,
      type: "group",
      members: 8,
    },
    {
      id: 5,
      name: "David Chen",
      role: "Sports Therapist",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Player injury report is ready for review",
      timestamp: "3 hours ago",
      unread: 0,
      online: false,
      type: "direct",
    },
    {
      id: 6,
      name: "John Smith",
      role: "Team Captain",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the feedback on my performance",
      timestamp: "1 day ago",
      unread: 0,
      online: true,
      type: "direct",
    },
  ]

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "Mike Johnson",
      senderAvatar: "/placeholder.svg?height=32&width=32",
      content: "Hey! How did the training session go today?",
      timestamp: "10:30 AM",
      type: "text",
      isOwn: false,
    },
    {
      id: 2,
      senderId: 0,
      senderName: "You",
      senderAvatar: "/placeholder.svg?height=32&width=32",
      content: "It went really well! The players were very engaged and we made good progress on the new formations.",
      timestamp: "10:32 AM",
      type: "text",
      isOwn: true,
    },
    {
      id: 3,
      senderId: 1,
      senderName: "Mike Johnson",
      senderAvatar: "/placeholder.svg?height=32&width=32",
      content: "That's great to hear. I noticed the improvement in their coordination during the last match.",
      timestamp: "10:35 AM",
      type: "text",
      isOwn: false,
    },
    {
      id: 4,
      senderId: 0,
      senderName: "You",
      senderAvatar: "/placeholder.svg?height=32&width=32",
      content: "Exactly! I think we should continue with this approach. The players seem to respond well to it.",
      timestamp: "10:37 AM",
      type: "text",
      isOwn: true,
    },
    {
      id: 5,
      senderId: 1,
      senderName: "Mike Johnson",
      senderAvatar: "/placeholder.svg?height=32&width=32",
      content:
        "Agreed. Let's discuss this further in tomorrow's coaching meeting. I have some ideas for additional drills.",
      timestamp: "10:40 AM",
      type: "text",
      isOwn: false,
    },
    {
      id: 6,
      senderId: 0,
      senderName: "You",
      senderAvatar: "/placeholder.svg?height=32&width=32",
      content: "Perfect! I'll prepare some notes and bring the performance data from today's session.",
      timestamp: "10:42 AM",
      type: "text",
      isOwn: true,
    },
    {
      id: 7,
      senderId: 1,
      senderName: "Mike Johnson",
      senderAvatar: "/placeholder.svg?height=32&width=32",
      content: "Great session today! The team is really improving.",
      timestamp: "Just now",
      type: "text",
      isOwn: false,
    },
  ]

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedConversation = conversations.find((conv) => conv.id === selectedChat)

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-8rem)] flex bg-white dark:bg-gray-900 rounded-lg border overflow-hidden">
        {/* Sidebar - Conversations List */}
        <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Messages</h2>
              <Button size="icon" variant="ghost">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Conversations List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === conversation.id
                      ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {conversation.type === "group" ? (
                          <Users className="w-6 h-6" />
                        ) : (
                          conversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        )}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && conversation.type === "direct" && (
                      <Circle className="absolute -bottom-1 -right-1 w-4 h-4 text-green-500 fill-current" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 dark:text-white truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <Badge className="bg-blue-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {conversation.type === "group" ? `${conversation.members} members` : conversation.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedConversation.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {selectedConversation.type === "group" ? (
                          <Users className="w-5 h-5" />
                        ) : (
                          selectedConversation.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{selectedConversation.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedConversation.type === "group"
                          ? `${selectedConversation.members} members`
                          : selectedConversation.online
                            ? "Online"
                            : "Offline"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {selectedConversation.type === "direct" && (
                      <>
                        <Button variant="ghost" size="icon">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Video className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex space-x-2 max-w-xs lg:max-w-md ${msg.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        {!msg.isOwn && (
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={msg.senderAvatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {msg.senderName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div
                            className={`px-4 py-2 rounded-lg ${
                              msg.isOwn
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                          </div>
                          <p className={`text-xs text-gray-500 mt-1 ${msg.isOwn ? "text-right" : "text-left"}`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pr-10"
                    />
                    <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Select a conversation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a conversation from the sidebar to start messaging
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
