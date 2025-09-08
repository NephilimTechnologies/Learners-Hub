"use client"

import { useState } from "react"
import { Search, Download, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function PrimaryFourPastPapersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const pastPapers = [
    {
      title: "Mathematics End of Term 1 Test",
      subject: "Mathematics",
      description: "Assessment covering numbers 1-10, basic shapes, and simple counting",
      downloadUrl: "#",
      year: "2024",
      term: "Term 1",
    },
    {
      title: "English End of Term 1 Test",
      subject: "English",
      description: "Assessment covering alphabet recognition and basic phonics",
      downloadUrl: "#",
      year: "2024",
      term: "Term 1",
    },
    {
      title: "Science End of Term 1 Test",
      subject: "Science",
      description: "Assessment covering body parts and common animals",
      downloadUrl: "#",
      year: "2024",
      term: "Term 1",
    },
    {
      title: "Social Studies End of Term 1 Test",
      subject: "Social Studies",
      description: "Assessment covering family members and school environment",
      downloadUrl: "#",
      year: "2024",
      term: "Term 1",
    },
  ]

  const subjects = ["Mathematics", "English", "Science", "Social Studies"]

  const filteredPapers = pastPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || paper.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Primary Four Past Papers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download previous examination papers and practice tests for Primary Four
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search past papers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by subject" />
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
        </div>

        {/* Papers Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredPapers.map((paper, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {paper.subject}
                  </span>
                  <span className="text-sm text-muted-foreground">{paper.year}</span>
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {paper.title}
                </CardTitle>
                <CardDescription>{paper.description}</CardDescription>
                <div className="text-sm text-muted-foreground mt-2">{paper.term}</div>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href={paper.downloadUrl} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Paper
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back Navigation */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/primary/primary-1">← Back to Primary One Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  )
      }
