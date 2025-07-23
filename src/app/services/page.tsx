import { motion } from 'framer-motion'

const services = [
  {
    id: 'content',
    title: 'Content & Creative',
    subtitle: "We'll make your prospects stop scrolling.",
    description: 'Create compelling content that captures attention and drives engagement. From blog posts to social media content, we craft messages that resonate with your target audience.',
    features: [
      'Content strategy development',
      'Blog writing and editing',
      'Social media content',
      'Video and multimedia content',
      'Brand storytelling',
    ],
  },
  {
    id: 'media',
    title: 'Paid Media & Performance',
    subtitle: 'Build, optimize and scale your performance marketing.',
    description: 'Maximize your advertising ROI with data-driven paid media strategies. We optimize campaigns across all channels to deliver measurable results.',
    features: [
      'Google Ads management',
      'LinkedIn advertising',
      'Facebook/Instagram ads',
      'Retargeting campaigns',
      'Performance optimization',
    ],
  },
  {
    id: 'data',
    title: 'Data & Measurement',
    subtitle: 'We make the invisible visible.',
    description: 'Turn data into actionable insights. We help you track, measure, and optimize your marketing performance with advanced analytics and reporting.',
    features: [
      'Marketing analytics setup',
      'Conversion tracking',
      'ROI measurement',
      'A/B testing',
      'Performance reporting',
    ],
  },
  {
    id: 'team',
    title: 'Demand Team',
    subtitle: 'Your dedicated team of world-class B2B marketing experts.',
    description: 'Get a custom team of marketing experts to complement your in-house capabilities. We work closely with your team to level up your marketing.',
    features: [
      'Dedicated marketing team',
      'Strategy development',
      'Campaign execution',
      'Performance optimization',
      'Ongoing support',
    ],
  },
  {
    id: 'training',
    title: 'Demand Gen Training',
    subtitle: 'Become a Demand Gen Expert.',
    description: 'Learn the latest demand generation strategies and tactics. Our training programs help your team master modern B2B marketing.',
    features: [
      'Custom training programs',
      'Workshop facilitation',
      'Best practices sharing',
      'Tool implementation',
      'Ongoing coaching',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Level up your marketing, improve marketing ROI. Better marketing leads to better marketing ROI.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-lg text-primary-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 