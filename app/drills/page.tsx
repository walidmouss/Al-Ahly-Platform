"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Target, Play, Clock, Users, Filter, MoreHorizontal, Star, BookOpen, Video } from "lucide-react"
import Link from "next/link"

export default function DrillsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const drills = [
    {
      id: 1,
      name: "Ball Control Under Pressure",
      type: "Technical",
      sport: "Football",
      difficulty: "Medium",
      duration: "15 mins",
      participants: "8-12 players",
      description: "Improve ball control skills while under defensive pressure from opponents.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://example.com/drill1",
      createdBy: "Mike Johnson",
      createdDate: "2024-01-15",
      rating: 4.5,
      usageCount: 23,
      tags: ["ball-control", "pressure", "technical"],
    },
    {
      id: 2,
      name: "Passing Accuracy Drill",
      type: "Technical",
      sport: "Football",
      difficulty: "Easy",
      duration: "20 mins",
      participants: "6-10 players",
      description: "Practice short and long passing with focus on accuracy and timing.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://example.com/drill2",
      createdBy: "Sarah Williams",
      createdDate: "2024-01-12",
      rating: 4.8,
      usageCount: 31,
      tags: ["passing", "accuracy", "technical"],
    },
    {
      id: 3,
      name: "Defensive Line Positioning",
      type: "Tactical",
      sport: "Football",
      difficulty: "Hard",
      duration: "25 mins",
      participants: "11 players",
      description: "Learn proper defensive line positioning and offside trap execution.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://example.com/drill3",
      createdBy: "David Chen",
      createdDate: "2024-01-10",
      rating: 4.2,
      usageCount: 18,
      tags: ["defense", "positioning", "tactical"],
    },
    {
      id: 4,
      name: "Sprint Intervals",
      type: "Conditioning",
      sport: "Football",
      difficulty: "Hard",
      duration: "10 mins",
      participants: "Any number",
      description: "High-intensity sprint intervals to build speed and endurance.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://example.com/drill4",
      createdBy: "Alex Rodriguez",
      createdDate: "2024-01-08",
      rating: 4.0,
      usageCount: 27,
      tags: ["conditioning", "speed", "endurance"],
    },
    {
      id: 5,
      name: "Basketball Shooting Form",
      type: "Technical",
      sport: "Basketball",
      difficulty: "Medium",
      duration: "30 mins",
      participants: "5-8 players",
      description: "Perfect shooting form and technique from various court positions.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://example.com/drill5",
      createdBy: "Emma Thompson",
      createdDate: "2024-01-05",
      rating: 4.6,
      usageCount: 22,
      tags: ["shooting", "form", "technical"],
    },
    {
      id: 6,
      name: "Swimming Stroke Technique",
      type: "Technical",
      sport: "Swimming",
      difficulty: "Medium",
      duration: "45 mins",
      participants: "4-6 swimmers",
      description: "Refine freestyle stroke technique and breathing patterns.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://example.com/drill6",
      createdBy: "Tom Wilson",
      createdDate: "2024-01-03",
      rating: 4.4,
      usageCount: 15,
      tags: ["swimming", "technique", "freestyle"],
    },
  ]

  const filteredDrills = drills.filter((drill) => {
    const matchesSearch =
      drill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drill.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drill.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      drill.createdBy.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterType === "all" || drill.type.toLowerCase() === filterType.toLowerCase()

    return matchesSearch && matchesFilter
  })

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Easy</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
      case "Hard":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Hard</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Drill Library</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Browse and manage training drills for all sports</p>
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
              Create Drill
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search drills, sports, or creators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex space-x-2">
            <Button
              variant={filterType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("all")}
            >
              All
            </Button>
            <Button
              variant={filterType === "technical" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("technical")}
            >
              Technical
            </Button>
            <Button
              variant={filterType === "tactical" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("tactical")}
            >
              Tactical
            </Button>
            <Button
              variant={filterType === "conditioning" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("conditioning")}
            >
              Conditioning
            </Button>
          </div>
        </div>

        {/* Drills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDrills.map((drill) => (
            <Card key={drill.id} className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
              <div className="relative">
                <img
                  src={drill.thumbnail || "/placeholder.svg"}
                  alt={drill.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/50 text-white hover:bg-black/50">
                    {drill.sport}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-black/50 text-white hover:bg-black/70">
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-gray-900 hover:bg-white/90">
                    {drill.type}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                      {drill.name}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        {renderStars(drill.rating)}
                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{drill.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Used {drill.usageCount} times</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{drill.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{drill.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{drill.participants}</span>
                    </div>
                  </div>
                  {getDifficultyBadge(drill.difficulty)}
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src={`/placeholder.svg?height=24&width=24&query=${drill.createdBy.replace(" ", "-").toLowerCase()}`}
                      />
                      <AvatarFallback className="text-xs">
                        {drill.createdBy
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{drill.createdBy}</span>
                  </div>
                  <span className="text-xs text-gray-500">{drill.createdDate}</span>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Link href={`/drills/${drill.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <BookOpen className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm" className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Use Drill
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDrills.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No drills found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Get started by creating your first drill"}
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Drill
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
