"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Server, Brain, Cpu, Shield, Rocket } from "lucide-react"

export default function SkillsMatrix() {
  const skillCategories = [
    {
      title: "NEURAL FRONTEND",
      icon: <Code className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "React Quantum", level: 98, exp: "5Y" },
        { name: "Next.js Fusion", level: 95, exp: "4Y" },
        { name: "TypeScript AI", level: 92, exp: "3Y" },
        { name: "3D WebGL", level: 88, exp: "2Y" },
        { name: "Framer Motion", level: 90, exp: "3Y" },
      ],
    },
    {
      title: "BACKEND MATRIX",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js Core", level: 90, exp: "4Y" },
        { name: "API Architecture", level: 93, exp: "4Y" },
        { name: "Microservices", level: 85, exp: "2Y" },
        { name: "GraphQL", level: 82, exp: "2Y" },
        { name: "Docker Swarm", level: 78, exp: "1Y" },
      ],
    },
    {
      title: "DATA NEXUS",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 88, exp: "3Y" },
        { name: "MongoDB", level: 85, exp: "2Y" },
        { name: "Redis Cache", level: 80, exp: "2Y" },
        { name: "Prisma ORM", level: 87, exp: "2Y" },
        { name: "Data Mining", level: 75, exp: "1Y" },
      ],
    },
    {
      title: "CLOUD FORGE",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "AWS Lambda", level: 82, exp: "2Y" },
        { name: "Vercel Edge", level: 90, exp: "3Y" },
        { name: "Docker", level: 85, exp: "2Y" },
        { name: "Kubernetes", level: 70, exp: "1Y" },
        { name: "CI/CD Pipeline", level: 88, exp: "3Y" },
      ],
    },
    {
      title: "AI PROTOCOLS",
      icon: <Brain className="w-6 h-6" />,
      color: "from-pink-400 to-purple-500",
      skills: [
        { name: "Machine Learning", level: 78, exp: "1Y" },
        { name: "Neural Networks", level: 75, exp: "1Y" },
        { name: "OpenAI API", level: 85, exp: "2Y" },
        { name: "Computer Vision", level: 70, exp: "1Y" },
        { name: "NLP Processing", level: 72, exp: "1Y" },
      ],
    },
    {
      title: "SECURITY SHIELD",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-400 to-pink-500",
      skills: [
        { name: "OAuth 2.0", level: 88, exp: "3Y" },
        { name: "JWT Tokens", level: 90, exp: "3Y" },
        { name: "Encryption", level: 82, exp: "2Y" },
        { name: "OWASP", level: 78, exp: "2Y" },
        { name: "Penetration Testing", level: 70, exp: "1Y" },
      ],
    },
  ]

  const certifications = [
    { name: "AWS Certified Solutions Architect", status: "ACTIVE", color: "text-orange-400" },
    { name: "Google Cloud Professional", status: "ACTIVE", color: "text-blue-400" },
    { name: "Kubernetes Administrator", status: "PENDING", color: "text-yellow-400" },
    { name: "Ethical Hacker Certified", status: "ACTIVE", color: "text-red-400" },
  ]

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">SKILL MATRIX</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-orbitron font-bold mb-6">
            <span className="text-white">TECH</span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> ARSENAL</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="bg-black/50 border-gray-700 backdrop-blur-xl h-full hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-black`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg font-orbitron font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                              {skill.exp}
                            </Badge>
                            <span className="text-xs font-mono text-cyan-400">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/20 rounded-full"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-black/50 border-purple-500/30 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  className="p-3 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 text-black"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket className="w-6 h-6" />
                </motion.div>
                <h3 className="text-2xl font-orbitron font-bold text-white">CERTIFICATION MATRIX</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-center justify-between p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <div>
                      <h4 className="font-mono text-sm text-white">{cert.name}</h4>
                      <p className={`text-xs font-mono ${cert.color}`}>{cert.status}</p>
                    </div>
                    <motion.div
                      className={`w-3 h-3 rounded-full ${cert.status === "ACTIVE" ? "bg-green-400" : "bg-yellow-400"}`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
