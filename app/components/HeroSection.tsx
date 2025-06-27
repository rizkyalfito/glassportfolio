"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Sparkles, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/dist/client/link"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-blue-500" />
              </motion.div>
              <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                Available for opportunities
              </span>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
                <motion.span
                  className="block text-slate-900 dark:text-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  Rizky Alfito
                </motion.span>
              </h1>

              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-slate-700 dark:text-slate-300">
                  Elite Web Developer
                </h2>
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Crafting digital experiences</span>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Passionate web developer specializing in modern technologies and innovative solutions. I transform ideas
                into stunning, high-performance applications that deliver exceptional user experiences.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                  href="#about"
                  className="inline-block"
                  scroll={false}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 border-0"
                    onClick={() => {
                      setTimeout(() => {
                        document.getElementById('about')?.scrollIntoView({ 
                          behavior: 'smooth' 
                        })
                      }, 100)
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Let's Work Together
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="/rizky-alfito-hadi_cv.pdf" 
                  download="rizky-alfito-hadi_cv.pdf"
                  className="inline-block"
                >
                  <Button variant="outline" size="lg" className="border-2">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {[
                { href: "https://linkedin.com/in/rizkyalfito", icon: Linkedin, color: "hover:text-blue-600" },
                {
                  href: "https://github.com/rizkyalfito",
                  icon: Github,
                  color: "hover:text-slate-900 dark:hover:text-white",
                },
                { href: "mailto:ikyalf21@gmail.com", icon: Mail, color: "hover:text-red-500" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-600 dark:text-slate-400 ${social.color} transition-colors p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 2.0 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - 3D Profile */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Profile Container */}
              <motion.div
                className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-white/40 to-white/20 dark:from-slate-800/40 dark:to-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-2xl shadow-blue-500/10"
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <Image
                    src="/ppp.jpg"
                    alt="Rizky Alfito Hadi"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-2xl"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 rounded-2xl" />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 shadow-lg shadow-blue-500/25 text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">3+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg shadow-purple-500/25 text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">15+</div>
                    <div className="text-xs">Projects</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating geometric shapes */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-sm rounded-2xl border border-white/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 backdrop-blur-sm rounded-full border border-white/20"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center space-y-2 text-slate-600 dark:text-slate-400"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
