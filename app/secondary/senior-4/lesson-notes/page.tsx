"use client"

import { useState } from "react"
import { Search, Download, BookOpen, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function SeniorOneNotesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const lessonNotes = [
    {
      title: "Introduction to Algebra",
      subject: "Mathematics",
      description: "Basic algebraic concepts and simple equations for Senior One",
      downloadUrl: "#",
      date: "2024-01-15",
    },
    {
      title: "Grammar and Composition",
      subject: "English",
      description: "Advanced grammar rules and essay writing techniques",
      downloadUrl: "#",
      date: "2024-01-16",
    },
    {
      title: "Introduction to Physics",
      subject: "Physics",
      description: "Basic physics concepts including motion and forces",
      downloadUrl: "#",
      date: "2024-01-17",
    },
    {
      title: "Basic Chemistry Concepts",
      subject: "Chemistry",
      description: "Introduction to atoms, molecules, and chemical reactions",
      downloadUrl: "#",
      date: "2024-01-18",
    },
    {
      title: "Cell Biology",
      subject: "Biology",
      description: "Structure and function of plant and animal cells",
      downloadUrl: "#",
      date: "2024-01-19",
    },
    {
      title: "Introduction to Entrepreneurship",
      subject: "Entrepreneurship",
      description: "Basic business concepts and entrepreneurial skills",
      downloadUrl: "#",
      date: "2024-01-20",
    },
    {
      title: "World Geography",
      subject: "Geography",
      description: "Physical and human geography of different continents",
      downloadUrl: "#",
      date: "2024-01-21",
    },
    {
      title: "Luganda Grammar",
      subject: "Luganda",
      description: "Basic Luganda grammar and vocabulary building",
      downloadUrl: "#",
      date: "2024-01-22",
    },
  ]

  const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Entrepreneurship",
    "Geography",
    "Luganda",
  ]

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Senior One Lesson Notes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download comprehensive lesson notes for Senior One students
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
            <Link href="/secondary/senior-1">← Back to Senior One Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  )
                  }
