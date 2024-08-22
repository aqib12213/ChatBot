import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ZapIcon, ShieldIcon, BrainIcon } from "lucide-react";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-blue-500">
      <NavBar />
      <main className="flex-1">
        <section className="flex h-fit  w-full items-center justify-center bg-gradient-to-br from-black via-blue-900 to-black py-12 md:py-24">
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="bg-gradient-to-b from-gray-100 via-white to-gray-700 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
                  The Future of Conversation <br className="md:hidden" /> is
                  Here
                </h1>
                <p className="mx-auto max-w-[700px] italic text-gray-300 md:text-xl">
                  Experience AI-powered chat that understands,{" "}
                  <br className="md:hidden" /> learns, and evolves with you.
                </p>
              </div>
              <div className="space-x-4 pb-8">
                <Link
                  href="/#features"
                  className={buttonVariants({ variant: "default" })}
                >
                  Features
                </Link>
                <Link
                  href="/api/auth/signin"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  SignUp
                </Link>
              </div>
              <Image
                className="mt-12 aspect-auto w-full rounded-lg border-4 border-muted-foreground sm:w-1/2"
                width={500}
                height={400}
                src="/Chatbot-Screenshot.png"
                alt="ChatbotScreenshot"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full bg-gradient-to-br from-blue-900 via-black to-blue-900 py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
              Cutting-Edge Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="border border-gray-700 bg-gray-950/50 backdrop-blur-sm fade-in">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <ZapIcon className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">
                    Quantum-Speed Responses
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Harness the power of quantum algorithms for instant,
                    intelligent replies.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-700 bg-gray-950/50 backdrop-blur-sm fade-in">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <ShieldIcon className="h-12 w-12 text-green-400" />
                  <h3 className="text-xl font-bold text-white">
                    Neural Encryption
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Advanced AI-driven security protocols protect your data at
                    the synaptic level.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-700 bg-gray-950/50 backdrop-blur-sm fade-in">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <BrainIcon className="h-12 w-12 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">
                    Adaptive Cognition
                  </h3>
                  <p className="text-center text-muted-foreground">
                    Our AI evolves with each interaction, providing an
                    ever-improving user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full bg-gradient-to-br from-black via-blue-900 to-black py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
                  Step into the Future of AI
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join the ranks of visionaries already revolutionizing their
                  communication with FutureChat AI.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
              <Link
                  href="/api/auth/signin"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  SignUp Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-800 bg-primary py-6">
        <div className="container flex flex-col items-center gap-2 px-4 sm:flex-row md:px-6">
          <p className="text-xs text-muted-foreground">
            © 2024 FutureChat AI. All rights reserved.
          </p>
          <nav className="flex gap-4 text-muted-foreground sm:ml-auto sm:gap-6">
            <Link
              className="text-xs transition-colors hover:text-blue-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs transition-colors hover:text-blue-400"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
