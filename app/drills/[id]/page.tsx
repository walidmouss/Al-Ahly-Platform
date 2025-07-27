"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Play,
  Clock,
  Users,
  Target,
  Edit,
  Share2,
  Star,
  Download,
  Heart,
  MessageSquare,
  Calendar,
  Plus,
} from "lucide-react"
import Link from "next/link"

export default function DrillDetailPage() {
  const drill = {
    id: 1,
    name: "Ball Control Under Pressure",
    type: "Technical",
    sport: "Football",
    difficulty: "Medium",
    duration: "15 mins",
    participants: "8-12 players",
    description:
      "This drill focuses on improving ball control skills while under defensive pressure from opponents. Players will learn to maintain possession in tight spaces and make quick decisions under pressure.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    videoUrl: "https://example.com/drill1",
    createdBy: "Mike Johnson",
    createdDate: "2024-01-15",
    rating: 4.5,
    usageCount: 23,
    likes: 45,
    tags: ["ball-control", "pressure", "technical"],
    equipment: ["10-15 cones", "4-6 footballs", "Bibs for defenders", "Stopwatch"],
    instructions: [
      "Set up a 20x20 yard square with cones",
      "Place 6-8 players inside the square with balls",
      "2-4 players act as defenders without balls",
      "Players with balls must keep possession for 30 seconds",
      "Defenders try to win the ball and kick it out",
      "Rotate roles every 2 minutes",
    ],
    variations: [
      "Reduce the size of the square to increase difficulty",
      "Add more defenders to create more pressure",
      "Limit touches (2-touch, 1-touch)",
      "Add specific skills (only use weak foot)",
    ],
    coachingPoints: [
      "Keep the ball close to your body",
      "Use your body to shield the ball",
      "Keep your head up to see defenders",
      "Make quick decisions",
      "Use both feet effectively",
    ],
  }

  const comments = [
    {
      id: 1,
      author: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-20",
      rating: 5,
      comment:
        "Excellent drill! My players really improved their ball control after using this regularly. The pressure element makes it very realistic.",
    },
    {
      id: 2,
      author: "David Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-18",
      rating: 4,
      comment:
        "Great drill for technical development. I modified it slightly by adding time pressure and it worked even better.",
    },
    {
      id: 3,
      author: "Emma Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2024-01-16",
      rating: 5,
      comment: "Perfect for youth players. The competitive element keeps them engaged throughout the session.",
    },
  ]

  const relatedDrills = [
    {
      id: 2,
      name: "Passing Accuracy Drill",
      type: "Technical",
      difficulty: "Easy",
      duration: "20 mins",
      rating: 4.8,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      name: "1v1 Attacking",
      type: "Technical",
      difficulty: "Medium",
      duration: "18 mins",
      rating: 4.3,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 4,
      name: "Quick Feet Agility",
      type: "Conditioning",
      difficulty: "Hard",
      duration: "12 mins",
      rating: 4.1,
      thumbnail: "/placeholder.svg?height=150&width=200",
    },
  ]

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Easy</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
      case "Hard":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Hard</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/drills">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{drill.name}</h1>
              <div className="flex items-center space-x-4 mt-1">
                <Badge variant="outline">{drill.sport}</Badge>
                <Badge variant="outline">{drill.type}</Badge>
                {getDifficultyBadge(drill.difficulty)}
                <div className="flex items-center">
                  {renderStars(drill.rating)}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    {drill.rating} ({drill.usageCount} uses)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Heart className="w-4 h-4 mr-2" />
              {drill.likes}
            </Button>
            <Button variant="outline">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>

        {/* Video/Image Section */}
        <Card>
          <CardContent className="p-0">
            <div className="relative">
              <img
                src={drill.thumbnail || "/placeholder.svg"}
                alt={drill.name}
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-t-lg">
                <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                  <Play className="w-6 h-6 mr-2" />
                  Watch Video
                </Button>
              </div>
              <div className="absolute top-4 right-4">
                <Button variant="ghost" size="icon" className="bg-black/50 text-white hover:bg-black/70">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Duration</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{drill.duration}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Players</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{drill.participants}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Difficulty</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">{drill.difficulty}</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
            <TabsTrigger value="variations">Variations</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">{drill.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Equipment Needed</h4>
                      <ul className="space-y-1">
                        {drill.equipment.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-gray-600 dark:text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Coaching Points</h4>
                      <ul className="space-y-1">
                        {drill.coachingPoints.map((point, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 dark:text-gray-400">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Drill Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40&query=${drill.createdBy.replace(" ", "-").toLowerCase()}`}
                        />
                        <AvatarFallback>
                          {drill.createdBy
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{drill.createdBy}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Created {drill.createdDate}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Times Used</span>
                        <span className="text-sm font-medium">{drill.usageCount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Likes</span>
                        <span className="text-sm font-medium">{drill.likes}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Rating</span>
                        <div className="flex items-center">
                          {renderStars(drill.rating)}
                          <span className="text-sm font-medium ml-1">{drill.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {drill.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Session
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="instructions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Instructions</CardTitle>
                <CardDescription>Follow these steps to set up and run the drill</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {drill.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{index + 1}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 pt-1">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="variations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Drill Variations</CardTitle>
                <CardDescription>Modify the drill to increase difficulty or focus on specific skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {drill.variations.map((variation, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Plus className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{variation}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comments" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Comments & Reviews</CardTitle>
                  <CardDescription>See what other coaches think about this drill</CardDescription>
                </div>
                <Button>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Add Comment
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
                    >
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {comment.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{comment.author}</h4>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <div className="flex items-center mb-2">{renderStars(comment.rating)}</div>
                          <p className="text-gray-600 dark:text-gray-400">{comment.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Drills */}
        <Card>
          <CardHeader>
            <CardTitle>Related Drills</CardTitle>
            <CardDescription>Other drills you might find useful</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDrills.map((relatedDrill) => (
                <div key={relatedDrill.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={relatedDrill.thumbnail || "/placeholder.svg"}
                      alt={relatedDrill.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="bg-white/90 text-gray-900 hover:bg-white/90 text-xs">
                        {relatedDrill.type}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {relatedDrill.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center">
                      {renderStars(relatedDrill.rating)}
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">{relatedDrill.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{relatedDrill.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
