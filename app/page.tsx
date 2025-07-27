"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Shield, Users, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState("admin")

  // Mock credentials for different stakeholders
  const mockCredentials = {
    admin: { email: "admin@alahly.com", password: "admin123", redirect: "/dashboard" },
    coach: { email: "coach.football@alahly.com", password: "coach123", redirect: "/dashboard" },
    player: { email: "player.salah@alahly.com", password: "player123", redirect: "/player-dashboard" },
    medical: { email: "dr.hassan@alahly.com", password: "medical123", redirect: "/medical-dashboard" },
  }

  const handleUserTypeChange = (type: string) => {
    setUserType(type)
  }

  const getRedirectPath = () => {
    return mockCredentials[userType as keyof typeof mockCredentials]?.redirect || "/dashboard"
  }

  const getCurrentCredentials = () => {
    return mockCredentials[userType as keyof typeof mockCredentials] || mockCredentials.admin
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Branding */}
        <div className="hidden lg:block text-white space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2">
                <Image src="/al-ahly-logo.svg" alt="Al Ahly SC" width={48} height={48} className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Al Ahly SC</h1>
                <p className="text-xl text-red-100">Training Management System</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Excellence in
              <span className="block bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                Sports Training
              </span>
            </h2>
            <p className="text-lg text-red-200 leading-relaxed">
              Manage training sessions, track athlete progress, and maintain the championship legacy across all sports
              at Egypt's most successful sports club.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Users className="w-8 h-8 text-white mb-2" />
              <h3 className="font-semibold mb-1">Multi-Sport Management</h3>
              <p className="text-sm text-red-200">Football, Basketball, Handball & more</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Calendar className="w-8 h-8 text-white mb-2" />
              <h3 className="font-semibold mb-1">Team Coordination</h3>
              <p className="text-sm text-red-200">Manage multiple teams per sport</p>
            </div>
          </div>

          {/* User Type Selector */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-semibold mb-3 text-white">Select User Type</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={userType === "admin" ? "default" : "outline"}
                size="sm"
                onClick={() => handleUserTypeChange("admin")}
                className={
                  userType === "admin"
                    ? "bg-white text-red-600"
                    : "bg-transparent border-white text-white hover:bg-white/20"
                }
              >
                Admin
              </Button>
              <Button
                variant={userType === "coach" ? "default" : "outline"}
                size="sm"
                onClick={() => handleUserTypeChange("coach")}
                className={
                  userType === "coach"
                    ? "bg-white text-red-600"
                    : "bg-transparent border-white text-white hover:bg-white/20"
                }
              >
                Coach
              </Button>
              <Button
                variant={userType === "player" ? "default" : "outline"}
                size="sm"
                onClick={() => handleUserTypeChange("player")}
                className={
                  userType === "player"
                    ? "bg-white text-red-600"
                    : "bg-transparent border-white text-white hover:bg-white/20"
                }
              >
                Player
              </Button>
              <Button
                variant={userType === "medical" ? "default" : "outline"}
                size="sm"
                onClick={() => handleUserTypeChange("medical")}
                className={
                  userType === "medical"
                    ? "bg-white text-red-600"
                    : "bg-transparent border-white text-white hover:bg-white/20"
                }
              >
                Medical
              </Button>
            </div>
          </div>

          {/* Mock Credentials Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h3 className="font-semibold mb-3 text-white">Demo Credentials</h3>
            <div className="space-y-2 text-sm">
              <div className={userType === "admin" ? "font-bold text-white" : ""}>
                <strong>Admin:</strong> admin@alahly.com / admin123
              </div>
              <div className={userType === "coach" ? "font-bold text-white" : ""}>
                <strong>Coach:</strong> coach.football@alahly.com / coach123
              </div>
              <div className={userType === "player" ? "font-bold text-white" : ""}>
                <strong>Player:</strong> player.salah@alahly.com / player123
              </div>
              <div className={userType === "medical" ? "font-bold text-white" : ""}>
                <strong>Medical:</strong> dr.hassan@alahly.com / medical123
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div className="w-full max-w-md mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center pb-2">
              <div className="lg:hidden flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1">
                  <Image src="/al-ahly-logo.svg" alt="Al Ahly SC" width={32} height={32} className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Al Ahly SC</h1>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
              <CardDescription className="text-gray-600">
                Sign in as {userType.charAt(0).toUpperCase() + userType.slice(1)} to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="your.email@alahly.com"
                        className="pl-10 h-12"
                        defaultValue={getCurrentCredentials().email}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 h-12"
                        defaultValue={getCurrentCredentials().password}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-gray-600">Remember me</span>
                    </label>
                    <Link href="/reset-password" className="text-sm text-red-600 hover:text-red-800">
                      Forgot password?
                    </Link>
                  </div>

                  <Link href={getRedirectPath()}>
                    <Button className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium">
                      Sign In as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </TabsContent>

                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input type="text" placeholder="Ahmed Hassan" className="pl-10 h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input type="email" placeholder="ahmed.hassan@alahly.com" className="pl-10 h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 h-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 h-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium">
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-gray-600">
                By continuing, you agree to Al Ahly SC's{" "}
                <Link href="#" className="text-red-600 hover:text-red-800">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-red-600 hover:text-red-800">
                  Privacy Policy
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
