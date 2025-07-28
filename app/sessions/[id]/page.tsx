"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Target,
  Edit,
  Trash2,
  Play,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function SessionDetailPage() {
  const session = {
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
    description:
      "Intensive training session focusing on ball control and tactical positioning. This session will prepare the team for the upcoming championship match.",
    objectives: [
      "Improve ball control under pressure",
      "Practice tactical formations",
      "Enhance team coordination",
      "Build physical endurance",
    ],
  }

  const drills = [
    {
      id: 1,
      name: "Ball Control Drill",
      type: "Technical",
      duration: "15 mins",
      difficulty: "Medium",
      description: "Practice controlling the ball with both feet under pressure",
      completed: true,
    },
    {
      id: 2,
      name: "Passing Accuracy",
      type: "Technical",
      duration: "20 mins",
      difficulty: "Easy",
      description: "Short and long passing exercises to improve accuracy",
      completed: true,
    },
    {
      id: 3,
      name: "Tactical Formation",
      type: "Tactical",
      duration: "25 mins",
      difficulty: "Hard",
      description: "Practice 4-3-3 formation positioning and movement",
      completed: false,
    },
    {
      id: 4,
      name: "Sprint Intervals",
      type: "Conditioning",
      duration: "10 mins",
      difficulty: "Hard",
      description: "High-intensity sprint intervals for endurance",
      completed: false,
    },
    {
      id: 5,
      name: "Set Piece Practice",
      type: "Tactical",
      duration: "15 mins",
      difficulty: "Medium",
      description: "Corner kicks and free kick positioning",
      completed: false,
    },
  ]

  const attendance = [
    {
      id: 1,
      name: "John Smith",
      position: "Forward",
      number: 10,
      status: "present",
      avatar: "/placeholder.svg?height=40&width=40",
      arrivalTime: "08:55 AM",
    },
    {
      id: 2,
      name: "Mike Johnson",
      position: "Midfielder",
      number: 8,
      status: "present",
      avatar: "/placeholder.svg?height=40&width=40",
      arrivalTime: "09:00 AM",
    },
    {
      id: 3,
      name: "David Wilson",
      position: "Defender",
      number: 5,
      status: "present",
      avatar: "/placeholder.svg?height=40&width=40",
      arrivalTime: "08:58 AM",
    },
    {
      id: 4,
      name: "Chris Brown",
      position: "Goalkeeper",
      number: 1,
      status: "present",
      avatar: "/placeholder.svg?height=40&width=40",
      arrivalTime: "09:02 AM",
    },
    {
      id: 5,
      name: "Alex Davis",
      position: "Forward",
      number: 11,
      status: "excused",
      avatar: "/placeholder.svg?height=40&width=40",
      reason: "Injury recovery",
    },
    {
      id: 6,
      name: "Tom Wilson",
      position: "Midfielder",
      number: 7,
      status: "absent",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const feedback = [
    {
      id: 1,
      player: "John Smith",
      rating: 5,
      comment: "Excellent performance today. Great ball control and leadership on the field.",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      player: "Mike Johnson",
      rating: 4,
      comment: "Good passing accuracy. Needs to work on defensive positioning.",
      timestamp: "10:35 AM",
    },
    {
      id: 3,
      player: "David Wilson",
      rating: 4,
      comment: "Solid defensive work. Could improve communication with teammates.",
      timestamp: "10:40 AM",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "absent":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "excused":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      default:
        return null
    }
  }

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

  const completedDrills = drills.filter((drill) => drill.completed).length
  const progressPercentage = (completedDrills / drills.length) * 100

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/sessions">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{session.title}</h1>
              <div className="flex items-center space-x-4 mt-1">
                <Badge variant="outline">{session.type}</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{session.status}</Badge>
                <span className="text-sm text-gray-600 dark:text-gray-400">{session.sport}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Session
            </Button>
            <Button variant="outline">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>

        {/* Session Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Date & Time</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{session.date}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{session.time}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{session.location}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{session.duration}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Attendance</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {session.participants}/{session.maxParticipants}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Players</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-orange-500" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {completedDrills}/{drills.length}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Drills completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="drills">Drills</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Session Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                      <p className="text-gray-600 dark:text-gray-400">{session.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Session Objectives</h4>
                      <ul className="space-y-2">
                        {session.objectives.map((objective, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-blue-500" />
                            <span className="text-gray-600 dark:text-gray-400">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Team</h4>
                        <p className="text-gray-600 dark:text-gray-400">{session.team}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Coach</h4>
                        <p className="text-gray-600 dark:text-gray-400">{session.coach}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Session Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {Math.round(progressPercentage)}%
                        </span>
                      </div>
                      <Progress value={progressPercentage} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Completed Drills</span>
                        <span className="text-sm font-medium">{completedDrills}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Remaining Drills</span>
                        <span className="text-sm font-medium">{drills.length - completedDrills}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Total Duration</span>
                        <span className="text-sm font-medium">{session.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="drills" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Training Drills</CardTitle>
                  <CardDescription>Manage and track drill completion</CardDescription>
                </div>
                <Button>
                  <Target className="w-4 h-4 mr-2" />
                  Add Drill
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {drills.map((drill) => (
                    <div
                      key={drill.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          {drill.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{drill.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{drill.description}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <Badge variant="outline">{drill.type}</Badge>
                            {getDifficultyBadge(drill.difficulty)}
                            <span className="text-sm text-gray-500">{drill.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!drill.completed && (
                          <Button variant="outline" size="sm">
                            <Play className="w-4 h-4 mr-2" />
                            Start
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Sheet</CardTitle>
                <CardDescription>Track player attendance for this session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendance.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
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
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>#{player.number}</span>
                            <span>{player.position}</span>
                            {player.arrivalTime && <span>Arrived: {player.arrivalTime}</span>}
                            {player.reason && <span>Reason: {player.reason}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(player.status)}
                        <Badge
                          variant={
                            player.status === "present"
                              ? "default"
                              : player.status === "absent"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {player.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Player Feedback</CardTitle>
                  <CardDescription>Performance feedback and notes</CardDescription>
                </div>
                <Button>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Add Feedback
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feedback.map((item) => (
                    <div key={item.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{item.player}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < item.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{item.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{item.comment}</p>
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
