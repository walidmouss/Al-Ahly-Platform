"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Target,
  Activity,
  Star,
  Clock,
  Users,
  BarChart3,
  LineChart,
  Trophy,
} from "lucide-react"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

export default function PlayerReportsPage() {
  const monthlyReports = [
    {
      id: 1,
      title: "January 2024 Performance Report",
      date: "Feb 1, 2024",
      type: "monthly",
      status: "completed",
      summary: "Outstanding month with 5 goals and 3 assists across 4 matches",
      keyMetrics: {
        matches: 4,
        goals: 5,
        assists: 3,
        rating: 9.1,
        minutes: 360,
      },
      highlights: [
        "Top scorer in Egyptian Premier League for January",
        "Player of the Month nomination",
        "100% penalty conversion rate",
        "Improved passing accuracy to 91%",
      ],
      areasForImprovement: [
        "Defensive contribution in midfield",
        "Left foot shooting accuracy",
        "Aerial duel success rate",
      ],
    },
    {
      id: 2,
      title: "December 2023 Performance Report",
      date: "Jan 1, 2024",
      type: "monthly",
      status: "completed",
      summary: "Solid performance with consistent goal-scoring and improved fitness levels",
      keyMetrics: {
        matches: 3,
        goals: 3,
        assists: 1,
        rating: 8.3,
        minutes: 270,
      },
      highlights: [
        "Hat-trick against Zamalek SC",
        "Improved sprint speed by 2%",
        "Zero injuries throughout the month",
        "Enhanced tactical understanding",
      ],
      areasForImprovement: [
        "Set piece delivery consistency",
        "Communication with midfield",
        "Recovery time between matches",
      ],
    },
  ]

  const seasonReports = [
    {
      id: 1,
      title: "2023/24 Mid-Season Report",
      date: "Jan 15, 2024",
      type: "season",
      status: "completed",
      summary: "Exceptional first half of the season with league-leading statistics",
      keyMetrics: {
        matches: 16,
        goals: 22,
        assists: 12,
        rating: 8.4,
        minutes: 1440,
      },
      achievements: [
        "Top scorer in Egyptian Premier League",
        "CAF Champions League top scorer",
        "3 Player of the Month awards",
        "Team captain for 8 matches",
      ],
      seasonTargets: {
        goals: { target: 30, current: 22, progress: 73 },
        assists: { target: 15, current: 12, progress: 80 },
        rating: { target: 8.5, current: 8.4, progress: 99 },
        trophies: { target: 2, current: 0, progress: 0 },
      },
    },
  ]

  const coachingReports = [
    {
      id: 1,
      title: "Technical Analysis - January 2024",
      author: "Ahmed Hassan - Head Coach",
      date: "Feb 2, 2024",
      type: "coaching",
      status: "new",
      focus: "Technical Skills Development",
      rating: 9.2,
      summary: "Exceptional technical development with notable improvements in finishing and ball control",
      strengths: [
        "Outstanding finishing ability in the penalty area",
        "Excellent first touch under pressure",
        "Improved decision-making in final third",
        "Strong leadership qualities on the pitch",
      ],
      improvements: [
        "Work on weaker foot development",
        "Improve aerial duel success rate",
        "Enhance defensive work rate",
        "Better communication with defensive line",
      ],
      recommendations: [
        "Additional left foot shooting practice sessions",
        "Heading technique workshops with specialist coach",
        "Tactical awareness sessions focusing on defensive positioning",
        "Leadership development program",
      ],
    },
    {
      id: 2,
      title: "Fitness Assessment - January 2024",
      author: "Fitness Coach Team",
      date: "Jan 30, 2024",
      type: "fitness",
      status: "completed",
      focus: "Physical Conditioning",
      rating: 8.8,
      summary: "Excellent fitness levels maintained throughout intensive match schedule",
      strengths: [
        "Outstanding cardiovascular endurance",
        "Excellent sprint speed and acceleration",
        "Good injury prevention awareness",
        "Consistent training attendance",
      ],
      improvements: [
        "Upper body strength development",
        "Flexibility in hip flexors",
        "Recovery time optimization",
        "Nutrition timing around matches",
      ],
      recommendations: [
        "Increase gym sessions focusing on upper body",
        "Daily stretching routine implementation",
        "Recovery protocol adjustment",
        "Nutritionist consultation for match day preparation",
      ],
    },
  ]

  const performanceData = [
    { month: "Aug", goals: 3, assists: 2, rating: 8.2 },
    { month: "Sep", goals: 4, assists: 1, rating: 8.5 },
    { month: "Oct", goals: 2, assists: 3, rating: 8.1 },
    { month: "Nov", goals: 5, assists: 2, rating: 8.8 },
    { month: "Dec", goals: 3, assists: 1, rating: 8.3 },
    { month: "Jan", goals: 5, assists: 3, rating: 9.1 },
  ]

  const skillDistribution = [
    { name: "Shooting", value: 94, color: "#ef4444" },
    { name: "Dribbling", value: 96, color: "#3b82f6" },
    { name: "Passing", value: 87, color: "#10b981" },
    { name: "Defending", value: 45, color: "#f59e0b" },
    { name: "Physical", value: 85, color: "#8b5cf6" },
    { name: "Mental", value: 92, color: "#ec4899" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "new":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">New</Badge>
      case "in_progress":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Progress</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "monthly":
        return <Badge variant="outline">Monthly Report</Badge>
      case "season":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Season Report</Badge>
      case "coaching":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Coaching Report</Badge>
      case "fitness":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Fitness Report</Badge>
      default:
        return <Badge variant="secondary">Report</Badge>
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Performance Reports</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Detailed analysis of your performance and development
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LineChart className="w-5 h-5 text-blue-500 mr-2" />
                Performance Trend
              </CardTitle>
              <CardDescription>Your monthly performance over the season</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="goals" stroke="#ef4444" strokeWidth={2} name="Goals" />
                  <Line type="monotone" dataKey="assists" stroke="#3b82f6" strokeWidth={2} name="Assists" />
                  <Line type="monotone" dataKey="rating" stroke="#10b981" strokeWidth={2} name="Rating" />
                </RechartsLineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 text-green-500 mr-2" />
                Skill Distribution
              </CardTitle>
              <CardDescription>Your current skill ratings across different areas</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="monthly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="monthly">Monthly Reports</TabsTrigger>
            <TabsTrigger value="season">Season Reports</TabsTrigger>
            <TabsTrigger value="coaching">Coaching Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="space-y-6">
            <div className="space-y-6">
              {monthlyReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{report.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          {getTypeBadge(report.type)}
                          {getStatusBadge(report.status)}
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{report.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400">{report.summary}</p>

                    {/* Key Metrics */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Activity className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{report.keyMetrics.matches}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Matches</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Target className="w-6 h-6 text-red-500 mx-auto mb-1" />
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{report.keyMetrics.goals}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Goals</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Users className="w-6 h-6 text-green-500 mx-auto mb-1" />
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{report.keyMetrics.assists}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Assists</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Star className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{report.keyMetrics.rating}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Avg Rating</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Clock className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{report.keyMetrics.minutes}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Minutes</p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                        Key Highlights
                      </h4>
                      <div className="space-y-2">
                        {report.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Areas for Improvement */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <TrendingDown className="w-4 h-4 text-orange-500 mr-2" />
                        Areas for Improvement
                      </h4>
                      <div className="space-y-2">
                        {report.areasForImprovement.map((area, index) => (
                          <div key={index} className="flex items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="season" className="space-y-6">
            <div className="space-y-6">
              {seasonReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{report.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          {getTypeBadge(report.type)}
                          {getStatusBadge(report.status)}
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{report.date}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400">{report.summary}</p>

                    {/* Season Targets Progress */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Season Targets Progress</h4>
                      <div className="space-y-4">
                        {Object.entries(report.seasonTargets).map(([key, target]) => (
                          <div key={key} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium capitalize">{key}</span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {target.current} / {target.target}
                              </span>
                            </div>
                            <Progress value={target.progress} className="h-2" />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>{target.progress}% Complete</span>
                              <span>
                                {target.progress >= 100
                                  ? "Target Achieved!"
                                  : target.progress >= 80
                                    ? "Excellent Progress"
                                    : target.progress >= 60
                                      ? "Good Progress"
                                      : "Needs Improvement"}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Season Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
                        Season Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {report.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mr-3">
                              <Trophy className="w-4 h-4 text-yellow-600" />
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coaching" className="space-y-6">
            <div className="space-y-6">
              {coachingReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{report.title}</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">By {report.author}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          {getTypeBadge(report.type)}
                          {getStatusBadge(report.status)}
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{report.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end mb-2">{renderStars(report.rating)}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Overall Rating: {report.rating}/10</p>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-2">Focus: {report.focus}</Badge>
                      <p className="text-gray-600 dark:text-gray-400">{report.summary}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Strengths */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                          Strengths
                        </h4>
                        <div className="space-y-2">
                          {report.strengths.map((strength, index) => (
                            <div key={index} className="flex items-start p-2 bg-green-50 dark:bg-green-900/20 rounded">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Areas for Improvement */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Target className="w-4 h-4 text-orange-500 mr-2" />
                          Areas for Improvement
                        </h4>
                        <div className="space-y-2">
                          {report.improvements.map((improvement, index) => (
                            <div
                              key={index}
                              className="flex items-start p-2 bg-orange-50 dark:bg-orange-900/20 rounded"
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{improvement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <FileText className="w-4 h-4 text-blue-500 mr-2" />
                        Coach Recommendations
                      </h4>
                      <div className="space-y-2">
                        {report.recommendations.map((recommendation, index) => (
                          <div key={index} className="flex items-start p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{recommendation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PlayerDashboardLayout>
  )
}
