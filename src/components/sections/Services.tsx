'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Content & Creative',
    description: "We'll make your prospects stop scrolling.",
    href: '/services#content',
  },
  {
    title: 'Paid Media & Performance',
    description: 'Build, optimize and scale your performance marketing.',
    href: '/services#media',
  },
  {
    title: 'Data & Measurement',
    description: 'We make the invisible visible.',
    href: '/services#data',
  },
]

export default function Services() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Level up your marketing, improve <span className="text-primary-600">marketing ROI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Better marketing leads to better marketing ROI. At FiveTwentyFour Studios, we help you level up your complete marketing engine. From strategy to content, advertising, and measurement.
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
              className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8 hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group-hover:underline"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 