"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const pastPapers = [
  {
    id: 1,
    title: "CRE Past Paper",
    subject: "CRE",
    year: "2023",
    term: "Term 1",
    type: "End of Term Exam",
    description: "Comprehensive CRE examination",
    downloadUrl: "/papers/senior4-CRE-1.pdf",
    previewUrl: "/preview/senior4-CRE-1",
    duration: "2 hours 15 minutes",
    marks: 100,
  },
  {
    id: 2,
    title: "English Language Past Paper - 2023 Term 1",
    subject: "English",
    year: "2023",
    term: "Term 1",
    type: "End of Term Exam",
    description: "English language examination with grammar, composition, and comprehension sections",
    downloadUrl: "/papers/senior1-english-2023-t1.pdf",
    previewUrl: "/preview/senior1-english-2023-t1",
    duration: "3 hours",
    marks: 100,
  },
  {
    id: 3,
    title: "Physics Past Paper - 2023 Term 1",
    subject: "Physics",
    year: "2023",
    term: "Term 1",
    type: "End of Term Exam",
    description: "Physics examination covering mechanics, energy, and basic laboratory work",
    downloadUrl: "/papers/senior1-physics-2023-t1.pdf",
    previewUrl: "/preview/senior1-physics-2023-t1",
    duration: "2 hours 30 minutes",
    marks: 100,
  },
  {
    id: 4,
    title: "Chemistry Past Paper - 2023 Term 1",
    subject: "Chemistry",
    year: "2023",
    term: "Term 1",
    type: "End of Term Exam",
    description: "Chemistry examination with theoretical and practical components",
    downloadUrl: "/papers/senior1-chemistry-2023-t1.pdf",
    previewUrl: "/preview/senior1-chemistry-2023-t1",
    duration: "2 hours 30 minutes",
    marks: 100,
  },
  {
    id: 5,
    title: "Biology Past Paper - 2023 Term 1",
    subject: "Biology",
    year: "2023",
    term: "Term 1",
    type: "End of Term Exam",
    description: "Biology examination covering cell biology, genetics, and ecology",
    downloadUrl: "/papers/senior1-biology-2023-t1.pdf",
    previewUrl: "/preview/senior1-biology-2023-t1",
    duration: "2 hours 30 minutes",
    marks: 100,
  },
  {
    id: 6,
    title: "Geography Past Paper - 2023 Term 1",
    subject: "Geography",
    year: "2023",
    term: "Term 1",
    type: "End of Term Exam",
    description: "Geography examination with physical and human geography components",
    downloadUrl: "/papers/senior1-geography-2023-t1.pdf",
    previewUrl: "/preview/senior1-geography-2023-t1",
    duration: "2 hours 30 minutes",
    marks: 100,
  },
  {
    id: 7,
    title: "Mathematics Mid-Term Test - 2023 Term 2",
    subject: "Mathematics",
    year: "2023",
    term: "Term 2",
    type: "Mid-Term Test",
    description: "Mid-term assessment focusing on algebraic expressions and equations",
    downloadUrl: "/papers/senior1-math-2023-t2-mid.pdf",
    previewUrl: "/preview/senior1-math-2023-t2-mid",
    duration: "1 hour 30 minutes",
    marks: 50,
  },
  {
    id: 8,
    title: "Entrepreneurship Past Paper - 2023 Term 1",
    subject: "Entrepreneurship",
    year: "2023",
    term: "Term 1",
    type: "End of Term Exam",
    description: "Entrepreneurship examination covering business basics and innovation",
    downloadUrl: "/papers/senior1-entrepreneurship-2023-t1.pdf",
    previewUrl: "/preview/senior1-entrepreneurship-2023-t1",
    duration: "2 hours",
    marks: 100,
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
const years = ["All Years", "2023", "2022", "2021"]
const terms = ["All Terms", "Term 1", "Term 2", "Term 3"]
const types = ["All Types", "End of Term Exam", "Mid-Term Test", "Mock Exam", "Practice Paper"]

export default function Senior1PastPapers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedYear, setSelectedYear] = useState("All Years")
  const [selectedTerm, setSelectedTerm] = useState("All Terms")
  const [selectedType, setSelectedType] = useState("All Types")

  const filteredPapers = pastPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "All Subjects" || paper.subject === selectedSubject
    const matchesYear = selectedYear === "All Years" || paper.year === selectedYear
    const matchesTerm = selectedTerm === "All Terms" || paper.term === selectedTerm
    const matchesType = selectedType === "All Types" || paper.type === selectedType

    return matchesSearch && matchesSubject && matchesYear && matchesTerm && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Senior 1 - Past Papers</h1>
          <p className="text-muted-foreground text-lg">
            Practice with previous examination papers to prepare for your tests and exams
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search past papers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[140px]">
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
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[120px]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                <SelectTrigger className="w-[120px]">
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
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
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
            Showing {filteredPapers.length} of {pastPapers.length} past papers
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{paper.subject}</Badge>
                  <Badge variant="outline">{paper.year}</Badge>
                </div>
                <CardTitle className="text-lg">{paper.title}</CardTitle>
                <CardDescription>{paper.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{paper.term}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>{paper.marks} marks</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {paper.type}
                    </Badge>
                    <p className="text-sm text-muted-foreground">Duration: {paper.duration}</p>
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
        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No past papers found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
