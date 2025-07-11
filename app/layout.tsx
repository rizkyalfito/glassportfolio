import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/Navbar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Rizky Alfito Hadi - Web Developer",
  description:
    "Professional portfolio showcasing cutting-edge web development with glassmorphism design, 3D elements, and modern architecture.",
  keywords: "web developer, glassmorphism, 3D design, Next.js, React, modern portfolio",
  authors: [{ name: "Rizky Alfito Hadi" }],
  openGraph: {
    title: "Rizky Alfito Hadi - Web Developer",
    description: "Experience modern web development excellence",
    type: "website",
    url: "https://rizkyalfito.vercel.app",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 font-sans antialiased transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col w-full max-w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-1 w-full max-w-full">{children}</main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}