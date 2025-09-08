"use client"

import { useState } from "react"
import { Search, Download, FileText, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function PrimaryOneSchemesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const schemesOfWork = [
    {
      title: "Mathematics Term 1 Scheme",
      subject: "Mathematics",
      description: "Complete scheme of work for Mathematics covering numbers 1-20, basic shapes, and simple addition",
      downloadUrl: "#",
      term: "Term 1",
      weeks: "12 weeks",
    },
    {
      title: "English Term 1 Scheme",
      subject: "English",
      description: "Comprehensive English scheme covering alphabet, phonics, and basic vocabulary",
      downloadUrl: "#",
      term: "Term 1",
      weeks: "12 weeks",
    },
    {
      title: "Science Term 1 Scheme",
      subject: "Science",
      description: "Science scheme covering body parts, animals, and basic environmental awareness",
      downloadUrl: "#",
      term: "Term 1",
      weeks: "12 weeks",
    },
    {
      title: "Social Studies Term 1 Scheme",
      subject: "Social Studies",
      description: "Social Studies scheme covering family, school, and community basics",
      downloadUrl: "#",
      term: "Term 1",
      weeks: "12 weeks",
    },
  ]

  const subjects = ["Mathematics", "English", "Science", "Social Studies"]

  const filteredSchemes = schemesOfWork.filter((scheme) => {
    const matchesSearch =
      scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || scheme.subject === selectedSubject
    return matchesSearch && matchesSubject
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Primary One Schemes of Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download detailed schemes of work for Primary One curriculum planning
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search schemes of work..."
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

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredSchemes.map((scheme, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {scheme.subject}
                  </span>
                  <span className="text-sm text-muted-foreground">{scheme.term}</span>
                </div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {scheme.title}
                </CardTitle>
                <CardDescription>{scheme.description}</CardDescription>
                <div className="text-sm text-muted-foreground mt-2">Duration: {scheme.weeks}</div>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href={scheme.downloadUrl} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Scheme
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
