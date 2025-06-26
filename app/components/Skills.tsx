"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Palette, Server, Users, Zap, Award } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "API Development", level: 88 },
        { name: "PHP", level: 80 },
        { name: "CodeIgniter", level: 75 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git/GitHub", level: 92 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "UI/UX Design", level: 82 },
        { name: "Figma", level: 85 },
        { name: "Canva", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Accessibility", level: 80 },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Progressive Web Apps", level: 88 },
        { name: "Service Workers", level: 85 },
        { name: "Web Performance", level: 90 },
        { name: "SEO Optimization", level: 85 },
        { name: "Web Security", level: 78 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Team Leadership", level: 92 },
        { name: "Project Management", level: 88 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Mentoring", level: 85 },
      ],
    },
  ]

  const certifications = [
    {
      title: "Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      year: "2023",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Back-End Developer Fundamentals",
      issuer: "Dicoding Indonesia",
      year: "2023",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Git & GitHub Fundamentals",
      issuer: "Dicoding Indonesia",
      year: "2023",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Software Engineering Competency",
      issuer: "SMK Negeri 2 Bekasi",
      year: "2021",
      icon: <Award className="w-5 h-5" />,
    },
  ]

  return (
    <motion.section
      id="skills"
      className="py-20 bg-muted/30"
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
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-yellow-500" />
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <Zap className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skills and professional competencies that drive exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-background to-muted/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-br ${category.color} text-white shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-yellow-500" />
                <span>Certifications & Achievements</span>
                <Award className="w-6 h-6 text-yellow-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg hover:from-muted/70 hover:to-muted/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {cert.year}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
