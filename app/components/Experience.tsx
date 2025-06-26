"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Users, Calendar } from "lucide-react"

export default function Experience() {
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
        return <Briefcase className="w-5 h-5" />
    }
  }

  const getGradient = (type: string) => {
    switch (type) {
      case "work":
        return "from-blue-500 to-cyan-500"
      case "education":
        return "from-green-500 to-emerald-500"
      case "organization":
        return "from-purple-500 to-pink-500"
      default:
        return "from-blue-500 to-cyan-500"
    }
  }

  return (
    <motion.section
      id="experience"
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My career path in technology and web development, showcasing growth, leadership, and technical excellence
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-muted/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-4 rounded-full bg-gradient-to-br ${getGradient(exp.type)} text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {getIcon(exp.type)}
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="outline" className="text-sm font-medium">
                        {exp.period}
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.ul
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {exp.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground flex items-start leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
