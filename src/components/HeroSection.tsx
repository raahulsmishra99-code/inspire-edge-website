'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowDown, Play } from 'lucide-react'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const taglineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-r from-green-100 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-100/30 to-accent-100/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent-100/20 to-primary-100/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              {/* Logo Graphic */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Curved lines */}
                <motion.div
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-4"
                >
                  <div className="w-full h-full relative">
                    {/* Left curved line */}
                    <div className="absolute left-0 top-1/2 w-8 h-16 border-l-4 border-white rounded-l-full transform -translate-y-1/2" />
                    {/* Right curved line */}
                    <div className="absolute right-0 top-1/2 w-8 h-16 border-r-4 border-white rounded-r-full transform -translate-y-1/2" />
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2" />
                    {/* Orange accent */}
                    <motion.div
                      animate={{
                        x: isHovered ? 2 : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-1/2 top-1/2 w-6 h-1 bg-accent-500 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold text-dark-800 mb-4"
          >
            <span className="gradient-text">Inspire Edge</span>
            <br />
            <span className="text-dark-600">Ventures</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            variants={taglineVariants}
            className="flex justify-center items-center space-x-4 text-lg md:text-xl font-medium text-accent-600 mb-8"
          >
            <motion.span
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              Proficient
            </motion.span>
            <span className="text-dark-400">|</span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              Metamorphosis
            </motion.span>
            <span className="text-dark-400">|</span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              Cohesion
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Focused on providing comprehensive business solutions. Our mission is to empower businesses with innovative financial services, robust infrastructure, education services, process optimization, and reliable outsourcing solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <Play size={20} />
              <span>Get Started</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-600"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}
