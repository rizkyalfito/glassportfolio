"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Simplified Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "reverse"
        }}
      />

      {/* Reduced Floating Orbs - Only 3 instead of 8 */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-blue-500/10 dark:from-white/5 dark:to-blue-400/5 backdrop-blur-sm border border-white/20 dark:border-white/10"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
        />
      ))}

      {/* Simplified Mouse Follower with reduced size and opacity */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 dark:from-blue-300/3 dark:to-purple-300/3 blur-2xl"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ 
          type: "spring", 
          damping: 50, 
          stiffness: 100,
          mass: 0.5
        }}
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </div>
  )
}