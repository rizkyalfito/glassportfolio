"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Calendar } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Stress Management Web App",
      description:
        'Advanced web application for stress level assessment using PSS (Perceived Stress Scale) methodology with Next.js and modern UI/UX design.',
      image: "/image.png",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "API Integration"],
      year: "2024",
      status: "Featured",
      category: "Web Application",
      links: {
        demo: "https://nextjs-stress-checker.vercel.app/",
        github: "https://github.com/rizkyalfito/nextjs-stress-checker",
      },
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Thesisprint.id Platform",
      description:
        "Comprehensive platform for thesis writing and consultation services with user management, payment integration, and real-time collaboration features.",
      image: "/thesisprint.png",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Socket.io"],
      year: "2024",
      status: "Production",
      category: "SaaS Platform",
      links: {
        demo: "https://thesisprint.id",
        github: null,
      },
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Restaurant Catalog PWA",
      description:
        "Progressive Web App for restaurant discovery with offline capabilities, advanced search, and social features for food enthusiasts.",
      image: "/easter.png",
      technologies: ["JavaScript", "PWA", "Service Workers", "IndexedDB", "Web APIs"],
      year: "2023",
      status: "Open Source",
      category: "Progressive Web App",
      links: {
        demo: "https://easter-restaurant.vercel.app", 
        github:"https://github.com/rizkyalfito/easter",
      },
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Soulution Stress Management",
      description:
        "Collaborative capstone project for mental health management with team of 5 developers, featuring psychological assessments and wellness tracking.",
      image: "/soulution.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Local Storage"],
      year: "2023",
      status: "Capstone",
      category: "Health Tech",
      links: {
        demo: null,
        github: "https://github.com/rizkyalfito/soulution",
      },
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Modern Bookstore Website",
      description:
        "Elegant static website for bookstore with modern design, book catalog, and enhanced user experience for book lovers.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
      year: "2022",
      status: "Completed",
      category: "Static Website",
      links: {
        demo: null,
        github: null,
      },
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Inventory Management System",
      description:
        "Full-featured inventory management system built with CodeIgniter 3, featuring CRUD operations, reporting, and user management.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["CodeIgniter 3", "PHP", "MySQL", "Bootstrap", "jQuery"],
      year: "2018",
      status: "Legacy",
      category: "Management System",
      links: {
        demo: null,
        github: null,
      },
      gradient: "from-indigo-500 to-purple-600",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured":
        return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
      case "Production":
        return "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
      case "Open Source":
        return "bg-gradient-to-r from-blue-400 to-cyan-500 text-white"
      case "Capstone":
        return "bg-gradient-to-r from-purple-400 to-pink-500 text-white"
      case "Completed":
        return "bg-gradient-to-r from-gray-400 to-gray-600 text-white"
      case "Legacy":
        return "bg-gradient-to-r from-amber-400 to-yellow-600 text-white"
      default:
        return "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
    }
  }

  const handleLinkClick = (url: string | null) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-full shadow-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">Featured Projects</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A collection of my best work, showcasing modern web applications and innovative solutions that solve
            real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>

                  {/* Overlay with subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} font-medium`}>{project.status}</Badge>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="outline"
                      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-white/20 dark:border-slate-700/50"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{project.category}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    {/* Live Demo Button */}
                    <motion.div 
                      className="flex-1" 
                      whileHover={project.links.demo ? { scale: 1.02 } : {}} 
                      whileTap={project.links.demo ? { scale: 0.98 } : {}}
                    >
                      <Button
                        size="sm"
                        disabled={!project.links.demo}
                        onClick={() => handleLinkClick(project.links.demo)}
                        className={`w-full ${
                          project.links.demo 
                            ? `bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 shadow-lg cursor-pointer` 
                            : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>

                    {/* GitHub Button */}
                    <motion.div 
                      className="flex-1" 
                      whileHover={project.links.github ? { scale: 1.02 } : {}} 
                      whileTap={project.links.github ? { scale: 0.98 } : {}}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={!project.links.github}
                        onClick={() => handleLinkClick(project.links.github)}
                        className={`w-full ${
                          project.links.github 
                            ? 'bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-white/20 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80 cursor-pointer' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-300 dark:border-gray-600 cursor-not-allowed'
                        }`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}