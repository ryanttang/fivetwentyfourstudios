'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    title: 'Website Design & Improvements',
    description: 'Launch or refresh your business website.',
    longDescription: 'Professional, modern, and mobile-friendly websites tailored for small businesses. We handle new builds, redesigns, and ongoing improvements to help you stand out online.',
    href: '/services#websites',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    features: ['Custom Website Design', 'Mobile Optimization', 'Site Redesigns', 'Performance Improvements', 'Maintenance'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'SEO Tools & Services',
    description: 'Get found by more customers online.',
    longDescription: 'Boost your search engine rankings and attract more local customers. We provide on-page SEO, keyword research, technical optimization, and easy-to-use SEO tools for small business owners.',
    href: '/services#seo',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    features: ['SEO Audits', 'Keyword Research', 'On-Page Optimization', 'Local SEO', 'SEO Tools'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'CRM & Customer Support',
    description: 'Manage and grow your customer relationships.',
    longDescription: 'Simple, effective CRM solutions and support to help you track leads, manage contacts, and improve customer service. We help you set up and use the right tools for your business.',
    href: '/services#crm',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0M12 14v7m-7-7a7 7 0 0114 0v7H5v-7z" />
      </svg>
    ),
    features: ['CRM Setup', 'Lead Tracking', 'Contact Management', 'Customer Support Tools', 'Ongoing Support'],
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Services() {
  // Remove: const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6"
          >
            Everything you need to grow your business online
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-8 text-gray-600"
          >
            We help small business owners launch, grow, and improve their online presence with affordable website design, SEO tools, and CRM support.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
              className="group relative"
            >
              <div className="card-hover h-full">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">
                    {service.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-600">
                          <svg className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
                  >
                    Learn more
                    <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="btn-primary inline-flex items-center"
          >
            <span>View All Services</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 