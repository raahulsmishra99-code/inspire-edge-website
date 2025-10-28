'use client'

import React, { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

type ContactItem = {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  value: string
  href?: string | null
  external?: boolean
}

const gmailComposeLink = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`

export default function ContactSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  // Updated details + click behaviors
  const contactInfo: ContactItem[] = [
    {
      icon: Mail,
      title: 'Email',
      value: 'raahulsmishra@inspireedgeventures.com',
      href: gmailComposeLink('raahulsmishra@inspireedgeventures.com'), // open Gmail compose
      external: true,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9935052299',
      href: 'tel:+919935052299',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '10/93, Sector 10, Indira Nagar, Lucknow, Uttar Pradesh – 226016',
      href: null, // NOT clickable
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-6 h-64 w-64 rounded-full bg-gradient-to-br from-primary-100/30 to-accent-100/30 blur-3xl md:left-20 md:top-20 md:h-96 md:w-96"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-6 h-56 w-56 rounded-full bg-gradient-to-br from-accent-100/30 to-primary-100/30 blur-3xl md:right-20 md:bottom-20 md:h-80 md:w-80"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-dark-800 sm:text-4xl md:text-5xl">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-dark-600 sm:text-lg md:text-xl">
            Ready to transform your business with comprehensive solutions? Let&apos;s discuss how we can help you achieve your goals through our diverse service offerings.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Column - Contact Form */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-7 md:p-8">
              {/* Form Header */}
              <div className="mb-6 md:mb-8">
                <h3 className="mb-1 text-xl font-bold text-dark-800 md:text-2xl">Send us a Message</h3>
                <p className="text-sm text-dark-600 md:text-base">We&apos;ll get back to you within 24 hours.</p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-dark-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-primary-500 md:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-primary-500 md:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-dark-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    autoComplete="organization"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-primary-500 md:text-base"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-dark-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-primary-500 md:text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl md:px-8 md:py-4 md:text-lg"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-5 sm:space-y-6">
              {contactInfo.map((info, index) => {
                const CardInner = (
                  <div className="block rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50 p-5 transition-all duration-300 hover:border-primary-300 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500"
                      >
                        <info.icon size={24} className="text-white" />
                      </motion.div>
                      <div className="min-w-0">
                        <h4 className="mb-1 text-base font-semibold text-dark-800 sm:text-lg">{info.title}</h4>
                        <p className="truncate text-sm text-dark-600 sm:text-base">{info.value}</p>
                      </div>
                    </div>
                  </div>
                )

                // Clickable for email/phone; non-clickable for address
                return info.href ? (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                    className="group block"
                    {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={`${info.title}: ${info.value}`}
                  >
                    {CardInner}
                  </motion.a>
                ) : (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="cursor-default"
                    aria-label={`${info.title}: ${info.value}`}
                  >
                    {CardInner}
                  </motion.div>
                )
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 p-6 text-white sm:p-7 md:p-8"
            >
              <h3 className="mb-3 text-xl font-bold md:text-2xl">Why Choose Us?</h3>
              <ul className="space-y-2.5 md:space-y-3">
                {['24/7 expert support', 'Customized solutions', 'Proven track record', 'Cutting-edge technology'].map(
                  (item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={20} className="text-accent-200" />
                      <span className="opacity-90">{item}</span>
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
