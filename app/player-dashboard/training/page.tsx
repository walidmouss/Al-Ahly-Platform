"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Clock,
  MapPin,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Play,
  Calendar,
  Star,
  Zap,
  Heart,
} from "lucide-react"

export default function PlayerTrainingPage() {
  const trainingStats = {
    sessionsThisWeek: 6,
    totalHours: 12.5,
    attendanceRate: 98,
    averageIntensity: 8.2,
    skillsImproved: 4,
    goalsThisWeek: 8,
  }

  const recentSessions = [
    {
      id: 1,
      date: "Feb 5, 2024",
      time: "10:00 AM",
      title: "Tactical Training",
      type: "tactical",
      duration: "90 min",
      intensity: 8.5,
      location: "Main Training Ground",
      coach: "Ahmed Hassan",
      status: "completed",
      focus: ["Positioning", "Passing", "Movement"],
      performance: 9.2,
      notes: "Excellent understanding of new tactical setup. Great positioning in final third.",
    },
    {
      id: 2,
      date: "Feb 4, 2024",
      time: "09:00 AM",
      title: "Individual Skills",
      type: "individual",
      duration: "60 min",
      intensity: 7.8,
      location: "Training Ground A",
      coach: "Skills Coach",
      status: "completed",
      focus: ["Dribbling", "Shooting", "First Touch"],
      performance: 8.8,
      notes: "Improved left foot shooting accuracy. Continue working on close control.",
    },
    {
      id: 3,
      date: "Feb 3, 2024",
      time: "10:30 AM",
      title: "Physical Conditioning",
      type: "fitness",
      duration: "75 min",
      intensity: 9.1,
      location: "Fitness Center",
      coach: "Fitness Coach",
      status: "completed",
      focus: ["Endurance", "Speed", "Agility"],
      performance: 8.5,
      notes: "Great improvement in sprint times. Maintain current fitness regime.",
    },
    {
      id: 4,
      date: "Feb 2, 2024",
      time: "11:00 AM",
      title: "Set Piece Practice",
      type: "technical",
      duration: "45 min",
      intensity: 6.5,
      location: "Main Training Ground",
      coach: "Ahmed Hassan",
      status: "completed",
      focus: ["Free Kicks", "Corners", "Penalties"],
      performance: 8.9,
      notes: "Excellent free kick technique. Work on corner kick delivery consistency.",
    },
  ]

  const upcomingSessions = [
    {
      id: 1,
      date: "Feb 6, 2024",
      time: "09:00 AM",
      title: "Team Training",
      type: "team",
      duration: "90 min",
      location: "Main Training Ground",
      coach: "Ahmed Hassan",
      focus: ["Match Preparation", "Tactics", "Set Pieces"],
      intensity: "High",
    },
    {
      id: 2,
      date: "Feb 6, 2024",
      time: "03:00 PM",
      title: "Recovery Session",
      type: "recovery",
      duration: "45 min",
      location: "Recovery Center",
      coach: "Medical Team",
      focus: ["Stretching", "Massage", "Ice Bath"],
      intensity: "Low",
    },
    {
      id: 3,
      date: "Feb 7, 2024",
      time: "10:00 AM",
      title: "Shooting Practice",
      type: "individual",
      duration: "60 min",
      location: "Training Ground B",
      coach: "Skills Coach",
      focus: ["Finishing", "Accuracy", "Power"],
      intensity: "Medium",
    },
  ]

  const skillProgress = [
    { skill: "Shooting", current: 94, target: 96, improvement: "+2" },
    { skill: "Dribbling", current: 96, target: 97, improvement: "+1" },
    { skill: "Passing", current: 87, target: 90, improvement: "+3" },
    { skill: "First Touch", current: 92, target: 94, improvement: "+2" },
    { skill: "Crossing", current: 82, target: 86, improvement: "+4" },
    { skill: "Free Kicks", current: 89, target: 92, improvement: "+3" },
  ]

  const trainingPlans = [
    {
      id: 1,
      title: "Pre-Match Preparation",
      description: "Intensive preparation for upcoming Zamalek match",
      duration: "3 days",
      sessions: 4,
      focus: ["Match Tactics", "Set Pieces", "Physical Readiness"],
      priority: "high",
      startDate: "Feb 7, 2024",
    },
    {
      id: 2,
      title: "Left Foot Development",
      description: "Focused program to improve weaker foot technique",
      duration: "2 weeks",
      sessions: 8,
      focus: ["Left Foot Shooting", "Passing", "Control"],
      priority: "medium",
      startDate: "Feb 10, 2024",
    },
    {
      id: 3,
      title: "Aerial Ability Enhancement",
      description: "Improve heading accuracy and timing",
      duration: "3 weeks",
      sessions: 12,
      focus: ["Heading Technique", "Jumping", "Timing"],
      priority: "medium",
      startDate: "Feb 15, 2024",
    },
  ]

  const personalGoals = [
    {
      goal: "Score 25+ goals this season",
      current: 22,
      target: 25,
      progress: 88,
      deadline: "End of Season",
      status: "on_track",
    },
    {
      goal: "Improve passing accuracy to 90%",
      current: 87.2,
      target: 90,
      progress: 97,
      deadline: "March 2024",
      status: "on_track",
    },
    {
      goal: "Master left foot shooting",
      current: 72,
      target: 85,
      progress: 85,
      deadline: "April 2024",
      status: "ahead",
    },
    {
      goal: "Reduce injury risk",
      current: 95,
      target: 98,
      progress: 97,
      deadline: "Ongoing",
      status: "on_track",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "tactical":
        return <Target className="w-4 h-4 text-blue-500" />
      case "individual":
        return <Star className="w-4 h-4 text-yellow-500" />
      case "fitness":
        return <Zap className="w-4 h-4 text-green-500" />
      case "technical":
        return <Activity className="w-4 h-4 text-purple-500" />
      case "team":
        return <Users className="w-4 h-4 text-red-500" />
      case "recovery":
        return <Heart className="w-4 h-4 text-pink-500" />
      default:
        return <Activity className="w-4 h-4 text-gray-500" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "tactical":
        return "bg-blue-50 border-blue-200"
      case "individual":
        return "bg-yellow-50 border-yellow-200"
      case "fitness":
        return "bg-green-50 border-green-200"
      case "technical":
        return "bg-purple-50 border-purple-200"
      case "team":
        return "bg-red-50 border-red-200"
      case "recovery":
        return "bg-pink-50 border-pink-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>
      case "upcoming":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Upcoming</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium Priority</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low Priority</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const getGoalStatusBadge = (status: string) => {
    switch (status) {
      case "on_track":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">On Track</Badge>
      case "ahead":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Ahead of Schedule</Badge>
      case "behind":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Behind Schedule</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <PlayerDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Training Sessions</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Track your training progress and upcoming sessions</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              View Calendar
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              Request Session
            </Button>
          </div>
        </div>

        {/* Training Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{trainingStats.sessionsThisWeek}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Sessions This Week</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{trainingStats.totalHours}h</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Total Hours</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{trainingStats.attendanceRate}%</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Attendance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{trainingStats.averageIntensity}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Avg Intensity</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{trainingStats.skillsImproved}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Skills Improved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{trainingStats.goalsThisWeek}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Goals This Week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="recent" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recent">Recent Sessions</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="progress">Skill Progress</TabsTrigger>
            <TabsTrigger value="goals">Personal Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Training Sessions</CardTitle>
                <CardDescription>Your latest training activities and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div
                      key={session.id}
                      className={`p-4 rounded-lg border-l-4 ${getTypeColor(session.type)} hover:shadow-md transition-all`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start space-x-3">
                          {getTypeIcon(session.type)}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{session.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>
                                  {session.time} ({session.duration})
                                </span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{session.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                <span>{session.coach}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(session.status)}
                          <div className="flex items-center justify-end mt-2">{renderStars(session.performance)}</div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Performance: {session.performance}/10
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Focus Areas</h4>
                          <div className="flex flex-wrap gap-1">
                            {session.focus.map((area, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Intensity</h4>
                          <div className="flex items-center space-x-2">
                            <Progress value={session.intensity * 10} className="h-2 flex-1" />
                            <span className="text-sm font-medium">{session.intensity}/10</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-white dark:bg-gray-700 rounded">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Coach Notes</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{session.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Training Sessions</CardTitle>
                <CardDescription>Your scheduled training activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.id}
                      className={`p-4 rounded-lg border-l-4 ${getTypeColor(session.type)} hover:shadow-md transition-all`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          {getTypeIcon(session.type)}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{session.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{session.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>
                                  {session.time} ({session.duration})
                                </span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span>{session.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                <span>{session.coach}</span>
                              </div>
                            </div>
                            <div className="mt-2">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Focus Areas</h4>
                              <div className="flex flex-wrap gap-1">
                                {session.focus.map((area, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {area}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            className={
                              session.intensity === "High"
                                ? "bg-red-100 text-red-800 hover:bg-red-100"
                                : session.intensity === "Medium"
                                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                  : "bg-green-100 text-green-800 hover:bg-green-100"
                            }
                          >
                            {session.intensity} Intensity
                          </Badge>
                          <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                            <Play className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Training Plans</CardTitle>
                <CardDescription>Structured training programs designed for you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingPlans.map((plan) => (
                    <div key={plan.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{plan.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{plan.description}</p>
                        </div>
                        {getPriorityBadge(plan.priority)}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Duration</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{plan.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Sessions</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{plan.sessions}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Start Date</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{plan.startDate}</p>
                        </div>
                        <div>
                          <Button size="sm" variant="outline">
                            View Plan
                          </Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-1">
                          {plan.focus.map((area, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skill Development Progress</CardTitle>
                <CardDescription>Track your improvement in key football skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillProgress.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 dark:text-white">{skill.skill}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            {skill.improvement} this month
                          </Badge>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.current}/{skill.target}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Progress value={(skill.current / skill.target) * 100} className="h-3" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Current: {skill.current}/100</span>
                          <span>Target: {skill.target}/100</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Development Goals</CardTitle>
                <CardDescription>Track your progress towards personal objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalGoals.map((goal, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{goal.goal}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Deadline: {goal.deadline}</p>
                        </div>
                        {getGoalStatusBadge(goal.status)}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-medium">
                            {goal.current} / {goal.target}
                          </span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{goal.progress}% Complete</span>
                          <span>
                            {goal.progress >= 100
                              ? "Goal Achieved!"
                              : goal.progress >= 90
                                ? "Almost there!"
                                : goal.progress >= 70
                                  ? "Good progress"
                                  : "Keep working!"}
                          </span>
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
