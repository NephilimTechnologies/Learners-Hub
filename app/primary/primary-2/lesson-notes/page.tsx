"use client"

import { useState } from "react"
import { Search, Download, BookOpen, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function PrimaryTwoNotesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const lessonNotes = [
    {
      title: "Introduction to Numbers 1-10",
      subject: "Mathematics",
      description: "Basic number recognition and counting for Primary One students",
      downloadUrl: "#",
      date: "2024-01-15",
    },
    {
      title: "Letter Recognition A-Z",
      subject: "English",
      description: "Alphabet recognition and basic phonics for beginners",
      downloadUrl: "#",
      date: "2024-01-16",
    },
    {
      title: "My Body Parts",
      subject: "Science",
      description: "Introduction to basic body parts and their functions",
      downloadUrl: "#",
      date: "2024-01-17",
    },
    {
      title: "My Family",
      subject: "Social Studies",
      description: "Understanding family relationships and roles",
      downloadUrl: "#",
      date: "2024-01-18",
    },
    {
      title: "Simple Addition 1-5",
      subject: "Mathematics",
      description: "Basic addition concepts using objects and pictures",
      downloadUrl: "#",
      date: "2024-01-19",
    },
    {
      title: "Simple Words and Sounds",
      subject: "English",
      description: "Basic vocabulary and pronunciation exercises",
      downloadUrl: "#",
      date: "2024-01-20",
    },
    {
      title: "Animals Around Us",
      subject: "Science",
      description: "Common animals and their characteristics",
      downloadUrl: "#",
      date: "2024-01-21",
    },
    {
      title: "Our School",
      subject: "Social Studies",
      description: "Understanding school environment and rules",
      downloadUrl: "#",
      date: "2024-01-22",
    },
  ]

  const subjects = ["Mathematics", "English", "Science", "Social Studies"]

  const filteredNotes = lessonNotes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || note.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Primary Two Lesson Notes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download comprehensive lesson notes for Primary Two students
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search lesson notes..."
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

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredNotes.map((note, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {note.subject}
                  </span>
                  <span className="text-sm text-muted-foreground">{note.date}</span>
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {note.title}
                </CardTitle>
                <CardDescription>{note.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href={note.downloadUrl} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back Navigation */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/primary/primary-2">← Back to Primary Two Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  )
  }
