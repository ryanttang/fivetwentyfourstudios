import ContactForm from '@/components/ui/ContactForm'
import { motion } from 'framer-motion'

export default function ContactPage() {
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
            Talk to us
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-2xl font-bold tracking-tight text-gray-900"
          >
            Get a <span className="text-primary-600">quote</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Ready to build a high-performing marketing engine? Let's discuss how we can help you generate pipeline and improve your marketing ROI.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>hello@fivetwentyfourstudios.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Office</h3>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>123 Marketing Street</p>
                <p>Suite 100</p>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 