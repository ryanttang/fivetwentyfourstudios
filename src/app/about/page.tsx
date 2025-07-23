import { motion } from 'framer-motion'

export default function AboutPage() {
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
            About FiveTwentyFour Studios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We're a team of B2B marketing experts passionate about helping companies build high-performing marketing engines.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="prose prose-lg mx-auto">
            <p>
              At FiveTwentyFour Studios, we believe that great marketing is about more than just campaigns—it's about building sustainable, scalable systems that drive real business results.
            </p>
            <p>
              Our approach combines deep B2B marketing expertise with data-driven strategies to help companies generate pipeline, improve marketing ROI, and build lasting competitive advantages.
            </p>
            <p>
              We work with companies of all sizes, from startups to enterprise organizations, helping them navigate the complexities of modern B2B marketing and achieve their growth objectives.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 