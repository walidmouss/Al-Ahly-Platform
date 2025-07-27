"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  Trophy,
  Activity,
  Calendar,
  TrendingUp,
  TrendingDown,
  Bell,
  Heart,
  AlertTriangle,
  Clock,
  Plus,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Athletes",
      value: "847",
      change: "+12",
      changeType: "increase",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Teams",
      value: "156",
      change: "+3",
      changeType: "increase",
      icon: Trophy,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Training Sessions",
      value: "89",
      change: "+15",
      changeType: "increase",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Medical Cases",
      value: "23",
      change: "-5",
      changeType: "decrease",
      icon: Heart,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const recentSessions = [
    {
      id: 1,
      title: "Football First Team Training",
      sport: "Football",
      team: "First Team",
      time: "Today, 4:00 PM",
      coach: "Ahmed Hassan",
      participants: 25,
      status: "scheduled",
    },
    {
      id: 2,
      title: "Basketball Youth Training",
      sport: "Basketball",
      team: "U-21 Team",
      time: "Today, 6:00 PM",
      coach: "Mohamed Ali",
      participants: 18,
      status: "in_progress",
    },
    {
      id: 3,
      title: "Handball Tactical Session",
      sport: "Handball",
      team: "Second Team",
      time: "Tomorrow, 10:00 AM",
      coach: "Omar Farouk",
      participants: 20,
      status: "scheduled",
    },
  ]

  const topPerformers = [
    {
      name: "Mohamed Salah",
      sport: "Football",
      team: "First Team",
      position: "Forward",
      rating: 9.2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Ahmed Zizo",
      sport: "Football",
      team: "First Team",
      position: "Midfielder",
      rating: 8.8,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Karim Fouad",
      sport: "Basketball",
      team: "First Team",
      position: "Point Guard",
      rating: 8.6,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Hassan Ahmed",
      sport: "Handball",
      team: "First Team",
      position: "Goalkeeper",
      rating: 8.4,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const medicalAlerts = [
    {
      player: "Mahmoud Kahraba",
      sport: "Football",
      team: "First Team",
      injury: "Hamstring Strain",
      severity: "moderate",
      expectedReturn: "Feb 15, 2024",
    },
    {
      player: "Ali Maaloul",
      sport: "Football",
      team: "First Team",
      injury: "Ankle Sprain",
      severity: "minor",
      expectedReturn: "Feb 8, 2024",
    },
    {
      player: "Yasser Ibrahim",
      sport: "Football",
      team: "First Team",
      injury: "Knee Contusion",
      severity: "minor",
      expectedReturn: "Feb 5, 2024",
    },
  ]

  const announcements = [
    {
      title: "New Training Facility Opening",
      content:
        "The new state-of-the-art training facility will open next month with advanced equipment for all sports.",
      time: "2 hours ago",
      priority: "high",
    },
    {
      title: "Medical Staff Meeting",
      content: "All medical staff are required to attend the monthly meeting on February 10th at 2:00 PM.",
      time: "5 hours ago",
      priority: "medium",
    },
    {
      title: "Equipment Maintenance Schedule",
      content: "Training equipment maintenance is scheduled for this weekend. Please plan accordingly.",
      time: "1 day ago",
      priority: "low",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Scheduled</Badge>
      case "in_progress":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Progress</Badge>
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Completed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "minor":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Minor</Badge>
      case "moderate":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Moderate</Badge>
      case "severe":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Severe</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Al Ahly SC Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back, Ahmed. Here's what's happening across all sports today.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Plus className="w-4 h-4 mr-2" />
              New Session
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      {stat.changeType === "increase" ? (
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">this week</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Training Sessions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Today's Training Sessions</CardTitle>
                  <CardDescription>Upcoming and ongoing training sessions across all sports</CardDescription>
                </div>
                <Link href="/sessions">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Activity className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{session.sport}</Badge>
                            <Badge variant="outline">{session.team}</Badge>
                            <span>{session.coach}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{session.participants}</span>
                          {getStatusBadge(session.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Highest rated athletes this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((performer, index) => (
                    <div key={performer.name} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">#{index + 1}</span>
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={performer.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {performer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">{performer.name}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <Badge variant="outline" className="text-xs">
                            {performer.sport}
                          </Badge>
                          <span>{performer.position}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">{performer.rating}</p>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Medical Alerts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  Medical Alerts
                </CardTitle>
                <CardDescription>Current injuries and medical concerns</CardDescription>
              </div>
              <Link href="/medical">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medicalAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{alert.player}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                        <Badge variant="outline">{alert.sport}</Badge>
                        <Badge variant="outline">{alert.team}</Badge>
                      </div>
                      <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">{alert.injury}</p>
                    </div>
                    <div className="text-right">
                      {getSeverityBadge(alert.severity)}
                      <p className="text-xs text-gray-500 mt-1">Return: {alert.expectedReturn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Announcements */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 text-blue-500 mr-2" />
                  Recent Announcements
                </CardTitle>
                <CardDescription>Latest updates and notifications</CardDescription>
              </div>
              <Link href="/announcements">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{announcement.title}</h4>
                      {getPriorityBadge(announcement.priority)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{announcement.content}</p>
                    <p className="text-xs text-gray-500">{announcement.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
