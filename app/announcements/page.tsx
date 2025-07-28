"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Plus,
  Bell,
  Filter,
  MoreHorizontal,
  Pin,
  Users,
  Calendar,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function AnnouncementsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")

  const announcements = [
    {
      id: 1,
      title: "Championship Registration Deadline Extended",
      content:
        "Due to popular demand, we've extended the registration deadline for the upcoming championship tournament. All teams must submit their final rosters by February 15th instead of February 10th. Please ensure all player documentation is complete.",
      author: "Admin Team",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      role: "Admin",
      date: "2024-01-25",
      time: "10:30 AM",
      priority: "high",
      type: "announcement",
      targetAudience: "All",
      isPinned: true,
      readBy: 45,
      totalRecipients: 67,
      tags: ["championship", "registration", "deadline"],
    },
    {
      id: 2,
      title: "New Training Equipment Available",
      content:
        "We're excited to announce that new training equipment has arrived! This includes agility cones, resistance bands, speed ladders, and new footballs. Equipment is available for checkout from the equipment room starting Monday.",
      author: "Mike Johnson",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      role: "Coach",
      date: "2024-01-24",
      time: "2:15 PM",
      priority: "normal",
      type: "update",
      targetAudience: "Coaches",
      isPinned: false,
      readBy: 23,
      totalRecipients: 28,
      tags: ["equipment", "training", "resources"],
    },
    {
      id: 3,
      title: "Facility Maintenance Schedule",
      content:
        "Please be aware that the main training field will undergo maintenance this weekend (January 27-28). All scheduled sessions will be moved to the backup field. The indoor courts remain available as usual.",
      author: "Facility Manager",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      role: "Staff",
      date: "2024-01-23",
      time: "4:45 PM",
      priority: "normal",
      type: "maintenance",
      targetAudience: "All",
      isPinned: false,
      readBy: 52,
      totalRecipients: 67,
      tags: ["maintenance", "facility", "schedule"],
    },
    {
      id: 4,
      title: "Player Safety Protocol Update",
      content:
        "Following recent guidelines, we've updated our player safety protocols. All coaches must complete the new safety training module by February 1st. The training is available online and takes approximately 30 minutes to complete.",
      author: "Safety Committee",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      role: "Admin",
      date: "2024-01-22",
      time: "11:20 AM",
      priority: "high",
      type: "policy",
      targetAudience: "Coaches",
      isPinned: true,
      readBy: 18,
      totalRecipients: 28,
      tags: ["safety", "protocol", "training"],
    },
    {
      id: 5,
      title: "Monthly Performance Review Meeting",
      content:
        "The monthly performance review meeting is scheduled for February 5th at 3:00 PM in the conference room. We'll be discussing team progress, upcoming tournaments, and resource allocation for the next quarter.",
      author: "Sarah Williams",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      role: "Coach",
      date: "2024-01-21",
      time: "9:00 AM",
      priority: "normal",
      type: "meeting",
      targetAudience: "Staff",
      isPinned: false,
      readBy: 15,
      totalRecipients: 20,
      tags: ["meeting", "performance", "review"],
    },
    {
      id: 6,
      title: "Welcome New Team Members",
      content:
        "Please join us in welcoming three new players to our Eagles team: James Wilson, Marcus Thompson, and Alex Chen. They bring great experience and we're excited to have them on board. Please make them feel welcome!",
      author: "Team Captain",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      role: "Player",
      date: "2024-01-20",
      time: "6:30 PM",
      priority: "normal",
      type: "welcome",
      targetAudience: "Players",
      isPinned: false,
      readBy: 38,
      totalRecipients: 45,
      tags: ["welcome", "new-members", "team"],
    },
  ]

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch =
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.author.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterRole === "all" || announcement.targetAudience.toLowerCase() === filterRole.toLowerCase()

    return matchesSearch && matchesFilter
  })

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      case "normal":
        return <Info className="w-4 h-4 text-blue-500" />
      default:
        return <Info className="w-4 h-4 text-gray-500" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
      case "normal":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Normal</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    const typeColors = {
      announcement: "bg-purple-100 text-purple-800",
      update: "bg-green-100 text-green-800",
      maintenance: "bg-orange-100 text-orange-800",
      policy: "bg-red-100 text-red-800",
      meeting: "bg-blue-100 text-blue-800",
      welcome: "bg-pink-100 text-pink-800",
    }

    return (
      <Badge
        className={`${typeColors[type as keyof typeof typeColors] || "bg-gray-100 text-gray-800"} hover:${typeColors[type as keyof typeof typeColors] || "bg-gray-100"}`}
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    )
  }

  // Sort announcements: pinned first, then by date
  const sortedAnnouncements = [...filteredAnnouncements].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Announcements</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Stay updated with the latest news and updates</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Announcement
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex space-x-2">
            <Button
              variant={filterRole === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRole("all")}
            >
              All
            </Button>
            <Button
              variant={filterRole === "coaches" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRole("coaches")}
            >
              Coaches
            </Button>
            <Button
              variant={filterRole === "players" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRole("players")}
            >
              Players
            </Button>
            <Button
              variant={filterRole === "staff" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterRole("staff")}
            >
              Staff
            </Button>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {sortedAnnouncements.map((announcement) => (
            <Card
              key={announcement.id}
              className={`hover:shadow-md transition-shadow ${announcement.isPinned ? "ring-2 ring-blue-200 dark:ring-blue-800" : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {announcement.isPinned && <Pin className="w-4 h-4 text-blue-500" />}
                      {getPriorityIcon(announcement.priority)}
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{announcement.title}</h3>
                      <div className="flex items-center space-x-2">
                        {getTypeBadge(announcement.type)}
                        {announcement.priority === "high" && getPriorityBadge(announcement.priority)}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{announcement.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={announcement.authorAvatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {announcement.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{announcement.author}</p>
                            <p className="text-xs text-gray-500">{announcement.role}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{announcement.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{announcement.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>For {announcement.targetAudience}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                            <span>
                              {announcement.readBy}/{announcement.totalRecipients} read
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {announcement.tags.length > 0 && (
                      <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
                        <span className="text-sm text-gray-500">Tags:</span>
                        {announcement.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedAnnouncements.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No announcements found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "No announcements to display at the moment"}
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Announcement
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
