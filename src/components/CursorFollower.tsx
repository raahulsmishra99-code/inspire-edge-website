'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CursorFollowerProps {
  mousePosition: { x: number; y: number }
  isHovering: boolean
}

export default function CursorFollower({ mousePosition, isHovering }: CursorFollowerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Trailing cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary-300 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full pointer-events-none z-30 blur-sm"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          mass: 1,
        }}
      />
    </>
  )
}
