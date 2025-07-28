"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Heart, Activity, AlertTriangle, CheckCircle, Calendar, FileText } from "lucide-react"

const athletes = [
  {
    id: 1,
    name: "Mohamed Salah",
    position: "Forward",
    age: 31,
    status: "Active",
    fitness: 95,
    lastCheckup: "2024-01-15",
    injuries: 0,
    riskLevel: "Low",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    position: "Midfielder",
    age: 28,
    status: "Injured",
    fitness: 65,
    lastCheckup: "2024-01-10",
    injuries: 1,
    riskLevel: "High",
    avatar: "/placeholder.svg?height=40&width=40&text=AH",
  },
  {
    id: 3,
    name: "Omar Kamal",
    position: "Defender",
    age: 26,
    status: "Recovery",
    fitness: 78,
    lastCheckup: "2024-01-12",
    injuries: 0,
    riskLevel: "Medium",
    avatar: "/placeholder.svg?height=40&width=40&text=OK",
  },
  {
    id: 4,
    name: "Youssef Ali",
    position: "Goalkeeper",
    age: 29,
    status: "Active",
    fitness: 92,
    lastCheckup: "2024-01-14",
    injuries: 0,
    riskLevel: "Low",
    avatar: "/placeholder.svg?height=40&width=40&text=YA",
  },
  {
    id: 5,
    name: "Mahmoud Trezeguet",
    position: "Winger",
    age: 30,
    status: "Active",
    fitness: 88,
    lastCheckup: "2024-01-13",
    injuries: 0,
    riskLevel: "Low",
    avatar: "/placeholder.svg?height=40&width=40&text=MT",
  },
  {
    id: 6,
    name: "Taher Mohamed",
    position: "Forward",
    age: 25,
    status: "Monitoring",
    fitness: 82,
    lastCheckup: "2024-01-11",
    injuries: 0,
    riskLevel: "Medium",
    avatar: "/placeholder.svg?height=40&width=40&text=TM",
  },
]

export default function MedicalAthletes() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || athlete.status.toLowerCase() === selectedStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800"
      case "injured":
        return "bg-red-100 text-red-800"
      case "recovery":
        return "bg-yellow-100 text-yellow-800"
      case "monitoring":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "text-green-600"
      case "medium":
        return "text-yellow-600"
      case "high":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Athletes Overview</h1>
          <p className="text-muted-foreground">Monitor and manage athlete health status</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <FileText className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Athletes</CardTitle>
            <Activity className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{athletes.length}</div>
            <p className="text-xs text-muted-foreground">Active squad members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Match Ready</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{athletes.filter((a) => a.status === "Active").length}</div>
            <p className="text-xs text-muted-foreground">Available for selection</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Injured</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{athletes.filter((a) => a.status === "Injured").length}</div>
            <p className="text-xs text-muted-foreground">Currently unavailable</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Fitness</CardTitle>
            <Heart className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(athletes.reduce((sum, a) => sum + a.fitness, 0) / athletes.length)}%
            </div>
            <p className="text-xs text-muted-foreground">Squad fitness level</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search athletes..."
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
            <option value="active">Active</option>
            <option value="injured">Injured</option>
            <option value="recovery">Recovery</option>
            <option value="monitoring">Monitoring</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="grid" className="space-y-4">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="fitness">Fitness Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredAthletes.map((athlete) => (
              <Card key={athlete.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={athlete.avatar || "/placeholder.svg"} alt={athlete.name} />
                      <AvatarFallback>
                        {athlete.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{athlete.name}</CardTitle>
                      <CardDescription>
                        {athlete.position} • Age {athlete.age}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(athlete.status)}>{athlete.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Fitness Level</span>
                      <span className="font-medium">{athlete.fitness}%</span>
                    </div>
                    <Progress value={athlete.fitness} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Risk Level</p>
                      <p className={`font-medium ${getRiskColor(athlete.riskLevel)}`}>{athlete.riskLevel}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Checkup</p>
                      <p className="font-medium">{athlete.lastCheckup}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </Button>
                    <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Athletes List</CardTitle>
              <CardDescription>Detailed view of all athletes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAthletes.map((athlete) => (
                  <div
                    key={athlete.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={athlete.avatar || "/placeholder.svg"} alt={athlete.name} />
                        <AvatarFallback>
                          {athlete.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{athlete.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {athlete.position} • Age {athlete.age}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge className={getStatusColor(athlete.status)}>{athlete.status}</Badge>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Fitness</p>
                        <p className="font-semibold">{athlete.fitness}%</p>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Risk</p>
                        <p className={`font-semibold ${getRiskColor(athlete.riskLevel)}`}>{athlete.riskLevel}</p>
                      </div>

                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fitness" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Fitness Distribution</CardTitle>
                <CardDescription>Current squad fitness levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { range: "90-100%", count: athletes.filter((a) => a.fitness >= 90).length, color: "bg-green-600" },
                    {
                      range: "80-89%",
                      count: athletes.filter((a) => a.fitness >= 80 && a.fitness < 90).length,
                      color: "bg-yellow-500",
                    },
                    {
                      range: "70-79%",
                      count: athletes.filter((a) => a.fitness >= 70 && a.fitness < 80).length,
                      color: "bg-orange-500",
                    },
                    {
                      range: "60-69%",
                      count: athletes.filter((a) => a.fitness >= 60 && a.fitness < 70).length,
                      color: "bg-red-600",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.range}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${(item.count / athletes.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment</CardTitle>
                <CardDescription>Injury risk distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      level: "Low Risk",
                      count: athletes.filter((a) => a.riskLevel === "Low").length,
                      color: "text-green-600",
                    },
                    {
                      level: "Medium Risk",
                      count: athletes.filter((a) => a.riskLevel === "Medium").length,
                      color: "text-yellow-600",
                    },
                    {
                      level: "High Risk",
                      count: athletes.filter((a) => a.riskLevel === "High").length,
                      color: "text-red-600",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className={`font-medium ${item.color}`}>{item.level}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">{item.count}</span>
                        <span className="text-sm text-muted-foreground">athletes</span>
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
  )
}
