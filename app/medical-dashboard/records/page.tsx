"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, FileText, Download, Eye, Calendar, Activity } from "lucide-react"

const medicalRecords = [
  {
    id: "MR001",
    patientName: "Mohamed Salah",
    recordType: "Injury Report",
    date: "2024-01-15",
    doctor: "Dr. Ahmed Mahmoud",
    category: "Orthopedic",
    status: "Final",
    description: "Hamstring strain assessment and treatment plan",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
  },
  {
    id: "MR002",
    patientName: "Ahmed Hassan",
    recordType: "Medical Checkup",
    date: "2024-01-14",
    doctor: "Dr. Sarah Ali",
    category: "General",
    status: "Final",
    description: "Routine pre-season medical examination",
    avatar: "/placeholder.svg?height=40&width=40&text=AH",
  },
  {
    id: "MR003",
    patientName: "Omar Kamal",
    recordType: "Diagnostic Report",
    date: "2024-01-13",
    doctor: "Dr. Mohamed Farid",
    category: "Radiology",
    status: "Pending Review",
    description: "MRI scan results for knee injury evaluation",
    avatar: "/placeholder.svg?height=40&width=40&text=OK",
  },
  {
    id: "MR004",
    patientName: "Youssef Ali",
    recordType: "Treatment Plan",
    date: "2024-01-12",
    doctor: "Dr. Layla Hassan",
    category: "Physiotherapy",
    status: "Active",
    description: "Shoulder rehabilitation program",
    avatar: "/placeholder.svg?height=40&width=40&text=YA",
  },
  {
    id: "MR005",
    patientName: "Mahmoud Trezeguet",
    recordType: "Lab Results",
    date: "2024-01-11",
    doctor: "Dr. Ahmed Mahmoud",
    category: "Laboratory",
    status: "Final",
    description: "Blood work and metabolic panel results",
    avatar: "/placeholder.svg?height=40&width=40&text=MT",
  },
  {
    id: "MR006",
    patientName: "Taher Mohamed",
    recordType: "Fitness Assessment",
    date: "2024-01-10",
    doctor: "Dr. Sarah Ali",
    category: "Sports Medicine",
    status: "Final",
    description: "Comprehensive fitness and performance evaluation",
    avatar: "/placeholder.svg?height=40&width=40&text=TM",
  },
]

export default function MedicalRecords() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.recordType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || record.category.toLowerCase() === selectedCategory
    const matchesStatus = selectedStatus === "all" || record.status.toLowerCase().replace(" ", "-") === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "final":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "pending review":
        return "bg-yellow-100 text-yellow-800"
      case "draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "orthopedic":
        return "text-red-600"
      case "general":
        return "text-blue-600"
      case "radiology":
        return "text-purple-600"
      case "physiotherapy":
        return "text-green-600"
      case "laboratory":
        return "text-orange-600"
      case "sports medicine":
        return "text-indigo-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Medical Records</h1>
          <p className="text-muted-foreground">Comprehensive medical documentation system</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" />
          New Record
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            <FileText className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{medicalRecords.length}</div>
            <p className="text-xs text-muted-foreground">All medical documents</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Eye className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {medicalRecords.filter((r) => r.status === "Pending Review").length}
            </div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Activity className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{medicalRecords.filter((r) => r.status === "Active").length}</div>
            <p className="text-xs text-muted-foreground">Ongoing treatments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {medicalRecords.filter((r) => new Date(r.date).getMonth() === new Date().getMonth()).length}
            </div>
            <p className="text-xs text-muted-foreground">Records created</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="all">All Categories</option>
            <option value="orthopedic">Orthopedic</option>
            <option value="general">General</option>
            <option value="radiology">Radiology</option>
            <option value="physiotherapy">Physiotherapy</option>
            <option value="laboratory">Laboratory</option>
            <option value="sports medicine">Sports Medicine</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="final">Final</option>
            <option value="active">Active</option>
            <option value="pending-review">Pending Review</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Records</TabsTrigger>
          <TabsTrigger value="by-patient">By Patient</TabsTrigger>
          <TabsTrigger value="by-category">By Category</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4">
            {filteredRecords.map((record) => (
              <Card key={record.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={record.avatar || "/placeholder.svg"} alt={record.patientName} />
                        <AvatarFallback>
                          {record.patientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{record.recordType}</CardTitle>
                        <CardDescription>
                          {record.patientName} • {record.id}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(record.status)}>{record.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className={`font-medium ${getCategoryColor(record.category)}`}>{record.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{record.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Doctor</p>
                      <p className="font-medium">{record.doctor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Record ID</p>
                      <p className="font-medium">{record.id}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Description</p>
                    <p className="text-sm">{record.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Edit Record
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="by-patient" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Records by Patient</CardTitle>
              <CardDescription>Organized view of medical records per patient</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Array.from(new Set(filteredRecords.map((r) => r.patientName))).map((patientName) => {
                  const patientRecords = filteredRecords.filter((r) => r.patientName === patientName)
                  const patientAvatar = patientRecords[0]?.avatar

                  return (
                    <div key={patientName} className="border rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar>
                          <AvatarImage src={patientAvatar || "/placeholder.svg"} alt={patientName} />
                          <AvatarFallback>
                            {patientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{patientName}</h3>
                          <p className="text-sm text-muted-foreground">{patientRecords.length} records</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {patientRecords.map((record) => (
                          <div key={record.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <FileText className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="font-medium">{record.recordType}</p>
                                <p className="text-sm text-muted-foreground">
                                  {record.date} • {record.category}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge className={getStatusColor(record.status)}>{record.status}</Badge>
                              <Button size="sm" variant="outline">
                                View
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-category" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from(new Set(medicalRecords.map((r) => r.category))).map((category) => {
              const categoryRecords = filteredRecords.filter((r) => r.category === category)

              return (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className={getCategoryColor(category)}>{category}</CardTitle>
                    <CardDescription>{categoryRecords.length} records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categoryRecords.slice(0, 5).map((record) => (
                        <div key={record.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{record.recordType}</p>
                            <p className="text-xs text-muted-foreground">
                              {record.patientName} • {record.date}
                            </p>
                          </div>
                          <Badge className={getStatusColor(record.status)} variant="outline">
                            {record.status}
                          </Badge>
                        </div>
                      ))}
                      {categoryRecords.length > 5 && (
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          View All {categoryRecords.length} Records
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Review</CardTitle>
              <CardDescription>Records awaiting medical review and approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredRecords
                  .filter((r) => r.status === "Pending Review")
                  .map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-4 border border-yellow-200 rounded-lg bg-yellow-50"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={record.avatar || "/placeholder.svg"} alt={record.patientName} />
                          <AvatarFallback>
                            {record.patientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{record.recordType}</h3>
                          <p className="text-sm text-muted-foreground">
                            {record.patientName} • {record.date}
                          </p>
                          <p className="text-sm">{record.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-4 w-4" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                      </div>
                    </div>
                  ))}

                {filteredRecords.filter((r) => r.status === "Pending Review").length === 0 && (
                  <div className="text-center py-8">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No pending records</h3>
                    <p className="mt-1 text-sm text-gray-500">All records have been reviewed and approved.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
