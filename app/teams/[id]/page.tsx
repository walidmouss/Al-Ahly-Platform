"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Users, Trophy, Calendar, Target, TrendingUp, Edit, Plus, Activity, Star } from "lucide-react"
import Link from "next/link"

export default function TeamDetailPage() {
  // Mock data for Al Ahly Football First Team
  const team = {
    id: 1,
    name: "First Team",
    sport: "Football",
    division: "Egyptian Premier League",
    rank: 1,
    players: 28,
    coach: "Ahmed Hassan",
    assistantCoach: "Mohamed Ali",
    wins: 18,
    losses: 2,
    draws: 4,
    goalsFor: 52,
    goalsAgainst: 18,
    points: 58,
    founded: "1907",
    stadium: "Cairo International Stadium",
    capacity: "75,000",
    nextMatch: {
      opponent: "Zamalek SC",
      date: "2024-02-02",
      time: "20:00",
      venue: "Cairo International Stadium",
      competition: "Egyptian Premier League",
    },
    recentForm: ["W", "W", "D", "W", "W"],
    avatar: "/placeholder.svg?height=80&width=80",
    status: "active",
    performance: "excellent",
    isFirstTeam: true,
  }

  const players = [
    {
      id: 1,
      name: "Mohamed Salah",
      position: "Right Winger",
      number: 11,
      age: 31,
      nationality: "Egypt",
      goals: 15,
      assists: 8,
      appearances: 22,
      rating: 9.2,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 2,
      name: "Ahmed Zizo",
      position: "Attacking Midfielder",
      number: 10,
      age: 28,
      nationality: "Egypt",
      goals: 8,
      assists: 12,
      appearances: 24,
      rating: 8.8,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 3,
      name: "Ali Maaloul",
      position: "Left Back",
      number: 21,
      age: 33,
      nationality: "Tunisia",
      goals: 2,
      assists: 6,
      appearances: 20,
      rating: 8.1,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "injured",
    },
    {
      id: 4,
      name: "Mahmoud Kahraba",
      position: "Left Winger",
      number: 7,
      age: 30,
      nationality: "Egypt",
      goals: 12,
      assists: 5,
      appearances: 18,
      rating: 8.5,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "injured",
    },
    {
      id: 5,
      name: "Yasser Ibrahim",
      position: "Centre Back",
      number: 6,
      age: 29,
      nationality: "Egypt",
      goals: 3,
      assists: 1,
      appearances: 23,
      rating: 8.3,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
    {
      id: 6,
      name: "Mohamed El Shenawy",
      position: "Goalkeeper",
      number: 1,
      age: 34,
      nationality: "Egypt",
      goals: 0,
      assists: 0,
      appearances: 24,
      rating: 8.7,
      avatar: "/placeholder.svg?height=40&width=40",
      status: "active",
    },
  ]

  const recentMatches = [
    {
      id: 1,
      opponent: "Pyramids FC",
      result: "W",
      score: "3-1",
      date: "2024-01-28",
      competition: "Egyptian Premier League",
      venue: "home",
    },
    {
      id: 2,
      opponent: "Ismaily SC",
      result: "W",
      score: "2-0",
      date: "2024-01-24",
      competition: "Egyptian Premier League",
      venue: "away",
    },
    {
      id: 3,
      opponent: "El Gouna FC",
      result: "D",
      score: "1-1",
      date: "2024-01-20",
      competition: "Egyptian Premier League",
      venue: "home",
    },
    {
      id: 4,
      opponent: "Smouha SC",
      result: "W",
      score: "4-2",
      date: "2024-01-16",
      competition: "Egyptian Premier League",
      venue: "away",
    },
    {
      id: 5,
      opponent: "Enppi SC",
      result: "W",
      score: "2-1",
      date: "2024-01-12",
      competition: "Egyptian Premier League",
      venue: "home",
    },
  ]

  const upcomingTraining = [
    {
      id: 1,
      title: "Tactical Training",
      date: "2024-02-01",
      time: "10:00 AM",
      duration: "2 hours",
      focus: "Set pieces and defensive positioning",
    },
    {
      id: 2,
      title: "Physical Conditioning",
      date: "2024-02-01",
      time: "4:00 PM",
      duration: "1.5 hours",
      focus: "Endurance and strength training",
    },
    {
      id: 3,
      title: "Match Preparation",
      date: "2024-02-02",
      time: "11:00 AM",
      duration: "2.5 hours",
      focus: "Final preparations for Zamalek match",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "injured":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Injured</Badge>
      case "suspended":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Suspended</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getResultBadge = (result: string) => {
    switch (result) {
      case "W":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Win</Badge>
      case "D":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Draw</Badge>
      case "L":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Loss</Badge>
      default:
        return <Badge variant="secondary">-</Badge>
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
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/teams">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={team.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-red-100 text-red-600 text-xl font-bold">{team.sport[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Al Ahly {team.sport} - {team.name}
                </h1>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">First Team</Badge>
                  <Badge variant="outline">{team.division}</Badge>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">Rank #{team.rank}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit Team
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Player
            </Button>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{team.players}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Players</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{team.points}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Points</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{team.wins}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Wins</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{team.goalsFor}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Goals For</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {team.wins}-{team.draws}-{team.losses}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">W-D-L</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="players">Players</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Team Information */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Head Coach</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{team.coach}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Assistant Coach</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{team.assistantCoach}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Founded</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{team.founded}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Stadium</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{team.stadium}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Capacity</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{team.capacity}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Current Rank</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          #{team.rank} in {team.division}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Match */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Next Match
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Al Ahly vs {team.nextMatch.opponent}
                      </h3>
                      <Badge variant="outline" className="mt-2">
                        {team.nextMatch.competition}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Date</span>
                        <span className="font-medium">{team.nextMatch.date}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Time</span>
                        <span className="font-medium">{team.nextMatch.time}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Venue</span>
                        <span className="font-medium">{team.nextMatch.venue}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">View Match Details</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Form */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Form</CardTitle>
                <CardDescription>Last 5 matches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  {team.recentForm.map((result, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        result === "W" ? "bg-green-500" : result === "D" ? "bg-yellow-500" : "bg-red-500"
                      }`}
                    >
                      {result}
                    </div>
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">(Most recent on the right)</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Squad List</CardTitle>
                <CardDescription>Current players in the first team squad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {players.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                          {player.number}
                        </div>
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={player.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {player.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{player.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <span>{player.position}</span>
                            <span>{player.age} years</span>
                            <span>{player.nationality}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{player.goals}</p>
                          <p className="text-gray-500">Goals</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{player.assists}</p>
                          <p className="text-gray-500">Assists</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{player.appearances}</p>
                          <p className="text-gray-500">Apps</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center space-x-1">{renderStars(player.rating)}</div>
                          <p className="text-gray-500 text-xs">{player.rating}</p>
                        </div>
                        {getStatusBadge(player.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Matches</CardTitle>
                <CardDescription>Latest match results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match) => (
                    <div
                      key={match.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="font-semibold text-gray-900 dark:text-white">Al Ahly</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {match.venue === "home" ? "Home" : "Away"}
                          </p>
                        </div>
                        <div className="text-center px-4">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{match.score}</p>
                          {getResultBadge(match.result)}
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-gray-900 dark:text-white">{match.opponent}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{match.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{match.competition}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Training Sessions</CardTitle>
                <CardDescription>Scheduled training sessions for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTraining.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Activity className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{session.focus}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <span>{session.time}</span>
                          <span>•</span>
                          <span>{session.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
