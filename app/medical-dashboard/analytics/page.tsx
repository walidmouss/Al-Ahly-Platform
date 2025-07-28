"use client"

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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Activity, TrendingUp, TrendingDown, CheckCircle } from "lucide-react"

const injuryTrends = [
  { month: "Jan", injuries: 12, recoveries: 8 },
  { month: "Feb", injuries: 8, recoveries: 15 },
  { month: "Mar", injuries: 15, recoveries: 10 },
  { month: "Apr", injuries: 6, recoveries: 18 },
  { month: "May", injuries: 10, recoveries: 12 },
  { month: "Jun", injuries: 4, recoveries: 14 },
]

const injuryTypes = [
  { name: "Muscle Strain", value: 35, color: "#dc2626" },
  { name: "Ligament", value: 25, color: "#ea580c" },
  { name: "Joint", value: 20, color: "#ca8a04" },
  { name: "Bone", value: 12, color: "#16a34a" },
  { name: "Other", value: 8, color: "#2563eb" },
]

const fitnessMetrics = [
  { metric: "VO2 Max", team: 58.2, league: 55.8, trend: "up" },
  { metric: "Body Fat %", team: 8.5, league: 9.2, trend: "down" },
  { metric: "Muscle Mass", team: 42.8, league: 41.5, trend: "up" },
  { metric: "Recovery Rate", team: 85, league: 78, trend: "up" },
]

export default function MedicalAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Medical Analytics</h1>
          <p className="text-muted-foreground">Comprehensive health and performance insights</p>
        </div>
        <Badge variant="outline" className="border-red-200 text-red-600">
          Last Updated: Today
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Activity className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+2</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Recovery Time</CardTitle>
            <TrendingDown className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5</div>
            <p className="text-xs text-muted-foreground">
              days <span className="text-green-600">-2.1</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Fitness</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">players match ready</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="injuries" className="space-y-4">
        <TabsList>
          <TabsTrigger value="injuries">Injury Analytics</TabsTrigger>
          <TabsTrigger value="fitness">Fitness Metrics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="injuries" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Injury Trends</CardTitle>
                <CardDescription>Monthly injury and recovery statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={injuryTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="injuries" stroke="#dc2626" strokeWidth={2} />
                    <Line type="monotone" dataKey="recoveries" stroke="#16a34a" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Injury Types Distribution</CardTitle>
                <CardDescription>Common injury categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={injuryTypes}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {injuryTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>High-Risk Players</CardTitle>
              <CardDescription>Players requiring special attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Mohamed Salah", risk: "High", reason: "Previous hamstring injury", days: 45 },
                  { name: "Ahmed Hassan", risk: "Medium", reason: "Fatigue levels elevated", days: 12 },
                  { name: "Omar Kamal", risk: "Medium", reason: "Minor ankle concern", days: 8 },
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-semibold">
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.reason}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={player.risk === "High" ? "destructive" : "secondary"}>{player.risk} Risk</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{player.days} days monitoring</p>
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
                <CardTitle>Team vs League Average</CardTitle>
                <CardDescription>Fitness metrics comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fitnessMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{metric.metric}</span>
                        <div className="flex items-center space-x-2">
                          {metric.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          )}
                          <span className="text-sm">{metric.team}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-1">Al Ahly</div>
                          <Progress
                            value={(metric.team / Math.max(metric.team, metric.league)) * 100}
                            className="h-2"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-1">League Avg</div>
                          <Progress
                            value={(metric.league / Math.max(metric.team, metric.league)) * 100}
                            className="h-2 opacity-60"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fitness Distribution</CardTitle>
                <CardDescription>Current squad fitness levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Excellent (90-100%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <span className="text-sm font-medium">18 players</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Good (80-89%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <span className="text-sm font-medium">7 players</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fair (70-79%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                      <span className="text-sm font-medium">3 players</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Poor (&lt;70%)</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-red-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                      </div>
                      <span className="text-sm font-medium">1 player</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Correlation</CardTitle>
              <CardDescription>Relationship between fitness and match performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={[
                    { month: "Jan", fitness: 88, performance: 7.2 },
                    { month: "Feb", fitness: 90, performance: 7.8 },
                    { month: "Mar", fitness: 85, performance: 6.9 },
                    { month: "Apr", fitness: 92, performance: 8.1 },
                    { month: "May", fitness: 89, performance: 7.5 },
                    { month: "Jun", fitness: 94, performance: 8.4 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="fitness" fill="#dc2626" name="Fitness %" />
                  <Bar yAxisId="right" dataKey="performance" fill="#16a34a" name="Performance Rating" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
