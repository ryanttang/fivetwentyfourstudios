import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActionButton from '@/components/ui/FloatingActionButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FiveTwentyFour Studios - B2B Marketing Agency',
  description: 'We build high-performing marketing engines for B2B companies. Transform your marketing with data-driven strategies that generate pipeline and improve ROI.',
  keywords: 'B2B marketing, demand generation, marketing agency, lead generation, marketing automation',
  authors: [{ name: 'FiveTwentyFour Studios' }],
  openGraph: {
    title: 'FiveTwentyFour Studios - B2B Marketing Agency',
    description: 'We build high-performing marketing engines for B2B companies.',
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
    title: 'FiveTwentyFour Studios - B2B Marketing Agency',
    description: 'We build high-performing marketing engines for B2B companies.',
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
      <body className={inter.className}>
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
