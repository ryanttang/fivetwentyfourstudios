import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    id: 'b2b-demand-generation-guide',
    title: 'The Complete Guide to B2B Demand Generation in 2024',
    excerpt: 'Learn the latest strategies and tactics for generating qualified leads in the B2B space, from content marketing to paid advertising.',
    category: 'Strategy',
    readTime: '8 min read',
    date: '2024-01-15',
    author: 'Sarah Chen',
    image: '/blog/demand-generation-guide.jpg',
    featured: true,
  },
  {
    id: 'marketing-automation-best-practices',
    title: 'Marketing Automation Best Practices for B2B Companies',
    excerpt: 'Discover how to set up and optimize your marketing automation to nurture leads and improve conversion rates.',
    category: 'Automation',
    readTime: '6 min read',
    date: '2024-01-10',
    author: 'Marcus Rodriguez',
    image: '/blog/marketing-automation.jpg',
    featured: false,
  },
  {
    id: 'content-marketing-strategy',
    title: 'Building a Content Marketing Strategy That Drives Results',
    excerpt: 'Create a content strategy that aligns with your business goals and generates qualified leads.',
    category: 'Content',
    readTime: '7 min read',
    date: '2024-01-05',
    author: 'Emily Watson',
    image: '/blog/content-strategy.jpg',
    featured: false,
  },
  {
    id: 'paid-advertising-optimization',
    title: 'How to Optimize Your Paid Advertising for Better ROI',
    excerpt: 'Learn advanced techniques for optimizing your paid campaigns to reduce costs and increase conversions.',
    category: 'Performance',
    readTime: '5 min read',
    date: '2023-12-28',
    author: 'Marcus Rodriguez',
    image: '/blog/paid-advertising.jpg',
    featured: false,
  },
  {
    id: 'lead-scoring-implementation',
    title: 'Implementing Lead Scoring: A Step-by-Step Guide',
    excerpt: 'Set up an effective lead scoring system to prioritize your best prospects and improve sales efficiency.',
    category: 'Analytics',
    readTime: '9 min read',
    date: '2023-12-20',
    author: 'Sarah Chen',
    image: '/blog/lead-scoring.jpg',
    featured: false,
  },
  {
    id: 'b2b-social-media-strategy',
    title: 'B2B Social Media Strategy: Beyond LinkedIn',
    excerpt: 'Explore effective social media strategies for B2B companies, including platforms beyond LinkedIn.',
    category: 'Social Media',
    readTime: '6 min read',
    date: '2023-12-15',
    author: 'Emily Watson',
    image: '/blog/social-media.jpg',
    featured: false,
  },
]

const guides = [
  {
    title: 'B2B Marketing Playbook',
    description: 'A comprehensive guide to building a high-performing B2B marketing engine.',
    downloadUrl: '/guides/b2b-marketing-playbook.pdf',
    type: 'PDF',
    pages: '45',
  },
  {
    title: 'Lead Generation Framework',
    description: 'Our proven framework for generating qualified leads at scale.',
    downloadUrl: '/guides/lead-generation-framework.pdf',
    type: 'PDF',
    pages: '32',
  },
  {
    title: 'Marketing Automation Setup Guide',
    description: 'Step-by-step instructions for setting up marketing automation.',
    downloadUrl: '/guides/marketing-automation-guide.pdf',
    type: 'PDF',
    pages: '28',
  },
]

export default function ResourcesPage() {
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
            Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Stay updated with the latest insights in B2B marketing and demand generation. Our resources help you build better marketing engines.
          </motion.p>
        </div>
      </div>

      {/* Featured Blog Post */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl">
          {blogPosts.filter(post => post.featured).map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 mb-16"
            >
              <div className="flex items-center gap-x-4 mb-4">
                <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                  Featured
                </span>
                <span className="text-sm text-gray-600">{post.category}</span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-sm font-semibold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <Link
                  href={`/resources/${post.id}`}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Latest Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Expert insights and strategies to help you build better marketing engines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-x-4 mb-4">
                <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                  {post.category}
                </span>
                <span className="text-sm text-gray-600">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="h-6 w-6 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs font-semibold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <p className="text-sm text-gray-600">{post.author}</p>
                </div>
                <Link
                  href={`/resources/${post.id}`}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Guides Section */}
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
              Free Guides & Templates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Download our comprehensive guides and templates to accelerate your marketing efforts.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                      {guide.type}
                    </span>
                    <span className="text-sm text-gray-600">{guide.pages} pages</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-600 mb-6">{guide.description}</p>
                  
                  <a
                    href={guide.downloadUrl}
                    className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Download guide <span aria-hidden="true">→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Get the latest insights on B2B marketing delivered to your inbox every week.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 flex gap-x-4"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-sm text-gray-600"
            >
              We care about your privacy. Read our{' '}
              <a href="/privacy" className="text-primary-600 hover:text-primary-500">
                privacy policy
              </a>
              .
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
} 