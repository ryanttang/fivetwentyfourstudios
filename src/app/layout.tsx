import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActionButton from '@/components/ui/FloatingActionButton'

export const metadata: Metadata = {
  title: 'FiveTwentyFour Studios - Small Business Website & SEO Solutions',
  description: 'Empowering small business owners to launch, grow, and improve their online presence. We provide website design, improvements, SEO tools, and CRM support to help your business succeed online.',
  keywords: 'small business, website design, SEO, CRM, online presence, digital marketing, business growth',
  authors: [{ name: 'FiveTwentyFour Studios' }],
  openGraph: {
    title: 'FiveTwentyFour Studios - Small Business Website & SEO Solutions',
    description: 'Empowering small business owners to launch, grow, and improve their online presence with website design, SEO, and CRM support.',
    url: 'https://fivetwentyfourstudios.com',
    siteName: 'FiveTwentyFour Studios',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FiveTwentyFour Studios',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiveTwentyFour Studios - Small Business Website & SEO Solutions',
    description: 'Empowering small business owners to launch, grow, and improve their online presence with website design, SEO, and CRM support.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          <FloatingActionButton />
        </div>
      </body>
    </html>
  )
}
