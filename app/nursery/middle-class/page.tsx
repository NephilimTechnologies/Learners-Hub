import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BookOpen, Search, Download } from "lucide-react"
import Link from "next/link"

export default function MiddleClassPage() {
  const resources = [
    {
      title: "Lesson Notes",
      description: "Comprehensive lesson notes for Baby Class",
      icon: FileText,
      href: "/nursery/baby-class/lesson-notes",
      count: "25+ Notes",
    },
    {
      title: "Schemes of Work",
      description: "Structured learning plans and curricula",
      icon: BookOpen,
      href: "/nursery/baby-class/schemes-of-work",
      count: "12+ Schemes",
    },
    {
      title: "Past Papers",
      description: "Previous examination and assessment papers",
      icon: Search,
      href: "/nursery/baby-class/past-papers",
      count: "15+ Papers",
    },
    {
      title: "Holiday Packages",
      description: "Vacation learning and activity materials",
      icon: Download,
      href: "/nursery/baby-class/holiday-packages",
      count: "8+ Packages",
    },
  ]

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
          <span className="text-foreground">Baby Class</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4 text-balance">Baby Class Resources</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Access all learning materials for Middle Class including lesson notes, schemes of work, past papers, and
            holiday packages.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription className="text-sm">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div className="text-sm font-medium text-primary">{resource.count}</div>
                <Button asChild className="w-full">
                  <Link href={resource.href}>View {resource.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access Info */}
        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <h3 className="font-playfair font-bold text-xl mb-4">Baby Class Curriculum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Core Subjects</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Basic Literacy</li>
                  <li>• Number Recognition</li>
                  <li>• Health Habits</li>
                  <li>• Creative Arts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Learning Focus</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Letter and Sound Recognition</li>
                  <li>• Basic Counting Skills</li>
                  <li>• Social Skills Development</li>
                  <li>• Motor Skills Enhancement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
      }
