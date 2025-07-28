"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  Target,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  Dumbbell,
  Heart,
  BarChart3,
  Award,
  AlertCircle,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

export default function PlayerFitnessPage() {
  const fitnessOverview = {
    overallScore: 94,
    lastAssessment: "Feb 1, 2024",
    nextAssessment: "Mar 1, 2024",
    improvementRate: 8.5,
    weeklyGoals: 5,
    completedGoals: 4,
  }

  const fitnessMetrics = [
    { metric: "Cardiovascular Endurance", current: 95, target: 96, unit: "VO2 Max", trend: "up" },
    { metric: "Muscular Strength", current: 88, target: 92, unit: "Score", trend: "up" },
    { metric: "Speed & Agility", current: 92, target: 94, unit: "Score", trend: "stable" },
    { metric: "Flexibility", current: 85, target: 88, unit: "Score", trend: "up" },
    { metric: "Body Composition", current: 96, target: 95, unit: "Score", trend: "stable" },
    { metric: "Balance & Coordination", current: 90, target: 92, unit: "Score", trend: "up" },
  ]

  const weeklyProgress = [
    { day: "Mon", cardio: 45, strength: 60, flexibility: 30, completed: true },
    { day: "Tue", cardio: 30, strength: 45, flexibility: 20, completed: true },
    { day: "Wed", cardio: 60, strength: 0, flexibility: 25, completed: true },
    { day: "Thu", cardio: 40, strength: 75, flexibility: 15, completed: true },
    { day: "Fri", cardio: 35, strength: 30, flexibility: 20, completed: false },
    { day: "Sat", cardio: 0, strength: 0, flexibility: 0, completed: false },
    { day: "Sun", cardio: 0, strength: 0, flexibility: 0, completed: false },
  ]

  const performanceHistory = [
    { month: "Aug", endurance: 88, strength: 82, speed: 89, flexibility: 80 },
    { month: "Sep", endurance: 90, strength: 84, speed: 90, flexibility: 82 },
    { month: "Oct", endurance: 91, strength: 85, speed: 91, flexibility: 83 },
    { month: "Nov", endurance: 93, strength: 86, speed: 91, flexibility: 84 },
    { month: "Dec", endurance: 94, strength: 87, speed: 92, flexibility: 84 },
    { month: "Jan", endurance: 95, strength: 88, speed: 92, flexibility: 85 },
  ]

  const workoutPlans = [
    {
      id: 1,
      title: "Pre-Season Conditioning",
      type: "conditioning",
      duration: "6 weeks",
      status: "active",
      progress: 67,
      focus: ["Endurance", "Strength", "Speed"],
      nextSession: "Feb 6, 2024 - 9:00 AM",
      coach: "Fitness Coach",
      description: "Comprehensive fitness preparation for the upcoming season",
    },
    {
      id: 2,
      title: "Injury Prevention Program",
      type: "prevention",
      duration: "Ongoing",
      status: "active",
      progress: 85,
      focus: ["Flexibility", "Balance", "Core Strength"],
      nextSession: "Feb 6, 2024 - 2:00 PM",
      coach: "Physiotherapist",
      description: "Targeted exercises to prevent common football injuries",
    },
    {
      id: 3,
      title: "Speed Development",
      type: "performance",
      duration: "4 weeks",
      status: "completed",
      progress: 100,
      focus: ["Sprint Speed", "Acceleration", "Agility"],
      nextSession: "Completed",
      coach: "Speed Coach",
      description: "Specialized program to improve sprint performance",
    },
  ]

  const fitnessTests = [
    {
      id: 1,
      name: "VO2 Max Test",
      date: "Feb 1, 2024",
      result: "65.2 ml/kg/min",
      status: "excellent",
      improvement: "+2.1",
      category: "Cardiovascular",
      percentile: 95,
    },
    {
      id: 2,
      name: "40m Sprint",
      date: "Jan 28, 2024",
      result: "4.85 seconds",
      status: "excellent",
      improvement: "-0.05",
      category: "Speed",
      percentile: 92,
    },
    {
      id: 3,
      name: "Vertical Jump",
      date: "Jan 25, 2024",
      result: "68 cm",
      status: "good",
      improvement: "+2",
      category: "Power",
      percentile: 88,
    },
    {
      id: 4,
      name: "Flexibility Test",
      date: "Jan 22, 2024",
      result: "42 cm",
      status: "good",
      improvement: "+1.5",
      category: "Flexibility",
      percentile: 85,
    },
  ]

  const recoveryMetrics = [
    { date: "Feb 1", sleepHours: 8.5, hrv: 45, rhr: 44, stress: 2 },
    { date: "Feb 2", sleepHours: 9, hrv: 48, rhr: 43, stress: 1 },
    { date: "Feb 3", sleepHours: 7.5, hrv: 42, rhr: 46, stress: 4 },
    { date: "Feb 4", sleepHours: 8, hrv: 46, rhr: 44, stress: 2 },
    { date: "Feb 5", sleepHours: 8.5, hrv: 47, rhr: 43, stress: 1 },
  ]

  const fitnessGoals = [
    {
      goal: "Improve VO2 Max to 67 ml/kg/min",
      current: 65.2,
      target: 67,
      progress: 97,
      deadline: "Mar 15, 2024",
      status: "on_track",
    },
    {
      goal: "Reduce 40m sprint time to 4.80s",
      current: 4.85,
      target: 4.8,
      progress: 50,
      deadline: "Apr 1, 2024",
      status: "on_track",
    },
    {
      goal: "Increase vertical jump to 72cm",
      current: 68,
      target: 72,
      progress: 75,
      deadline: "Mar 30, 2024",
      status: "ahead",
    },
    {
      goal: "Improve flexibility score to 90%",
      current: 85,
      target: 90,
      progress: 85,
      deadline: "Feb 28, 2024",
      status: "behind",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
      case "good":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
      case "average":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Average</Badge>
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>
      case "on_track":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">On Track</Badge>
      case "ahead":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Ahead</Badge>
      case "behind":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Behind</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "conditioning":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Conditioning</Badge>
      case "prevention":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Prevention</Badge>
      case "performance":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Performance</Badge>
      default:
        return <Badge variant="outline">Program</Badge>
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Fitness & Conditioning</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track your physical fitness and conditioning progress
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Reports
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Test
            </Button>
          </div>
        </div>

        {/* Fitness Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Award className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{fitnessOverview.overallScore}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Overall Score</p>
              <Progress value={fitnessOverview.overallScore} className="h-2 mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{fitnessOverview.improvementRate}%</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Improvement Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {fitnessOverview.completedGoals}/{fitnessOverview.weeklyGoals}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Weekly Goals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">Feb 1</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Last Assessment</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">Mar 1</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Next Assessment</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">3</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Active Programs</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="metrics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="metrics">Fitness Metrics</TabsTrigger>
            <TabsTrigger value="progress">Weekly Progress</TabsTrigger>
            <TabsTrigger value="programs">Training Programs</TabsTrigger>
            <TabsTrigger value="tests">Fitness Tests</TabsTrigger>
            <TabsTrigger value="goals">Goals & Targets</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 text-blue-500 mr-2" />
                    Fitness Performance Trend
                  </CardTitle>
                  <CardDescription>Your fitness metrics over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="endurance" stroke="#ef4444" strokeWidth={2} name="Endurance" />
                      <Line type="monotone" dataKey="strength" stroke="#3b82f6" strokeWidth={2} name="Strength" />
                      <Line type="monotone" dataKey="speed" stroke="#10b981" strokeWidth={2} name="Speed" />
                      <Line type="monotone" dataKey="flexibility" stroke="#f59e0b" strokeWidth={2} name="Flexibility" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    Recovery Metrics
                  </CardTitle>
                  <CardDescription>Daily recovery and wellness indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={recoveryMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="sleepHours" stroke="#8b5cf6" strokeWidth={2} name="Sleep Hours" />
                      <Line type="monotone" dataKey="hrv" stroke="#10b981" strokeWidth={2} name="HRV" />
                      <Line type="monotone" dataKey="rhr" stroke="#ef4444" strokeWidth={2} name="Resting HR" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current Fitness Metrics</CardTitle>
                <CardDescription>Your latest fitness assessment results</CardDescription>
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
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.current}/{metric.target} {metric.unit}
                          </span>
                        </div>
                      </div>
                      <Progress value={(metric.current / metric.target) * 100} className="h-3" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Current: {metric.current}</span>
                        <span>Target: {metric.target}</span>
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
                <CardTitle>Weekly Training Progress</CardTitle>
                <CardDescription>Your training volume and completion status for this week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={weeklyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="cardio" fill="#ef4444" name="Cardio (min)" />
                    <Bar dataKey="strength" fill="#3b82f6" name="Strength (min)" />
                    <Bar dataKey="flexibility" fill="#10b981" name="Flexibility (min)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Training Summary</CardTitle>
                <CardDescription>Breakdown of your weekly training sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyProgress.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Dumbbell className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{day.day}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Total: {day.cardio + day.strength + day.flexibility} minutes
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="grid grid-cols-3 gap-2 mb-2">
                          <div className="text-center">
                            <p className="text-sm font-medium text-red-600">{day.cardio}</p>
                            <p className="text-xs text-gray-500">Cardio</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-blue-600">{day.strength}</p>
                            <p className="text-xs text-gray-500">Strength</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium text-green-600">{day.flexibility}</p>
                            <p className="text-xs text-gray-500">Flexibility</p>
                          </div>
                        </div>
                        {day.completed ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                        ) : (
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Planned</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="space-y-6">
              {workoutPlans.map((plan) => (
                <Card key={plan.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{plan.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          {getTypeBadge(plan.type)}
                          {getStatusBadge(plan.status)}
                          <Badge variant="outline">{plan.duration}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{plan.progress}%</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Complete</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{plan.progress}%</span>
                      </div>
                      <Progress value={plan.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-1">
                          {plan.focus.map((area, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Program Details</h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <p>Coach: {plan.coach}</p>
                          <p>Next Session: {plan.nextSession}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                        disabled={plan.status === "completed"}
                      >
                        {plan.status === "completed" ? "Completed" : "Continue Program"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Fitness Test Results</CardTitle>
                <CardDescription>Your latest fitness assessments and performance benchmarks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fitnessTests.map((test) => (
                    <div key={test.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{test.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{test.category}</Badge>
                            {getStatusBadge(test.status)}
                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{test.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-gray-900 dark:text-white">{test.result}</p>
                          <div className="flex items-center mt-1">
                            {test.improvement.startsWith("+") || test.improvement.startsWith("-") ? (
                              <div
                                className={`flex items-center text-sm ${
                                  (test.improvement.startsWith("+") && !test.name.includes("Sprint")) ||
                                  (test.improvement.startsWith("-") && test.name.includes("Sprint"))
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {(test.improvement.startsWith("+") && !test.name.includes("Sprint")) ||
                                (test.improvement.startsWith("-") && test.name.includes("Sprint")) ? (
                                  <TrendingUp className="w-4 h-4 mr-1" />
                                ) : (
                                  <TrendingDown className="w-4 h-4 mr-1" />
                                )}
                                <span>{test.improvement}</span>
                              </div>
                            ) : (
                              <span className="text-sm text-gray-600">{test.improvement}</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Percentile: {test.percentile}th (among professional players)
                        </div>
                        <Button variant="outline" size="sm">
                          View History
                        </Button>
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
                <CardTitle>Fitness Goals & Targets</CardTitle>
                <CardDescription>Track your progress towards personal fitness objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fitnessGoals.map((goal, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{goal.goal}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Deadline: {goal.deadline}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(goal.status)}
                          {goal.status === "behind" && <AlertCircle className="w-4 h-4 text-red-500" />}
                        </div>
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
                                  : goal.status === "behind"
                                    ? "Needs attention"
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
