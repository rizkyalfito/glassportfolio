"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Terminal, Send, Mail, Phone, MapPin, Linkedin, Github, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactTerminal() {
  const [terminalText, setTerminalText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const terminalLines = [
    "$ initializing_contact_protocol...",
    "$ loading_neural_interface...",
    "$ establishing_quantum_connection...",
    "$ contact_matrix_ready",
    "$ awaiting_transmission...",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < terminalLines.length) {
        setTerminalText((prev) => prev + terminalLines[currentLine] + "\n")
        setCurrentLine((prev) => prev + 1)
      }
    }, 800)

    return () => clearInterval(timer)
  }, [currentLine])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate quantum transmission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "TRANSMISSION SUCCESSFUL",
      description: "Your message has been quantum-encrypted and transmitted to the neural network.",
    })

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "NEURAL_EMAIL",
      value: "ikyalf21@gmail.com",
      href: "mailto:ikyalf21@gmail.com",
      gradient: "from-red-400 to-pink-500",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "QUANTUM_PHONE",
      value: "+62 856 9576 1374",
      href: "tel:+6285695761374",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "COORDINATES",
      value: "Bekasi, Indonesia",
      href: "#",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "RESPONSE_TIME",
      value: "< 24 hours",
      href: "#",
      gradient: "from-purple-400 to-pink-500",
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Terminal className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-mono text-sm">CONTACT PROTOCOL</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-orbitron font-bold mb-6">
            <span className="text-white">INITIATE</span>
            <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent"> CONNECTION</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Terminal Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/90 border-cyan-500/30 backdrop-blur-xl mb-8">
              <CardContent className="p-0">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-cyan-500/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400 text-sm font-mono">
                    <Terminal className="w-4 h-4" />
                    <span>contact@rizky.dev</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm min-h-[200px]">
                  <pre className="text-green-400 whitespace-pre-wrap">{terminalText}</pre>
                  <motion.span
                    className="text-green-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    █
                  </motion.span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="bg-black/80 border-gray-700 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-r ${method.gradient} text-black`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {method.icon}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-mono text-gray-500 uppercase">{method.label}</p>
                          <p className="text-sm font-mono text-white truncate">{method.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {[
                { href: "https://github.com/rizkyalfito", icon: Github, gradient: "from-gray-600 to-gray-800" },
                { href: "https://linkedin.com/in/rizkyalfito", icon: Linkedin, gradient: "from-blue-600 to-blue-800" },
                { href: "mailto:ikyalf21@gmail.com", icon: Mail, gradient: "from-red-600 to-red-800" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gradient-to-r ${social.gradient} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/90 border-purple-500/30 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <motion.div
                    className="p-3 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 text-black"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Send className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">QUANTUM TRANSMISSION</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-mono text-gray-400 mb-2">NAME_INPUT</label>
                      <Input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter designation..."
                        className="bg-gray-900/50 border-gray-600 text-white font-mono focus:border-cyan-500"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-mono text-gray-400 mb-2">EMAIL_PROTOCOL</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="neural.address@domain.net"
                        className="bg-gray-900/50 border-gray-600 text-white font-mono focus:border-cyan-500"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-mono text-gray-400 mb-2">SUBJECT_LINE</label>
                    <Input
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Mission briefing, collaboration request..."
                      className="bg-gray-900/50 border-gray-600 text-white font-mono focus:border-cyan-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-mono text-gray-400 mb-2">MESSAGE_PAYLOAD</label>
                    <Textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Transmit your mission parameters, project specifications, timeline requirements, and any classified information..."
                      className="bg-gray-900/50 border-gray-600 text-white font-mono focus:border-cyan-500 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-orbitron font-bold py-4 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          />
                          TRANSMITTING...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          EXECUTE TRANSMISSION
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
