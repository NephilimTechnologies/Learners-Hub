"use client"

import { useState } from "react"
import { Search, BookOpen, FileText, Calendar, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const secondaryClasses = [
  {
    id: "senior-1",
    name: "Senior One",
    description: "Foundation secondary level with core subjects",
    subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology", "Geography", "Luganda", "Entrepreneurship"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
  },
  {
    id: "senior-2",
    name: "Senior Two",
    description: "Building on foundation with expanded curriculum",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Geography",
      "Luganda",
      "Entrepreneurship",
      "Art",
    ],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
  },
  {
    id: "senior-3",
    name: "Senior Three",
    description: "Intermediate level with specialized subjects",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Geography",
      "Luganda",
      "Entrepreneurship",
      "Art",
    ],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
  },
  {
    id: "senior-4",
    name: "Senior Four",
    description: "O-Level preparation with comprehensive subjects",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Geography",
      "Luganda",
      "Entrepreneurship",
      "Art",
    ],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
  },
  {
    id: "senior-5",
    name: "Senior Five",
    description: "A-Level foundation with specialized combinations",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Geography",
      "Luganda",
      "Entrepreneurship",
      "Art",
    ],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
  },
  {
    id: "senior-6",
    name: "Senior Six",
    description: "Final A-Level preparation and university readiness",
    subjects: [
      "Mathematics",
      "English",
      "Physics",
      "Chemistry",
      "Biology",
      "Geography",
      "Luganda",
      "Entrepreneurship",
      "Art",
    ],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
  },
]

export default function SecondaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const filteredClasses = secondaryClasses.filter((cls) => {
    const matchesSearch =
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesSubject = selectedSubject === "all" || cls.subjects.includes(selectedSubject)

    return matchesSearch && matchesSubject
  })

  const allSubjects = [...new Set(secondaryClasses.flatMap((cls) => cls.subjects))]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Secondary Education</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced learning resources for Senior 1 through Senior 6 following the New Lower Secondary Curriculum
            (NLSC)
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search secondary classes, subjects, or resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-4 py-2 border border-input bg-background text-foreground rounded-md"
            >
              <option value="all">All Subjects</option>
              {allSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((cls) => (
            <Card key={cls.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{cls.name}</CardTitle>
                <CardDescription>{cls.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Subjects */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">SUBJECTS</h4>
                    <div className="flex flex-wrap gap-1">
                      {cls.subjects.slice(0, 6).map((subject) => (
                        <span
                          key={subject}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                      {cls.subjects.length > 6 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{cls.subjects.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">AVAILABLE RESOURCES</h4>
                    <div className="flex flex-wrap gap-1">
                      {cls.resources.map((resource) => (
                        <span key={resource} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {resource}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Access Button */}
                  <Link href={`/secondary/${cls.id}`}>
                    <Button className="w-full mt-4">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Access Resources
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No classes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-secondary/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">About Secondary Education Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <FileText className="mx-auto h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-2">Lesson Notes</h3>
              <p className="text-sm text-muted-foreground">
                Detailed notes for all secondary subjects and specializations
              </p>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-2">Schemes of Work</h3>
              <p className="text-sm text-muted-foreground">Comprehensive curriculum guides and teaching plans</p>
            </div>
            <div className="text-center">
              <Package className="mx-auto h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-2">Past Papers</h3>
              <p className="text-sm text-muted-foreground">O-Level and A-Level examination papers for practice</p>
            </div>
            <div className="text-center">
              <BookOpen className="mx-auto h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-2">Holiday Packages</h3>
              <p className="text-sm text-muted-foreground">Special revision materials and holiday assignments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
