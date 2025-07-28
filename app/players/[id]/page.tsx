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
  Edit,
  Phone,
  Mail,
  Calendar,
  MapPin,
  Trophy,
  Target,
  Activity,
  Heart,
  Star,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function PlayerDetailPage() {
  const player = {
    id: 1,
    name: "John Smith",
    number: 10,
    position: "Forward",
    team: "Eagles",
    age: 22,
    height: "6'1\"",
    weight: "175 lbs",
    avatar: "/placeholder.svg?height=120&width=120",
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
    nationality: "United States",
    birthDate: "2002-03-15",
    address: "123 Main St, Springfield, IL",
    preferredFoot: "Right",
    previousClubs: ["Youth Academy FC", "Springfield United"],
    achievements: ["Top Scorer 2023", "Player of the Month - December 2023"],
  }

  const performanceStats = [
    { label: "Goals", value: 15, max: 20, color: "bg-green-500" },
    { label: "Assists", value: 8, max: 15, color: "bg-blue-500" },
    { label: "Pass Accuracy", value: 87, max: 100, color: "bg-purple-500" },
    { label: "Shot Accuracy", value: 72, max: 100, color: "bg-orange-500" },
    { label: "Defensive Actions", value: 45, max: 80, color: "bg-red-500" },
    { label: "Fitness Level", value: 92, max: 100, color: "bg-green-500" },
  ]

  const recentMatches = [
    {
      id: 1,
      opponent: "Hawks",
      date: "2024-01-20",
      result: "W 3-1",
      goals: 2,
      assists: 1,
      rating: 9.2,
      minutes: 90,
    },
    {
      id: 2,
      opponent: "Panthers",
      date: "2024-01-15",
      result: "W 2-0",
      goals: 1,
      assists: 0,
      rating: 8.5,
      minutes: 85,
    },
    {
      id: 3,
      opponent: "Wolves",
      date: "2024-01-10",
      result: "D 1-1",
      goals: 0,
      assists: 1,
      rating: 7.8,
      minutes: 90,
    },
    {
      id: 4,
      opponent: "Lions",
      date: "2024-01-05",
      result: "W 4-2",
      goals: 1,
      assists: 2,
      rating: 8.9,
      minutes: 90,
    },
  ]

  const trainingHistory = [
    {
      id: 1,
      date: "2024-01-25",
      session: "Morning Training",
      attendance: "Present",
      performance: 4.5,
      notes: "Excellent ball control and leadership",
    },
    {
      id: 2,
      date: "2024-01-24",
      session: "Tactical Session",
      attendance: "Present",
      performance: 4.2,
      notes: "Good positioning, needs work on communication",
    },
    {
      id: 3,
      date: "2024-01-23",
      session: "Strength Training",
      attendance: "Present",
      performance: 4.8,
      notes: "Outstanding effort and improvement",
    },
  ]

  const medicalHistory = [
    {
      id: 1,
      date: "2024-01-15",
      type: "Routine Checkup",
      status: "Cleared",
      notes: "All vitals normal, excellent fitness level",
      doctor: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      date: "2023-11-20",
      type: "Minor Injury",
      status: "Recovered",
      notes: "Minor ankle sprain, fully recovered after 2 weeks",
      doctor: "Dr. Mike Wilson",
    },
    {
      id: 3,
      date: "2023-08-01",
      type: "Pre-season Physical",
      status: "Cleared",
      notes: "Excellent physical condition for new season",
      doctor: "Dr. Sarah Johnson",
    },
  ]

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
            <Link href="/players">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={player.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {player.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{player.name}</h1>
                <div className="flex items-center space-x-4 mt-1">
                  <Badge variant="outline">#{player.number}</Badge>
                  <Badge variant="outline">{player.position}</Badge>
                  <Badge variant="outline">{player.team}</Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
            <Link href={`/players/${player.id}/medical`}>
              <Button variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Medical Records
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{player.goals}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Goals This Season</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{player.assists}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assists</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{player.matchesPlayed}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Matches Played</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{player.trainingAttendance}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Training Attendance</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="matches">Match History</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="medical">Medical</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Age</h4>
                        <p className="text-gray-600 dark:text-gray-400">{player.age} years old</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Birth Date</h4>
                        <p className="text-gray-600 dark:text-gray-400">{player.birthDate}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Height</h4>
                        <p className="text-gray-600 dark:text-gray-400">{player.height}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Weight</h4>
                        <p className="text-gray-600 dark:text-gray-400">{player.weight}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Nationality</h4>
                        <p className="text-gray-600 dark:text-gray-400">{player.nationality}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Preferred Foot</h4>
                        <p className="text-gray-600 dark:text-gray-400">{player.preferredFoot}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{player.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{player.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600 dark:text-gray-400">{player.address}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Emergency Contact</h4>
                      <p className="text-gray-600 dark:text-gray-400">{player.emergencyContact}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Career Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Join Date</h4>
                      <p className="text-gray-600 dark:text-gray-400">{player.joinDate}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Contract Expiry</h4>
                      <p className="text-gray-600 dark:text-gray-400">{player.contractExpiry}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Previous Clubs</h4>
                      <ul className="space-y-1">
                        {player.previousClubs.map((club, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400 text-sm">
                            • {club}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {player.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400 text-sm">
                            🏆 {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Current season statistics and performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {performanceStats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{stat.label}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.value}/{stat.max}
                        </span>
                      </div>
                      <Progress value={(stat.value / stat.max) * 100} className="h-2" />
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
                <CardDescription>Performance in recent matches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match) => (
                    <div
                      key={match.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">vs {match.opponent}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span>{match.date}</span>
                          <span>{match.result}</span>
                          <span>{match.minutes} min</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="text-center">
                            <p className="font-medium text-gray-900 dark:text-white">{match.goals}</p>
                            <p className="text-gray-500">Goals</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-gray-900 dark:text-white">{match.assists}</p>
                            <p className="text-gray-500">Assists</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-gray-900 dark:text-white">{match.rating}</p>
                            <p className="text-gray-500">Rating</p>
                          </div>
                        </div>
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
                <CardTitle>Training History</CardTitle>
                <CardDescription>Recent training session attendance and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingHistory.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{session.session}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{session.date}</span>
                          </div>
                          <Badge
                            className={
                              session.attendance === "Present"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {session.attendance}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{session.notes}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          {renderStars(session.performance)}
                          <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{session.performance}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medical" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
                <CardDescription>Health records and medical clearances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalHistory.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-start justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{record.type}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{record.date}</span>
                          </div>
                          <span>Dr. {record.doctor}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{record.notes}</p>
                      </div>
                      <Badge
                        className={
                          record.status === "Cleared"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : record.status === "Recovered"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {record.status}
                      </Badge>
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
