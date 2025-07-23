'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Website Design & Improvements',
    description: 'Launch or refresh your business website with a modern, mobile-friendly design. Includes site setup, redesigns, and ongoing improvements.',
    price: '$799+',
    features: [
      'Custom design',
      'Mobile optimization',
      'Performance improvements',
      'Ongoing support',
    ],
    color: 'from-primary-100 to-accent-100',
    icon: '🖥️',
  },
  {
    title: 'SEO Tools & Services',
    description: 'Get found by more customers online. We provide on-page SEO, keyword research, technical optimization, and easy-to-use SEO tools.',
    price: '$299/mo',
    features: [
      'SEO audits',
      'Keyword research',
      'On-page optimization',
      'Local SEO',
    ],
    color: 'from-accent-100 to-yellow-100',
    icon: '🔍',
  },
  {
    title: 'CRM & Customer Support',
    description: 'Manage and grow your customer relationships with simple, effective CRM solutions and support.',
    price: '$99/mo',
    features: [
      'CRM setup',
      'Lead tracking',
      'Contact management',
      'Customer support tools',
    ],
    color: 'from-lavender-100 to-mint-100',
    icon: '🤝',
  },
]

export default function ServicesForYou() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-yellow-100 px-5 py-2 text-base font-bold text-yellow-700 mb-8 shadow-sm"
          >
            <span className="mr-2 text-lg">✨</span>
            Services for You
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-primary-900 sm:text-4xl mb-6 font-heading"
          >
            Simple, affordable solutions for small business owners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-8 text-gray-700"
          >
            Choose the service that fits your needs, or bundle for extra savings. No hidden fees, just friendly support and real results.
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
              className="group relative"
            >
              <div className={`card-hover h-full bg-gradient-to-br ${service.color}`}>
                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-primary-900 mb-2 text-center">{service.title}</h3>
                {/* Description */}
                <p className="text-gray-700 text-center mb-4">{service.description}</p>
                {/* Price */}
                <div className="text-2xl font-extrabold text-accent-600 text-center mb-4">{service.price}</div>
                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600 text-sm">
                      <svg className="h-4 w-4 text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* CTA */}
                <div className="text-center">
                  <Link href="/contact" className="btn-primary inline-flex items-center">
                    <span>Get Started</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 