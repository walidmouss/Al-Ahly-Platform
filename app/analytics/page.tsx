"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Trophy,
  Target,
  Activity,
  Calendar,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react"

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedTeam, setSelectedTeam] = useState("all")

  const overallStats = {
    totalPlayers: 67,
    activeTeams: 12,
    totalSessions: 156,
    averageAttendance: 94.2,
    injuryRate: 8.9,
    performanceScore: 87.5,
  }

  const teamPerformance = [
    {
      team: "Eagles",
      players: 25,
      wins: 12,
      losses: 3,
      draws: 2,
      goalsFor: 45,
      goalsAgainst: 18,
      attendance: 96,
      performance: 92,
      trend: "up",
    },
    {
      team: "Lions",
      players: 20,
      wins: 8,
      losses: 4,
      draws: 0,
      goalsFor: 32,
      goalsAgainst: 22,
      attendance: 94,
      performance: 85,
      trend: "up",
    },
    {
      team: "Sharks",
      players: 22,
      wins: 10,
      losses: 2,
      draws: 1,
      goalsFor: 38,
      goalsAgainst: 15,
      attendance: 98,
      performance: 89,
      trend: "up",
    },
    {
      team: "Panthers",
      players: 23,
      wins: 6,
      losses: 6,
      draws: 3,
      goalsFor: 28,
      goalsAgainst: 31,
      attendance: 91,
      performance: 78,
      trend: "down",
    },
    {
      team: "Hawks",
      players: 19,
      wins: 7,
      losses: 5,
      draws: 0,
      goalsFor: 29,
      goalsAgainst: 26,
      attendance: 95,
      performance: 82,
      trend: "same",
    },
  ]

  const topPerformers = [
    {
      name: "John Smith",
      team: "Eagles",
      position: "Forward",
      goals: 15,
      assists: 8,
      rating: 9.2,
      attendance: 100,
    },
    {
      name: "Emma Wilson",
      team: "Sharks",
      position: "Goalkeeper",
      goals: 0,
      assists: 1,
      rating: 9.0,
      attendance: 98,
    },
    {
      name: "Mike Johnson Jr.",
      team: "Eagles",
      position: "Midfielder",
      goals: 7,
      assists: 12,
      rating: 8.8,
      attendance: 96,
    },
    {
      name: "Lisa Anderson",
      team: "Hawks",
      position: "Midfielder",
      goals: 4,
      assists: 11,
      rating: 8.6,
      attendance: 95,
    },
    {
      name: "Marcus Thompson",
      team: "Wolves",
      position: "Forward",
      goals: 12,
      assists: 5,
      rating: 8.5,
      attendance: 92,
    },
  ]

  const trainingMetrics = [
    { metric: "Average Session Duration", value: "2.3 hours", change: "+5%", trend: "up" },
    { metric: "Drill Completion Rate", value: "87%", change: "+3%", trend: "up" },
    { metric: "Player Engagement", value: "92%", change: "-1%", trend: "down" },
    { metric: "Injury Prevention Score", value: "91%", change: "+8%", trend: "up" },
    { metric: "Fitness Improvement", value: "15%", change: "+2%", trend: "up" },
    { metric: "Skill Development", value: "78%", change: "+12%", trend: "up" },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />
      default:
        return <div className="w-4 h-4" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Comprehensive performance analytics and insights</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex space-x-2">
          <Button
            variant={selectedPeriod === "week" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("week")}
          >
            This Week
          </Button>
          <Button
            variant={selectedPeriod === "month" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("month")}
          >
            This Month
          </Button>
          <Button
            variant={selectedPeriod === "quarter" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("quarter")}
          >
            This Quarter
          </Button>
          <Button
            variant={selectedPeriod === "year" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod("year")}
          >
            This Year
          </Button>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallStats.totalPlayers}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Players</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallStats.activeTeams}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Teams</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallStats.totalSessions}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Training Sessions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallStats.averageAttendance}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Attendance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallStats.injuryRate}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Injury Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{overallStats.performanceScore}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Performance Score</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics */}
        <Tabs defaultValue="teams" className="space-y-6">
          <TabsList>
            <TabsTrigger value="teams">Team Performance</TabsTrigger>
            <TabsTrigger value="players">Player Analytics</TabsTrigger>
            <TabsTrigger value="training">Training Metrics</TabsTrigger>
            <TabsTrigger value="medical">Medical Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="teams" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Performance Overview</CardTitle>
                <CardDescription>Comprehensive team statistics and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamPerformance.map((team) => (
                    <div
                      key={team.team}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{team.team}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <span>{team.players} players</span>
                            <span>
                              {team.wins}W-{team.losses}L-{team.draws}D
                            </span>
                            <span>
                              {team.goalsFor}:{team.goalsAgainst} goals
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{team.attendance}%</p>
                          <p className="text-gray-500">Attendance</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{team.performance}</p>
                          <p className="text-gray-500">Performance</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {getTrendIcon(team.trend)}
                          <span className={`text-sm ${getTrendColor(team.trend)}`}>
                            {team.trend === "up" ? "Improving" : team.trend === "down" ? "Declining" : "Stable"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="players" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Highest performing players across all teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((player, index) => (
                    <div
                      key={player.name}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">#{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{player.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{player.team}</Badge>
                            <Badge variant="outline">{player.position}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{player.goals}</p>
                          <p className="text-gray-500">Goals</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{player.assists}</p>
                          <p className="text-gray-500">Assists</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{player.rating}</p>
                          <p className="text-gray-500">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-gray-900 dark:text-white">{player.attendance}%</p>
                          <p className="text-gray-500">Attendance</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Training Effectiveness Metrics</CardTitle>
                <CardDescription>Key performance indicators for training programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trainingMetrics.map((metric, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{metric.metric}</h3>
                        {getTrendIcon(metric.trend)}
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                      <p className={`text-sm ${getTrendColor(metric.trend)} mt-1`}>{metric.change} from last period</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Injury Analytics</CardTitle>
                  <CardDescription>Injury trends and prevention metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Charts Coming Soon</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Detailed injury analytics and trends will be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recovery Metrics</CardTitle>
                  <CardDescription>Player recovery and return-to-play statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Average Recovery Time</span>
                      <span className="font-medium">12 days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Successful Recoveries</span>
                      <span className="font-medium">94%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Re-injury Rate</span>
                      <span className="font-medium">3.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Prevention Effectiveness</span>
                      <span className="font-medium">87%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
