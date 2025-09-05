import Link from "next/link"
import Image from "next/image"
import { Github, Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.jpg" alt="Learners Hub Logo" width={40} height={40} className="rounded-full" />
              <div>
                <h3 className="font-playfair font-bold text-lg text-primary">Learners Hub</h3>
                <p className="text-sm text-muted-foreground">Everyone deserves education</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing quality educational resources for nursery, primary, and secondary students across Uganda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                href="/nursery"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Nursery Resources
              </Link>
              <Link
                href="/primary"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Primary Resources
              </Link>
              <Link
                href="/secondary"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Secondary Resources
              </Link>
              <Link href="/donate" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Support Us
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://whatsapp.com/channel/0029VbBL8z4C1Fu95tXngj3T"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Channel</span>
              </a>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/hackerug06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/hackerug06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/@Hackerug06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Sponsor */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Powered By</h4>
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary">Nephilim Technologies</p>
              <p className="text-xs text-muted-foreground">CEO: Walusimbi Mathew</p>
              <p className="text-xs text-muted-foreground">Empowering education through technology</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Learners Hub. All rights reserved. Powered by Nephilim Technologies.
          </p>
        </div>
      </div>
    </footer>
  )
}
