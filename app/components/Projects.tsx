"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Stress Checker Web App",
      description:
        "Advanced web application for stress level assessment using PSS (Perceived Stress Scale) methodology with Next.js and modern UI/UX design.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "API Integration"],
      year: "2025",
      status: "Featured",
      category: "Web Application",
      stats: { stars: 24, forks: 8, views: "1.2k" },
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Thesisprint.id Platform",
      description:
        "Comprehensive platform for thesis writing and consultation services with user management, payment integration, and real-time collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Socket.io"],
      year: "2024",
      status: "Production",
      category: "SaaS Platform",
      stats: { stars: 18, forks: 5, views: "890" },
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Restaurant Catalog PWA",
      description:
        "Progressive Web App for restaurant discovery with offline capabilities, advanced search, and social features for food enthusiasts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JavaScript", "PWA", "Service Workers", "IndexedDB", "Web APIs"],
      year: "2023",
      status: "Open Source",
      category: "Progressive Web App",
      stats: { stars: 32, forks: 12, views: "2.1k" },
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Soulution Stress Management",
      description:
        "Collaborative capstone project for mental health management with team of 5 developers, featuring psychological assessments and wellness tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Local Storage"],
      year: "2023",
      status: "Capstone",
      category: "Health Tech",
      stats: { stars: 15, forks: 6, views: "650" },
      links: {
        demo: "#",
        github: "#",
      },
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
      stats: { stars: 9, forks: 3, views: "420" },
      links: {
        demo: "#",
        github: "#",
      },
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
      stats: { stars: 6, forks: 2, views: "280" },
      links: {
        demo: "#",
        github: "#",
      },
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
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <motion.section
      id="projects"
      className="py-20 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work, from modern web applications to innovative solutions that solve real-world
            problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col bg-gradient-to-br from-background to-muted/20">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>

                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitFork className="w-4 h-4" />
                            <span>{project.stats.forks}</span>
                          </div>
                        </div>
                        <span className="text-xs">{project.stats.views} views</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                    </motion.div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {project.year}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <motion.p
                    className="text-muted-foreground text-sm leading-relaxed flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex space-x-3 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" variant="outline" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
