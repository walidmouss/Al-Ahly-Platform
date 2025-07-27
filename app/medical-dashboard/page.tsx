"use client"

import { MedicalDashboardLayout } from "@/components/medical-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Calendar, Clock, Users, TrendingUp, CheckCircle, XCircle, Plus, FileText } from "lucide-react"

export default function MedicalDashboardPage() {
  const medicalStats = {
    totalPatients: 847,
    activeCases: 23,
    todayAppointments: 12,
    criticalCases: 3,
    recoveryRate: 94.2,
    averageRecoveryTime: 12,
  }

  const todayAppointments = [
    {
      id: 1,
      playerName: "Mohamed Salah",
      sport: "Football",
      team: "First Team",
      time: "09:00 AM",
      type: "Routine Checkup",
      status: "scheduled",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      playerName: "Ahmed Zizo",
      sport: "Football",
      team: "First Team",
      time: "10:30 AM",
      type: "Injury Follow-up",
      status: "in_progress",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      playerName: "Karim Fouad",
      sport: "Basketball",
      team: "First Team",
      time: "02:00 PM",
      type: "Fitness Assessment",
      status: "scheduled",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      playerName: "Hassan Ahmed",
      sport: "Handball",
      team: "First Team",
      time: "03:30 PM",
      type: "Pre-Match Medical",
      status: "scheduled",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const activeCases = [
    {
      id: 1,
      playerName: "Mahmoud Kahraba",
      sport: "Football",
      team: "First Team",
      injury: "Hamstring Strain",
      severity: "moderate",
      injuryDate: "Jan 20, 2024",
      expectedReturn: "Feb 15, 2024",
      progress: 65,
      treatment: "Physiotherapy, Rest",
      nextAppointment: "Feb 2, 2024",
    },
    {
      id: 2,
      playerName: "Ali Maaloul",
      sport: "Football",
      team: "First Team",
      injury: "Ankle Sprain",
      severity: "minor",
      injuryDate: "Jan 25, 2024",
      expectedReturn: "Feb 8, 2024",
      progress: 80,
      treatment: "Ice, Compression, Light Training",
      nextAppointment: "Feb 1, 2024",
    },
    {
      id: 3,
      playerName: "Yasser Ibrahim",
      sport: "Football",
      team: "First Team",
      injury: "Knee Contusion",
      severity: "minor",
      injuryDate: "Jan 28, 2024",
      expectedReturn: "Feb 5, 2024",
      progress: 90,
      treatment: "Rest, Anti-inflammatory",
      nextAppointment: "Feb 3, 2024",
    },
  ]

  const recentReports = [
    {
      id: 1,
      playerName: "Mohamed Salah",
      sport: "Football",
      date: "Jan 28, 2024",
      type: "Fitness Assessment",
      result: "Excellent",
      notes: "Peak physical condition, cleared for all activities",
    },
    {
      id: 2,
      playerName: "Ahmed Zizo",
      sport: "Football",
      date: "Jan 27, 2024",
      type: "Injury Recovery",
      result: "Good Progress",
      notes: "Ankle healing well, can return to light training",
    },
    {
      id: 3,
      playerName: "Karim Fouad",
      sport: "Basketball",
      date: "Jan 26, 2024",
      type: "Routine Checkup",
      result: "Normal",
      notes: "All vitals normal, no concerns",
    },
  ]

  const medicalAlerts = [
    {
      type: "critical",
      message: "Player requires immediate attention - severe injury assessment needed",
      player: "Omar Gaber",
      time: "30 minutes ago",
    },
    {
      type: "warning",
      message: "Multiple players showing signs of fatigue - recommend rest period",
      player: "Football First Team",
      time: "2 hours ago",
    },
    {
      type: "info",
      message: "Monthly medical supplies inventory due for review",
      player: "Medical Department",
      time: "1 day ago",
    },
  ]

  const upcomingCheckups = [
    {
      playerName: "Mohamed Salah",
      sport: "Football",
      date: "Feb 5, 2024",
      type: "Monthly Physical",
      priority: "routine",
    },
    {
      playerName: "Ahmed Zizo",
      sport: "Football",
      date: "Feb 6, 2024",
      type: "Injury Follow-up",
      priority: "high",
    },
    {
      playerName: "Karim Fouad",
      sport: "Basketball",
      date: "Feb 7, 2024",
      type: "Fitness Test",
      priority: "medium",
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
      case "routine":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Routine</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case "info":
        return <CheckCircle className="w-5 h-5 text-blue-500" />
      default:
        return <CheckCircle className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <MedicalDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Medical Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome, Dr. Hassan. Monitor athlete health and manage medical cases.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Reports
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Plus className="w-4 h-4 mr-2" />
              New Record
            </Button>
          </div>
        </div>

        {/* Medical Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{medicalStats.totalPatients}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Total Athletes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{medicalStats.activeCases}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Active Cases</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{medicalStats.todayAppointments}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Today's Appointments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <XCircle className="w-6 h-6 text-red-600 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{medicalStats.criticalCases}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Critical Cases</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{medicalStats.recoveryRate}%</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Recovery Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{medicalStats.averageRecoveryTime}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Avg Recovery (days)</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="appointments">Today's Appointments</TabsTrigger>
            <TabsTrigger value="cases">Active Cases</TabsTrigger>
            <TabsTrigger value="reports">Recent Reports</TabsTrigger>
            <TabsTrigger value="alerts">Medical Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Today's Medical Appointments</CardTitle>
                <CardDescription>Scheduled checkups and medical consultations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={appointment.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {appointment.playerName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.playerName}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{appointment.sport}</Badge>
                            <Badge variant="outline">{appointment.team}</Badge>
                            <span>{appointment.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium">{appointment.time}</span>
                        </div>
                        {getStatusBadge(appointment.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cases" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Medical Cases</CardTitle>
                <CardDescription>Current injuries and ongoing treatments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeCases.map((case_) => (
                    <div
                      key={case_.id}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{case_.playerName}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{case_.sport}</Badge>
                            <Badge variant="outline">{case_.team}</Badge>
                            {getSeverityBadge(case_.severity)}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{case_.injury}</p>
                          <p className="text-xs text-gray-500">Since {case_.injuryDate}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Treatment</p>
                          <p className="text-sm text-gray-900 dark:text-white">{case_.treatment}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Expected Return</p>
                          <p className="text-sm text-gray-900 dark:text-white">{case_.expectedReturn}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Next Appointment</p>
                          <p className="text-sm text-gray-900 dark:text-white">{case_.nextAppointment}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Recovery Progress</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${case_.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{case_.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Medical Reports</CardTitle>
                <CardDescription>Latest medical assessments and evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div
                      key={report.id}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{report.playerName}</h3>
                            <Badge variant="outline">{report.sport}</Badge>
                            <Badge variant="outline">{report.type}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{report.notes}</p>
                          <p className="text-xs text-gray-500">{report.date}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={
                              report.result === "Excellent"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : report.result === "Good Progress"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                            }
                          >
                            {report.result}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Alerts</CardTitle>
                  <CardDescription>Critical notifications and warnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalAlerts.map((alert, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-l-4 ${
                          alert.type === "critical"
                            ? "bg-red-50 border-red-500 dark:bg-red-900/20"
                            : alert.type === "warning"
                              ? "bg-yellow-50 border-yellow-500 dark:bg-yellow-900/20"
                              : "bg-blue-50 border-blue-500 dark:bg-blue-900/20"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          {getAlertIcon(alert.type)}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{alert.message}</p>
                            <div className="flex items-center justify-between mt-2">
                              <p className="text-xs text-gray-600 dark:text-gray-400">{alert.player}</p>
                              <p className="text-xs text-gray-500">{alert.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Checkups</CardTitle>
                  <CardDescription>Scheduled medical evaluations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingCheckups.map((checkup, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{checkup.playerName}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{checkup.sport}</Badge>
                            <span>{checkup.type}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{checkup.date}</p>
                          {getPriorityBadge(checkup.priority)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MedicalDashboardLayout>
  )
}
