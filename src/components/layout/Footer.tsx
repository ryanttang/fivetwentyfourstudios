'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useDebug } from '@/lib/debug'

const navigation = {
  services: [
    { name: 'Content & Creative', href: '/services#content' },
    { name: 'Paid Media & Performance', href: '/services#media' },
    { name: 'Data & Measurement', href: '/services#data' },
    { name: 'Demand Team', href: '/services#team' },
    { name: 'Demand Gen Training', href: '/services#training' },
  ],
  expertise: [
    { name: 'B2B SaaS', href: '/expertise#saas' },
    { name: 'B2B Service', href: '/expertise#service' },
    { name: 'B2B Hardware', href: '/expertise#hardware' },
  ],
  resources: [
    { name: 'Cases', href: '/cases' },
    { name: 'Blog', href: '/resources#blog' },
    { name: 'Newsletter', href: '/resources#newsletter' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  const debug = useDebug({
    componentName: 'Footer',
    trackProps: true,
    trackPerformance: true,
    trackLifecycle: true
  })

  // Track component render
  debug.trackRender()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              FiveTwentyFour Studios
            </motion.div>
            <p className="text-gray-300 text-sm leading-6">
              We build high-performing marketing engines for B2B brands that generate pipeline and improve marketing ROI.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Expertise</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.expertise.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 FiveTwentyFour Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 