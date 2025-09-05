import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Baby } from "lucide-react"
import Link from "next/link"

export default function NurseryPage() {
  const nurseryClasses = [
    {
      title: "Baby Class",
      description: "Foundation learning for the youngest learners",
      icon: Baby,
      href: "/nursery/baby-class",
      resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
    },
    {
      title: "Middle Class",
      description: "Building essential skills and knowledge",
      icon: Users,
      href: "/nursery/middle-class",
      resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
    },
    {
      title: "Top Class",
      description: "Preparing for primary education",
      icon: BookOpen,
      href: "/nursery/top-class",
      resources: ["Lesson Notes", "Schemes of Work", "Past Papers", "Holiday Packages"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4 text-balance">Nursery Education</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Comprehensive learning resources for nursery level students. Choose your class to access lesson notes, past
            papers, and more.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {nurseryClasses.map((classItem) => (
            <Card
              key={classItem.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                  <classItem.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-playfair text-xl">{classItem.title}</CardTitle>
                <CardDescription className="text-base">{classItem.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Available Resources:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {classItem.resources.map((resource) => (
                      <li key={resource} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href={classItem.href}>Access Resources</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="bg-muted/30">
          <CardContent className="p-8 text-center">
            <h3 className="font-playfair font-bold text-2xl mb-4">About Nursery Education</h3>
            <p className="text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our nursery education resources are designed to provide a strong foundation for young learners. Each class
              level includes carefully curated materials that support cognitive development, basic literacy, numeracy
              skills, and social-emotional learning appropriate for each age group.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
