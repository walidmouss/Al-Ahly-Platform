"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { TrendingUp, TrendingDown, Target, Trophy, Activity, Star, Calendar, Clock } from "lucide-react"

export default function PlayerPerformancePage() {
  const seasonStats = {
    matches: 28,
    goals: 22,
    assists: 12,
    yellowCards: 3,
    redCards: 0,
    minutesPlayed: 2340,
    averageRating: 8.4,
    shotsOnTarget: 67,
    passAccuracy: 89.2,
    dribbleSuccess: 78.5,
  }

  const monthlyPerformance = [
    { month: "Aug", goals: 3, assists: 2, rating: 8.2, matches: 4 },
    { month: "Sep", goals: 4, assists: 1, rating: 8.5, matches: 5 },
    { month: "Oct", goals: 2, assists: 3, rating: 8.1, matches: 4 },
    { month: "Nov", goals: 5, assists: 2, rating: 8.8, matches: 4 },
    { month: "Dec", goals: 3, assists: 1, rating: 8.3, matches: 3 },
    { month: "Jan", goals: 5, assists: 3, rating: 9.1, matches: 4 },
  ]

  const skillsRadar = [
    { skill: "Pace", value: 92, maxValue: 100 },
    { skill: "Shooting", value: 94, maxValue: 100 },
    { skill: "Passing", value: 87, maxValue: 100 },
    { skill: "Dribbling", value: 96, maxValue: 100 },
    { skill: "Defending", value: 45, maxValue: 100 },
    { skill: "Physical", value: 85, maxValue: 100 },
  ]

  const recentMatches = [
    {
      date: "Jan 28, 2024",
      opponent: "Pyramids FC",
      competition: "Egyptian Premier League",
      result: "3-1 W",
      goals: 2,
      assists: 1,
      rating: 9.2,
      minutes: 90,
      keyStats: ["2 Goals", "1 Assist", "4 Shots on Target", "89% Pass Accuracy"],
    },
    {
      date: "Jan 21, 2024",
      opponent: "Al Masry",
      competition: "Egyptian Premier League",
      result: "2-0 W",
      goals: 1,
      assists: 0,
      rating: 8.5,
      minutes: 85,
      keyStats: ["1 Goal", "3 Shots on Target", "92% Pass Accuracy", "6 Dribbles"],
    },
    {
      date: "Jan 14, 2024",
      opponent: "Ismaily",
      competition: "Egyptian Premier League",
      result: "1-1 D",
      goals: 0,
      assists: 2,
      rating: 8.8,
      minutes: 90,
      keyStats: ["2 Assists", "5 Key Passes", "94% Pass Accuracy", "8 Dribbles"],
    },
    {
      date: "Jan 7, 2024",
      opponent: "El Gouna",
      competition: "Egyptian Premier League",
      result: "4-0 W",
      goals: 1,
      assists: 1,
      rating: 8.6,
      minutes: 75,
      keyStats: ["1 Goal", "1 Assist", "3 Shots on Target", "7 Dribbles"],
    },
  ]

  const achievements = [
    {
      title: "Top Scorer",
      description: "Egyptian Premier League 2023/24",
      date: "Current Season",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      title: "Player of the Month",
      description: "January 2024",
      date: "Jan 2024",
      icon: Star,
      color: "text-purple-500",
    },
    {
      title: "Hat-trick Hero",
      description: "vs Zamalek SC",
      date: "Dec 2023",
      icon: Target,
      color: "text-green-500",
    },
    {
      title: "100 Goals Milestone",
      description: "Al Ahly Career Goals",
      date: "Nov 2023",
      icon: Trophy,
      color: "text-red-500",
    },
  ]

  const comparisonData = [
    { metric: "Goals", player: 22, teamAvg: 8.5, leagueAvg: 6.2 },
    { metric: "Assists", player: 12, teamAvg: 5.2, leagueAvg: 4.1 },
    { metric: "Rating", player: 8.4, teamAvg: 7.2, leagueAvg: 6.8 },
    { metric: "Pass %", player: 89.2, teamAvg: 82.1, leagueAvg: 78.5 },
  ]

  const strengthsWeaknesses = {
    strengths: [
      { area: "Finishing", score: 94, description: "Exceptional goal-scoring ability in the box" },
      { area: "Dribbling", score: 96, description: "Outstanding 1v1 situations and ball control" },
      { area: "Pace", score: 92, description: "Excellent acceleration and top speed" },
      { area: "Movement", score: 91, description: "Great positioning and runs behind defense" },
    ],
    improvements: [
      { area: "Aerial Duels", score: 65, description: "Could improve heading accuracy and timing" },
      { area: "Defensive Work", score: 45, description: "Limited contribution in defensive phases" },
      { area: "Left Foot", score: 72, description: "Could develop weaker foot for more options" },
      { area: "Set Pieces", score: 78, description: "Room for improvement in free kicks" },
    ],
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Performance Analysis</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Detailed performance metrics and statistics for the 2023/24 season
            </p>
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Season: 2023/24</Badge>
            <Badge variant="outline">28 Matches Played</Badge>
          </div>
        </div>

        {/* Season Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{seasonStats.goals}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Goals</p>
              <div className="flex items-center justify-center mt-1">
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-xs text-green-600">+15%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{seasonStats.assists}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Assists</p>
              <div className="flex items-center justify-center mt-1">
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-xs text-green-600">+8%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{seasonStats.averageRating}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</p>
              <div className="flex items-center justify-center mt-1">
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-xs text-green-600">+0.3</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{seasonStats.passAccuracy}%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pass Accuracy</p>
              <div className="flex items-center justify-center mt-1">
                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-xs text-green-600">+2.1%</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{seasonStats.minutesPlayed}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Minutes</p>
              <div className="flex items-center justify-center mt-1">
                <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                <span className="text-xs text-red-600">-5%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="matches">Match History</TabsTrigger>
            <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance Trend</CardTitle>
                  <CardDescription>Goals, assists, and ratings over the season</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="goals" stroke="#ef4444" strokeWidth={2} name="Goals" />
                      <Line type="monotone" dataKey="assists" stroke="#3b82f6" strokeWidth={2} name="Assists" />
                      <Line type="monotone" dataKey="rating" stroke="#10b981" strokeWidth={2} name="Rating" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Strengths & Areas for Improvement */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analysis</CardTitle>
                  <CardDescription>Key strengths and areas for development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Key Strengths</h4>
                    <div className="space-y-3">
                      {strengthsWeaknesses.strengths.map((strength, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{strength.area}</span>
                            <span className="text-sm text-gray-600">{strength.score}/100</span>
                          </div>
                          <Progress value={strength.score} className="h-2" />
                          <p className="text-xs text-gray-500">{strength.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-3">Areas for Improvement</h4>
                    <div className="space-y-3">
                      {strengthsWeaknesses.improvements.map((improvement, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{improvement.area}</span>
                            <span className="text-sm text-gray-600">{improvement.score}/100</span>
                          </div>
                          <Progress value={improvement.score} className="h-2" />
                          <p className="text-xs text-gray-500">{improvement.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Match Performances</CardTitle>
                <CardDescription>Detailed breakdown of your last 4 matches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentMatches.map((match, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">vs {match.opponent}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <Badge variant="outline">{match.competition}</Badge>
                            <span>{match.date}</span>
                            <Badge
                              className={
                                match.result.includes("W")
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : match.result.includes("D")
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                    : "bg-red-100 text-red-800 hover:bg-red-100"
                              }
                            >
                              {match.result}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900 dark:text-white">{match.goals}</p>
                              <p className="text-xs text-gray-500">Goals</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900 dark:text-white">{match.assists}</p>
                              <p className="text-xs text-gray-500">Assists</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-900 dark:text-white">{match.rating}</p>
                              <p className="text-xs text-gray-500">Rating</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-end">{renderStars(match.rating)}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {match.keyStats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center p-2 bg-white dark:bg-gray-700 rounded">
                            <p className="text-xs text-gray-600 dark:text-gray-400">{stat}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {match.minutes} minutes played
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills Radar</CardTitle>
                  <CardDescription>Your abilities across different football skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={skillsRadar}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="skill" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Skills" dataKey="value" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detailed Skills Breakdown</CardTitle>
                  <CardDescription>Individual skill ratings and analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillsRadar.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.skill}</span>
                        <span className="text-sm text-gray-600">{skill.value}/100</span>
                      </div>
                      <Progress value={skill.value} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>
                          {skill.value >= 90
                            ? "Exceptional"
                            : skill.value >= 80
                              ? "Excellent"
                              : skill.value >= 70
                                ? "Good"
                                : skill.value >= 60
                                  ? "Average"
                                  : "Needs Improvement"}
                        </span>
                        <span>League Avg: {Math.floor(skill.value * 0.8)}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Comparison</CardTitle>
                <CardDescription>How you compare to team and league averages</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="player" fill="#ef4444" name="Your Performance" />
                    <Bar dataKey="teamAvg" fill="#3b82f6" name="Team Average" />
                    <Bar dataKey="leagueAvg" fill="#6b7280" name="League Average" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center`}
                      >
                        <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{achievement.description}</p>
                        <div className="flex items-center mt-2">
                          <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">{achievement.date}</span>
                        </div>
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
