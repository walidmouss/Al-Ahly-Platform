"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Plus, Calendar, Clock, AlertTriangle, CheckCircle, FileText, User } from "lucide-react"

const medicalCases = [
  {
    id: "MC001",
    patientName: "Mohamed Salah",
    condition: "Hamstring Strain",
    severity: "Moderate",
    status: "Active Treatment",
    startDate: "2024-01-10",
    estimatedRecovery: "2024-02-15",
    progress: 65,
    doctor: "Dr. Ahmed Mahmoud",
    nextAppointment: "2024-01-20",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
  },
  {
    id: "MC002",
    patientName: "Ahmed Hassan",
    condition: "Ankle Sprain",
    severity: "Mild",
    status: "Recovery",
    startDate: "2024-01-05",
    estimatedRecovery: "2024-01-25",
    progress: 85,
    doctor: "Dr. Sarah Ali",
    nextAppointment: "2024-01-22",
    avatar: "/placeholder.svg?height=40&width=40&text=AH",
  },
  {
    id: "MC003",
    patientName: "Omar Kamal",
    condition: "Knee Injury",
    severity: "Severe",
    status: "Under Investigation",
    startDate: "2024-01-12",
    estimatedRecovery: "2024-03-01",
    progress: 25,
    doctor: "Dr. Mohamed Farid",
    nextAppointment: "2024-01-18",
    avatar: "/placeholder.svg?height=40&width=40&text=OK",
  },
  {
    id: "MC004",
    patientName: "Youssef Ali",
    condition: "Shoulder Strain",
    severity: "Mild",
    status: "Monitoring",
    startDate: "2024-01-08",
    estimatedRecovery: "2024-01-30",
    progress: 70,
    doctor: "Dr. Layla Hassan",
    nextAppointment: "2024-01-21",
    avatar: "/placeholder.svg?height=40&width=40&text=YA",
  },
  {
    id: "MC005",
    patientName: "Mahmoud Trezeguet",
    condition: "Muscle Fatigue",
    severity: "Mild",
    status: "Completed",
    startDate: "2023-12-20",
    estimatedRecovery: "2024-01-10",
    progress: 100,
    doctor: "Dr. Ahmed Mahmoud",
    nextAppointment: "Follow-up scheduled",
    avatar: "/placeholder.svg?height=40&width=40&text=MT",
  },
]

export default function MedicalCases() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredCases = medicalCases.filter((case_) => {
    const matchesSearch =
      case_.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || case_.status.toLowerCase().replace(" ", "-") === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active treatment":
        return "bg-blue-100 text-blue-800"
      case "recovery":
        return "bg-green-100 text-green-800"
      case "under investigation":
        return "bg-yellow-100 text-yellow-800"
      case "monitoring":
        return "bg-purple-100 text-purple-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return "text-green-600"
      case "moderate":
        return "text-yellow-600"
      case "severe":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Medical Cases</h1>
          <p className="text-muted-foreground">Track and manage ongoing medical cases</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" />
          New Case
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <FileText className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{medicalCases.filter((c) => c.status !== "Completed").length}</div>
            <p className="text-xs text-muted-foreground">Currently being treated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{medicalCases.filter((c) => c.severity === "Severe").length}</div>
            <p className="text-xs text-muted-foreground">Requiring immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((medicalCases.filter((c) => c.status === "Completed").length / medicalCases.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Cases successfully resolved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Recovery Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">days average recovery</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search cases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="active-treatment">Active Treatment</option>
            <option value="recovery">Recovery</option>
            <option value="under-investigation">Under Investigation</option>
            <option value="monitoring">Monitoring</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Cases</TabsTrigger>
          <TabsTrigger value="all">All Cases</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4">
            {filteredCases
              .filter((c) => c.status !== "Completed")
              .map((case_) => (
                <Card key={case_.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={case_.avatar || "/placeholder.svg"} alt={case_.patientName} />
                          <AvatarFallback>
                            {case_.patientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{case_.patientName}</CardTitle>
                          <CardDescription>Case ID: {case_.id}</CardDescription>
                        </div>
                      </div>
                      <Badge className={getStatusColor(case_.status)}>{case_.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Condition</p>
                        <p className="font-medium">{case_.condition}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Severity</p>
                        <p className={`font-medium ${getSeverityColor(case_.severity)}`}>{case_.severity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Doctor</p>
                        <p className="font-medium">{case_.doctor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Next Appointment</p>
                        <p className="font-medium">{case_.nextAppointment}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Recovery Progress</span>
                        <span className="font-medium">{case_.progress}%</span>
                      </div>
                      <Progress value={case_.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Started: {case_.startDate} • Est. Recovery: {case_.estimatedRecovery}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule
                        </Button>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Medical Cases</CardTitle>
              <CardDescription>Complete overview of all cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredCases.map((case_) => (
                  <div
                    key={case_.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={case_.avatar || "/placeholder.svg"} alt={case_.patientName} />
                        <AvatarFallback>
                          {case_.patientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{case_.patientName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {case_.condition} • {case_.id}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge className={getStatusColor(case_.status)}>{case_.status}</Badge>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Progress</p>
                        <p className="font-semibold">{case_.progress}%</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Severity</p>
                        <p className={`font-semibold ${getSeverityColor(case_.severity)}`}>{case_.severity}</p>
                      </div>

                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        View Case
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="critical" className="space-y-4">
          <div className="grid gap-4">
            {filteredCases
              .filter((c) => c.severity === "Severe")
              .map((case_) => (
                <Card key={case_.id} className="border-red-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-red-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <div>
                          <CardTitle className="text-lg text-red-800">{case_.patientName}</CardTitle>
                          <CardDescription>Critical Case - {case_.condition}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="destructive">{case_.severity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Assigned Doctor</p>
                        <p className="font-medium">{case_.doctor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Next Review</p>
                        <p className="font-medium text-red-600">{case_.nextAppointment}</p>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">
                        <User className="mr-2 h-4 w-4" />
                        Contact Doctor
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Urgent Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Cases</CardTitle>
              <CardDescription>Successfully resolved medical cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredCases
                  .filter((c) => c.status === "Completed")
                  .map((case_) => (
                    <div key={case_.id} className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
                      <div className="flex items-center space-x-4">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <h3 className="font-semibold">{case_.patientName}</h3>
                          <p className="text-sm text-muted-foreground">{case_.condition} • Completed</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Recovery Time</p>
                          <p className="font-semibold">
                            {Math.ceil(
                              (new Date(case_.estimatedRecovery).getTime() - new Date(case_.startDate).getTime()) /
                                (1000 * 60 * 60 * 24),
                            )}{" "}
                            days
                          </p>
                        </div>

                        <Button size="sm" variant="outline">
                          View Report
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
