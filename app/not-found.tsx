"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Trophy } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border-0 shadow-2xl relative z-10">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">SportsPro</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-6xl font-bold text-gray-300 mb-4">404</h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h3>
            <p className="text-gray-600 leading-relaxed">
              Oops! The page you're looking for seems to have gone off the field. Don't worry, even the best players
              sometimes miss their target.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-3">
              <Link href="/dashboard" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Dashboard
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()} className="flex-1">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500 mb-3">Looking for something specific?</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/teams" className="text-blue-600 hover:text-blue-800">
                  Teams
                </Link>
                <Link href="/sessions" className="text-blue-600 hover:text-blue-800">
                  Sessions
                </Link>
                <Link href="/drills" className="text-blue-600 hover:text-blue-800">
                  Drills
                </Link>
                <Link href="/announcements" className="text-blue-600 hover:text-blue-800">
                  Announcements
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
