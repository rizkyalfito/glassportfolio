"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Phone, Mail, Award, Users, Code, Zap } from "lucide-react"

export default function About() {
  const stats = [
    { icon: GraduationCap, label: "Education", value: "S1 Sistem Informasi", detail: "IPK: 3.90/4.00", color: "blue" },
    { icon: Code, label: "Experience", value: "3+ Years", detail: "Web Development", color: "green" },
    { icon: Award, label: "Projects", value: "10+", detail: "Completed", color: "purple" },
    { icon: Users, label: "Certifications", value: "5+", detail: "Professional", color: "orange" },
  ]

  const highlights = [
    { icon: Zap, title: "Performance Focused", desc: "Optimized applications with 95+ PageSpeed scores" },
    { icon: Users, title: "Team Leadership", desc: "Led multiple development teams to successful project delivery" },
    { icon: Award, title: "Quality Driven", desc: "Consistent delivery of high-quality, maintainable code" },
    { icon: Code, title: "Modern Stack", desc: "Expertise in cutting-edge technologies and frameworks" },
  ]

  return (
    <motion.section
      id="about"
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a proven track record of delivering exceptional web solutions. I combine technical
            expertise with creative problem-solving to build applications that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 border-0">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-3">
                    {[
                      { icon: MapPin, text: "Bekasi, Jawa Barat, Indonesia" },
                      { icon: Phone, text: "+62 856 9576 1374" },
                      { icon: Mail, text: "ikyalf21@gmail.com" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <item.icon className="w-5 h-5 text-blue-500" />
                        <span className="text-foreground">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Professional Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As a dedicated Information Systems student with a 3.90/4.00 GPA, I've successfully completed the
                    Independent Study Program at Dicoding Indonesia as both Front-End and Back-End Developer. My
                    experience spans team leadership, innovative project development, and delivering solutions that
                    exceed expectations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-4 h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <highlight.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                      <h4 className="font-semibold mb-2 text-sm">{highlight.title}</h4>
                      <p className="text-xs text-muted-foreground">{highlight.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="p-6 text-center h-full bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {typeof stat.icon === "string" ? (
                        <span className="text-white font-bold text-lg">{stat.icon}</span>
                      ) : (
                        <stat.icon className="w-8 h-8 text-white" />
                      )}
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                    <p className="text-2xl font-bold text-blue-500 mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
