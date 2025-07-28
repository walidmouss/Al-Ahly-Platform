"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Activity,
  Calendar,
  Clock,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Thermometer,
  Zap,
  Shield,
  Pill,
  FileText,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function PlayerMedicalPage() {
  const currentHealth = {
    status: "excellent",
    lastCheckup: "Jan 28, 2024",
    nextCheckup: "Feb 28, 2024",
    fitnessLevel: 95,
    injuryRisk: "low",
    activeIssues: 0,
    completedTreatments: 2,
  }

  const vitalSigns = [
    { date: "Feb 1", heartRate: 45, bloodPressure: 120, weight: 75.2, bodyFat: 8.5 },
    { date: "Feb 2", heartRate: 44, bloodPressure: 118, weight: 75.1, bodyFat: 8.4 },
    { date: "Feb 3", heartRate: 46, bloodPressure: 122, weight: 75.3, bodyFat: 8.6 },
    { date: "Feb 4", heartRate: 43, bloodPressure: 119, weight: 75.0, bodyFat: 8.3 },
    { date: "Feb 5", heartRate: 45, bloodPressure: 121, weight: 75.2, bodyFat: 8.5 },
  ]

  const fitnessMetrics = [
    { metric: "VO2 Max", value: 65, unit: "ml/kg/min", status: "excellent", trend: "up" },
    { metric: "Body Fat", value: 8.5, unit: "%", status: "optimal", trend: "stable" },
    { metric: "Muscle Mass", value: 42.8, unit: "kg", status: "excellent", trend: "up" },
    { metric: "Flexibility", value: 88, unit: "%", status: "good", trend: "up" },
    { metric: "Balance", value: 92, unit: "%", status: "excellent", trend: "stable" },
    { metric: "Reaction Time", value: 0.18, unit: "sec", status: "excellent", trend: "down" },
  ]

  const medicalHistory = [
    {
      id: 1,
      date: "Jan 15, 2024",
      type: "injury",
      title: "Minor Ankle Sprain",
      status: "recovered",
      severity: "minor",
      treatment: "Rest, Ice, Physiotherapy",
      duration: "7 days",
      doctor: "Dr. Ahmed Farouk",
      notes: "Full recovery achieved. No restrictions on training.",
    },
    {
      id: 2,
      date: "Dec 20, 2023",
      type: "checkup",
      title: "Routine Medical Examination",
      status: "completed",
      severity: "routine",
      treatment: "General health assessment",
      duration: "1 day",
      doctor: "Dr. Sarah Hassan",
      notes: "All parameters within normal ranges. Excellent fitness levels.",
    },
    {
      id: 3,
      date: "Nov 8, 2023",
      type: "injury",
      title: "Muscle Fatigue - Hamstring",
      status: "recovered",
      severity: "minor",
      treatment: "Massage, Stretching, Load Management",
      duration: "3 days",
      doctor: "Dr. Mohamed Ali",
      notes: "Preventive treatment successful. Improved warm-up routine implemented.",
    },
  ]

  const upcomingAppointments = [
    {
      id: 1,
      date: "Feb 8, 2024",
      time: "10:00 AM",
      type: "checkup",
      title: "Monthly Fitness Assessment",
      doctor: "Dr. Sarah Hassan",
      location: "Medical Center",
      duration: "45 min",
      notes: "Comprehensive fitness evaluation and body composition analysis",
    },
    {
      id: 2,
      date: "Feb 12, 2024",
      time: "2:00 PM",
      type: "treatment",
      title: "Physiotherapy Session",
      doctor: "Dr. Ahmed Farouk",
      location: "Recovery Center",
      duration: "60 min",
      notes: "Preventive treatment for hamstring flexibility",
    },
    {
      id: 3,
      date: "Feb 15, 2024",
      time: "9:00 AM",
      type: "consultation",
      title: "Nutrition Consultation",
      doctor: "Dr. Layla Mahmoud",
      location: "Nutrition Center",
      duration: "30 min",
      notes: "Review current diet plan and match day nutrition strategy",
    },
  ]

  const medications = [
    {
      id: 1,
      name: "Multivitamin Complex",
      type: "supplement",
      dosage: "1 tablet daily",
      frequency: "Morning with breakfast",
      startDate: "Jan 1, 2024",
      endDate: "Ongoing",
      purpose: "General health maintenance",
      prescribedBy: "Dr. Sarah Hassan",
    },
    {
      id: 2,
      name: "Omega-3 Fish Oil",
      type: "supplement",
      dosage: "2 capsules daily",
      frequency: "With meals",
      startDate: "Jan 1, 2024",
      endDate: "Ongoing",
      purpose: "Joint health and inflammation reduction",
      prescribedBy: "Dr. Sarah Hassan",
    },
    {
      id: 3,
      name: "Magnesium Supplement",
      type: "supplement",
      dosage: "400mg daily",
      frequency: "Before bedtime",
      startDate: "Dec 15, 2023",
      endDate: "Mar 15, 2024",
      purpose: "Muscle recovery and sleep quality",
      prescribedBy: "Dr. Ahmed Farouk",
    },
  ]

  const recoveryMetrics = [
    { date: "Feb 1", sleepQuality: 8.5, muscleStiffness: 2, energyLevel: 9, mood: 8 },
    { date: "Feb 2", sleepQuality: 9, muscleStiffness: 1, energyLevel: 9.5, mood: 9 },
    { date: "Feb 3", sleepQuality: 7.5, muscleStiffness: 3, energyLevel: 8, mood: 7 },
    { date: "Feb 4", sleepQuality: 8, muscleStiffness: 2, energyLevel: 8.5, mood: 8 },
    { date: "Feb 5", sleepQuality: 9, muscleStiffness: 1, energyLevel: 9, mood: 9 },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
      case "good":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
      case "optimal":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Optimal</Badge>
      case "recovered":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Recovered</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>
      case "active":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Active</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low Risk</Badge>
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
      case "routine":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Routine</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "injury":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Injury</Badge>
      case "checkup":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Checkup</Badge>
      case "treatment":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Treatment</Badge>
      case "consultation":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Consultation</Badge>
      case "supplement":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Supplement</Badge>
      case "medication":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Medication</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />
      case "stable":
        return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      default:
        return null
    }
  }

  return (
    <PlayerDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Medical & Health</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your comprehensive health monitoring and medical records
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Medical Records
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>

        {/* Health Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white capitalize">{currentHealth.status}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Overall Health</p>
              <div className="mt-2">{getStatusBadge(currentHealth.status)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{currentHealth.fitnessLevel}%</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Fitness Level</p>
              <Progress value={currentHealth.fitnessLevel} className="h-2 mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Shield className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white capitalize">{currentHealth.injuryRisk}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Injury Risk</p>
              <div className="mt-2">{getStatusBadge(currentHealth.injuryRisk)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{currentHealth.activeIssues}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Active Issues</p>
              {currentHealth.activeIssues === 0 && (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-2">All Clear</Badge>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="vitals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="vitals">Vital Signs</TabsTrigger>
            <TabsTrigger value="fitness">Fitness Metrics</TabsTrigger>
            <TabsTrigger value="history">Medical History</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
          </TabsList>

          <TabsContent value="vitals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    Heart Rate Trend
                  </CardTitle>
                  <CardDescription>Resting heart rate over the last 5 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={vitalSigns}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="heartRate"
                        stroke="#ef4444"
                        strokeWidth={2}
                        name="Heart Rate (bpm)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 text-blue-500 mr-2" />
                    Recovery Metrics
                  </CardTitle>
                  <CardDescription>Daily recovery indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={recoveryMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="sleepQuality"
                        stroke="#10b981"
                        strokeWidth={2}
                        name="Sleep Quality"
                      />
                      <Line
                        type="monotone"
                        dataKey="energyLevel"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        name="Energy Level"
                      />
                      <Line type="monotone" dataKey="mood" stroke="#8b5cf6" strokeWidth={2} name="Mood" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current Vital Signs</CardTitle>
                <CardDescription>Latest measurements from {vitalSigns[vitalSigns.length - 1].date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {vitalSigns[vitalSigns.length - 1].heartRate}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Heart Rate (bpm)</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-2">Excellent</Badge>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Thermometer className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {vitalSigns[vitalSigns.length - 1].bloodPressure}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Blood Pressure (mmHg)</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-2">Normal</Badge>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {vitalSigns[vitalSigns.length - 1].weight}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Weight (kg)</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-2">Optimal</Badge>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {vitalSigns[vitalSigns.length - 1].bodyFat}%
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Body Fat</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mt-2">Excellent</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fitness" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fitness Assessment Results</CardTitle>
                <CardDescription>Latest comprehensive fitness evaluation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {fitnessMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium text-gray-900 dark:text-white">{metric.metric}</h3>
                          {getTrendIcon(metric.trend)}
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(metric.status)}
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.value} {metric.unit}
                          </span>
                        </div>
                      </div>
                      <Progress
                        value={metric.metric === "Reaction Time" ? (1 - metric.value) * 100 : metric.value}
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>
                          {metric.status === "excellent"
                            ? "Outstanding performance"
                            : metric.status === "good"
                              ? "Above average"
                              : metric.status === "optimal"
                                ? "Perfect range"
                                : "Needs attention"}
                        </span>
                        <span>
                          Trend:{" "}
                          {metric.trend === "up" ? "Improving" : metric.trend === "down" ? "Declining" : "Stable"}
                        </span>
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
                <CardTitle>Medical History</CardTitle>
                <CardDescription>Your complete medical and injury history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalHistory.map((record) => (
                    <div key={record.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{record.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            {getTypeBadge(record.type)}
                            {getSeverityBadge(record.severity)}
                            {getStatusBadge(record.status)}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 dark:text-gray-400">{record.date}</p>
                          <p className="text-xs text-gray-500">Duration: {record.duration}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Treatment</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{record.treatment}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Attending Doctor</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{record.doctor}</p>
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-gray-700 rounded">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Medical Notes</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{record.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Medical Appointments</CardTitle>
                <CardDescription>Your scheduled medical consultations and checkups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{appointment.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            {getTypeBadge(appointment.type)}
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{appointment.time}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Doctor</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.doctor}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Location</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.location}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Duration</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.duration}</p>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded">
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Notes</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{appointment.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Medications & Supplements</CardTitle>
                <CardDescription>Your prescribed medications and nutritional supplements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medications.map((medication) => (
                    <div key={medication.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{medication.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            {getTypeBadge(medication.type)}
                            <Badge variant="outline">{medication.dosage}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <Pill className="w-6 h-6 text-blue-500 mb-1" />
                          <p className="text-xs text-gray-500">Active</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Frequency</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{medication.frequency}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Duration</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {medication.startDate} - {medication.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Purpose</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{medication.purpose}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Prescribed By</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{medication.prescribedBy}</p>
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
    </PlayerDashboardLayout>
  )
}
