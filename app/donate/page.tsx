"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Smartphone, CreditCard } from "lucide-react"
import Image from "next/image"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400 flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8" />
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl mb-4 text-balance">Support Our Mission</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Help us keep Learners Hub running and continue providing free educational resources to students across
            Uganda. Every contribution makes a difference.
          </p>
        </div>

        {/* Donation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Airtel Money */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Image src="/airtel.jpg" alt="Airtel Money" width={120} height={80} className="rounded-lg" />
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <Smartphone className="h-5 w-5" />
                Airtel Money
              </CardTitle>
              <CardDescription>Send money using Airtel Mobile Money</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Steps to Send Money:</h4>
                <ol className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                      1
                    </span>
                    <span>Dial *165#</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                      2
                    </span>
                    <span>Select option 1</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                      3
                    </span>
                    <span>Select option 1 again</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                      4
                    </span>
                    <span>
                      Enter our mobile money number:
                      <button
                        onClick={() => navigator.clipboard.writeText("0753979539")}
                        className="ml-1 font-mono font-bold text-primary hover:bg-primary/10 px-2 py-1 rounded transition-colors cursor-pointer"
                        title="Click to copy"
                      >
                        0753979539
                      </button>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                      5
                    </span>
                    <span>Select option 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                      6
                    </span>
                    <span>Enter amount</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                      7
                    </span>
                    <span>Enter your mobile money PIN</span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Visa Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Image src="/visa.jpg" alt="Visa Card" width={120} height={80} className="rounded-lg" />
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <CreditCard className="h-5 w-5" />
                Visa Card
              </CardTitle>
              <CardDescription>Send money using Visa card transfer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h4 className="font-semibold mb-3">Account Details:</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-muted-foreground">Account Number:</span>
                    <button
                      onClick={() => navigator.clipboard.writeText("1004101515985")}
                      className="block font-mono text-lg font-bold text-primary hover:bg-primary/10 px-3 py-2 rounded transition-colors cursor-pointer mx-auto mt-1"
                      title="Click to copy"
                    >
                      1004101515985
                    </button>
                  </div>
                  <div className="text-sm text-muted-foreground">Equity Account Number</div>
                  <div className="text-sm text-muted-foreground">Click the account number to copy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsor Recognition */}
        <Card className="bg-muted/30">
          <CardContent className="p-8 text-center">
            <h3 className="font-playfair font-bold text-2xl mb-4">Proudly Sponsored By</h3>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-primary">Nephilim Technologies</p>
              <p className="text-muted-foreground">CEO: Walusimbi Mathew</p>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto text-pretty">
                Committed to empowering education through innovative technology solutions and making quality learning
                resources accessible to all students.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
