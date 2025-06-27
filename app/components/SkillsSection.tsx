"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Palette, Server, Users, Zap, Award, Cpu } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript/TypeScript", years: "3+" },
        { name: "React.js", years: "3+" },
        { name: "Next.js", years: "2+" },
        { name: "Tailwind CSS", years: "2+" },
        { name: "Framer Motion", years: "1+" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", years: "2+" },
        { name: "API Development", years: "3+" },
        { name: "PHP", years: "3+" },
        { name: "CodeIgniter", years: "2+" },
        { name: "RESTful APIs", years: "3+" },
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", years: "3+" },
        { name: "PostgreSQL", years: "1+" },
        { name: "Git/GitHub", years: "3+" },
        { name: "Docker", years: "1+" },
        { name: "AWS", years: "1+" },
      ],
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "UI/UX Design", years: "2+" },
        { name: "Figma", years: "2+" },
        { name: "Canva", years: "3+" },
        { name: "Responsive Design", years: "3+" },
        { name: "Accessibility", years: "2+" },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Progressive Web Apps", years: "2+" },
        { name: "Service Workers", years: "1+" },
        { name: "Web Performance", years: "2+" },
        { name: "SEO Optimization", years: "2+" },
        { name: "Web Security", years: "1+" },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Team Leadership", years: "2+" },
        { name: "Project Management", years: "2+" },
        { name: "Communication", years: "3+" },
        { name: "Problem Solving", years: "3+" },
        { name: "Mentoring", years: "1+" },
      ],
    },
  ]

  const certifications = [
    {
      title: "Front-End Web Developer Expert",
      issuer: "Dicoding Indonesia",
      year: "2023",
      icon: <Award className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Back-End Developer Fundamentals",
      issuer: "Dicoding Indonesia",
      year: "2023",
      icon: <Server className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Git & GitHub Fundamentals",
      issuer: "Dicoding Indonesia",
      year: "2023",
      icon: <Code className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Software Engineering Competency",
      issuer: "SMK Negeri 2 Bekasi",
      year: "2021",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-full shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">Skills & Expertise</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Technical Excellence
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills and professional competencies that drive exceptional results in modern web
            development.
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
              <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-lg font-poppins text-slate-900 dark:text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex justify-between items-center p-3 bg-slate-50/50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-600/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <Badge
                        variant="outline"
                        className="text-xs border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                      >
                        {skill.years}
                      </Badge>
                    </motion.div>
                  ))}
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
          <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-center flex items-center justify-center space-x-2 text-slate-900 dark:text-white">
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
                    className="flex items-center space-x-4 p-6 bg-slate-50/50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100/50 dark:hover:bg-slate-600/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className={`p-3 bg-gradient-to-br ${cert.color} rounded-xl text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{cert.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs mt-1 border-slate-300 dark:border-slate-600">
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
    </section>
  )
}