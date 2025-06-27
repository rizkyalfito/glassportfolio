"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Phone, Mail, Award, Users, Code, Zap, Star } from "lucide-react"

export default function AboutSection() {
  const stats = [
    {
      icon: Code,
      label: "Years Experience",
      value: "3+",
      detail: "Web Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      label: "Projects Completed",
      value: "15+",
      detail: "Successful Delivery",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "10+",
      detail: "Satisfied Partners",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const highlights = [
    {
      icon: Users,
      title: "Team Leadership",
      desc: "Led multiple development teams to successful delivery",
      color: "text-blue-500",
    },
    {
      icon: Award,
      title: "Quality Driven",
      desc: "Consistent delivery of high-quality, maintainable code",
      color: "text-purple-500",
    },
    {
      icon: Code,
      title: "Modern Stack",
      desc: "Expertise in cutting-edge technologies and frameworks",
      color: "text-green-500",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
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
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">About Me</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Dedicated to creating exceptional digital experiences through innovative web solutions and cutting-edge
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Bio */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white">
                        Elite Developer
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Information Systems Student</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                      <span className="text-blue-500 font-semibold">🎓</span> Information Systems student with an
                      outstanding 3.90/4.00 GPA, demonstrating academic excellence and dedication to continuous
                      learning.
                    </p>
                    <p>
                      <span className="text-purple-500 font-semibold">🚀</span> Completed advanced certification
                      programs at Dicoding Indonesia as Full-Stack Developer, mastering both frontend and backend
                      technologies.
                    </p>
                    <p>
                      <span className="text-green-500 font-semibold">👥</span> Proven track record of leading
                      development teams and delivering innovative solutions that exceed client expectations.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">
                          Location
                        </span>
                      </div>
                      <p className="text-slate-900 dark:text-white font-medium">Bekasi, Indonesia</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase">Status</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                        <p className="text-green-600 dark:text-green-400 font-medium">Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl">
              <CardContent className="p-6">
                <h4 className="text-lg font-poppins font-semibold text-slate-900 dark:text-white mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  {[
                    { icon: Phone, text: "+62 856 9576 1374", href: "tel:+6285695761374" },
                    { icon: Mail, text: "ikyalf21@gmail.com", href: "mailto:ikyalf21@gmail.com" },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-700/50 hover:bg-slate-100/50 dark:hover:bg-slate-600/50 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                      <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {item.text}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right side - Stats & Highlights */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <motion.div
                        className="text-2xl font-poppins font-bold text-slate-900 dark:text-white mb-1"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {stat.value}
                      </motion.div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{stat.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{stat.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-xl">
              <CardContent className="p-8">
                <h4 className="text-xl font-poppins font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  Key Strengths
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-700/50 hover:bg-slate-100/50 dark:hover:bg-slate-600/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      <highlight.icon className={`w-6 h-6 ${highlight.color} mb-2`} />
                      <h5 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{highlight.title}</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{highlight.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
