import { motion } from 'framer-motion'
import Link from 'next/link'

const caseStudies = [
  {
    id: 'online-payment-platform',
    title: 'Online Payment Platform',
    subtitle: '200% more inbound sales calls, 53% more qualified pipeline',
    industry: 'FinTech',
    challenge: 'A B2B SaaS payment platform needed to scale their demand generation efforts to support rapid growth.',
    solution: 'We implemented a comprehensive demand generation strategy including content marketing, paid advertising, and lead nurturing.',
    results: [
      { metric: 'More inbound sales calls', value: '200%', change: 'increase' },
      { metric: 'More qualified pipeline', value: '53%', change: 'increase' },
      { metric: 'Cost per lead', value: '$45', change: 'decrease' },
      { metric: 'Lead to opportunity rate', value: '28%', change: 'increase' },
    ],
    services: ['Content Marketing', 'Paid Advertising', 'Lead Nurturing', 'Marketing Automation'],
    image: '/cases/payment-platform.jpg',
  },
  {
    id: 'bluebird',
    title: 'Bluebird',
    subtitle: '60+ inbound leads, 66% win rate',
    industry: 'SaaS',
    challenge: 'A B2B SaaS company struggled to generate consistent inbound leads and had low conversion rates.',
    solution: 'We developed a targeted content strategy and optimized their marketing funnel for better lead quality.',
    results: [
      { metric: 'Inbound Leads', value: '60+', change: 'increase' },
      { metric: 'Win rate', value: '66%', change: 'increase' },
      { metric: 'Sales cycle length', value: '30%', change: 'decrease' },
      { metric: 'Customer lifetime value', value: '$15K', change: 'increase' },
    ],
    services: ['Content Strategy', 'Lead Generation', 'Funnel Optimization', 'Sales Enablement'],
    image: '/cases/bluebird.jpg',
  },
  {
    id: 'focus-on',
    title: 'Focus-on',
    subtitle: '12% more leads, 400% high-intent downloads',
    industry: 'Technology',
    challenge: 'A technology company needed to improve lead quality and increase engagement with their content.',
    solution: 'We created a targeted content strategy focused on high-intent prospects and implemented advanced lead scoring.',
    results: [
      { metric: 'More Leads', value: '12%', change: 'increase' },
      { metric: 'High-intent Downloads', value: '400%', change: 'increase' },
      { metric: 'Content engagement', value: '85%', change: 'increase' },
      { metric: 'Lead quality score', value: '8.5/10', change: 'improvement' },
    ],
    services: ['Content Marketing', 'Lead Scoring', 'Marketing Automation', 'Analytics'],
    image: '/cases/focus-on.jpg',
  },
  {
    id: 'reviewstudio',
    title: 'ReviewStudio',
    subtitle: '350+ signups in 4 months, $70 cost per signup',
    industry: 'SaaS',
    challenge: 'A SaaS company needed to scale their user acquisition while maintaining low customer acquisition costs.',
    solution: 'We implemented a performance marketing strategy with optimized paid campaigns and conversion rate optimization.',
    results: [
      { metric: 'Signups in 4 months', value: '350+', change: 'increase' },
      { metric: 'Cost of a sign up', value: '$70', change: 'target' },
      { metric: 'Conversion rate', value: '3.2%', change: 'increase' },
      { metric: 'ROAS', value: '4.5x', change: 'improvement' },
    ],
    services: ['Paid Advertising', 'CRO', 'Marketing Analytics', 'Campaign Optimization'],
    image: '/cases/reviewstudio.jpg',
  },
  {
    id: 'storyteq',
    title: 'Storyteq',
    subtitle: '54% increase in inbound pipeline, 243% increase in engagement',
    industry: 'Marketing Technology',
    challenge: 'A marketing technology company needed to increase brand awareness and generate more qualified leads.',
    solution: 'We developed a comprehensive marketing strategy combining content marketing, social media, and targeted advertising.',
    results: [
      { metric: 'Increase Inbound Pipeline', value: '+54%', change: 'increase' },
      { metric: 'Increase of engagement', value: '+243%', change: 'increase' },
      { metric: 'Brand awareness', value: '67%', change: 'improvement' },
      { metric: 'Social media reach', value: '2.5x', change: 'increase' },
    ],
    services: ['Brand Marketing', 'Content Strategy', 'Social Media', 'Lead Generation'],
    image: '/cases/storyteq.jpg',
  },
]

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Cases
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Explore our work and the results we've delivered for our clients. Each case study demonstrates our approach to building high-performing marketing engines.
          </motion.p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-x-4 mb-6">
                <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-semibold">
                  {caseStudy.industry.charAt(0)}
                </div>
                <span className="text-sm text-gray-600">{caseStudy.industry}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.title}</h2>
              <p className="text-lg text-primary-600 font-semibold mb-6">{caseStudy.subtitle}</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-white rounded-lg p-4">
                      <div className="text-lg font-bold text-primary-600">{result.value}</div>
                      <div className="text-xs text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Services Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/cases/${caseStudy.id}`}
                className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
              >
                Read full case study <span aria-hidden="true">→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Ready to see similar results?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Let's discuss how we can help you build a high-performing marketing engine that drives real business results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/contact"
                className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                Get started
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
              >
                View our services <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 