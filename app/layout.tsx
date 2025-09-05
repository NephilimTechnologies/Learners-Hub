import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "New Curriculum Notes (NLSC) - Learners Hub",
  description:
    "Everyone deserves education. Access lesson notes, past papers, schemes of work and holiday packages for nursery, primary and secondary levels.",
  keywords:
    "New curriculum, New curriculum notes, Notes, past papers, new curriculum past papers, Physics, Entrepreneurship, Mathematics, English, Biology, Art, Luganda, Geography, Physics notes, Entrepreneurship notes, Mathematics notes, English notes, Biology notes, Art notes, Luganda notes, Geography notes",
  generator: "Learners Hub",
  authors: [{ name: "Nephilim Technologies", url: "https://github.com/hackerug06" }],
  creator: "Walusimbi Mathew",
  publisher: "Nephilim Technologies",
  robots: "index, follow",
  openGraph: {
    title: "New Curriculum Notes (NLSC) - Learners Hub",
    description: "Everyone deserves education. Access comprehensive study materials for all education levels.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${playfairDisplay.variable} ${sourceSans.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
