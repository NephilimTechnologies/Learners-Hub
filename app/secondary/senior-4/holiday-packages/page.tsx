"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, Calendar, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const holidayPackages = [
  {
    id: 1,
    title: "IRE",
    subject: "Mathematics",
    holiday: "Seminar guide",
    year: "2023",
    description: "",
    downloadUrl: "/packages/senior4-math-dec2023.pdf",
    previewUrl: "/preview/senior1-math-dec2023",
    duration: "4 weeks",
    exercises: 50,
    topics: ["Algebra", "Geometry", "Statistics", "Trigonometry"],
  },
  {
    id: 2,
    title: "English Language Holiday Package - December 2023",
    subject: "English",
    holiday: "December Holiday",
    year: "2023",
    description: "English language practice with grammar exercises, composition writing, and literature analysis",
    downloadUrl: "/packages/senior1-english-dec2023.pdf",
    previewUrl: "/preview/senior1-english-dec2023",
    duration: "4 weeks",
    exercises: 40,
    topics: ["Grammar", "Composition", "Literature", "Vocabulary"],
  },
  {
    id: 3,
    title: "Physics Holiday Package - December 2023",
    subject: "Physics",
    holiday: "December Holiday",
    year: "2023",
    description: "Physics revision package with theory review and practical problem-solving exercises",
    downloadUrl: "/packages/senior1-physics-dec2023.pdf",
    previewUrl: "/preview/senior1-physics-dec2023",
    duration: "4 weeks",
    exercises: 35,
    topics: ["Mechanics", "Energy", "Waves", "Electricity"],
  },
  {
    id: 4,
    title: "Chemistry Holiday Package - December 2023",
    subject: "Chemistry",
    holiday: "December Holiday",
    year: "2023",
    description: "Chemistry revision with theoretical concepts and laboratory-based questions",
    downloadUrl: "/packages/senior1-chemistry-dec2023.pdf",
    previewUrl: "/preview/senior1-chemistry-dec2023",
    duration: "4 weeks",
    exercises: 30,
    topics: ["Atomic Structure", "Chemical Bonding", "Reactions", "Acids & Bases"],
  },
  {
    id: 5,
    title: "Biology Holiday Package - December 2023",
    subject: "Biology",
    holiday: "December Holiday",
    year: "2023",
    description: "Biology revision covering cell biology, genetics, ecology, and human biology",
    downloadUrl: "/packages/senior1-biology-dec2023.pdf",
    previewUrl: "/preview/senior1-biology-dec2023",
    duration: "4 weeks",
    exercises: 32,
    topics: ["Cell Biology", "Genetics", "Ecology", "Human Biology"],
  },
  {
    id: 6,
    title: "Geography Holiday Package - December 2023",
    subject: "Geography",
    holiday: "December Holiday",
    year: "2023",
    description: "Geography revision with physical and human geography concepts and map work",
    downloadUrl: "/packages/senior1-geography-dec2023.pdf",
    previewUrl: "/preview/senior1-geography-dec2023",
    duration: "4 weeks",
    exercises: 28,
    topics: ["Physical Geography", "Human Geography", "Map Work", "Climate"],
  },
  {
    id: 7,
    title: "Multi-Subject Holiday Package - April 2023",
    subject: "Multi-Subject",
    holiday: "April Holiday",
    year: "2023",
    description: "Comprehensive revision package covering all major subjects for mid-year preparation",
    downloadUrl: "/packages/senior1-multi-apr2023.pdf",
    previewUrl: "/preview/senior1-multi-apr2023",
    duration: "2 weeks",
    exercises: 80,
    topics: ["Math", "English", "Sciences", "Humanities"],
  },
  {
    id: 8,
    title: "Entrepreneurship Holiday Package - December 2023",
    subject: "Entrepreneurship",
    holiday: "December Holiday",
    year: "2023",
    description: "Business and entrepreneurship concepts with practical case studies and projects",
    downloadUrl: "/packages/senior1-entrepreneurship-dec2023.pdf",
    previewUrl: "/preview/senior1-entrepreneurship-dec2023",
    duration: "3 weeks",
    exercises: 25,
    topics: ["Business Basics", "Innovation", "Marketing", "Finance"],
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
  "Multi-Subject",
]
const holidays = ["All Holidays", "December Holiday", "April Holiday", "August Holiday"]
const years = ["All Years", "2023", "2022", "2021"]

export default function Senior1HolidayPackages() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [selectedHoliday, setSelectedHoliday] = useState("All Holidays")
  const [selectedYear, setSelectedYear] = useState("All Years")

  const filteredPackages = holidayPackages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.topics.some((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesSubject = selectedSubject === "All Subjects" || pkg.subject === selectedSubject
    const matchesHoliday = selectedHoliday === "All Holidays" || pkg.holiday === selectedHoliday
    const matchesYear = selectedYear === "All Years" || pkg.year === selectedYear

    return matchesSearch && matchesSubject && matchesHoliday && matchesYear
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Senior 1 - Holiday Packages</h1>
          <p className="text-muted-foreground text-lg">
            Stay ahead during holidays with comprehensive revision packages and practice materials
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search holiday packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[160px]">
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
              <Select value={selectedHoliday} onValueChange={setSelectedHoliday}>
                <SelectTrigger className="w-[150px]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Holiday" />
                </SelectTrigger>
                <SelectContent>
                  {holidays.map((holiday) => (
                    <SelectItem key={holiday} value={holiday}>
                      {holiday}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[120px]">
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
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPackages.length} of {holidayPackages.length} holiday packages
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{pkg.subject}</Badge>
                  <Badge variant="outline">{pkg.year}</Badge>
                </div>
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>{pkg.exercises} exercises</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Covers:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {pkg.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{pkg.topics.length - 3} more
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
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No holiday packages found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
      }
