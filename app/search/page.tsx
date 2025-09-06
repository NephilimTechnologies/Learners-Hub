"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText, BookOpen, Download, Filter } from "lucide-react"
import Link from "next/link"

// Mock data for search results
const mockResults = [
  {
    id: 1,
    title: "Mathematics Lesson Notes - Addition and Subtraction",
    type: "Lesson Notes",
    class: "Primary Two",
    subject: "Mathematics",
    description: "Comprehensive notes covering basic addition and subtraction concepts with examples and exercises.",
    url: "/primary/primary-two/lesson-notes/mathematics-addition-subtraction.pdf",
  },
  {
    id: 2,
    title: "English Past Paper - Term 1 Examination",
    type: "Past Papers",
    class: "Primary Three",
    subject: "English",
    description: "Previous term examination paper with reading comprehension and grammar sections.",
    url: "/primary/primary-three/past-papers/english-term1.pdf",
  },
  {
    id: 3,
    title: "Science Scheme of Work - Living Things",
    type: "Schemes of Work",
    class: "Primary Four",
    subject: "Science",
    description: "Detailed scheme covering plants, animals, and their habitats for the entire term.",
    url: "/primary/primary-four/schemes-of-work/science-living-things.pdf",
  },
  {
    id: 4,
    title: "Holiday Package - Mathematics Revision",
    type: "Holiday Packages",
    class: "Primary Five",
    subject: "Mathematics",
    description: "Complete holiday revision package with practice questions and solutions.",
    url: "/primary/primary-five/holiday-packages/mathematics-revision.pdf",
  },
  {
    id: 5,
    title: "Physics Notes - Motion and Forces",
    type: "Lesson Notes",
    class: "Senior Four",
    subject: "Physics",
    description: "Detailed physics notes covering motion, velocity, acceleration, and forces.",
    url: "/secondary/senior-four/lesson-notes/physics-motion-forces.pdf",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState(mockResults)
  const [filteredResults, setFilteredResults] = useState(mockResults)
  const [classFilter, setClassFilter] = useState("all")
  const [subjectFilter, setSubjectFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  useEffect(() => {
    // Filter results based on search query and filters
    let filtered = results

    if (query) {
      filtered = filtered.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()) ||
          result.subject.toLowerCase().includes(query.toLowerCase()),
      )
    }

    if (classFilter !== "all") {
      filtered = filtered.filter((result) => result.class === classFilter)
    }

    if (subjectFilter !== "all") {
      filtered = filtered.filter((result) => result.subject === subjectFilter)
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter((result) => result.type === typeFilter)
    }

    setFilteredResults(filtered)
  }, [query, classFilter, subjectFilter, typeFilter, results])

  const getIcon = (type: string) => {
    switch (type) {
      case "Lesson Notes":
        return FileText
      case "Schemes of Work":
        return BookOpen
      case "Past Papers":
        return Search
      case "Holiday Packages":
        return Download
      default:
        return FileText
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl mb-4">Search Results</h1>
          {query && (
            <p className="text-muted-foreground">
              Showing results for: <span className="font-semibold">"{query}"</span>
            </p>
          )}
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search notes, papers, schemes..."
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <Select value={classFilter} onValueChange={setClassFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="Baby Class">Baby Class</SelectItem>
                <SelectItem value="Primary Two">Primary Two</SelectItem>
                <SelectItem value="Primary Three">Primary Three</SelectItem>
                <SelectItem value="Primary Four">Primary Four</SelectItem>
                <SelectItem value="Primary Five">Primary Five</SelectItem>
                <SelectItem value="Senior Four">Senior Four</SelectItem>
              </SelectContent>
            </Select>

            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Social Studies">Social Studies</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Lesson Notes">Lesson Notes</SelectItem>
                <SelectItem value="Past Papers">Past Papers</SelectItem>
                <SelectItem value="Schemes of Work">Schemes of Work</SelectItem>
                <SelectItem value="Holiday Packages">Holiday Packages</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} found
            </h2>
          </div>

          {filteredResults.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredResults.map((result) => {
                const Icon = getIcon(result.type)
                return (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg mb-2">{result.title}</CardTitle>
                            <CardDescription className="text-sm mb-3">{result.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">{result.type}</Badge>
                              <Badge variant="outline">{result.class}</Badge>
                              <Badge variant="outline">{result.subject}</Badge>
                            </div>
                          </div>
                        </div>
                        <Button asChild>
                          <Link href={result.url}>View PDF</Link>
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
