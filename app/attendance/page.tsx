"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, CheckCircle, XCircle, AlertCircle, Users, Filter, Download, Plus, Clock } from "lucide-react"

export default function AttendancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSession, setSelectedSession] = useState("current")

  const sessions = [
    {
      id: 1,
      title: "Morning Training - Eagles",
      date: "2024-01-25",
      time: "09:00 AM",
      team: "Eagles",
      coach: "Mike Johnson",
      totalPlayers: 25,
      present: 22,
      absent: 2,
      excused: 1,
      status: "ongoing",
    },
    {
      id: 2,
      title: "Tactical Session - Lions",
      date: "2024-01-25",
      time: "02:00 PM",
      team: "Lions",
      coach: "Sarah Williams",
      totalPlayers: 20,
      present: 18,
      absent: 1,
      excused: 1,
      status: "completed",
    },
    {
      id: 3,
      title: "Swimming Practice - Sharks",
      date: "2024-01-24",
      time: "06:00 AM",
      team: "Sharks",
      coach: "David Chen",
      totalPlayers: 22,
      present: 20,
      absent: 2,
      excused: 0,
      status: "completed",
    },
  ]

  const attendanceData = [
    {
      id: 1,
      playerName: "John Smith",
      playerNumber: 10,
      position: "Forward",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "08:55 AM",
      notes: "",
    },
    {
      id: 2,
      playerName: "Mike Johnson Jr.",
      playerNumber: 8,
      position: "Midfielder",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "09:00 AM",
      notes: "",
    },
    {
      id: 3,
      playerName: "David Wilson",
      playerNumber: 5,
      position: "Defender",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "08:58 AM",
      notes: "",
    },
    {
      id: 4,
      playerName: "Chris Brown",
      playerNumber: 1,
      position: "Goalkeeper",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "09:02 AM",
      notes: "",
    },
    {
      id: 5,
      playerName: "Alex Davis",
      playerNumber: 11,
      position: "Forward",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "excused",
      arrivalTime: "",
      notes: "Injury recovery - cleared by medical team",
    },
    {
      id: 6,
      playerName: "Tom Wilson",
      playerNumber: 7,
      position: "Midfielder",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "absent",
      arrivalTime: "",
      notes: "No notification received",
    },
    {
      id: 7,
      playerName: "James Rodriguez",
      playerNumber: 9,
      position: "Forward",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "08:57 AM",
      notes: "",
    },
    {
      id: 8,
      playerName: "Marcus Thompson",
      playerNumber: 4,
      position: "Defender",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "09:01 AM",
      notes: "",
    },
    {
      id: 9,
      playerName: "Lisa Anderson",
      playerNumber: 6,
      position: "Midfielder",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "08:59 AM",
      notes: "",
    },
    {
      id: 10,
      playerName: "Emma Wilson",
      playerNumber: 3,
      position: "Defender",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "present",
      arrivalTime: "09:03 AM",
      notes: "",
    },
  ]

  const attendanceHistory = [
    {
      date: "2024-01-24",
      session: "Morning Training",
      present: 23,
      absent: 1,
      excused: 1,
      rate: 96,
    },
    {
      date: "2024-01-23",
      session: "Tactical Session",
      present: 22,
      absent: 2,
      excused: 1,
      rate: 92,
    },
    {
      date: "2024-01-22",
      session: "Strength Training",
      present: 24,
      absent: 1,
      excused: 0,
      rate: 96,
    },
    {
      date: "2024-01-21",
      session: "Match Practice",
      present: 25,
      absent: 0,
      excused: 0,
      rate: 100,
    },
    {
      date: "2024-01-20",
      session: "Recovery Session",
      present: 21,
      absent: 3,
      excused: 1,
      rate: 88,
    },
  ]

  const filteredAttendance = attendanceData.filter(
    (player) =>
      player.playerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.playerNumber.toString().includes(searchTerm),
  )

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "absent":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "excused":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
      case "absent":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Absent</Badge>
      case "excused":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Excused</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const currentSession = sessions.find((s) => s.id === 1) // Current session

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Attendance</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track and manage player attendance for training sessions
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
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

        {/* Current Session Overview */}
        {currentSession && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{currentSession.title}</span>
                  </CardTitle>
                  <CardDescription>
                    {currentSession.date} at {currentSession.time} • Coach: {currentSession.coach}
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  {currentSession.status === "ongoing" ? "Ongoing" : "Completed"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentSession.present}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentSession.absent}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Absent</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <AlertCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentSession.excused}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Excused</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {Math.round((currentSession.present / currentSession.totalPlayers) * 100)}%
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Attendance Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList>
            <TabsTrigger value="current">Current Session</TabsTrigger>
            <TabsTrigger value="history">Attendance History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search players by name, position, or number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Attendance Sheet */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance Sheet</CardTitle>
                <CardDescription>Mark attendance for today's training session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredAttendance.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={player.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {player.playerName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{player.playerName}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>#{player.playerNumber}</span>
                            <span>{player.position}</span>
                            {player.arrivalTime && (
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>Arrived: {player.arrivalTime}</span>
                              </div>
                            )}
                          </div>
                          {player.notes && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{player.notes}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(player.status)}
                        {getStatusBadge(player.status)}
                        <div className="flex space-x-2">
                          <Button
                            variant={player.status === "present" ? "default" : "outline"}
                            size="sm"
                            className="text-xs"
                          >
                            Present
                          </Button>
                          <Button
                            variant={player.status === "absent" ? "destructive" : "outline"}
                            size="sm"
                            className="text-xs"
                          >
                            Absent
                          </Button>
                          <Button
                            variant={player.status === "excused" ? "secondary" : "outline"}
                            size="sm"
                            className="text-xs"
                          >
                            Excused
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance History</CardTitle>
                <CardDescription>View past attendance records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceHistory.map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{record.session}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{record.date}</p>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-green-600">{record.present}</p>
                          <p className="text-gray-500">Present</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-red-600">{record.absent}</p>
                          <p className="text-gray-500">Absent</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-yellow-600">{record.excused}</p>
                          <p className="text-gray-500">Excused</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-blue-600">{record.rate}%</p>
                          <p className="text-gray-500">Rate</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Average Attendance Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">94%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Last 30 days</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Most Attended Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Match Practice</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">98% average attendance</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Perfect Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-600">18</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Players this month</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
