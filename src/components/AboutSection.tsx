'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, Target, TrendingUp } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "from-blue-500 to-blue-600" },
    { icon: Award, number: "15+", label: "Years Experience", color: "from-orange-500 to-orange-600" },
    { icon: Target, number: "99.9%", label: "Uptime Guarantee", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, number: "200%", label: "Growth Rate", color: "from-purple-500 to-purple-600" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-64 h-64 border border-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-48 h-48 border border-accent-200 rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-dark-800 mb-6"
              >
                About <span className="gradient-text">Inspire Edge</span>
              </motion.h2>
              
                             <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 animate={isInView ? { opacity: 1, x: 0 } : {}}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="text-xl text-dark-600 mb-6 leading-relaxed"
               >
                 We envision a world where businesses thrive through comprehensive support services, fueling innovation and progress. Our team is composed of experienced professionals across finance, infrastructure, education, process optimization, and outsourcing.
               </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-dark-500 leading-relaxed"
              >
                Our unique approach lies in providing a seamless, user-friendly experience, combining cutting-edge technology with exceptional customer service to deliver solutions that exceed expectations.
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
                             {[
                 "Comprehensive financial services",
                 "Robust infrastructure solutions",
                 "Professional education programs",
                 "Efficient process optimization"
               ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + (index * 0.1) }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-accent-500 rounded-full" />
                  <span className="text-dark-600 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                  >
                    <div className="text-3xl font-bold text-dark-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-dark-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mission Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 rounded-2xl text-white relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                 <p className="text-lg leading-relaxed opacity-90">
                   To empower businesses with comprehensive support services across finance, infrastructure, education, process optimization, and outsourcing, enabling them to thrive in the modern business landscape.
                 </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
