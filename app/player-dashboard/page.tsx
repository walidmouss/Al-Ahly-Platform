"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Trophy,
  Target,
  Activity,
  Clock,
  MapPin,
  Star,
  Heart,
  CheckCircle,
  MessageSquare,
} from "lucide-react"

export default function PlayerDashboardPage() {
  // Mock data for Mohamed Salah
  const playerInfo = {
    name: "Mohamed Salah",
    number: 10,
    position: "Right Winger",
    team: "Football First Team",
    sport: "Football",
    avatar: "/placeholder.svg?height=80&width=80",
    joinDate: "2020-07-01",
    contractExpiry: "2025-06-30",
  }

  const todaySchedule = [
    {
      id: 1,
      title: "Morning Training",
      time: "09:00 AM - 11:00 AM",
      location: "Main Training Ground",
      type: "training",
      coach: "Ahmed Hassan",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Tactical Session",
      time: "03:00 PM - 04:30 PM",
      location: "Indoor Facility",
      type: "tactical",
      coach: "Ahmed Hassan",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Recovery Session",
      time: "05:00 PM - 06:00 PM",
      location: "Recovery Center",
      type: "recovery",
      coach: "Fitness Coach",
      status: "upcoming",
    },
  ]

  const upcomingMatches = [
    {
      id: 1,
      opponent: "Zamalek SC",
      competition: "Egyptian Premier League",
      date: "Feb 10, 2024",
      time: "8:00 PM",
      venue: "Cairo International Stadium",
      type: "home",
    },
    {
      id: 2,
      opponent: "Pyramids FC",
      competition: "Egyptian Premier League",
      date: "Feb 17, 2024",
      time: "7:00 PM",
      venue: "30 June Stadium",
      type: "away",
    },
    {
      id: 3,
      opponent: "Al Masry",
      competition: "Egyptian Premier League",
      date: "Feb 24, 2024",
      time: "6:00 PM",
      venue: "Al Ahly Stadium",
      type: "home",
    },
  ]

  const personalStats = {
    matchesPlayed: 18,
    goals: 15,
    assists: 8,
    yellowCards: 2,
    redCards: 0,
    minutesPlayed: 1620,
    rating: 8.7,
    trainingAttendance: 96,
  }

  const fitnessMetrics = [
    { metric: "Speed", value: 92, max: 100 },
    { metric: "Stamina", value: 88, max: 100 },
    { metric: "Strength", value: 85, max: 100 },
    { metric: "Agility", value: 94, max: 100 },
    { metric: "Technical", value: 96, max: 100 },
    { metric: "Mental", value: 91, max: 100 },
  ]

  const recentPerformance = [
    {
      match: "vs Pyramids FC",
      date: "Jan 28, 2024",
      goals: 2,
      assists: 1,
      rating: 9.2,
      minutes: 90,
    },
    {
      match: "vs Al Masry",
      date: "Jan 21, 2024",
      goals: 1,
      assists: 0,
      rating: 8.5,
      minutes: 85,
    },
    {
      match: "vs Ismaily",
      date: "Jan 14, 2024",
      goals: 0,
      assists: 2,
      rating: 8.8,
      minutes: 90,
    },
  ]

  const medicalStatus = {
    status: "cleared",
    lastCheckup: "Jan 25, 2024",
    nextCheckup: "Feb 25, 2024",
    fitnessLevel: 94,
    injuries: [],
    notes: "Excellent physical condition. Continue current training regimen.",
  }

  const teamMessages = [
    {
      from: "Ahmed Hassan",
      role: "Head Coach",
      message: "Great performance in the last match! Keep up the excellent work.",
      time: "2 hours ago",
    },
    {
      from: "Team Management",
      role: "Administration",
      message: "Contract renewal meeting scheduled for next week.",
      time: "1 day ago",
    },
    {
      from: "Dr. Hassan Mohamed",
      role: "Medical Staff",
      message: "Your fitness levels are excellent. No concerns from medical side.",
      time: "2 days ago",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Upcoming</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getMatchTypeBadge = (type: string) => {
    return type === "home" ? (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Home</Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Away</Badge>
    )
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
    <PlayerDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={playerInfo.avatar || "/placeholder.svg"} />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome, {playerInfo.name}</h1>
              <div className="flex items-center space-x-4 mt-1">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">#{playerInfo.number}</Badge>
                <Badge variant="outline">{playerInfo.position}</Badge>
                <Badge variant="outline">{playerInfo.team}</Badge>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Coach
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{personalStats.goals}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Goals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{personalStats.assists}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assists</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{personalStats.matchesPlayed}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Matches</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{personalStats.rating}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Your training sessions and activities for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaySchedule.map((session) => (
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
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{session.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{session.coach}</p>
                        {getStatusBadge(session.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Medical Status */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  Medical Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-green-700">Cleared for Training</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Fitness Level</span>
                    <span className="font-medium">{medicalStatus.fitnessLevel}%</span>
                  </div>
                  <Progress value={medicalStatus.fitnessLevel} className="h-2" />
                </div>
                <div className="text-sm space-y-1">
                  <p>
                    <strong>Last Checkup:</strong> {medicalStatus.lastCheckup}
                  </p>
                  <p>
                    <strong>Next Checkup:</strong> {medicalStatus.nextCheckup}
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-300">{medicalStatus.notes}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Matches */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Matches</CardTitle>
              <CardDescription>Your next fixtures and competitions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMatches.map((match) => (
                  <div
                    key={match.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">vs {match.opponent}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <Badge variant="outline">{match.competition}</Badge>
                        {getMatchTypeBadge(match.type)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{match.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{match.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{match.venue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Performance</CardTitle>
              <CardDescription>Your performance in recent matches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPerformance.map((performance, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{performance.match}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{performance.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-4 text-sm mb-1">
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{performance.goals}</p>
                          <p className="text-gray-500">Goals</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{performance.assists}</p>
                          <p className="text-gray-500">Assists</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{performance.rating}</p>
                          <p className="text-gray-500">Rating</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">{performance.minutes} minutes</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fitness Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Fitness Metrics</CardTitle>
            <CardDescription>Your current physical and technical performance levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fitnessMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{metric.metric}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.value}/{metric.max}
                    </span>
                  </div>
                  <Progress value={(metric.value / metric.max) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Messages from Team</CardTitle>
            <CardDescription>Recent communications from coaches and staff</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMessages.map((message, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-gray-900 dark:text-white">{message.from}</p>
                      <Badge variant="outline" className="text-xs">
                        {message.role}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{message.time}</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{message.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PlayerDashboardLayout>
  )
}
