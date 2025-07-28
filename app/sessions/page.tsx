"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Plus,
  Calendar,
  MapPin,
  Clock,
  Users,
  Filter,
  MoreHorizontal,
  Activity,
  Target,
  Edit,
} from "lucide-react"
import Link from "next/link"

export default function SessionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const sessions = [
    {
      id: 1,
      title: "Morning Training - Eagles",
      sport: "Football",
      date: "2024-01-25",
      time: "09:00 AM",
      duration: "2 hours",
      location: "Main Field",
      team: "Eagles",
      coach: "Mike Johnson",
      participants: 22,
      maxParticipants: 25,
      drills: 8,
      type: "training",
      status: "scheduled",
      description: "Intensive training session focusing on ball control and tactical positioning.",
    },
    {
      id: 2,
      title: "Tactical Session - Lions",
      sport: "Basketball",
      date: "2024-01-25",
      time: "02:00 PM",
      duration: "1.5 hours",
      location: "Indoor Court A",
      team: "Lions",
      coach: "Sarah Williams",
      participants: 18,
      maxParticipants: 20,
      drills: 5,
      type: "tactical",
      status: "in_progress",
      description: "Focus on defensive strategies and team coordination.",
    },
    {
      id: 3,
      title: "Swimming Practice - Sharks",
      sport: "Swimming",
      date: "2024-01-26",
      time: "06:00 AM",
      duration: "2.5 hours",
      location: "Olympic Pool",
      team: "Sharks",
      coach: "David Chen",
      participants: 20,
      maxParticipants: 22,
      drills: 12,
      type: "training",
      status: "scheduled",
      description: "Endurance training and technique refinement session.",
    },
    {
      id: 4,
      title: "Strength & Conditioning",
      sport: "Football",
      date: "2024-01-26",
      time: "04:00 PM",
      duration: "1 hour",
      location: "Gym",
      team: "Panthers",
      coach: "Alex Rodriguez",
      participants: 23,
      maxParticipants: 25,
      drills: 6,
      type: "conditioning",
      status: "scheduled",
      description: "Physical conditioning and strength building exercises.",
    },
    {
      id: 5,
      title: "Match Preparation - Hawks",
      sport: "Basketball",
      date: "2024-01-27",
      time: "10:00 AM",
      duration: "3 hours",
      location: "Indoor Court B",
      team: "Hawks",
      coach: "Emma Thompson",
      participants: 19,
      maxParticipants: 20,
      drills: 10,
      type: "match_prep",
      status: "scheduled",
      description: "Final preparation session before the championship match.",
    },
    {
      id: 6,
      title: "Recovery Session - Eagles",
      sport: "Football",
      date: "2024-01-24",
      time: "11:00 AM",
      duration: "1 hour",
      location: "Recovery Center",
      team: "Eagles",
      coach: "Mike Johnson",
      participants: 25,
      maxParticipants: 25,
      drills: 3,
      type: "recovery",
      status: "completed",
      description: "Light recovery exercises and stretching after yesterday's match.",
    },
  ]

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.coach.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterType === "all" || session.type === filterType

    return matchesSearch && matchesFilter
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Scheduled</Badge>
      case "in_progress":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Progress</Badge>
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Completed</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "training":
        return <Badge variant="outline">Training</Badge>
      case "tactical":
        return <Badge variant="outline">Tactical</Badge>
      case "conditioning":
        return <Badge variant="outline">Conditioning</Badge>
      case "match_prep":
        return <Badge variant="outline">Match Prep</Badge>
      case "recovery":
        return <Badge variant="outline">Recovery</Badge>
      default:
        return <Badge variant="outline">Other</Badge>
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Training Sessions</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage and track all training sessions</p>
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
              New Session
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search sessions, teams, or coaches..."
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
              variant={filterType === "training" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("training")}
            >
              Training
            </Button>
            <Button
              variant={filterType === "tactical" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("tactical")}
            >
              Tactical
            </Button>
            <Button
              variant={filterType === "match_prep" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("match_prep")}
            >
              Match Prep
            </Button>
          </div>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {filteredSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                      {getTypeBadge(session.type)}
                      {getStatusBadge(session.status)}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4">{session.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>
                          {session.time} ({session.duration})
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        <span>
                          {session.participants}/{session.maxParticipants} participants
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 mt-4 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Team:</span>
                        <span className="ml-1">{session.team}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Coach:</span>
                        <span className="ml-1">{session.coach}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Target className="w-4 h-4 mr-1" />
                        <span>{session.drills} drills</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <Link href={`/sessions/${session.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSessions.length === 0 && (
          <div className="text-center py-12">
            <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No sessions found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Get started by creating your first training session"}
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              New Session
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
