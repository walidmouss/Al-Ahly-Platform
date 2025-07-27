"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Home,
  Users,
  Calendar,
  Activity,
  Target,
  MessageSquare,
  Bell,
  Settings,
  Trophy,
  Sun,
  Moon,
  LogOut,
  User,
  ChevronDown,
  BarChart3,
  FileText,
  Shield,
  Heart,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import Image from "next/image"

const navigation = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: Home },
      { title: "Analytics", href: "/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Sports Management",
    items: [
      { title: "Teams", href: "/teams", icon: Users },
      { title: "Training Sessions", href: "/sessions", icon: Activity },
      { title: "Drills", href: "/drills", icon: Target },
      { title: "Athletes", href: "/players", icon: Shield },
    ],
  },
  {
    title: "Medical Center",
    items: [
      { title: "Medical Overview", href: "/medical", icon: Heart },
      { title: "Injury Management", href: "/medical/injuries", icon: Stethoscope },
      { title: "Health Records", href: "/medical/records", icon: FileText },
    ],
  },
  {
    title: "Communication",
    items: [
      { title: "Announcements", href: "/announcements", icon: Bell },
      { title: "Team Chat", href: "/chat", icon: MessageSquare },
      { title: "Feedback", href: "/feedback", icon: FileText },
    ],
  },
  {
    title: "Performance",
    items: [
      { title: "Attendance", href: "/attendance", icon: Calendar },
      { title: "Performance", href: "/performance", icon: Trophy },
    ],
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { theme, setTheme } = useTheme()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                <Image src="/al-ahly-logo.svg" alt="Al Ahly SC" width={32} height={32} className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-red-600">Al Ahly SC</h1>
                <p className="text-xs text-muted-foreground">Training Management</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="px-4 py-4">
            {navigation.map((section) => (
              <SidebarGroup key={section.title}>
                <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link
                            href={item.href}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>

          <SidebarFooter className="border-t p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full justify-start px-3">
                  <Avatar className="w-8 h-8 mr-3">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AH</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">Ahmed Hassan</p>
                    <p className="text-xs text-muted-foreground">Football Coach</p>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  <Link href="/">Sign Out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center justify-between border-b px-6">
            <SidebarTrigger />

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                  3
                </span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AH</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Ahmed Hassan</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    <Link href="/">Sign Out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
