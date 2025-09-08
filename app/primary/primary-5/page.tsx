"use client"

import { useState } from "react"
import { Search, BookOpen, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrimaryFivePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const resources = [
    {
      title: "Lesson Notes",
      description:
        "Comprehensive lesson notes for Primary Five covering Mathematics, English, Science, and Social Studies",
      icon: BookOpen,
      href: "/primary/primary-5/lesson-notes",
      color: "bg-blue-500",
    },
    {
      title: "Schemes of Work",
      description: "Detailed schemes of work for Primary Five curriculum planning",
      icon: FileText,
      href: "/primary/primary-5/schemes-of-work",
      color: "bg-green-500",
    },
    {
      title: "Past Papers",
      description: "Previous examination papers and practice tests for Primary Five",
      icon: Calendar,
      href: "/primary/primary-5/past-papers",
      color: "bg-purple-500",
    },
  ]

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Primary Five Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive learning materials for Primary Five pupils
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredResources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={resource.href}>Access {resource.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Back to Primary */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/primary">← Back to Primary Section</Link>
          </Button>
        </div>
      </div>
    </div>
  )
      }
