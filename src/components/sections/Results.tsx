'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const results = [
  {
    company: 'Online Payment Platform',
    industry: 'FinTech',
    logo: '💳',
    metrics: [
      { label: 'More inbound sales calls', value: '200%', change: 'increase', color: 'text-green-600' },
      { label: 'More qualified pipeline', value: '53%', change: 'increase', color: 'text-blue-600' },
      { label: 'Cost per lead', value: '$45', change: 'decrease', color: 'text-purple-600' },
      { label: 'Lead to opportunity rate', value: '28%', change: 'increase', color: 'text-orange-600' },
    ],
    description: 'A B2B SaaS payment platform needed to scale their demand generation efforts to support rapid growth.',
    services: ['Content Marketing', 'Paid Advertising', 'Lead Nurturing'],
  },
  {
    company: 'Bluebird',
    industry: 'SaaS',
    logo: '🦅',
    metrics: [
      { label: 'Inbound Leads', value: '60+', change: 'increase', color: 'text-green-600' },
      { label: 'Win rate', value: '66%', change: 'increase', color: 'text-blue-600' },
      { label: 'Sales cycle length', value: '30%', change: 'decrease', color: 'text-purple-600' },
      { label: 'Customer lifetime value', value: '$15K', change: 'increase', color: 'text-orange-600' },
    ],
    description: 'A B2B SaaS company struggled to generate consistent inbound leads and had low conversion rates.',
    services: ['Content Strategy', 'Lead Generation', 'Funnel Optimization'],
  },
  {
    company: 'Focus-on',
    industry: 'Technology',
    logo: '🎯',
    metrics: [
      { label: 'More Leads', value: '12%', change: 'increase', color: 'text-green-600' },
      { label: 'High-intent Downloads', value: '400%', change: 'increase', color: 'text-blue-600' },
      { label: 'Content engagement', value: '85%', change: 'increase', color: 'text-purple-600' },
      { label: 'Lead quality score', value: '8.5/10', change: 'improvement', color: 'text-orange-600' },
    ],
    description: 'A technology company needed to improve lead quality and increase engagement with their content.',
    services: ['Content Marketing', 'Lead Scoring', 'Marketing Automation'],
  },
  {
    company: 'ReviewStudio',
    industry: 'SaaS',
    logo: '📊',
    metrics: [
      { label: 'Signups in 4 months', value: '350+', change: 'increase', color: 'text-green-600' },
      { label: 'Cost of a sign up', value: '$70', change: 'target', color: 'text-blue-600' },
      { label: 'Conversion rate', value: '3.2%', change: 'increase', color: 'text-purple-600' },
      { label: 'ROAS', value: '4.5x', change: 'improvement', color: 'text-orange-600' },
    ],
    description: 'A SaaS company needed to scale their user acquisition while maintaining low customer acquisition costs.',
    services: ['Paid Advertising', 'CRO', 'Marketing Analytics'],
  },
  {
    company: 'Storyteq',
    industry: 'Marketing Technology',
    logo: '📖',
    metrics: [
      { label: 'Increase Inbound Pipeline', value: '+54%', change: 'increase', color: 'text-green-600' },
      { label: 'Increase of engagement', value: '+243%', change: 'increase', color: 'text-blue-600' },
      { label: 'Brand awareness', value: '67%', change: 'improvement', color: 'text-purple-600' },
      { label: 'Social media reach', value: '2.5x', change: 'increase', color: 'text-orange-600' },
    ],
    description: 'A marketing technology company needed to increase brand awareness and generate more qualified leads.',
    services: ['Brand Marketing', 'Content Strategy', 'Social Media'],
  },
]

export default function Results() {
  useState<number | null>(null)

  return (
    <section className="bg-gray-50 section-padding">
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
            Client Results
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6"
          >
            Driven by a <span className="text-gradient">performance</span> mindset
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg leading-8 text-gray-600"
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
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
              className="group relative"
            >
              <div className="card-hover h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{result.logo}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{result.company}</h3>
                      <p className="text-sm text-gray-500">{result.industry}</p>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    {result.services.length} services
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {result.description}
                </p>

                {/* Metrics */}
                <div className="space-y-4">
                  {result.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + metricIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 group-hover:border-primary-200 transition-colors"
                    >
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className={`text-lg font-bold ${metric.color}`}>
                        {metric.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Services */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Services Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
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
          <a
            href="/cases"
            className="btn-primary inline-flex items-center"
          >
            <span>Explore our cases</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 