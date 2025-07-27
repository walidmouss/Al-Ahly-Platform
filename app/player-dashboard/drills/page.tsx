"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Target,
  Play,
  Clock,
  Star,
  Search,
  Filter,
  BookOpen,
  Video,
  TrendingUp,
  RotateCcw,
  Zap,
  Heart,
  Activity,
} from "lucide-react"

export default function PlayerDrillsPage() {
  const drillCategories = [
    { name: "Shooting", count: 24, icon: Target, color: "text-red-500" },
    { name: "Dribbling", count: 18, icon: Activity, color: "text-blue-500" },
    { name: "Passing", count: 16, icon: RotateCcw, color: "text-green-500" },
    { name: "Fitness", count: 12, icon: Zap, color: "text-yellow-500" },
    { name: "Recovery", count: 8, icon: Heart, color: "text-pink-500" },
    { name: "Technical", count: 20, icon: Star, color: "text-purple-500" },
  ]

  const recommendedDrills = [
    {
      id: 1,
      title: "Precision Shooting",
      category: "Shooting",
      difficulty: "Advanced",
      duration: "15 min",
      description: "Improve shooting accuracy with targeted practice",
      videoUrl: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      completions: 23,
      lastCompleted: "2 days ago",
      personalBest: "18/20 targets",
      equipment: ["Cones", "Balls", "Goal"],
      instructions: [
        "Set up 5 cones in different positions around the penalty area",
        "Take 4 shots from each position",
        "Aim for specific corners of the goal",
        "Record accuracy percentage",
      ],
      benefits: ["Improves accuracy", "Builds confidence", "Enhances finishing"],
      status: "recommended",
    },
    {
      id: 2,
      title: "Close Control Dribbling",
      category: "Dribbling",
      difficulty: "Intermediate",
      duration: "12 min",
      description: "Enhance ball control in tight spaces",
      videoUrl: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      completions: 31,
      lastCompleted: "1 day ago",
      personalBest: "45 seconds",
      equipment: ["Cones", "Ball"],
      instructions: [
        "Set up a cone slalom course",
        "Dribble through using both feet",
        "Keep ball close to feet",
        "Time each attempt",
      ],
      benefits: ["Better ball control", "Improved agility", "Enhanced confidence"],
      status: "in_progress",
    },
    {
      id: 3,
      title: "Long Range Passing",
      category: "Passing",
      difficulty: "Advanced",
      duration: "20 min",
      description: "Develop accuracy in long-distance passes",
      videoUrl: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      completions: 15,
      lastCompleted: "3 days ago",
      personalBest: "16/20 accurate",
      equipment: ["Cones", "Balls", "Target zones"],
      instructions: [
        "Set up target zones at various distances",
        "Practice different types of long passes",
        "Focus on accuracy over power",
        "Track successful passes",
      ],
      benefits: ["Improves vision", "Enhances passing range", "Better field awareness"],
      status: "new",
    },
    {
      id: 4,
      title: "Sprint Intervals",
      category: "Fitness",
      difficulty: "High",
      duration: "25 min",
      description: "Build explosive speed and endurance",
      videoUrl: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      completions: 18,
      lastCompleted: "1 day ago",
      personalBest: "6.8 seconds (50m)",
      equipment: ["Cones", "Stopwatch"],
      instructions: [
        "Mark 50m sprint distance",
        "Complete 8 x 50m sprints",
        "Rest 90 seconds between sprints",
        "Record times for each sprint",
      ],
      benefits: ["Increases speed", "Builds endurance", "Improves acceleration"],
      status: "completed",
    },
  ]

  const recentActivity = [
    {
      drill: "Precision Shooting",
      date: "Feb 3, 2024",
      score: "16/20",
      improvement: "+2",
      time: "14:32",
      rating: 4.2,
    },
    {
      drill: "Close Control Dribbling",
      date: "Feb 4, 2024",
      score: "47 sec",
      improvement: "-3 sec",
      time: "11:45",
      rating: 4.5,
    },
    {
      drill: "Sprint Intervals",
      date: "Feb 4, 2024",
      score: "6.9 sec avg",
      improvement: "-0.1 sec",
      time: "23:15",
      rating: 4.3,
    },
    {
      drill: "Long Range Passing",
      date: "Feb 2, 2024",
      score: "14/20",
      improvement: "+1",
      time: "18:22",
      rating: 4.1,
    },
  ]

  const skillProgress = [
    { skill: "Shooting Accuracy", current: 85, target: 90, sessions: 23 },
    { skill: "Dribbling Speed", current: 78, target: 85, sessions: 31 },
    { skill: "Pass Completion", current: 89, target: 92, sessions: 15 },
    { skill: "Sprint Speed", current: 92, target: 95, sessions: 18 },
  ]

  const customDrills = [
    {
      id: 1,
      title: "Left Foot Finishing",
      category: "Shooting",
      createdBy: "Ahmed Hassan",
      difficulty: "Advanced",
      duration: "18 min",
      description: "Specialized drill to improve weaker foot shooting",
      status: "assigned",
    },
    {
      id: 2,
      title: "Quick Feet Agility",
      category: "Technical",
      createdBy: "Fitness Coach",
      difficulty: "Intermediate",
      duration: "10 min",
      description: "Improve foot speed and coordination",
      status: "assigned",
    },
  ]

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Beginner</Badge>
      case "Intermediate":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Intermediate</Badge>
      case "Advanced":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Advanced</Badge>
      case "High":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "recommended":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Recommended</Badge>
      case "in_progress":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Progress</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "new":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">New</Badge>
      case "assigned":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Assigned</Badge>
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Drills & Skills</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Practice drills and track your skill development</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search drills..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Drill Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {drillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <category.icon className={`w-8 h-8 ${category.color} mx-auto mb-2`} />
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{category.count} drills</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="recommended" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="progress">Skill Progress</TabsTrigger>
            <TabsTrigger value="custom">Custom Drills</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendedDrills.map((drill) => (
                <Card key={drill.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{drill.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{drill.category}</Badge>
                          {getDifficultyBadge(drill.difficulty)}
                          {getStatusBadge(drill.status)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          {renderStars(drill.rating)}
                          <span className="ml-1 text-sm text-gray-600">{drill.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{drill.completions} completions</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <Video className="w-12 h-12 text-gray-400" />
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">{drill.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-medium flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {drill.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Personal Best</p>
                        <p className="font-medium">{drill.personalBest}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Equipment Needed</p>
                      <div className="flex flex-wrap gap-1">
                        {drill.equipment.map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">Benefits</p>
                      <div className="flex flex-wrap gap-1">
                        {drill.benefits.map((benefit, index) => (
                          <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs text-gray-500">Last completed: {drill.lastCompleted}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Instructions
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Start Drill
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Drill Activity</CardTitle>
                <CardDescription>Your latest drill performances and improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Target className="w-6 h-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{activity.drill}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{activity.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4 mb-1">
                          <div className="text-center">
                            <p className="font-medium text-gray-900 dark:text-white">{activity.score}</p>
                            <p className="text-xs text-gray-500">Score</p>
                          </div>
                          <div className="text-center">
                            <p
                              className={`font-medium ${activity.improvement.startsWith("+") || (activity.improvement.startsWith("-") && !activity.improvement.includes("sec")) ? "text-green-600" : activity.improvement.includes("-") ? "text-green-600" : "text-red-600"}`}
                            >
                              {activity.improvement}
                            </p>
                            <p className="text-xs text-gray-500">Change</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-gray-900 dark:text-white">{activity.time}</p>
                            <p className="text-xs text-gray-500">Duration</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-end">{renderStars(activity.rating)}</div>
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
                <CardDescription>Track your improvement across different skill areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillProgress.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 dark:text-white">{skill.skill}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                            {skill.sessions} sessions
                          </Badge>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.current}% / {skill.target}%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Progress value={(skill.current / skill.target) * 100} className="h-3" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Current: {skill.current}%</span>
                          <span>Target: {skill.target}%</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                        <span>
                          {skill.current >= skill.target
                            ? "Target achieved!"
                            : skill.current >= skill.target * 0.9
                              ? "Almost there!"
                              : skill.current >= skill.target * 0.7
                                ? "Good progress"
                                : "Keep practicing!"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Custom Drills</CardTitle>
                <CardDescription>Personalized drills created by your coaching staff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customDrills.map((drill) => (
                    <div key={drill.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{drill.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{drill.description}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant="outline">{drill.category}</Badge>
                            {getDifficultyBadge(drill.difficulty)}
                            {getStatusBadge(drill.status)}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 dark:text-gray-400">Created by</p>
                          <p className="font-medium text-gray-900 dark:text-white">{drill.createdBy}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{drill.duration}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <BookOpen className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Start Drill
                          </Button>
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
