"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Users, Calendar, MapPin, Award } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Website and Social Media Intern (MSIB)",
      company: "OK OCE Indonesia",
      location: "Jakarta Selatan, Indonesia",
      period: "Sep 2024 - Dec 2024",
      description: [
        "Developed multiple websites using WordPress with custom themes and performance optimization",
        "Created SEO-friendly blog content that increased organic traffic by 40%",
        "Designed engaging social media content using Canva, improving engagement rates",
        "Collaborated with cross-functional teams to deliver projects on time",
      ],
      skills: ["WordPress", "SEO", "Content Creation", "Canva", "Performance Optimization"],
      achievements: ["40% increase in organic traffic", "5+ websites delivered", "100% project completion rate"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      type: "work",
      title: "Lead Front End Developer",
      company: "Soulution Capstone Project",
      location: "Indonesia",
      period: "Sep 2023 - Dec 2023",
      description: [
        "Led a team of 5 developers in building a stress management web application",
        "Implemented responsive design principles ensuring 100% mobile compatibility",
        "Translated psychological assessment methods (PSS) into functional JavaScript code",
        "Established Git workflow and collaboration standards for the team",
      ],
      skills: ["Leadership", "JavaScript", "Git", "Responsive Design", "Team Management", "Psychology Integration"],
      achievements: ["Team of 5 developers", "100% mobile compatibility", "Successful project delivery"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      type: "education",
      title: "Independent Study Program - Full Stack Developer",
      company: "Dicoding Indonesia",
      location: "Indonesia",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Completed intensive web development bootcamp with focus on modern technologies",
        "Built dynamic restaurant catalog web app with API integration and offline capabilities",
        "Implemented Progressive Web App features including service workers",
        "Collaborated with 5-person team using Git version control",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "PWA", "API Integration", "Git", "Service Workers"],
      achievements: ["PWA certification", "Dynamic web app", "Team collaboration"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      type: "organization",
      title: "Head of Education Division",
      company: "Student Association of Information Systems",
      location: "Universitas Singaperbangsa Karawang",
      period: "Jan 2023 - Dec 2023",
      description: [
        "Successfully coordinated education division and executed 4 major programs",
        "Organized National Technopreneurship Webinar with 465 participants",
        "Conducted React External API Workshop for 100 internal campus participants",
        "Managed IT Competition with 3 categories at national level",
      ],
      skills: ["Leadership", "Event Management", "Public Speaking", "Team Coordination", "Project Management"],
      achievements: ["465 webinar participants", "100 workshop attendees", "National IT competition"],
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-4 h-4 xs:w-5 xs:h-5" />
      case "education":
        return <GraduationCap className="w-4 h-4 xs:w-5 xs:h-5" />
      case "organization":
        return <Users className="w-4 h-4 xs:w-5 xs:h-5" />
      default:
        return <Briefcase className="w-4 h-4 xs:w-5 xs:h-5" />
    }
  }

  return (
    <section id="experience" className="py-16 xs:py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 xs:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-3 xs:px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-full shadow-lg mb-4 xs:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-3 h-3 xs:w-4 xs:h-4 text-green-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium text-xs xs:text-sm">Professional Journey</span>
          </motion.div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-poppins font-bold mb-4 xs:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent px-2">
            Experience & Growth
          </h2>
          <p className="text-base xs:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-2">
            My career journey showcasing growth, leadership, and technical excellence in web development and technology.
          </p>
        </motion.div>

        {/* Desktop Layout: 2 columns for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="group"
            >
              <Card className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${exp.gradient} text-white shadow-lg flex-shrink-0`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {getIcon(exp.type)}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl text-slate-900 dark:text-white mb-2 leading-tight">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 leading-tight">
                          {exp.company}
                        </p>
                        <div className="flex flex-col space-y-1 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className={`bg-gradient-to-r ${exp.gradient} text-white font-medium text-sm flex-shrink-0`}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-base text-slate-600 dark:text-slate-400 flex items-start leading-relaxed"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-700 dark:text-slate-300 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-700 dark:text-slate-300 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile and Tablet Layout: Single column */}
        <div className="lg:hidden space-y-6 xs:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-3 xs:pb-4">
                  <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-3 xs:gap-4">
                    <div className="flex items-start space-x-3 xs:space-x-4">
                      <motion.div
                        className={`p-3 xs:p-4 rounded-xl xs:rounded-2xl bg-gradient-to-br ${exp.gradient} text-white shadow-lg flex-shrink-0`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {getIcon(exp.type)}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg xs:text-xl text-slate-900 dark:text-white mb-1 leading-tight">
                          {exp.title}
                        </CardTitle>
                        <p className="text-base xs:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 leading-tight">
                          {exp.company}
                        </p>
                        <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 space-y-1 xs:space-y-0 text-xs xs:text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
                            <span className="truncate">{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className={`bg-gradient-to-r ${exp.gradient} text-white font-medium text-xs xs:text-sm self-start xs:self-auto flex-shrink-0`}>
                      {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5 xs:space-y-6">
                  <ul className="space-y-2 xs:space-y-3">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-sm xs:text-base text-slate-600 dark:text-slate-400 flex items-start leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-2 xs:mr-3 flex-shrink-0"></span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 gap-5 xs:gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 xs:mb-3 text-xs xs:text-sm uppercase tracking-wide text-slate-700 dark:text-slate-300 flex items-center">
                        <Award className="w-3 h-3 xs:w-4 xs:h-4 mr-2 text-blue-500 flex-shrink-0" />
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5 xs:gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 xs:mb-3 text-xs xs:text-sm uppercase tracking-wide text-slate-700 dark:text-slate-300 flex items-center">
                        <Award className="w-3 h-3 xs:w-4 xs:h-4 mr-2 text-green-500 flex-shrink-0" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-xs xs:text-sm text-slate-600 dark:text-slate-400 flex items-start"
                          >
                            <span className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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