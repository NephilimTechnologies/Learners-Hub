"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, Calendar, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const schemesOfWork = [
  {
    id: 1,
    title: "Mathematics Scheme of Work - Term 1",
    subject: "Mathematics",
    term: "Term 1",
    description: "Complete scheme covering algebra, geometry, and basic calculus for Senior 1",
    downloadUrl: "/schemes/senior1-math-term1.pdf",
    previewUrl: "/preview/senior1-math-term1",
    weeks: 12,
    topics: ["Algebra Basics", "Linear Equations", "Geometry", "Statistics"],
  },
  {
    id: 2,
    title: "English Language Scheme of Work - Term 1",
    subject: "English",
    term: "Term 1",
    description: "Comprehensive English language scheme focusing on grammar, composition, and literature",
    downloadUrl: "/schemes/senior1-english-term1.pdf",
    previewUrl: "/preview/senior1-english-term1",
    weeks: 12,
    topics: ["Grammar", "Composition", "Literature", "Comprehension"],
  },
  {
    id: 3,
    title: "Physics Scheme of Work - Term 1",
    subject: "Physics",
    term: "Term 1",
    description: "Introduction to physics concepts including mechanics and energy",
    downloadUrl: "/schemes/senior1-physics-term1.pdf",
    previewUrl: "/preview/senior1-physics-term1",
    weeks: 12,
    topics: ["Mechanics", "Energy", "Forces", "Motion"],
  },
  {
    id: 4,
    title: "Chemistry Scheme of Work - Term 1",
    subject: "Chemistry",
    term: "Term 1",
    description: "Basic chemistry principles and laboratory techniques",
    downloadUrl: "/schemes/senior1-chemistry-term1.pdf",
    previewUrl: "/preview/senior1-chemistry-term1",
    weeks: 12,
    topics: ["Atomic Structure", "Chemical Bonding", "Acids & Bases", "Lab Safety"],
  },
  {
    id: 5,
    title: "Biology Scheme of Work - Term 1",
    subject: "Biology",
    term: "Term 1",
    description: "Introduction to life sciences and basic biological processes",
    downloadUrl: "/schemes/senior1-biology-term1.pdf",
    previewUrl: "/preview/senior1-biology-term1",
    weeks: 12,
    topics: ["Cell Biology", "Genetics", "Ecology", "Human Biology"],
  },
  {
    id: 6,
    title: "Geography Scheme of Work - Term 1",
    subject: "Geography",
    term: "Term 1",
    description: "Physical and human geography concepts for Senior 1 students",
    downloadUrl: "/schemes/senior1-geography-term1.pdf",
    previewUrl: "/preview/senior1-geography-term1",
    weeks: 12,
    topics: ["Physical Geography", "Climate", "Population", "Economic Geography"],
  },
]

const subjects = [
  "All Subjects",
  "Mathematics",
  "English",
  "Physics",
  "Chemistry",
  "Biology",
  "Geography",
  "Entrepreneurship",
  "Art",
  "Luganda",
]
const terms = ["All Terms", "Term 1", "Term 2", "Term 3"]

export default function Senior1SchemesOfWork() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedTerm, setSelectedTerm] = useState("All Terms")

  const filteredSchemes = schemesOfWork.filter((scheme) => {
    const matchesSearch =
      scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.topics.some((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesSubject = selectedSubject === "All Subjects" || scheme.subject === selectedSubject
    const matchesTerm = selectedTerm === "All Terms" || scheme.term === selectedTerm

    return matchesSearch && matchesSubject && matchesTerm
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Senior 1 - Schemes of Work</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive teaching schemes aligned with the New Lower Secondary Curriculum (NLSC)
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search schemes of work..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                <SelectTrigger className="w-[140px]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Term" />
                </SelectTrigger>
                <SelectContent>
                  {terms.map((term) => (
                    <SelectItem key={term} value={term}>
                      {term}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredSchemes.length} of {schemesOfWork.length} schemes of work
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{scheme.subject}</Badge>
                  <Badge variant="outline">{scheme.term}</Badge>
                </div>
                <CardTitle className="text-lg">{scheme.title}</CardTitle>
                <CardDescription>{scheme.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{scheme.weeks} weeks</span>
                    <BookOpen className="h-4 w-4 ml-2" />
                    <span>{scheme.topics.length} topics</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Topics:</p>
                    <div className="flex flex-wrap gap-1">
                      {scheme.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {scheme.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{scheme.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No schemes of work found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
            }
