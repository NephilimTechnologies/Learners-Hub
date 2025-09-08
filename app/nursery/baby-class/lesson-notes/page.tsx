"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Search, Download } from "lucide-react"
import Link from "next/link"

const lessonNotes = [
  {
    id: 1,
    title: "Letter Recognition - A to E",
    subject: "Literacy",
    description:
      "Introduction to uppercase and lowercase letters A, B, C, D, E with tracing exercises and phonetic sounds",
    date: "2024-01-15",
    url: "/baby-class/literacy/letter-recognition-a-e.pdf",
  },
  {
    id: 2,
    title: "Number Recognition - 1 to 5",
    subject: "Mathematics",
    description: "Basic number recognition and counting from 1 to 5 with visual aids and counting objects",
    date: "2024-01-16",
    url: "/baby-class/mathematics/number-recognition-1-5.pdf",
  },
  {
    id: 3,
    title: "Body Parts and Health",
    subject: "Health Habits",
    description: "Learning about basic body parts, personal hygiene, and simple health habits for young children",
    date: "2024-01-17",
    url: "/baby-class/health/body-parts-health.pdf",
  },
  {
    id: 4,
    title: "Colors and Shapes",
    subject: "Creative Arts",
    description: "Introduction to primary colors (red, blue, yellow) and basic shapes (circle, square, triangle)",
    date: "2024-01-18",
    url: "/baby-class/arts/colors-shapes.pdf",
  },
  {
    id: 5,
    title: "Letter Recognition - F to J",
    subject: "Literacy",
    description: "Continuing with letters F, G, H, I, J with phonetic sounds and simple word formation",
    date: "2024-01-22",
    url: "/baby-class/literacy/letter-recognition-f-j.pdf",
  },
  {
    id: 6,
    title: "Number Recognition - 6 to 10",
    subject: "Mathematics",
    description: "Advanced number recognition from 6 to 10 with counting exercises and number writing practice",
    date: "2024-01-23",
    url: "/baby-class/mathematics/number-recognition-6-10.pdf",
  },
  {
    id: 7,
    title: "My Family and Friends",
    subject: "Social Studies",
    description: "Understanding family relationships, friendship, and basic social interactions",
    date: "2024-01-24",
    url: "/baby-class/social/family-friends.pdf",
  },
  {
    id: 8,
    title: "Animals and Their Sounds",
    subject: "Science",
    description: "Introduction to common animals, their sounds, and basic animal characteristics",
    date: "2024-01-25",
    url: "/baby-class/science/animals-sounds.pdf",
  },
  {
    id: 9,
    title: "Good Manners and Behavior",
    subject: "Health Habits",
    description: "Teaching please, thank you, sharing, and other good manners for young children",
    date: "2024-01-26",
    url: "/baby-class/health/good-manners.pdf",
  },
  {
    id: 10,
    title: "Letter Recognition - K to O",
    subject: "Literacy",
    description: "Learning letters K, L, M, N, O with tracing activities and sound recognition",
    date: "2024-01-29",
    url: "/baby-class/literacy/letter-recognition-k-o.pdf",
  },
  {
    id: 11,
    title: "Simple Addition - 1+1 to 3+2",
    subject: "Mathematics",
    description: "Introduction to basic addition using objects and visual aids for numbers 1-5",
    date: "2024-01-30",
    url: "/baby-class/mathematics/simple-addition.pdf",
  },
  {
    id: 12,
    title: "Weather and Seasons",
    subject: "Science",
    description: "Understanding different weather conditions and basic seasonal changes",
    date: "2024-01-31",
    url: "/baby-class/science/weather-seasons.pdf",
  },
  {
    id: 13,
    title: "Drawing and Coloring Skills",
    subject: "Creative Arts",
    description: "Developing fine motor skills through drawing lines, circles, and basic coloring techniques",
    date: "2024-02-01",
    url: "/baby-class/arts/drawing-coloring.pdf",
  },
  {
    id: 14,
    title: "Safety at Home and School",
    subject: "Health Habits",
    description: "Basic safety rules for home and school environments, stranger awareness",
    date: "2024-02-02",
    url: "/baby-class/health/safety-rules.pdf",
  },
  {
    id: 15,
    title: "Letter Recognition - P to T",
    subject: "Literacy",
    description: "Continuing alphabet learning with letters P, Q, R, S, T and phonetic practice",
    date: "2024-02-05",
    url: "/baby-class/literacy/letter-recognition-p-t.pdf",
  },
]

export default function BabyClassLessonNotesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredNotes, setFilteredNotes] = useState(lessonNotes)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredNotes(lessonNotes)
    } else {
      const filtered = lessonNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.subject.toLowerCase().includes(query.toLowerCase()) ||
          note.description.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredNotes(filtered)
    }
  }

  const subjects = [...new Set(lessonNotes.map((note) => note.subject))]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/nursery" className="hover:text-primary">
            Nursery
          </Link>
          <span>/</span>
          <Link href="/nursery/baby-class" className="hover:text-primary">
            Baby Class
          </Link>
          <span>/</span>
          <span className="text-foreground">Lesson Notes</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4 text-balance">Baby Class Lesson Notes</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Access comprehensive lesson notes for Baby Class covering literacy, mathematics, health habits, creative
            arts, science, and social studies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search lesson notes..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Subject Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant={searchQuery === "" ? "default" : "outline"} size="sm" onClick={() => handleSearch("")}>
              All Subjects
            </Button>
            {subjects.map((subject) => (
              <Button key={subject} variant="outline" size="sm" onClick={() => handleSearch(subject)}>
                {subject}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground text-center">
            Showing {filteredNotes.length} of {lessonNotes.length} lesson notes
          </p>
        </div>

        {/* Lesson Notes Grid */}
        {filteredNotes.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No lesson notes found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{note.subject}</Badge>
                  </div>
                  <CardTitle className="text-lg">{note.title}</CardTitle>
                  <CardDescription className="text-sm">{note.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{new Date(note.date).toLocaleDateString()}</span>
                    <Button size="sm" asChild>
                      <Link href={note.url}>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
