'use client'

import { motion } from 'framer-motion'

const results = [
  {
    company: 'Online Payment Platform',
    metrics: [
      { label: 'More inbound sales calls', value: '200%' },
      { label: 'More qualified pipeline', value: '53%' },
    ],
  },
  {
    company: 'Bluebird',
    metrics: [
      { label: 'Inbound Leads', value: '60+' },
      { label: 'Win rate', value: '66%' },
    ],
  },
  {
    company: 'Focus-on',
    metrics: [
      { label: 'More Leads', value: '12%' },
      { label: 'High-intent Downloads', value: '400%' },
    ],
  },
  {
    company: 'ReviewStudio',
    metrics: [
      { label: 'Signups in 4 months', value: '350+' },
      { label: 'Cost of a sign up', value: '$70' },
    ],
  },
  {
    company: 'Storyteq',
    metrics: [
      { label: 'Increase Inbound Pipeline', value: '+54%' },
      { label: 'Increase of engagement', value: '+243%' },
    ],
  },
]

export default function Results() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Driven by a <span className="text-primary-600">performance</span> mindset
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            You don't just hire experts - you hire people with a drive to deliver results. The FiveTwentyFour Studios team thrives on impact.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {results.map((result, index) => (
            <motion.div
              key={result.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6">{result.company}</h3>
              <div className="space-y-4">
                {result.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{metric.label}</span>
                    <span className="text-lg font-bold text-primary-600">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/cases"
            className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-700 transition-colors"
          >
            Explore our cases <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 