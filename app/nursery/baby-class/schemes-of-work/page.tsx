"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample schemes of work data for baby class
const schemesData = [
  {
    id: 1,
    title: "English Language Scheme - Term 1",
    subject: "English",
    term: "Term 1",
    weeks: "1-12",
    description: "Complete English language scheme covering basic vocabulary, phonics, and simple sentences",
    downloadUrl: "/schemes/baby-class-english-term1.pdf",
    previewUrl: "/preview/baby-class-english-term1",
  },
  {
    id: 2,
    title: "Mathematics Scheme - Term 1",
    subject: "Mathematics",
    term: "Term 1",
    weeks: "1-12",
    description: "Number recognition, counting 1-20, basic shapes and patterns",
    downloadUrl: "/schemes/baby-class-math-term1.pdf",
    previewUrl: "/preview/baby-class-math-term1",
  },
  {
    id: 3,
    title: "Health Habits Scheme - Term 1",
    subject: "Health Habits",
    term: "Term 1",
    weeks: "1-12",
    description: "Personal hygiene, healthy eating, and basic safety habits",
    downloadUrl: "/schemes/baby-class-health-term1.pdf",
    previewUrl: "/preview/baby-class-health-term1",
  },
  {
    id: 4,
    title: "Literacy Scheme - Term 2",
    subject: "Literacy",
    term: "Term 2",
    weeks: "1-12",
    description: "Reading readiness, letter recognition, and pre-writing skills",
    downloadUrl: "/schemes/baby-class-literacy-term2.pdf",
    previewUrl: "/preview/baby-class-literacy-term2",
  },
  {
    id: 5,
    title: "English Language Scheme - Term 2",
    subject: "English",
    term: "Term 2",
    weeks: "1-12",
    description: "Advanced vocabulary building and simple story comprehension",
    downloadUrl: "/schemes/baby-class-english-term2.pdf",
    previewUrl: "/preview/baby-class-english-term2",
  },
  {
    id: 6,
    title: "Mathematics Scheme - Term 3",
    subject: "Mathematics",
    term: "Term 3",
    weeks: "1-12",
    description: "Addition and subtraction basics, measurement concepts",
    downloadUrl: "/schemes/baby-class-math-term3.pdf",
    previewUrl: "/preview/baby-class-math-term3",
  },
]

export default function BabyClassSchemesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedTerm, setSelectedTerm] = useState("all")

  // Get unique subjects and terms for filters
  const subjects = [...new Set(schemesData.map((scheme) => scheme.subject))]
  const terms = [...new Set(schemesData.map((scheme) => scheme.term))]

  // Filter schemes based on search and filters
  const filteredSchemes = schemesData.filter((scheme) => {
    const matchesSearch =
      scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || scheme.subject === selectedSubject
    const matchesTerm = selectedTerm === "all" || scheme.term === selectedTerm

    return matchesSearch && matchesSubject && matchesTerm
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Baby Class - Schemes of Work</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive teaching schemes and curriculum plans for baby class
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search schemes of work..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Subject Filter */}
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Term Filter */}
            <Select value={selectedTerm} onValueChange={setSelectedTerm}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by Term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Terms</SelectItem>
                {terms.map((term) => (
                  <SelectItem key={term} value={term}>
                    {term}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredSchemes.length} of {schemesData.length} schemes of work
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
                <CardDescription className="text-sm">Weeks {scheme.weeks}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{scheme.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No schemes of work found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedSubject("all")
                setSelectedTerm("all")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
