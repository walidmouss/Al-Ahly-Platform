"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Plus, User, MapPin, Phone, ChevronLeft, ChevronRight } from "lucide-react"

const appointments = [
  {
    id: 1,
    time: "09:00",
    duration: 30,
    patientName: "Mohamed Salah",
    type: "Follow-up",
    status: "Confirmed",
    location: "Room 101",
    doctor: "Dr. Ahmed Mahmoud",
    notes: "Hamstring injury progress check",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
  },
  {
    id: 2,
    time: "10:00",
    duration: 45,
    patientName: "Ahmed Hassan",
    type: "Treatment",
    status: "Confirmed",
    location: "Physiotherapy Room",
    doctor: "Dr. Sarah Ali",
    notes: "Ankle rehabilitation session",
    avatar: "/placeholder.svg?height=40&width=40&text=AH",
  },
  {
    id: 3,
    time: "11:30",
    duration: 60,
    patientName: "Omar Kamal",
    type: "Assessment",
    status: "Pending",
    location: "Room 102",
    doctor: "Dr. Mohamed Farid",
    notes: "Knee injury evaluation",
    avatar: "/placeholder.svg?height=40&width=40&text=OK",
  },
  {
    id: 4,
    time: "14:00",
    duration: 30,
    patientName: "Youssef Ali",
    type: "Checkup",
    status: "Confirmed",
    location: "Room 103",
    doctor: "Dr. Layla Hassan",
    notes: "Routine medical examination",
    avatar: "/placeholder.svg?height=40&width=40&text=YA",
  },
  {
    id: 5,
    time: "15:30",
    duration: 45,
    patientName: "Mahmoud Trezeguet",
    type: "Consultation",
    status: "Rescheduled",
    location: "Room 101",
    doctor: "Dr. Ahmed Mahmoud",
    notes: "Fitness assessment discussion",
    avatar: "/placeholder.svg?height=40&width=40&text=MT",
  },
  {
    id: 6,
    time: "16:30",
    duration: 30,
    patientName: "Taher Mohamed",
    type: "Follow-up",
    status: "Confirmed",
    location: "Room 104",
    doctor: "Dr. Sarah Ali",
    notes: "Recovery progress review",
    avatar: "/placeholder.svg?height=40&width=40&text=TM",
  },
]

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const currentDate = new Date()

export default function MedicalSchedule() {
  const [selectedDate, setSelectedDate] = useState(currentDate)
  const [viewMode, setViewMode] = useState<"day" | "week">("day")

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rescheduled":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "follow-up":
        return "text-blue-600"
      case "treatment":
        return "text-green-600"
      case "assessment":
        return "text-purple-600"
      case "checkup":
        return "text-orange-600"
      case "consultation":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(selectedDate)
    if (viewMode === "day") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1))
    } else {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7))
    }
    setSelectedDate(newDate)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Medical Schedule</h1>
          <p className="text-muted-foreground">Manage appointments and medical consultations</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      {/* Schedule Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appointments.length}</div>
            <p className="text-xs text-muted-foreground">Scheduled for today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
            <User className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appointments.filter((a) => a.status === "Confirmed").length}</div>
            <p className="text-xs text-muted-foreground">Ready to proceed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appointments.filter((a) => a.status === "Pending").length}</div>
            <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((appointments.reduce((sum, a) => sum + a.duration, 0) / 60) * 10) / 10}h
            </div>
            <p className="text-xs text-muted-foreground">Scheduled time</p>
          </CardContent>
        </Card>
      </div>

      {/* Date Navigation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigateDate("prev")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-center">
                <h2 className="text-lg font-semibold">{formatDate(selectedDate)}</h2>
                <p className="text-sm text-muted-foreground">{viewMode === "week" ? "Week View" : "Day View"}</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigateDate("next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "day" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("day")}
                className={viewMode === "day" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                Day
              </Button>
              <Button
                variant={viewMode === "week" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("week")}
                className={viewMode === "week" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                Week
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Appointments List */}
      <div className="grid gap-4">
        {appointments.map((appointment) => (
          <Card key={appointment.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-600">{appointment.time}</div>
                    <div className="text-xs text-muted-foreground">{appointment.duration}min</div>
                  </div>

                  <Avatar>
                    <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt={appointment.patientName} />
                    <AvatarFallback>
                      {appointment.patientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{appointment.patientName}</h3>
                      <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <span className={`font-medium ${getTypeColor(appointment.type)}`}>{appointment.type}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        {appointment.doctor}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {appointment.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {appointment.duration} minutes
                      </div>
                    </div>
                    {appointment.notes && <p className="text-sm text-muted-foreground mt-2">{appointment.notes}</p>}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline">
                    Reschedule
                  </Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Start Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common scheduling tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Plus className="h-6 w-6 mb-2" />
              Schedule Appointment
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Calendar className="h-6 w-6 mb-2" />
              View Calendar
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Clock className="h-6 w-6 mb-2" />
              Manage Availability
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <User className="h-6 w-6 mb-2" />
              Patient List
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
