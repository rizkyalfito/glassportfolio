"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function RainDrops() {
  const [rainDrops, setRainDrops] = useState<Array<{ id: number; x: number; delay: number; duration: number; opacity: number }>>([])

  useEffect(() => {
    // Generate rain drops with better opacity for light mode
    const drops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position as percentage
      delay: Math.random() * 5, // Random delay between 0-5 seconds
      duration: 3 + Math.random() * 2, // Random duration between 3-5 seconds
      opacity: 0.2 + Math.random() * 0.4, // Better opacity between 0.2-0.6
    }))
    setRainDrops(drops)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Enhanced Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-15 dark:opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.12) 0%, transparent 60%)",
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)",
          ],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "reverse"
        }}
      />

      {/* Rain Drops with better visibility */}
      {rainDrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-px h-3 bg-gradient-to-b from-blue-500/60 to-blue-400/20 dark:from-blue-400/40 dark:to-transparent rounded-full"
          initial={{
            x: `${drop.x}%`,
            y: "-20px",
            opacity: 0,
          }}
          animate={{
            y: "100vh",
            opacity: [0, drop.opacity, drop.opacity, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1 + Math.random() * 2, // Random pause between loops
          }}
          style={{
            left: `${drop.x}%`,
          }}
        />
      ))}

      {/* Enhanced ripple effects at bottom */}
      {rainDrops.slice(0, 8).map((drop) => (
        <motion.div
          key={`ripple-${drop.id}`}
          className="absolute bottom-0 w-1 h-1 rounded-full border border-blue-500/30 dark:border-blue-300/15"
          initial={{
            x: `${drop.x}%`,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 2],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 1,
            delay: drop.delay + drop.duration - 0.5, // Appear just before rain drop hits bottom
            repeat: Infinity,
            repeatDelay: drop.duration + 1 + Math.random() * 2,
            ease: "easeOut",
          }}
          style={{
            left: `${drop.x}%`,
          }}
        />
      ))}

      {/* Subtle overlay for depth with better light mode support */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-100/10 dark:to-slate-900/5" />
    </div>
  )
}