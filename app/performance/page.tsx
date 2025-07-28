"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Trophy,
  Target,
  TrendingUp,
  TrendingDown,
  Star,
  BarChart3,
  Filter,
  Download,
  Calendar,
} from "lucide-react"

export default function PerformancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMetric, setSelectedMetric] = useState("overall")

  const performanceOverview = {
    totalAssessments: 234,
    averageScore: 87.3,
    topPerformer: "John Smith",
    improvementRate: 15.2,
  }

  const playerPerformance = [
    {
      id: 1,
      name: "John Smith",
      team: "Eagles",
      position: "Forward",
      avatar: "/placeholder.svg?height=40&width=40",
      overallScore: 92,
      technical: 94,
      tactical: 89,
      physical: 91,
      mental: 95,
      trend: "up",
      improvement: 8.5,
      lastAssessment: "2024-01-25",
      strengths: ["Ball Control", "Leadership", "Finishing"],
      weaknesses: ["Defensive Work", "Aerial Duels"],
    },
    {
      id: 2,
      name: "Emma Wilson",
      team: "Sharks",
      position: "Goalkeeper",
      avatar: "/placeholder.svg?height=40&width=40",
      overallScore: 90,
      technical: 92,
      tactical: 88,
      physical: 89,
      mental: 93,
      trend: "up",
      improvement: 6.2,
      lastAssessment: "2024-01-24",
      strengths: ["Shot Stopping", "Distribution", "Communication"],
      weaknesses: ["Footwork", "Cross Handling"],
    },
    {
      id: 3,
      name: "Mike Johnson Jr.",
      team: "Eagles",
      position: "Midfielder",
      avatar: "/placeholder.svg?height=40&width=40",
      overallScore: 88,
      technical: 90,
      tactical: 92,
      physical: 85,
      mental: 87,
      trend: "up",
      improvement: 4.8,
      lastAssessment: "2024-01-23",
      strengths: ["Passing", "Vision", "Work Rate"],
      weaknesses: ["Pace", "Shooting"],
    },
    {
      id: 4,
      name: "Alex Davis",
      team: "Eagles",
      position: "Forward",
      avatar: "/placeholder.svg?height=40&width=40",
      overallScore: 82,
      technical: 85,
      tactical: 78,
      physical: 84,
      mental: 81,
      trend: "down",
      improvement: -2.1,
      lastAssessment: "2024-01-20",
      strengths: ["Speed", "Dribbling"],
      weaknesses: ["Decision Making", "Consistency", "Teamwork"],
    },
    {
      id: 5,
      name: "Lisa Anderson",
      team: "Hawks",
      position: "Midfielder",
      avatar: "/placeholder.svg?height=40&width=40",
      overallScore: 86,
      technical: 88,
      tactical: 87,
      physical: 83,
      mental: 86,
      trend: "up",
      improvement: 7.3,
      lastAssessment: "2024-01-22",
      strengths: ["Tackling", "Passing", "Stamina"],
      weaknesses: ["Shooting", "Heading"],
    },
  ]

  const teamComparison = [
    { team: "Eagles", averageScore: 89.2, players: 25, trend: "up" },
    { team: "Sharks", averageScore: 87.8, players: 22, trend: "up" },
    { team: "Lions", averageScore: 85.4, players: 20, trend: "same" },
    { team: "Hawks", averageScore: 84.1, players: 19, trend: "up" },
    { team: "Panthers", averageScore: 81.7, players: 23, trend: "down" },
    { team: "Wolves", averageScore: 80.3, players: 21, trend: "down" },
  ]

  const performanceCategories = [
    { category: "Technical Skills", average: 86.5, change: "+3.2%" },
    { category: "Tactical Awareness", average: 84.8, change: "+1.8%" },
    { category: "Physical Fitness", average: 88.1, change: "+5.1%" },
    { category: "Mental Strength", average: 85.9, change: "+2.4%" },
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

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
    if (score >= 80) return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
    if (score >= 70) return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Average</Badge>
    return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Needs Improvement</Badge>
  }

  const filteredPlayers = playerPerformance.filter(
    (player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Performance</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track and analyze player performance across all metrics
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Target className="w-4 h-4 mr-2" />
              New Assessment
            </Button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{performanceOverview.totalAssessments}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Assessments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{performanceOverview.averageScore}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Score</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-lg font-bold text-gray-900 dark:text-white">{performanceOverview.topPerformer}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Top Performer</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                +{performanceOverview.improvementRate}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Improvement Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="individual" className="space-y-6">
          <TabsList>
            <TabsTrigger value="individual">Individual Performance</TabsTrigger>
            <TabsTrigger value="team">Team Comparison</TabsTrigger>
            <TabsTrigger value="categories">Performance Categories</TabsTrigger>
            <TabsTrigger value="trends">Trends & Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="individual" className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Individual Performance List */}
            <div className="space-y-4">
              {filteredPlayers.map((player) => (
                <Card key={player.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={player.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {player.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{player.name}</h3>
                            <Badge variant="outline">{player.team}</Badge>
                            <Badge variant="outline">{player.position}</Badge>
                            {getScoreBadge(player.overallScore)}
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Technical</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={player.technical} className="h-2 flex-1" />
                                <span className={`text-sm font-medium ${getScoreColor(player.technical)}`}>
                                  {player.technical}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Tactical</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={player.tactical} className="h-2 flex-1" />
                                <span className={`text-sm font-medium ${getScoreColor(player.tactical)}`}>
                                  {player.tactical}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Physical</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={player.physical} className="h-2 flex-1" />
                                <span className={`text-sm font-medium ${getScoreColor(player.physical)}`}>
                                  {player.physical}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">Mental</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={player.mental} className="h-2 flex-1" />
                                <span className={`text-sm font-medium ${getScoreColor(player.mental)}`}>
                                  {player.mental}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Strengths</p>
                              <div className="flex flex-wrap gap-1">
                                {player.strengths.map((strength, index) => (
                                  <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                                    {strength}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Areas to Improve</p>
                              <div className="flex flex-wrap gap-1">
                                {player.weaknesses.map((weakness, index) => (
                                  <Badge
                                    key={index}
                                    className="bg-orange-100 text-orange-800 hover:bg-orange-100 text-xs"
                                  >
                                    {weakness}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`text-2xl font-bold ${getScoreColor(player.overallScore)}`}>
                            {player.overallScore}
                          </span>
                          {getTrendIcon(player.trend)}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Overall Score</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-400">{player.lastAssessment}</span>
                        </div>
                        <p className={`text-sm mt-1 ${player.improvement > 0 ? "text-green-600" : "text-red-600"}`}>
                          {player.improvement > 0 ? "+" : ""}
                          {player.improvement}% change
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Performance Comparison</CardTitle>
                <CardDescription>Average performance scores across all teams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamComparison.map((team, index) => (
                    <div
                      key={team.team}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">#{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{team.team}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{team.players} players</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className={`text-xl font-bold ${getScoreColor(team.averageScore)}`}>{team.averageScore}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Average Score</p>
                        </div>
                        {getTrendIcon(team.trend)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{category.average}</span>
                      <span className="text-green-600 font-medium">{category.change}</span>
                    </div>
                    <Progress value={category.average} className="h-3" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">League average performance</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Performance changes over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Charts Coming Soon</h3>
                    <p className="text-gray-600 dark:text-gray-400">Performance trend charts will be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Improvement Analytics</CardTitle>
                  <CardDescription>Player development insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Players Improving</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Average Improvement</span>
                      <span className="font-medium">+5.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Top Improvement Area</span>
                      <span className="font-medium">Physical Fitness</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Focus Area</span>
                      <span className="font-medium">Tactical Awareness</span>
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
