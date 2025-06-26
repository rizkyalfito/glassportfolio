"use client"

import { motion } from "framer-motion"
import { Terminal, Code, Zap, Heart, Coffee, Cpu } from "lucide-react"

export default function CyberFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "NEURAL_LINKS",
      links: ["Home", "About", "Skills", "Projects", "Experience", "Contact"],
    },
    {
      title: "TECH_STACK",
      links: ["Next.js Quantum", "React Neural", "TypeScript AI", "3D WebGL", "Framer Motion", "Node.js Core"],
    },
    {
      title: "PROTOCOLS",
      links: ["API Documentation", "Source Code", "License", "Privacy Policy", "Terms of Service", "Bug Reports"],
    },
  ]

  return (
    <motion.footer
      className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-500/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                borderColor: ["rgba(6, 182, 212, 0.1)", "rgba(168, 85, 247, 0.2)", "rgba(6, 182, 212, 0.1)"],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div className="relative" whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                <Terminal className="w-10 h-10 text-cyan-400" />
                <motion.div
                  className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold">
                  <span className="text-cyan-400">RIZKY</span>
                  <span className="text-white">.DEV</span>
                </h3>
                <p className="text-xs font-mono text-gray-400">ELITE_CODE_ARCHITECT</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Elite developer crafting impossible digital experiences with quantum-enhanced technologies and
              neural-powered solutions.
            </p>

            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Code className="w-4 h-4" />
              <span>Built with Next.js Quantum & Framer Motion Neural</span>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-orbitron font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-mono flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all duration-300 mr-2"></span>
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* System Status */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="text-sm font-mono text-gray-400">SYSTEM_STATUS: ONLINE</span>
            </div>
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-3 h-3 bg-cyan-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />
              <span className="text-sm font-mono text-gray-400">NEURAL_NETWORK: ACTIVE</span>
            </div>
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-3 h-3 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
              <span className="text-sm font-mono text-gray-400">QUANTUM_CORE: OPERATIONAL</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center text-gray-400 text-sm font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <span>Crafted with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.span>
              <span>and</span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="mx-2"
              >
                <Coffee className="w-4 h-4 text-yellow-600" />
              </motion.span>
              <span>by Rizky Alfito Hadi © {currentYear}</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-sm font-mono text-gray-400">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Powered by Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-mono text-gray-400">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Available for hire</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
