"use client"

import { PlayerDashboardLayout } from "@/components/player-dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, Trophy, Target, AlertCircle, Star, Activity, Zap } from "lucide-react"

export default function PlayerFixturesPage() {
  const upcomingMatches = [
    {
      id: 1,
      date: "Feb 10, 2024",
      time: "8:00 PM",
      opponent: "Zamalek SC",
      opponentLogo: "/placeholder.svg?height=40&width=40",
      competition: "Egyptian Premier League",
      venue: "Cairo International Stadium",
      type: "home",
      importance: "high",
      status: "confirmed",
      ticketsSold: "65,000",
      capacity: "75,000",
      weather: "Clear, 22°C",
      referee: "Mohamed El-Hanafi",
      lastMeeting: "Al Ahly 2-1 Zamalek",
      formGuide: ["W", "W", "D", "W", "W"],
      opponentForm: ["L", "W", "D", "L", "W"],
      keyStats: {
        goalsFor: 45,
        goalsAgainst: 12,
        cleanSheets: 8,
        wins: 12,
        draws: 3,
        losses: 1,
      },
    },
    {
      id: 2,
      date: "Feb 17, 2024",
      time: "7:00 PM",
      opponent: "Pyramids FC",
      opponentLogo: "/placeholder.svg?height=40&width=40",
      competition: "Egyptian Premier League",
      venue: "30 June Stadium",
      type: "away",
      importance: "medium",
      status: "confirmed",
      ticketsSold: "28,000",
      capacity: "30,000",
      weather: "Partly cloudy, 20°C",
      referee: "Ahmed Shoukry",
      lastMeeting: "Pyramids 0-3 Al Ahly",
      formGuide: ["W", "W", "D", "W", "W"],
      opponentForm: ["W", "L", "W", "D", "L"],
      keyStats: {
        goalsFor: 45,
        goalsAgainst: 12,
        cleanSheets: 8,
        wins: 12,
        draws: 3,
        losses: 1,
      },
    },
    {
      id: 3,
      date: "Feb 24, 2024",
      time: "6:00 PM",
      opponent: "Al Masry",
      opponentLogo: "/placeholder.svg?height=40&width=40",
      competition: "Egyptian Premier League",
      venue: "Al Ahly Stadium",
      type: "home",
      importance: "medium",
      status: "confirmed",
      ticketsSold: "42,000",
      capacity: "45,000",
      weather: "Sunny, 25°C",
      referee: "Mahmoud El-Banna",
      lastMeeting: "Al Ahly 4-0 Al Masry",
      formGuide: ["W", "W", "D", "W", "W"],
      opponentForm: ["L", "L", "D", "W", "L"],
      keyStats: {
        goalsFor: 45,
        goalsAgainst: 12,
        cleanSheets: 8,
        wins: 12,
        draws: 3,
        losses: 1,
      },
    },
    {
      id: 4,
      date: "Mar 3, 2024",
      time: "8:30 PM",
      opponent: "Ismaily SC",
      opponentLogo: "/placeholder.svg?height=40&width=40",
      competition: "Egyptian Premier League",
      venue: "Ismailia Stadium",
      type: "away",
      importance: "medium",
      status: "confirmed",
      ticketsSold: "18,000",
      capacity: "20,000",
      weather: "Clear, 19°C",
      referee: "Omar El-Ali",
      lastMeeting: "Ismaily 1-2 Al Ahly",
      formGuide: ["W", "W", "D", "W", "W"],
      opponentForm: ["D", "L", "W", "D", "L"],
      keyStats: {
        goalsFor: 45,
        goalsAgainst: 12,
        cleanSheets: 8,
        wins: 12,
        draws: 3,
        losses: 1,
      },
    },
  ]

  const recentResults = [
    {
      id: 1,
      date: "Jan 28, 2024",
      opponent: "Pyramids FC",
      score: "3-1",
      result: "W",
      competition: "Egyptian Premier League",
      venue: "Al Ahly Stadium",
      type: "home",
      playerStats: {
        goals: 2,
        assists: 1,
        rating: 9.2,
        minutes: 90,
      },
      highlights: ["2 Goals", "1 Assist", "Man of the Match"],
    },
    {
      id: 2,
      date: "Jan 21, 2024",
      opponent: "Al Masry",
      score: "2-0",
      result: "W",
      competition: "Egyptian Premier League",
      venue: "Al Ahly Stadium",
      type: "home",
      playerStats: {
        goals: 1,
        assists: 0,
        rating: 8.5,
        minutes: 85,
      },
      highlights: ["1 Goal", "4 Shots on Target"],
    },
    {
      id: 3,
      date: "Jan 14, 2024",
      opponent: "Ismaily",
      score: "1-1",
      result: "D",
      competition: "Egyptian Premier League",
      venue: "Ismailia Stadium",
      type: "away",
      playerStats: {
        goals: 0,
        assists: 2,
        rating: 8.8,
        minutes: 90,
      },
      highlights: ["2 Assists", "5 Key Passes"],
    },
    {
      id: 4,
      date: "Jan 7, 2024",
      opponent: "El Gouna",
      score: "4-0",
      result: "W",
      competition: "Egyptian Premier League",
      venue: "Al Ahly Stadium",
      type: "home",
      playerStats: {
        goals: 1,
        assists: 1,
        rating: 8.6,
        minutes: 75,
      },
      highlights: ["1 Goal", "1 Assist"],
    },
  ]

  const seasonStats = {
    matchesPlayed: 16,
    wins: 12,
    draws: 3,
    losses: 1,
    goalsScored: 22,
    assists: 12,
    averageRating: 8.4,
    minutesPlayed: 1440,
    cleanSheets: 8,
    yellowCards: 3,
    redCards: 0,
  }

  const competitionFixtures = [
    {
      competition: "Egyptian Premier League",
      matches: 8,
      nextMatch: "Feb 10 vs Zamalek SC",
      position: "1st",
      points: 39,
    },
    {
      competition: "CAF Champions League",
      matches: 4,
      nextMatch: "Mar 15 vs Mamelodi Sundowns",
      position: "Group Stage",
      points: 9,
    },
    {
      competition: "Egypt Cup",
      matches: 2,
      nextMatch: "Mar 22 vs ENPPI",
      position: "Quarter Finals",
      points: null,
    },
  ]

  const getResultBadge = (result: string) => {
    switch (result) {
      case "W":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Win</Badge>
      case "D":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Draw</Badge>
      case "L":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Loss</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case "high":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <AlertCircle className="w-3 h-3 mr-1" />
            High Priority
          </Badge>
        )
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium Priority</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low Priority</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const getFormBadge = (form: string) => {
    switch (form) {
      case "W":
        return (
          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            W
          </div>
        )
      case "D":
        return (
          <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            D
          </div>
        )
      case "L":
        return (
          <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            L
          </div>
        )
      default:
        return (
          <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            ?
          </div>
        )
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
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Fixtures & Results</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Your upcoming matches and recent performance history
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Add to Calendar
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Trophy className="w-4 h-4 mr-2" />
              Season Stats
            </Button>
          </div>
        </div>

        {/* Season Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Activity className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{seasonStats.matchesPlayed}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Matches</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{seasonStats.wins}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Wins</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{seasonStats.goalsScored}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Goals</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{seasonStats.assists}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Assists</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{seasonStats.averageRating}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Avg Rating</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-bold text-gray-900 dark:text-white">{seasonStats.minutesPlayed}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Minutes</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
            <TabsTrigger value="results">Recent Results</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="space-y-6">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=40&width=40&text=Al+Ahly"
                            alt="Al Ahly"
                            className="w-10 h-10"
                          />
                        </div>
                        <div className="text-2xl font-bold text-gray-600">VS</div>
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <img
                            src={match.opponentLogo || "/placeholder.svg"}
                            alt={match.opponent}
                            className="w-10 h-10"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">vs {match.opponent}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{match.competition}</Badge>
                            <Badge
                              className={
                                match.type === "home"
                                  ? "bg-red-100 text-red-800 hover:bg-red-100"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                              }
                            >
                              {match.type === "home" ? "Home" : "Away"}
                            </Badge>
                            {getImportanceBadge(match.importance)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{match.date}</p>
                        <p className="text-lg text-gray-600 dark:text-gray-400">{match.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Match Details</h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{match.venue}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            <span>
                              {match.ticketsSold} / {match.capacity} tickets sold
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Activity className="w-4 h-4 mr-2" />
                            <span>Referee: {match.referee}</span>
                          </div>
                          <div className="flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            <span>Weather: {match.weather}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Recent Form</h4>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Al Ahly (Last 5)</p>
                            <div className="flex space-x-1">
                              {match.formGuide.map((result, index) => (
                                <div key={index}>{getFormBadge(result)}</div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{match.opponent} (Last 5)</p>
                            <div className="flex space-x-1">
                              {match.opponentForm.map((result, index) => (
                                <div key={index}>{getFormBadge(result)}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Season Stats</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <p className="font-bold text-gray-900 dark:text-white">{match.keyStats.wins}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Wins</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <p className="font-bold text-gray-900 dark:text-white">{match.keyStats.goalsFor}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Goals</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <p className="font-bold text-gray-900 dark:text-white">{match.keyStats.cleanSheets}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Clean Sheets</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <p className="font-bold text-gray-900 dark:text-white">{match.keyStats.goalsAgainst}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">Goals Against</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Last meeting: {match.lastMeeting}</div>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                      >
                        Match Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Match Results</CardTitle>
                <CardDescription>Your performance in the last 4 matches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentResults.map((match) => (
                    <div key={match.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                            <img
                              src="/placeholder.svg?height=30&width=30&text=Al+Ahly"
                              alt="Al Ahly"
                              className="w-8 h-8"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">vs {match.opponent}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <Badge variant="outline">{match.competition}</Badge>
                              <Badge
                                className={
                                  match.type === "home"
                                    ? "bg-red-100 text-red-800 hover:bg-red-100"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                }
                              >
                                {match.type === "home" ? "Home" : "Away"}
                              </Badge>
                              <span>{match.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">{match.score}</span>
                            {getResultBadge(match.result)}
                          </div>
                          <div className="flex items-center justify-end">{renderStars(match.playerStats.rating)}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                        <div className="text-center p-2 bg-white dark:bg-gray-700 rounded">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{match.playerStats.goals}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Goals</p>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-gray-700 rounded">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{match.playerStats.assists}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Assists</p>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-gray-700 rounded">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{match.playerStats.rating}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Rating</p>
                        </div>
                        <div className="text-center p-2 bg-white dark:bg-gray-700 rounded">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">
                            {match.playerStats.minutes}'
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Minutes</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Match Highlights</h4>
                        <div className="flex flex-wrap gap-1">
                          {match.highlights.map((highlight, index) => (
                            <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">
                              {highlight}
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

          <TabsContent value="competitions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitionFixtures.map((competition, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{competition.competition}</CardTitle>
                    <CardDescription>Current season progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Position</span>
                        <span className="font-medium text-gray-900 dark:text-white">{competition.position}</span>
                      </div>
                      {competition.points && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Points</span>
                          <span className="font-medium text-gray-900 dark:text-white">{competition.points}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Matches Remaining</span>
                        <span className="font-medium text-gray-900 dark:text-white">{competition.matches}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Next Match</p>
                      <p className="font-medium text-gray-900 dark:text-white">{competition.nextMatch}</p>
                    </div>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      View Fixtures
                    </Button>
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
