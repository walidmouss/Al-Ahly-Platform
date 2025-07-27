"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Activity, Dumbbell, Heart, Coffee, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlayerSchedulePage() {
  const todaySchedule = [
    {
      id: 1,
      time: "07:00 AM",
      duration: "30 min",
      title: "Morning Nutrition",
      type: "nutrition",
      location: "Team Restaurant",
      description: "Pre-training breakfast with nutritionist",
      status: "completed",
      coach: "Nutritionist Team",
    },
    {
      id: 2,
      time: "08:00 AM",
      duration: "60 min",
      title: "Individual Training",
      type: "training",
      location: "Training Ground A",
      description: "Personal skill development session",
      status: "completed",
      coach: "Ahmed Hassan",
    },
    {
      id: 3,
      time: "10:00 AM",
      duration: "90 min",
      title: "Team Training",
      type: "training",
      location: "Main Training Ground",
      description: "Full team tactical preparation",
      status: "in_progress",
      coach: "Ahmed Hassan",
    },
    {
      id: 4,
      time: "12:00 PM",
      duration: "45 min",
      title: "Recovery Session",
      type: "recovery",
      location: "Recovery Center",
      description: "Ice bath and massage therapy",
      status: "upcoming",
      coach: "Medical Team",
    },
    {
      id: 5,
      time: "02:00 PM",
      duration: "30 min",
      title: "Media Interview",
      type: "media",
      location: "Media Center",
      description: "Pre-match press conference",
      status: "upcoming",
      coach: "Media Team",
    },
    {
      id: 6,
      time: "04:00 PM",
      duration: "60 min",
      title: "Gym Session",
      type: "fitness",
      location: "Fitness Center",
      description: "Strength and conditioning workout",
      status: "upcoming",
      coach: "Fitness Coach",
    },
  ]

  const weekSchedule = [
    {
      day: "Monday",
      date: "Feb 5, 2024",
      sessions: [
        { time: "09:00 AM", title: "Team Training", type: "training", duration: "90 min" },
        { time: "11:30 AM", title: "Tactical Analysis", type: "analysis", duration: "45 min" },
        { time: "03:00 PM", title: "Gym Session", type: "fitness", duration: "60 min" },
      ],
    },
    {
      day: "Tuesday",
      date: "Feb 6, 2024",
      sessions: [
        { time: "08:00 AM", title: "Individual Training", type: "training", duration: "60 min" },
        { time: "10:00 AM", title: "Team Training", type: "training", duration: "90 min" },
        { time: "02:00 PM", title: "Recovery Session", type: "recovery", duration: "45 min" },
      ],
    },
    {
      day: "Wednesday",
      date: "Feb 7, 2024",
      sessions: [
        { time: "09:00 AM", title: "Light Training", type: "training", duration: "60 min" },
        { time: "11:00 AM", title: "Set Piece Practice", type: "training", duration: "30 min" },
        { time: "04:00 PM", title: "Medical Checkup", type: "medical", duration: "30 min" },
      ],
    },
    {
      day: "Thursday",
      date: "Feb 8, 2024",
      sessions: [
        { time: "09:30 AM", title: "Team Training", type: "training", duration: "90 min" },
        { time: "12:00 PM", title: "Video Analysis", type: "analysis", duration: "45 min" },
        { time: "03:00 PM", title: "Fitness Test", type: "fitness", duration: "60 min" },
      ],
    },
    {
      day: "Friday",
      date: "Feb 9, 2024",
      sessions: [
        { time: "10:00 AM", title: "Pre-Match Training", type: "training", duration: "75 min" },
        { time: "02:00 PM", title: "Team Meeting", type: "meeting", duration: "30 min" },
        { time: "07:00 PM", title: "Team Dinner", type: "nutrition", duration: "60 min" },
      ],
    },
    {
      day: "Saturday",
      date: "Feb 10, 2024",
      sessions: [
        { time: "11:00 AM", title: "Pre-Match Warm-up", type: "training", duration: "45 min" },
        { time: "08:00 PM", title: "MATCH vs Zamalek SC", type: "match", duration: "120 min" },
      ],
    },
    {
      day: "Sunday",
      date: "Feb 11, 2024",
      sessions: [
        { time: "11:00 AM", title: "Recovery Training", type: "recovery", duration: "45 min" },
        { time: "02:00 PM", title: "Pool Session", type: "recovery", duration: "30 min" },
      ],
    },
  ]

  const upcomingMatches = [
    {
      date: "Feb 10, 2024",
      time: "8:00 PM",
      opponent: "Zamalek SC",
      competition: "Egyptian Premier League",
      venue: "Cairo International Stadium",
      type: "home",
      importance: "high",
    },
    {
      date: "Feb 17, 2024",
      time: "7:00 PM",
      opponent: "Pyramids FC",
      competition: "Egyptian Premier League",
      venue: "30 June Stadium",
      type: "away",
      importance: "medium",
    },
    {
      date: "Feb 24, 2024",
      time: "6:00 PM",
      opponent: "Al Masry",
      competition: "Egyptian Premier League",
      venue: "Al Ahly Stadium",
      type: "home",
      importance: "medium",
    },
  ]

  const personalReminders = [
    {
      id: 1,
      title: "Contract Meeting",
      description: "Meeting with management regarding contract renewal",
      date: "Feb 8, 2024",
      time: "10:00 AM",
      priority: "high",
    },
    {
      id: 2,
      title: "Charity Event",
      description: "Youth football clinic at local community center",
      date: "Feb 12, 2024",
      time: "2:00 PM",
      priority: "medium",
    },
    {
      id: 3,
      title: "Medical Checkup",
      description: "Routine monthly medical examination",
      date: "Feb 15, 2024",
      time: "9:00 AM",
      priority: "high",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
      case "upcoming":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Upcoming</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "training":
        return <Activity className="w-4 h-4 text-blue-500" />
      case "fitness":
        return <Dumbbell className="w-4 h-4 text-green-500" />
      case "recovery":
        return <Heart className="w-4 h-4 text-red-500" />
      case "nutrition":
        return <Coffee className="w-4 h-4 text-orange-500" />
      case "medical":
        return <Heart className="w-4 h-4 text-red-500" />
      case "media":
        return <Users className="w-4 h-4 text-purple-500" />
      case "match":
        return <Activity className="w-4 h-4 text-red-600" />
      default:
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "training":
        return "bg-blue-50 border-blue-200"
      case "fitness":
        return "bg-green-50 border-green-200"
      case "recovery":
        return "bg-red-50 border-red-200"
      case "nutrition":
        return "bg-orange-50 border-orange-200"
      case "medical":
        return "bg-red-50 border-red-200"
      case "media":
        return "bg-purple-50 border-purple-200"
      case "match":
        return "bg-red-100 border-red-300"
      case "analysis":
        return "bg-indigo-50 border-indigo-200"
      case "meeting":
        return "bg-gray-50 border-gray-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium Priority</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low Priority</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  return (
    <PlayerDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Training Schedule</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Your personalized training and activity schedule</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Export Calendar
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              Request Changes
            </Button>
          </div>
        </div>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 text-red-500 mr-2" />
              Today's Schedule - February 5, 2024
            </CardTitle>
            <CardDescription>Your activities and training sessions for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.map((session) => (
                <div
                  key={session.id}
                  className={`p-4 rounded-lg border-l-4 ${getTypeColor(session.type)} transition-all hover:shadow-md`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      {getTypeIcon(session.type)}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{session.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>
                              {session.time} ({session.duration})
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{session.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{session.coach}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">{getStatusBadge(session.status)}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="week" className="space-y-6">
          <TabsList>
            <TabsTrigger value="week">Weekly Schedule</TabsTrigger>
            <TabsTrigger value="matches">Upcoming Matches</TabsTrigger>
            <TabsTrigger value="reminders">Personal Reminders</TabsTrigger>
          </TabsList>

          <TabsContent value="week" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>This Week's Training Schedule</CardTitle>
                <CardDescription>February 5-11, 2024 - Complete weekly overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                  {weekSchedule.map((day, index) => (
                    <div key={index} className="space-y-3">
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{day.day}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{day.date}</p>
                      </div>
                      <div className="space-y-2">
                        {day.sessions.map((session, sessionIndex) => (
                          <div
                            key={sessionIndex}
                            className={`p-3 rounded-lg border ${getTypeColor(session.type)} text-center`}
                          >
                            <div className="flex items-center justify-center mb-1">{getTypeIcon(session.type)}</div>
                            <p className="text-xs font-medium text-gray-900 dark:text-white">{session.title}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{session.time}</p>
                            <p className="text-xs text-gray-500">{session.duration}</p>
                          </div>
                        ))}
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
                <CardTitle>Upcoming Fixtures</CardTitle>
                <CardDescription>Your next matches and important games</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMatches.map((match, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 ${
                        match.importance === "high" ? "bg-red-50 border-red-500" : "bg-blue-50 border-blue-500"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">vs {match.opponent}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{match.competition}</Badge>
                            <Badge
                              className={
                                match.type === "home"
                                  ? "bg-red-100 text-red-800 hover:bg-red-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {match.type === "home" ? "Home" : "Away"}
                            </Badge>
                            {match.importance === "high" && (
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                                <AlertCircle className="w-3 h-3 mr-1" />
                                Important
                              </Badge>
                            )}
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
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{match.venue}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reminders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Reminders</CardTitle>
                <CardDescription>Important appointments and personal commitments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalReminders.map((reminder) => (
                    <div
                      key={reminder.id}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{reminder.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{reminder.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{reminder.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{reminder.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">{getPriorityBadge(reminder.priority)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PlayerDashboardLayout>
  )
}
