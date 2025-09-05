import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, GraduationCap, Users, Search, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const educationLevels = [
    {
      title: "Nursery Education",
      description: "Baby Class, Middle Class, Top Class",
      icon: Users,
      href: "/nursery",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },
    {
      title: "Primary Education",
      description: "Primary 1 - Primary 7",
      icon: BookOpen,
      href: "/primary",
      color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
    },
    {
      title: "Secondary Education",
      description: "Senior 1 - Senior 6",
      icon: GraduationCap,
      href: "/secondary",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    },
  ]

  const resources = [
    {
      title: "Lesson Notes",
      description: "Comprehensive notes for all subjects",
      icon: FileText,
      count: "500+",
    },
    {
      title: "Past Papers",
      description: "Previous examination papers",
      icon: Search,
      count: "200+",
    },
    {
      title: "Schemes of Work",
      description: "Structured learning plans",
      icon: BookOpen,
      count: "150+",
    },
    {
      title: "Holiday Packages",
      description: "Vacation learning materials",
      icon: Download,
      count: "100+",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.jpg"
              alt="Learners Hub Logo"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-balance mb-6">
            New Curriculum Notes
            <span className="text-primary block">(NLSC)</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">"Educating the Nation"</p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Access comprehensive study materials, lesson notes, past papers, and schemes of work for nursery, primary,
            and secondary education levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/search">
                <Search className="mr-2 h-5 w-5" />
                Search Resources
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/donate">Support Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Education Levels */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-balance">
              Choose Your Education Level
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Find resources tailored to your specific grade and curriculum needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationLevels.map((level) => (
              <Card
                key={level.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${level.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <level.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-playfair text-xl">{level.title}</CardTitle>
                  <CardDescription className="text-base">{level.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={level.href}>Explore Resources</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-4 text-balance">Available Resources</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive study materials to support your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <Card key={resource.title} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{resource.count}</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Channel CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="font-playfair font-bold text-2xl md:text-3xl mb-4 text-balance">
                Join Our WhatsApp Channel
              </h3>
              <p className="text-lg mb-6 text-pretty opacity-90">
                Get instant updates on new resources, study tips, and educational content
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://whatsapp.com/channel/0029VbBL8z4C1Fu95tXngj3T"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Channel
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
