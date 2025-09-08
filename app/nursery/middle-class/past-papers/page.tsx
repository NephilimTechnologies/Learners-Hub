"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample past papers data for baby class
const pastPapersData = [
  {
    id: 1,
    title: "English Past Paper - End of Term 1",
    subject: "English",
    term: "Term 1",
    year: "2024",
    type: "End of Term",
    description: "Comprehensive English assessment covering vocabulary, phonics, and basic reading",
    downloadUrl: "/papers/baby-class-english-eot1-2024.pdf",
    previewUrl: "/preview/baby-class-english-eot1-2024",
  },
  {
    id: 2,
    title: "Health Habits Past Paper - Mid Term 1",
    subject: "Health Habits",
    term: "Term 1",
    year: "2024",
    type: "Mid Term",
    description: "Assessment on personal hygiene, healthy eating habits, and safety practices",
    downloadUrl: "/papers/baby-class-health-mt1-2024.pdf",
    previewUrl: "/preview/baby-class-health-mt1-2024",
  },
  {
    id: 3,
    title: "Holiday Package Past Paper - December",
    subject: "Holiday Packages",
    term: "Holiday",
    year: "2023",
    type: "Holiday Package",
    description: "Fun learning activities and assessments for December holidays",
    downloadUrl: "/papers/baby-class-holiday-dec-2023.pdf",
    previewUrl: "/preview/baby-class-holiday-dec-2023",
  },
  {
    id: 4,
    title: "Literacy Past Paper - End of Term 2",
    subject: "Literacy",
    term: "Term 2",
    year: "2024",
    type: "End of Term",
    description: "Reading readiness and pre-writing skills assessment",
    downloadUrl: "/papers/baby-class-literacy-eot2-2024.pdf",
    previewUrl: "/preview/baby-class-literacy-eot2-2024",
  },
  {
    id: 5,
    title: "Reading Past Paper - Mid Term 2",
    subject: "Reading",
    term: "Term 2",
    year: "2024",
    type: "Mid Term",
    description: "Basic reading comprehension and letter recognition test",
    downloadUrl: "/papers/baby-class-reading-mt2-2024.pdf",
    previewUrl: "/preview/baby-class-reading-mt2-2024",
  },
  {
    id: 6,
    title: "English Past Paper - End of Term 3",
    subject: "English",
    term: "Term 3",
    year: "2023",
    type: "End of Term",
    description: "Final term English assessment with story comprehension",
    downloadUrl: "/papers/baby-class-english-eot3-2023.pdf",
    previewUrl: "/preview/baby-class-english-eot3-2023",
  },
]

export default function MiddleClassPastPapersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  // Get unique values for filters
  const subjects = [...new Set(pastPapersData.map((paper) => paper.subject))]
  const years = [...new Set(pastPapersData.map((paper) => paper.year))]
  const types = [...new Set(pastPapersData.map((paper) => paper.type))]

  // Filter past papers based on search and filters
  const filteredPapers = pastPapersData.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || paper.subject === selectedSubject
    const matchesYear = selectedYear === "all" || paper.year === selectedYear
    const matchesType = selectedType === "all" || paper.type === selectedType

    return matchesSearch && matchesSubject && matchesYear && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Middle Class - Past Papers</h1>
          <p className="text-muted-foreground text-lg">
            Previous examination papers and assessments for middle class students
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search past papers..."
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

            {/* Year Filter */}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-32">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPapers.length} of {pastPapersData.length} past papers
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{paper.subject}</Badge>
                  <div className="flex gap-1">
                    <Badge variant="outline">{paper.year}</Badge>
                    <Badge variant="outline">{paper.term}</Badge>
                  </div>
                </div>
                <CardTitle className="text-lg">{paper.title}</CardTitle>
                <CardDescription className="text-sm">{paper.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{paper.description}</p>
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
        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No past papers found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedSubject("all")
                setSelectedYear("all")
                setSelectedType("all")
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
