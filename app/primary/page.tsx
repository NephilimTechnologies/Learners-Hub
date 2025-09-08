"use client"

import { useState } from "react"
import { Search, BookOpen, FileText, Calendar, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const primaryClasses = [
  {
    id: "primary-1",
    name: "Primary One",
    description: "Foundation level with basic literacy and numeracy",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers"],
  },
  {
    id: "primary-2",
    name: "Primary Two",
    description: "Building on foundation skills with expanded curriculum",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers"],
  },
  {
    id: "primary-3",
    name: "Primary Three",
    description: "Intermediate level with more complex concepts",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers"],
  },
  {
    id: "primary-4",
    name: "Primary Four",
    description: "Advanced primary level with comprehensive subjects",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers"],
  },
  {
    id: "primary-5",
    name: "Primary Five",
    description: "Pre-examination level with exam preparation",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers"],
  },
  {
    id: "primary-6",
    name: "Primary Six",
    description: "Examination preparation level",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers"],
  },
  {
    id: "primary-7",
    name: "Primary Seven",
    description: "Final primary level - PLE preparation",
    subjects: ["Mathematics", "English", "Science", "Social Studies"],
    resources: ["Lesson Notes", "Schemes of Work", "Past Papers"],
  },
]

export default function PrimaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const filteredClasses = primaryClasses.filter((cls) => {
    const matchesSearch =
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesSubject = selectedSubject === "all" || cls.subjects.includes(selectedSubject)

    return matchesSearch && matchesSubject
  })

  const allSubjects = [...new Set(primaryClasses.flatMap((cls) => cls.subjects))]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Primary Education</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning resources for Primary 1 through Primary 7 following the New Lower Secondary
            Curriculum (NLSC)
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search primary classes, subjects, or resources..."
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
                      {cls.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
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
                  <Link href={`/primary/${cls.id}`}>
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
          <h2 className="text-2xl font-bold text-foreground mb-4">About Primary Education Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <FileText className="mx-auto h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-2">Lesson Notes</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive notes covering all subjects in the primary curriculum
              </p>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-2">Schemes of Work</h3>
              <p className="text-sm text-muted-foreground">
                Structured learning plans and curriculum guides for teachers
              </p>
            </div>
            <div className="text-center">
              <Package className="mx-auto h-8 w-8 text-primary mb-2" />
              <h3 className="font-semibold text-foreground mb-2">Past Papers</h3>
              <p className="text-sm text-muted-foreground">Previous examination papers for practice and preparation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
