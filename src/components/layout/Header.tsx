'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useDebug } from '@/lib/debug'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Expertise', href: '/expertise' },
  { name: 'Cases', href: '/cases' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const debug = useDebug({
    componentName: 'Header',
    trackProps: true,
    trackPerformance: true,
    trackLifecycle: true
  })

  // Track component render
  debug.trackRender()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
    },
    scrolled: { 
      y: 0, 
      opacity: 1,
    }
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
    }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate={scrolled ? "scrolled" : "animate"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-200/30'
      }`}
    >
      <nav className="container-custom py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex lg:flex-1"
            variants={navItemVariants}
          >
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="sr-only">FiveTwentyFour Studios</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-gradient"
              >
                FiveTwentyFour Studios
              </motion.div>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="flex lg:hidden"
            variants={navItemVariants}
          >
            <button
              type="button"
              className="relative -m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex lg:gap-x-8"
            variants={navItemVariants}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop CTA */}
          <motion.div 
            className="hidden lg:flex lg:flex-1 lg:justify-end"
            variants={navItemVariants}
          >
            <Link
              href="/contact"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Talk to us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            />
            
            <Dialog.Panel as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">FiveTwentyFour Studios</span>
                  <div className="text-2xl font-bold text-gradient">FiveTwentyFour Studios</div>
                </Link>
                <button
                  type="button"
                  className="relative -m-2.5 rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <motion.div 
                className="mt-6 flow-root"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div 
                    className="py-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Talk to us
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 