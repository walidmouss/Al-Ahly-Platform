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
  Star,
  Filter,
  MoreHorizontal,
  Calendar,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react"

export default function FeedbackPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRating, setFilterRating] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  const feedbackList = [
    {
      id: 1,
      playerName: "John Smith",
      playerAvatar: "/placeholder.svg?height=40&width=40",
      position: "Forward",
      team: "Eagles",
      rating: 5,
      comment:
        "Outstanding performance today! John showed excellent ball control and made crucial passes that led to two goals. His leadership on the field was evident and he motivated the entire team. Keep up the fantastic work!",
      coach: "Mike Johnson",
      coachAvatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-25",
      session: "Morning Training",
      category: "Technical",
      improvement: "up",
      tags: ["leadership", "ball-control", "passing"],
    },
    {
      id: 2,
      playerName: "Alex Davis",
      playerAvatar: "/placeholder.svg?height=40&width=40",
      position: "Midfielder",
      team: "Eagles",
      rating: 4,
      comment:
        "Good performance overall. Alex showed improvement in defensive positioning and made several key interceptions. However, needs to work on communication with teammates during set pieces. Great effort and attitude throughout the session.",
      coach: "Sarah Williams",
      coachAvatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-25",
      session: "Tactical Session",
      category: "Tactical",
      improvement: "up",
      tags: ["defense", "positioning", "communication"],
    },
    {
      id: 3,
      playerName: "Mike Johnson Jr.",
      playerAvatar: "/placeholder.svg?height=40&width=40",
      position: "Defender",
      team: "Lions",
      rating: 3,
      comment:
        "Average performance today. Mike needs to focus more on maintaining concentration throughout the entire session. Made a few good tackles but also had some positioning errors. Recommend additional one-on-one training to improve consistency.",
      coach: "David Chen",
      coachAvatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-24",
      session: "Defense Training",
      category: "Technical",
      improvement: "same",
      tags: ["concentration", "tackling", "positioning"],
    },
    {
      id: 4,
      playerName: "Emma Wilson",
      playerAvatar: "/placeholder.svg?height=40&width=40",
      position: "Goalkeeper",
      team: "Sharks",
      rating: 5,
      comment:
        "Exceptional goalkeeping display! Emma made several spectacular saves and showed great command of her penalty area. Her distribution was accurate and quick, starting many counter-attacks. Excellent communication with defenders.",
      coach: "Tom Wilson",
      coachAvatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-24",
      session: "Goalkeeper Training",
      category: "Technical",
      improvement: "up",
      tags: ["saves", "distribution", "communication"],
    },
    {
      id: 5,
      playerName: "Chris Brown",
      playerAvatar: "/placeholder.svg?height=40&width=40",
      position: "Winger",
      team: "Panthers",
      rating: 2,
      comment:
        "Below expectations today. Chris seemed distracted and made several unforced errors. Needs to improve focus and decision-making in the final third. Recommend working on basic ball control drills and mental preparation techniques.",
      coach: "Alex Rodriguez",
      coachAvatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-23",
      session: "Attack Training",
      category: "Mental",
      improvement: "down",
      tags: ["focus", "decision-making", "ball-control"],
    },
    {
      id: 6,
      playerName: "Lisa Anderson",
      playerAvatar: "/placeholder.svg?height=40&width=40",
      position: "Midfielder",
      team: "Hawks",
      rating: 4,
      comment:
        "Solid performance with good work rate. Lisa covered a lot of ground and made important tackles in midfield. Her passing accuracy has improved significantly. Continue working on shooting technique and confidence in front of goal.",
      coach: "Emma Thompson",
      coachAvatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-23",
      session: "Midfield Training",
      category: "Physical",
      improvement: "up",
      tags: ["work-rate", "tackling", "passing"],
    },
    {
      id: 7,
      playerName: "Marcus Thompson",
      playerAvatar: "/placeholder.svg?height=40&width=40",
      position: "Forward",
      team: "Wolves",
      rating: 5,
      comment:
        "Brilliant attacking display! Marcus scored a hat-trick in the practice match and showed great movement in the box. His finishing was clinical and he created several chances for teammates. Excellent attitude and team spirit.",
      coach: "James Wilson",
      coachAvatar: "/placeholder.svg?height=32&width=32",
      date: "2024-01-22",
      session: "Match Practice",
      category: "Technical",
      improvement: "up",
      tags: ["finishing", "movement", "teamwork"],
    },
  ]

  const filteredFeedback = feedbackList.filter((feedback) => {
    const matchesSearch =
      feedback.playerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.coach.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.comment.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRating = filterRating === "all" || feedback.rating.toString() === filterRating

    return matchesSearch && matchesRating
  })

  const sortedFeedback = [...filteredFeedback].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.playerName.localeCompare(b.playerName)
      case "date":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const getRatingBadge = (rating: number) => {
    if (rating >= 5) return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
    if (rating >= 4) return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
    if (rating >= 3) return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Average</Badge>
    if (rating >= 2) return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Below Average</Badge>
    return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Poor</Badge>
  }

  const getImprovementIcon = (improvement: string) => {
    switch (improvement) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />
      case "same":
        return <Minus className="w-4 h-4 text-gray-500" />
      default:
        return null
    }
  }

  const getCategoryBadge = (category: string) => {
    const categoryColors = {
      Technical: "bg-blue-100 text-blue-800",
      Tactical: "bg-purple-100 text-purple-800",
      Physical: "bg-green-100 text-green-800",
      Mental: "bg-orange-100 text-orange-800",
    }

    return (
      <Badge
        className={`${categoryColors[category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"} hover:${categoryColors[category as keyof typeof categoryColors] || "bg-gray-100"}`}
      >
        {category}
      </Badge>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Player Feedback</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track player performance and provide constructive feedback
            </p>
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
              Add Feedback
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search players, teams, or coaches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Sort by Date</option>
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Feedback List */}
        <div className="space-y-4">
          {sortedFeedback.map((feedback) => (
            <Card key={feedback.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={feedback.playerAvatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {feedback.playerName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feedback.playerName}</h3>
                        <Badge variant="outline">{feedback.position}</Badge>
                        <Badge variant="outline">{feedback.team}</Badge>
                        {getCategoryBadge(feedback.category)}
                        {getRatingBadge(feedback.rating)}
                      </div>

                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center">
                          {renderStars(feedback.rating)}
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">{feedback.rating}/5</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {getImprovementIcon(feedback.improvement)}
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {feedback.improvement === "up"
                              ? "Improving"
                              : feedback.improvement === "down"
                                ? "Declining"
                                : "Stable"}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{feedback.comment}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={feedback.coachAvatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs">
                                {feedback.coach
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span>By {feedback.coach}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{feedback.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            <span>{feedback.session}</span>
                          </div>
                        </div>

                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>

                      {feedback.tags.length > 0 && (
                        <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
                          <span className="text-sm text-gray-500">Focus Areas:</span>
                          {feedback.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedFeedback.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No feedback found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Start providing feedback to track player development"}
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Feedback
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
