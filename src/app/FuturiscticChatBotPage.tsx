import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircleIcon, ZapIcon, ShieldIcon, BrainIcon, ChevronRightIcon } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0"></div>
      <header className="relative z-10 px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MessageCircleIcon className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">NeoChat AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The Future of Conversation is <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Here</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience AI-powered chat that learns, adapts, and revolutionizes the way you communicate.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  Get Started
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Cutting-Edge Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 transition-colors">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-blue-500/10 p-3 text-blue-400">
                    <ZapIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">Quantum-Speed Responses</h3>
                  <p className="text-center text-gray-400">
                    Harness the power of quantum computing for instantaneous, intelligent replies.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 transition-colors">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-purple-500/10 p-3 text-purple-400">
                    <ShieldIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">Neural Encryption</h3>
                  <p className="text-center text-gray-400">
                    Advanced AI-driven security that evolves to protect your data in real-time.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/80 transition-colors">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-pink-500/10 p-3 text-pink-400">
                    <BrainIcon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400">Cognitive Adaptation</h3>
                  <p className="text-center text-gray-400">
                    Our AI doesn&apos;t just learn; it evolves, providing an ever-improving user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Step into the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Future</span>?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the AI revolution and transform the way you interact with technology.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input 
                    className="max-w-lg flex-1 bg-gray-900/50 border-gray-800 text-white placeholder-gray-400 focus:ring-blue-500" 
                    placeholder="Enter your email" 
                    type="email" 
                  />
                  <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-blue-400" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 NeoChat AI Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-blue-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-blue-400 transition-colors" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}