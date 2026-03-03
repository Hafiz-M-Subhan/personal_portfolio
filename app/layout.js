import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif']
});

export const metadata = {
  metadataBase: new URL('https://hafiz-subhan.vercel.app'),
  title: {
    default: 'Hafiz Subhan | Full Stack Developer',
    template: '%s | Hafiz Subhan'
  },
  description: 'Full stack developer portfolio. I build modern web applications with React, Next.js, Node.js and more. Open to collaborating on exciting projects.',
  keywords: ['web developer', 'full stack', 'React', 'Next.js', 'JavaScript', 'portfolio'],
  authors: [{ name: 'Hafiz Subhan' }],
  creator: 'Hafiz Subhan',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hafiz-subhan.vercel.app',
    siteName: 'Hafiz Subhan',
    title: 'Hafiz Subhan | Full Stack Developer',
    description: 'Full stack developer portfolio. I build modern web applications with React, Next.js, Node.js and more.',
    images: [
      {
        url: 'https://hafiz-subhan.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hafiz Subhan Portfolio',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Subhan | Full Stack Developer',
    description: 'Full stack developer portfolio',
    creator: '@hafizsubhan',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0d1224',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0d1224" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hafiz Subhan',
              url: 'https://hafiz-subhan.vercel.app',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://github.com/hafiz-subhan',
                'https://linkedin.com/in/hafiz-subhan',
                'https://twitter.com/hafizsubhan'
              ]
            })
          }}
        />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
}
