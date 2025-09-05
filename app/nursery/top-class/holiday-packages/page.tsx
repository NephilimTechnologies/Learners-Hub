"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample holiday packages data for middle class
const holidayPackagesData = [
  {
    id: 1,
    title: "December Holiday Fun Package",
    holiday: "December",
    year: "2024",
    type: "Fun Activities",
    duration: "2 weeks",
    description: "Exciting Christmas-themed activities including coloring, simple crafts, and festive learning games",
    downloadUrl: "/packages/baby-class-december-2024.pdf",
    previewUrl: "/preview/baby-class-december-2024",
    activities: ["Coloring", "Crafts", "Games", "Stories"],
  },
  {
    id: 2,
    title: "Easter Holiday Learning Package",
    holiday: "Easter",
    year: "2024",
    type: "Learning Activities",
    duration: "1 week",
    description: "Spring-themed educational activities focusing on nature, colors, and basic counting",
    downloadUrl: "/packages/baby-class-easter-2024.pdf",
    previewUrl: "/preview/baby-class-easter-2024",
    activities: ["Nature Study", "Counting", "Colors", "Songs"],
  },
  {
    id: 3,
    title: "Mid-Term Break Activity Pack",
    holiday: "Mid-Term",
    year: "2024",
    type: "Review Activities",
    duration: "3 days",
    description: "Quick review activities to keep learning momentum during mid-term break",
    downloadUrl: "/packages/baby-class-midterm-2024.pdf",
    previewUrl: "/preview/baby-class-midterm-2024",
    activities: ["Review Games", "Puzzles", "Drawing", "Reading"],
  },
  {
    id: 4,
    title: "Summer Holiday Adventure Package",
    holiday: "Summer",
    year: "2023",
    type: "Adventure Learning",
    duration: "4 weeks",
    description: "Long summer break package with outdoor-themed activities and basic skill reinforcement",
    downloadUrl: "/packages/baby-class-summer-2023.pdf",
    previewUrl: "/preview/baby-class-summer-2023",
    activities: ["Outdoor Games", "Water Play", "Garden Learning", "Art"],
  },
  {
    id: 5,
    title: "New Year Holiday Package",
    holiday: "New Year",
    year: "2024",
    type: "Celebration Activities",
    duration: "1 week",
    description: "New Year celebration activities with goal-setting games and reflection exercises for young learners",
    downloadUrl: "/packages/baby-class-newyear-2024.pdf",
    previewUrl: "/preview/baby-class-newyear-2024",
    activities: ["Goal Games", "Reflection", "Celebration", "Planning"],
  },
  {
    id: 6,
    title: "October Half-Term Package",
    holiday: "October Break",
    year: "2024",
    type: "Autumn Activities",
    duration: "1 week",
    description: "Autumn-themed learning activities including leaf collection, weather observation, and harvest games",
    downloadUrl: "/packages/baby-class-october-2024.pdf",
    previewUrl: "/preview/baby-class-october-2024",
    activities: ["Nature Collection", "Weather Study", "Harvest Games", "Crafts"],
  },
]

export default function TopClassHolidayPackagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedHoliday, setSelectedHoliday] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  // Get unique values for filters
  const holidays = [...new Set(holidayPackagesData.map((pkg) => pkg.holiday))]
  const years = [...new Set(holidayPackagesData.map((pkg) => pkg.year))]
  const types = [...new Set(holidayPackagesData.map((pkg) => pkg.type))]

  // Filter holiday packages based on search and filters
  const filteredPackages = holidayPackagesData.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.activities.some((activity) => activity.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesHoliday = selectedHoliday === "all" || pkg.holiday === selectedHoliday
    const matchesYear = selectedYear === "all" || pkg.year === selectedYear
    const matchesType = selectedType === "all" || pkg.type === selectedType

    return matchesSearch && matchesHoliday && matchesYear && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Middle Class - Holiday Packages</h1>
          <p className="text-muted-foreground text-lg">
            Fun and educational holiday activity packages to keep learning exciting during breaks
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search holiday packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Holiday Filter */}
            <Select value={selectedHoliday} onValueChange={setSelectedHoliday}>
              <SelectTrigger className="w-full md:w-48">
                <Gift className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by Holiday" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Holidays</SelectItem>
                {holidays.map((holiday) => (
                  <SelectItem key={holiday} value={holiday}>
                    {holiday}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Year Filter */}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-32">
                <Filter className="h-4 w-4 mr-2" />
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
            Showing {filteredPackages.length} of {holidayPackagesData.length} holiday packages
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{pkg.holiday}</Badge>
                  <div className="flex gap-1">
                    <Badge variant="outline">{pkg.year}</Badge>
                    <Badge variant="outline">{pkg.duration}</Badge>
                  </div>
                </div>
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
                <CardDescription className="text-sm">{pkg.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>

                {/* Activities Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {pkg.activities.map((activity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {activity}
                    </Badge>
                  ))}
                </div>

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
        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No holiday packages found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedHoliday("all")
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
