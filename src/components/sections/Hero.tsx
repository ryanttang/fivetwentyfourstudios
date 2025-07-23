'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  }

  return (
    <section className="relative bg-accent-50 overflow-hidden rounded-3xl shadow-lg mt-8 mx-2">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-lavender-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
          }}
        />
      </div>

      <div className="relative container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full bg-yellow-100 px-5 py-2 text-base font-bold text-yellow-700 mb-8 shadow-sm"
          >
            <span className="mr-2 text-lg">🚀</span>
            Small Business Website & SEO
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary-900 mb-6 font-heading"
          >
            Empowering <span className="text-primary-500">small businesses</span> online
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-medium text-primary-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Launch, grow, and improve your business with professional websites, SEO tools, and CRM support.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We help small business owners succeed online with affordable website design, site improvements, search engine optimization, and customer relationship management solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link
              href="/contact"
              className="btn-primary group relative overflow-hidden shadow-lg"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
            </Link>
            
            <Link
              href="/cases"
              className="btn-secondary group shadow-md"
            >
              <span className="flex items-center">
                View Our Work
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-8"
          >
            {[
              { number: '100+', label: 'Websites Launched' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support for Your Business' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 right-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute bottom-1/4 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 