"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const nurseryClasses = ["Baby Class", "Middle Class", "Top Class"]
  const primaryClasses = [
    "Primary One",
    "Primary Two",
    "Primary Three",
    "Primary Four",
    "Primary Five",
    "Primary Six",
    "Primary Seven",
  ]
  const secondaryClasses = ["Senior One", "Senior Two", "Senior Three", "Senior Four", "Senior Five", "Senior Six"]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.jpg" alt="Learners Hub Logo" width={40} height={40} className="rounded-full" />
            <div>
              <h1 className="font-playfair font-bold text-xl text-primary">Learners Hub</h1>
              <p className="text-xs text-muted-foreground">Educating the Nation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Nursery</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] gap-3 p-4">
                    {nurseryClasses.map((className) => (
                      <NavigationMenuLink key={className} asChild>
                        <Link
                          href={`/nursery/${className.toLowerCase().replace(" ", "-")}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{className}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Primary</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] grid-cols-2 gap-3 p-4">
                    {primaryClasses.map((className) => (
                      <NavigationMenuLink key={className} asChild>
                        <Link
                          href={`/primary/${className.toLowerCase().replace(" ", "-")}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{className}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Secondary</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] grid-cols-2 gap-3 p-4">
                    {secondaryClasses.map((className) => (
                      <NavigationMenuLink key={className} asChild>
                        <Link
                          href={`/secondary/${className.toLowerCase().replace(" ", "-")}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{className}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/donate"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Donate
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search notes, papers..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search notes, papers..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">NURSERY</h3>
                <div className="space-y-1">
                  {nurseryClasses.map((className) => (
                    <Link
                      key={className}
                      href={`/nursery/${className.toLowerCase().replace(" ", "-")}`}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {className}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">PRIMARY</h3>
                <div className="space-y-1">
                  {primaryClasses.map((className) => (
                    <Link
                      key={className}
                      href={`/primary/${className.toLowerCase().replace(" ", "-")}`}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {className}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">SECONDARY</h3>
                <div className="space-y-1">
                  {secondaryClasses.map((className) => (
                    <Link
                      key={className}
                      href={`/secondary/${className.toLowerCase().replace(" ", "-")}`}
                      className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {className}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/donate"
                className="block px-3 py-2 text-sm hover:bg-accent rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
      }
      
