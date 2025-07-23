import { motion } from 'framer-motion'

const expertiseAreas = [
  {
    id: 'saas',
    title: 'B2B SaaS',
    subtitle: 'Hire an agency specialized in B2B SaaS',
    description: 'We understand the unique challenges of marketing SaaS products. From freemium models to enterprise sales cycles, we help SaaS companies build effective marketing engines.',
  },
  {
    id: 'service',
    title: 'B2B Service',
    subtitle: 'Hire an agency that knows how to market a Service business',
    description: 'Service businesses require different marketing approaches. We help service companies build trust, demonstrate expertise, and generate qualified leads.',
  },
  {
    id: 'hardware',
    title: 'B2B Hardware',
    subtitle: 'Hire an agency that knows how to market your product',
    description: 'Physical products need specialized marketing strategies. We help hardware companies showcase their products effectively and drive sales.',
  },
]

export default function ExpertisePage() {
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
            Our Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We specialize in B2B marketing across different industries and business models.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.id}
              id={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{area.title}</h2>
                <p className="text-lg text-primary-600 font-semibold mb-4">{area.subtitle}</p>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 