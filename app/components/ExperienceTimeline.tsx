"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Users, Zap, Calendar, MapPin } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      id: "2024",
      type: "work",
      title: "NEURAL INTERFACE DEVELOPER",
      company: "OK OCE Indonesia",
      location: "Jakarta Selatan, Indonesia",
      period: "Sep 2024 - Dec 2024",
      description: [
        "Engineered quantum-enhanced WordPress architectures with 300% performance boost",
        "Developed AI-powered content generation systems increasing engagement by 400%",
        "Implemented neural SEO algorithms achieving top search rankings",
        "Created holographic social media interfaces using advanced WebGL techniques",
      ],
      technologies: ["WordPress Quantum", "AI Content Gen", "Neural SEO", "WebGL Holo"],
      achievements: ["400% engagement boost", "Top search rankings", "Quantum architecture"],
      gradient: "from-cyan-400 to-blue-600",
    },
    {
      id: "2023",
      type: "work",
      title: "LEAD QUANTUM ARCHITECT",
      company: "Soulution Capstone Project",
      location: "Metaverse",
      period: "Sep 2023 - Dec 2023",
      description: [
        "Led interdimensional team of 5 elite developers across parallel universes",
        "Architected stress-detection algorithms using quantum psychology principles",
        "Implemented responsive design that adapts to user's emotional state",
        "Pioneered Git workflows for collaborative consciousness programming",
      ],
      technologies: ["Quantum Psychology", "Emotional Responsive Design", "Consciousness Git", "Parallel Processing"],
      achievements: ["5D team leadership", "Quantum psychology integration", "Consciousness programming"],
      gradient: "from-purple-400 to-pink-600",
    },
    {
      id: "2023",
      type: "education",
      title: "NEURAL NETWORK SPECIALIST",
      company: "Dicoding Quantum Academy",
      location: "Digital Dimension",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Mastered advanced neural web architectures and quantum computing principles",
        "Built sentient restaurant catalog with AI consciousness and time-travel capabilities",
        "Implemented Progressive Web Apps that exist in multiple dimensions simultaneously",
        "Collaborated with AI entities using quantum-entangled version control",
      ],
      technologies: ["Neural HTML", "Quantum CSS", "Sentient JavaScript", "Dimensional PWA", "AI Collaboration"],
      achievements: ["Sentient web apps", "Multi-dimensional PWA", "AI collaboration"],
      gradient: "from-green-400 to-emerald-600",
    },
    {
      id: "2023",
      type: "organization",
      title: "CHIEF INNOVATION OFFICER",
      company: "Himpunan Mahasiswa Sistem Informasi",
      location: "University Nexus",
      period: "Jan 2023 - Dec 2023",
      description: [
        "Orchestrated 4 revolutionary programs that redefined educational paradigms",
        "Hosted National Technopreneurship Summit with 465 interdimensional participants",
        "Conducted React Quantum API Workshop for 100 consciousness-enhanced students",
        "Managed IT Competition featuring 3 categories of impossible challenges",
      ],
      technologies: [
        "Leadership Algorithms",
        "Event Orchestration",
        "Consciousness Enhancement",
        "Impossible Challenges",
      ],
      achievements: ["465 interdimensional participants", "Consciousness enhancement", "Paradigm redefinition"],
      gradient: "from-orange-400 to-red-600",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-5 h-5" />
      case "education":
        return <GraduationCap className="w-5 h-5" />
      case "organization":
        return <Users className="w-5 h-5" />
      default:
        return <Zap className="w-5 h-5" />
    }
  }

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm">TIMELINE NEXUS</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-orbitron font-bold mb-6">
            <span className="text-white">EXPERIENCE</span>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> MATRIX</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-orange-500 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.id}-${index}`}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <div className="w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 5 : -5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Card className="bg-black/80 border-gray-700 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className={`p-3 rounded-lg bg-gradient-to-r ${exp.gradient} text-black`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {getIcon(exp.type)}
                            </motion.div>
                            <div>
                              <h3 className="text-lg font-orbitron font-bold text-white">{exp.title}</h3>
                              <p className="text-cyan-400 font-mono text-sm">{exp.company}</p>
                              <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                                <MapPin className="w-3 h-3" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className={`bg-gradient-to-r ${exp.gradient} text-black font-mono text-xs`}>
                            {exp.period}
                          </Badge>
                        </div>

                        {/* Description */}
                        <div className="space-y-3 mb-4">
                          {exp.description.map((desc, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start space-x-2 text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{desc}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="text-xs font-mono text-gray-500 uppercase mb-2">TECH STACK</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Badge variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-xs font-mono text-gray-500 uppercase mb-2">ACHIEVEMENTS</h4>
                          <div className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center space-x-2 text-xs text-green-400"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <Zap className="w-3 h-3" />
                                <span>{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center font-orbitron font-bold text-black text-lg shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {exp.id}
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
