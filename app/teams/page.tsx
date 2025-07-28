"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Users, Trophy, Calendar, Star, Filter, MoreHorizontal } from "lucide-react"
import Link from "next/link"

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSport, setFilterSport] = useState("all")

  const teams = [
    {
      id: 1,
      name: "First Team",
      sport: "Football",
      division: "Premier League",
      rank: 1,
      players: 28,
      coach: "Ahmed Hassan",
      wins: 18,
      losses: 2,
      draws: 4,
      nextMatch: "vs Zamalek - Friday 8:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "excellent",
      isFirstTeam: true,
    },
    {
      id: 2,
      name: "Reserve Team",
      sport: "Football",
      division: "Second Division",
      rank: 3,
      players: 25,
      coach: "Mohamed Ali",
      wins: 12,
      losses: 5,
      draws: 3,
      nextMatch: "vs Ismaily - Saturday 3:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "good",
      isFirstTeam: false,
    },
    {
      id: 3,
      name: "U-21 Team",
      sport: "Football",
      division: "Youth League",
      rank: 2,
      players: 22,
      coach: "Omar Farouk",
      wins: 14,
      losses: 3,
      draws: 2,
      nextMatch: "vs Pyramids U-21 - Sunday 11:00 AM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "excellent",
      isFirstTeam: false,
    },
    {
      id: 4,
      name: "First Team",
      sport: "Basketball",
      division: "Premier League",
      rank: 1,
      players: 15,
      coach: "Karim Fouad",
      wins: 16,
      losses: 1,
      draws: 0,
      nextMatch: "vs Gezira - Thursday 7:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "excellent",
      isFirstTeam: true,
    },
    {
      id: 5,
      name: "Reserve Team",
      sport: "Basketball",
      division: "Second Division",
      rank: 2,
      players: 14,
      coach: "Hassan Ahmed",
      wins: 13,
      losses: 3,
      draws: 0,
      nextMatch: "vs Sporting - Saturday 5:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "good",
      isFirstTeam: false,
    },
    {
      id: 6,
      name: "First Team",
      sport: "Handball",
      division: "Premier League",
      rank: 1,
      players: 18,
      coach: "Mahmoud Saad",
      wins: 15,
      losses: 2,
      draws: 1,
      nextMatch: "vs Zamalek - Friday 6:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "excellent",
      isFirstTeam: true,
    },
    {
      id: 7,
      name: "First Team",
      sport: "Volleyball",
      division: "Premier League",
      rank: 2,
      players: 16,
      coach: "Ahmed Zaki",
      wins: 12,
      losses: 4,
      draws: 0,
      nextMatch: "vs Smouha - Sunday 4:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "good",
      isFirstTeam: true,
    },
    {
      id: 8,
      name: "First Team",
      sport: "Water Polo",
      division: "Premier League",
      rank: 1,
      players: 14,
      coach: "Yasser Ibrahim",
      wins: 11,
      losses: 1,
      draws: 2,
      nextMatch: "vs Gezira - Saturday 2:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "excellent",
      isFirstTeam: true,
    },
    {
      id: 9,
      name: "U-19 Team",
      sport: "Basketball",
      division: "Youth League",
      rank: 1,
      players: 13,
      coach: "Ali Hassan",
      wins: 10,
      losses: 2,
      draws: 0,
      nextMatch: "vs Zamalek U-19 - Monday 3:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "excellent",
      isFirstTeam: false,
    },
    {
      id: 10,
      name: "Women's Team",
      sport: "Handball",
      division: "Women's League",
      rank: 1,
      players: 16,
      coach: "Fatma Ahmed",
      wins: 14,
      losses: 1,
      draws: 0,
      nextMatch: "vs Sporting Women - Thursday 5:00 PM",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "active",
      performance: "excellent",
      isFirstTeam: true,
    },
  ]

  const sports = ["Football", "Basketball", "Handball", "Volleyball", "Water Polo", "Tennis", "Squash", "Swimming"]

  const filteredTeams = teams.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.coach.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.division.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSport = filterSport === "all" || team.sport.toLowerCase() === filterSport.toLowerCase()

    return matchesSearch && matchesSport
  })

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
      case "good":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
      case "average":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Average</Badge>
      case "needs_improvement":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Needs Improvement</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getRankIcon = (rank: number, isFirstTeam: boolean) => {
    if (rank === 1 && isFirstTeam) return <Trophy className="w-4 h-4 text-yellow-500" />
    if (rank === 1) return <Trophy className="w-4 h-4 text-silver-400" />
    if (rank <= 3) return <Star className="w-4 h-4 text-gray-400" />
    return <span className="text-sm font-medium text-gray-500">#{rank}</span>
  }

  const getTeamTypeBadge = (isFirstTeam: boolean, teamName: string) => {
    if (isFirstTeam) {
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">First Team</Badge>
    }
    if (teamName.includes("U-")) {
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Youth</Badge>
    }
    if (teamName.includes("Women")) {
      return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Women's</Badge>
    }
    return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Reserve</Badge>
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Al Ahly Teams</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage teams across all sports and track their performance
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Plus className="w-4 h-4 mr-2" />
              Add Team
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search teams, sports, coaches, or divisions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filterSport === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterSport("all")}
              className={filterSport === "all" ? "bg-red-600 hover:bg-red-700" : ""}
            >
              All Sports
            </Button>
            {sports.map((sport) => (
              <Button
                key={sport}
                variant={filterSport === sport ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterSport(sport)}
                className={filterSport === sport ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {sport}
              </Button>
            ))}
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <Card key={team.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={team.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-red-100 text-red-600">
                        {team.sport[0]}
                        {team.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg group-hover:text-red-600 transition-colors">
                        {team.sport} - {team.name}
                      </CardTitle>
                      <CardDescription>{team.division}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getRankIcon(team.rank, team.isFirstTeam)}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Type</span>
                  {getTeamTypeBadge(team.isFirstTeam, team.name)}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Coach</span>
                  <span className="font-medium">{team.coach}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Players</span>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="font-medium">{team.players}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Record</span>
                  <span className="font-medium">
                    {team.wins}W - {team.losses}L {team.draws > 0 && `- ${team.draws}D`}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Performance</span>
                  {getPerformanceBadge(team.performance)}
                </div>

                <div className="pt-2 border-t">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{team.nextMatch}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Link href={`/teams/${team.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </Link>
                  <Link href={`/teams/${team.id}/schedule`} className="flex-1">
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                      Schedule
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTeams.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No teams found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchTerm ? "Try adjusting your search terms" : "Get started by creating your first team"}
            </p>
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Plus className="w-4 h-4 mr-2" />
              Add Team
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
