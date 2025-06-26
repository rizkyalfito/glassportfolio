"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Eye, GitFork } from "lucide-react"
import Image from "next/image"

export default function ProjectsHex() {
  const projects = [
    {
      id: "01",
      title: "NEURAL STRESS ANALYZER",
      description:
        "Advanced AI-powered stress detection system using machine learning algorithms and real-time biometric analysis.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TensorFlow.js", "WebGL", "AI/ML", "Real-time Analytics"],
      category: "AI/ML",
      status: "PRODUCTION",
      stats: { stars: 156, forks: 42, views: "12.5K" },
      gradient: "from-cyan-400 to-blue-600",
      links: { demo: "#", github: "#" },
    },
    {
      id: "02",
      title: "QUANTUM THESIS PLATFORM",
      description:
        "Revolutionary thesis management platform with blockchain verification and collaborative AI writing assistance.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Blockchain", "OpenAI", "WebRTC", "Quantum Computing"],
      category: "BLOCKCHAIN",
      status: "BETA",
      stats: { stars: 89, forks: 23, views: "8.2K" },
      gradient: "from-purple-400 to-pink-600",
      links: { demo: "#", github: "#" },
    },
    {
      id: "03",
      title: "HOLOGRAPHIC RESTAURANT",
      description: "Immersive 3D restaurant discovery platform with AR menu visualization and neural taste prediction.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Three.js", "WebXR", "PWA", "AR/VR", "Neural Networks"],
      category: "3D/AR",
      status: "LIVE",
      stats: { stars: 234, forks: 67, views: "18.9K" },
      gradient: "from-green-400 to-emerald-600",
      links: { demo: "#", github: "#" },
    },
    {
      id: "04",
      title: "CYBERPUNK INVENTORY",
      description: "Futuristic inventory management system with holographic interface and quantum data processing.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Quantum DB", "Hologram UI", "Cyber Security", "IoT"],
      category: "ENTERPRISE",
      status: "ARCHIVED",
      stats: { stars: 45, forks: 12, views: "3.1K" },
      gradient: "from-orange-400 to-red-600",
      links: { demo: "#", github: "#" },
    },
    {
      id: "05",
      title: "MATRIX CODE EDITOR",
      description: "Revolutionary code editor with AI pair programming and real-time collaboration in virtual reality.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Electron", "Monaco Editor", "WebRTC", "AI Assistant", "VR"],
      category: "TOOLS",
      status: "DEVELOPMENT",
      stats: { stars: 312, forks: 89, views: "25.7K" },
      gradient: "from-pink-400 to-purple-600",
      links: { demo: "#", github: "#" },
    },
    {
      id: "06",
      title: "NEURAL BOOKSTORE",
      description: "AI-powered bookstore with personalized recommendations and immersive reading experiences.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Svelte", "Machine Learning", "3D Graphics", "NLP", "Recommendation Engine"],
      category: "E-COMMERCE",
      status: "CONCEPT",
      stats: { stars: 78, forks: 19, views: "5.4K" },
      gradient: "from-yellow-400 to-orange-600",
      links: { demo: "#", github: "#" },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PRODUCTION":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "BETA":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "LIVE":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "DEVELOPMENT":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "ARCHIVED":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      case "CONCEPT":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-mono text-sm">PROJECT NEXUS</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-orbitron font-bold mb-6">
            <span className="text-white">CODE</span>
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              ARTIFACTS
            </span>
          </h2>
        </motion.div>

        {/* Hexagonal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group"
            >
              <Card className="bg-black/80 border-gray-700 backdrop-blur-xl overflow-hidden h-full hover:border-cyan-500/50 transition-all duration-500 relative">
                {/* Project ID */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center font-orbitron font-bold text-black text-sm`}
                  >
                    {project.id}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`${getStatusColor(project.status)} font-mono text-xs`}>{project.status}</Badge>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm font-mono">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitFork className="w-4 h-4 text-cyan-400" />
                            <span>{project.stats.forks}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4 text-purple-400" />
                            <span>{project.stats.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Holographic effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    animate={{
                      background: [
                        `linear-gradient(45deg, transparent, rgba(0,255,255,0.1), transparent)`,
                        `linear-gradient(225deg, transparent, rgba(255,0,255,0.1), transparent)`,
                        `linear-gradient(45deg, transparent, rgba(0,255,255,0.1), transparent)`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300 border-gray-600">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${project.gradient} text-black font-bold hover:opacity-90`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DEPLOY
                      </Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        SOURCE
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>

                {/* 3D Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none"
                  animate={{
                    borderImage: [
                      "linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff) 1",
                      "linear-gradient(225deg, #00ffff, #ff00ff, #ffff00, #00ffff) 1",
                      "linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff) 1",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  style={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
