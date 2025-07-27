"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Users, Filter, MoreHorizontal, Star, Activity, Heart, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function PlayersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterTeam, setFilterTeam] = useState("all")
  const [filterPosition, setFilterPosition] = useState("all")

  const players = [
    {
      id: 1,
      name: "John Smith",
      number: 10,
      position: "Forward",
      team: "Eagles",
      age: 22,
      height: "6'1\"",
      weight: "175 lbs",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      medicalStatus: "cleared",
      performance: 4.8,
      goals: 15,
      assists: 8,
      matchesPlayed: 18,
      trainingAttendance: 96,
      lastInjury: null,
      contractExpiry: "2025-06-30",
      emergencyContact: "Jane Smith - Mother",
      phone: "+1 (555) 123-4567",
      email: "john.smith@email.com",
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Mike Johnson Jr.",
      number: 8,
      position: "Midfielder",
      team: "Eagles",
      age: 24,
      height: "5'10\"",
      weight: "165 lbs",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      medicalStatus: "cleared",
      performance: 4.5,
      goals: 7,
      assists: 12,
      matchesPlayed: 17,
      trainingAttendance: 94,
      lastInjury: null,
      contractExpiry: "2024-12-31",
      emergencyContact: "Sarah Johnson - Wife",
      phone: "+1 (555) 234-5678",
      email: "mike.johnson@email.com",
      joinDate: "2022-08-20",
    },
    {
      id: 3,
      name: "Alex Davis",
      number: 11,
      position: "Forward",
      team: "Eagles",
      age: 21,
      height: "5'11\"",
      weight: "170 lbs",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "injured",
      medicalStatus: "under_treatment",
      performance: 4.2,
      goals: 9,
      assists: 4,
      matchesPlayed: 12,
      trainingAttendance: 88,
      lastInjury: "Ankle sprain - 2024-01-20",
      contractExpiry: "2026-05-15",
      emergencyContact: "Robert Davis - Father",
      phone: "+1 (555) 345-6789",
      email: "alex.davis@email.com",
      joinDate: "2023-07-10",
    },
    {
      id: 4,
      name: "Emma Wilson",
      number: 1,
      position: "Goalkeeper",
      team: "Sharks",
      age: 26,
      height: "5'8\"",
      weight: "155 lbs",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      medicalStatus: "cleared",
      performance: 4.9,
      goals: 0,
      assists: 1,
      matchesPlayed: 20,
      trainingAttendance: 98,
      lastInjury: null,
      contractExpiry: "2025-12-31",
      emergencyContact: "Tom Wilson - Husband",
      phone: "+1 (555) 456-7890",
      email: "emma.wilson@email.com",
      joinDate: "2021-03-01",
    },
    {
      id: 5,
      name: "Chris Brown",
      number: 7,
      position: "Winger",
      team: "Panthers",
      age: 23,
      height: "5'9\"",
      weight: "160 lbs",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      medicalStatus: "monitoring",
      performance: 4.1,
      goals: 6,
      assists: 9,
      matchesPlayed: 16,
      trainingAttendance: 91,
      lastInjury: "Minor hamstring strain - 2023-12-15",
      contractExpiry: "2024-08-30",
      emergencyContact: "Lisa Brown - Sister",
      phone: "+1 (555) 567-8901",
      email: "chris.brown@email.com",
      joinDate: "2022-01-20",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      number: 6,
      position: "Midfielder",
      team: "Hawks",
      age: 25,
      height: "5'6\"",
      weight: "140 lbs",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      medicalStatus: "cleared",
      performance: 4.6,
      goals: 4,
      assists: 11,
      matchesPlayed: 19,
      trainingAttendance: 95,
      lastInjury: null,
      contractExpiry: "2025-03-15",
      emergencyContact: "Mark Anderson - Brother",
      phone: "+1 (555) 678-9012",
      email: "lisa.anderson@email.com",
      joinDate: "2021-09-05",
    },
  ]

  const filteredPlayers = players.filter((player) => {
    const matchesSearch =
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.number.toString().includes(searchTerm)

    const matchesTeam = filterTeam === "all" || player.team.toLowerCase() === filterTeam.toLowerCase()
    const matchesPosition = filterPosition === "all" || player.position.toLowerCase() === filterPosition.toLowerCase()

    return matchesSearch && matchesTeam && matchesPosition
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "injured":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Injured</Badge>
      case "suspended":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Suspended</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Inactive</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getMedicalStatusBadge = (status: string) => {
    switch (status) {
      case "cleared":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Cleared</Badge>
      case "under_treatment":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Under Treatment</Badge>
      case "monitoring":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Monitoring</Badge>
      case "restricted":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Restricted</Badge>
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

  const getMedicalIcon = (status: string) => {
    switch (status) {
      case "cleared":
        return <Heart className="w-4 h-4 text-green-500" />
      case "under_treatment":
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      case "monitoring":
        return <Activity className="w-4 h-4 text-yellow-500" />
      default:
        return <Heart className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Players</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage player profiles and track performance</p>
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
              Add Player
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search players by name, team, position, or number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              value={filterTeam}
              onChange={(e) => setFilterTeam(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Teams</option>
              <option value="eagles">Eagles</option>
              <option value="lions">Lions</option>
              <option value="sharks">Sharks</option>
              <option value="panthers">Panthers</option>
              <option value="hawks">Hawks</option>
            </select>
            <select
              value={filterPosition}
              onChange={(e) => setFilterPosition(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Positions</option>
              <option value="forward">Forward</option>
              <option value="midfielder">Midfielder</option>
              <option value="defender">Defender</option>
              <option value="goalkeeper">Goalkeeper</option>
              <option value="winger">Winger</option>
            </select>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <Card key={player.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={player.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {player.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {player.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">#{player.number}</Badge>
                        <Badge variant="outline">{player.position}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Team</span>
                  <Badge variant="outline">{player.team}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                  <div className="flex items-center space-x-2">{getStatusBadge(player.status)}</div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Medical</span>
                  <div className="flex items-center space-x-2">
                    {getMedicalIcon(player.medicalStatus)}
                    {getMedicalStatusBadge(player.medicalStatus)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Performance</span>
                  <div className="flex items-center space-x-1">
                    {renderStars(player.performance)}
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{player.performance}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2 border-t text-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{player.goals}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Goals</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{player.assists}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Assists</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{player.trainingAttendance}%</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Attendance</p>
                  </div>
                </div>

                {player.lastInjury && (
                  <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700 dark:text-red-300">Recent Injury</span>
                    </div>
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">{player.lastInjury}</p>
                  </div>
                )}

                <div className="flex space-x-2 pt-2">
                  <Link href={`/players/${player.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/players/${player.id}/medical`} className="flex-1">
                    <Button size="sm" className="w-full">
                      Medical
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No players found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first player"}
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Player
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
