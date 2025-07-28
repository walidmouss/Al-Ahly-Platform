"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  Heart,
  AlertTriangle,
  Activity,
  Calendar,
  FileText,
  Stethoscope,
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
} from "lucide-react"

export default function MedicalPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const medicalOverview = {
    totalPlayers: 67,
    cleared: 58,
    underTreatment: 6,
    monitoring: 3,
    injuryRate: 8.9,
    averageRecoveryTime: 12,
  }

  const activeInjuries = [
    {
      id: 1,
      playerName: "Alex Davis",
      playerNumber: 11,
      team: "Eagles",
      avatar: "/placeholder.svg?height=40&width=40",
      injury: "Ankle Sprain",
      severity: "moderate",
      injuryDate: "2024-01-20",
      expectedReturn: "2024-02-05",
      daysOut: 5,
      treatment: "Physiotherapy, Rest",
      doctor: "Dr. Sarah Johnson",
      status: "under_treatment",
      progress: 65,
    },
    {
      id: 2,
      playerName: "Marcus Thompson",
      playerNumber: 9,
      team: "Wolves",
      avatar: "/placeholder.svg?height=40&width=40",
      injury: "Hamstring Strain",
      severity: "minor",
      injuryDate: "2024-01-22",
      expectedReturn: "2024-01-30",
      daysOut: 3,
      treatment: "Stretching, Light Training",
      doctor: "Dr. Mike Wilson",
      status: "monitoring",
      progress: 80,
    },
    {
      id: 3,
      playerName: "Lisa Anderson",
      playerNumber: 6,
      team: "Hawks",
      avatar: "/placeholder.svg?height=40&width=40",
      injury: "Knee Contusion",
      severity: "minor",
      injuryDate: "2024-01-23",
      expectedReturn: "2024-01-28",
      daysOut: 2,
      treatment: "Ice, Compression",
      doctor: "Dr. Sarah Johnson",
      status: "monitoring",
      progress: 90,
    },
    {
      id: 4,
      playerName: "Chris Brown",
      playerNumber: 7,
      team: "Panthers",
      avatar: "/placeholder.svg?height=40&width=40",
      injury: "Shoulder Dislocation",
      severity: "severe",
      injuryDate: "2024-01-15",
      expectedReturn: "2024-03-01",
      daysOut: 10,
      treatment: "Surgery Recovery, Physiotherapy",
      doctor: "Dr. Robert Chen",
      status: "under_treatment",
      progress: 25,
    },
  ]

  const upcomingCheckups = [
    {
      id: 1,
      playerName: "John Smith",
      team: "Eagles",
      avatar: "/placeholder.svg?height=40&width=40",
      type: "Routine Physical",
      date: "2024-01-28",
      time: "10:00 AM",
      doctor: "Dr. Sarah Johnson",
      notes: "Annual fitness assessment",
    },
    {
      id: 2,
      playerName: "Emma Wilson",
      team: "Sharks",
      avatar: "/placeholder.svg?height=40&width=40",
      type: "Injury Follow-up",
      date: "2024-01-29",
      time: "2:00 PM",
      doctor: "Dr. Mike Wilson",
      notes: "Check ankle recovery progress",
    },
    {
      id: 3,
      playerName: "David Wilson",
      team: "Eagles",
      avatar: "/placeholder.svg?height=40&width=40",
      type: "Fitness Test",
      date: "2024-01-30",
      time: "9:00 AM",
      doctor: "Dr. Sarah Johnson",
      notes: "Pre-match fitness evaluation",
    },
  ]

  const medicalStaff = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Head Team Doctor",
      specialization: "Sports Medicine",
      avatar: "/placeholder.svg?height=60&width=60",
      phone: "+1 (555) 123-4567",
      email: "s.johnson@sportspro.com",
      experience: "12 years",
      certifications: ["Sports Medicine", "Emergency Medicine"],
    },
    {
      id: 2,
      name: "Dr. Mike Wilson",
      role: "Physiotherapist",
      specialization: "Injury Rehabilitation",
      avatar: "/placeholder.svg?height=60&width=60",
      phone: "+1 (555) 234-5678",
      email: "m.wilson@sportspro.com",
      experience: "8 years",
      certifications: ["Physical Therapy", "Sports Rehabilitation"],
    },
    {
      id: 3,
      name: "Dr. Robert Chen",
      role: "Orthopedic Surgeon",
      specialization: "Bone & Joint Surgery",
      avatar: "/placeholder.svg?height=60&width=60",
      phone: "+1 (555) 345-6789",
      email: "r.chen@sportspro.com",
      experience: "15 years",
      certifications: ["Orthopedic Surgery", "Sports Surgery"],
    },
  ]

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "under_treatment":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Under Treatment</Badge>
      case "monitoring":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Monitoring</Badge>
      case "cleared":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Cleared</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500"
    if (progress >= 50) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Medical Center</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage player health, injuries, and medical records</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Reports
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Record
            </Button>
          </div>
        </div>

        {/* Medical Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{medicalOverview.totalPlayers}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Players</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{medicalOverview.cleared}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cleared</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{medicalOverview.underTreatment}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Under Treatment</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{medicalOverview.monitoring}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monitoring</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingDown className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{medicalOverview.injuryRate}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Injury Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{medicalOverview.averageRecoveryTime}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Recovery (days)</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="injuries" className="space-y-6">
          <TabsList>
            <TabsTrigger value="injuries">Active Injuries</TabsTrigger>
            <TabsTrigger value="checkups">Upcoming Checkups</TabsTrigger>
            <TabsTrigger value="staff">Medical Staff</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="injuries" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by player name, injury type, or team..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex space-x-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("all")}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "severe" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("severe")}
                >
                  Severe
                </Button>
                <Button
                  variant={filterStatus === "moderate" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("moderate")}
                >
                  Moderate
                </Button>
                <Button
                  variant={filterStatus === "minor" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus("minor")}
                >
                  Minor
                </Button>
              </div>
            </div>

            {/* Active Injuries List */}
            <div className="space-y-4">
              {activeInjuries.map((injury) => (
                <Card key={injury.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={injury.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {injury.playerName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{injury.playerName}</h3>
                            <Badge variant="outline">#{injury.playerNumber}</Badge>
                            <Badge variant="outline">{injury.team}</Badge>
                            {getSeverityBadge(injury.severity)}
                            {getStatusBadge(injury.status)}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Injury</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{injury.injury}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Injury Date</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{injury.injuryDate}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Expected Return</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{injury.expectedReturn}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Days Out</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{injury.daysOut} days</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Treatment</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{injury.treatment}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center">
                                <Stethoscope className="w-4 h-4 mr-1" />
                                <span>{injury.doctor}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">Recovery Progress:</span>
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${getProgressColor(injury.progress)}`}
                                  style={{ width: `${injury.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{injury.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="checkups" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Medical Checkups</CardTitle>
                <CardDescription>Scheduled appointments and medical evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingCheckups.map((checkup) => (
                    <div
                      key={checkup.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={checkup.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {checkup.playerName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{checkup.playerName}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{checkup.team}</Badge>
                            <Badge variant="outline">{checkup.type}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{checkup.notes}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{checkup.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{checkup.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{checkup.doctor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalStaff.map((staff) => (
                <Card key={staff.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={staff.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {staff.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{staff.name}</CardTitle>
                        <CardDescription>{staff.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Specialization</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{staff.specialization}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Experience</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{staff.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Contact</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{staff.phone}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{staff.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Certifications</p>
                      <div className="flex flex-wrap gap-1">
                        {staff.certifications.map((cert, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Injury Statistics</CardTitle>
                  <CardDescription>Monthly injury trends and analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Analytics Coming Soon</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Detailed injury statistics and trends will be available here
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medical Reports</CardTitle>
                  <CardDescription>Generate and download medical reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Monthly Injury Report
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Player Fitness Report
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Medical Clearance Report
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Treatment Summary
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
