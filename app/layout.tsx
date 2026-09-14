import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { seo, personal } from '@/data/profile'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    'Software Tester',
    'QA Engineer',
    'Manual Testing',
    'Test Case Design',
    'Bug Reporting',
    'Akshay K',
    'Portfolio',
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    locale: 'en_IN',
    siteName: `${personal.name} — Portfolio`,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${personal.name} — ${personal.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
