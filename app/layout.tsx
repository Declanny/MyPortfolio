import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';
import StructuredData from './schema';

// Font setup - Manrope font
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.chisomhenry.me'),
  title: {
    default: 'Chisom Henry Godwin | Best Frontend & Mobile Engineer - Software Developer',
    template: '%s | Chisom Henry - Software Engineer'
  },
  description: 'Chisom Henry Godwin - Best frontend developer, mobile engineer, and software developer. Expert in React, Next.js, React Native, TypeScript. Available for hire. Top software engineer creating modern web and mobile applications.',
  keywords: [
    'Chisom Henry',
    'Chisom Henry Godwin',
    'Chisom',
    'best frontend developer',
    'best mobile engineer',
    'best software developer',
    'best software engineer',
    'frontend engineer',
    'mobile app developer',
    'React developer',
    'Next.js developer',
    'React Native developer',
    'TypeScript developer',
    'full-stack developer',
    'web developer for hire',
    'mobile developer for hire',
    'software engineer portfolio',
    'hire software developer',
    'professional web developer',
    'expert mobile engineer',
    'top frontend engineer'
  ],
  authors: [{ name: 'Chisom Henry Godwin', url: 'https://www.chisomhenry.me' }],
  creator: 'Chisom Henry Godwin',
  publisher: 'Chisom Henry Godwin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chisomhenry.me',
    siteName: 'Chisom Henry - Software Engineer',
    title: 'Chisom Henry Godwin | Best Frontend & Mobile Engineer',
    description: 'Best frontend developer, mobile engineer, and software developer. Expert in React, Next.js, React Native. Available for hire.',
    images: [
      {
        url: '/chisomdev.png',
        width: 1200,
        height: 630,
        alt: 'Chisom Henry Godwin - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chisom Henry Godwin | Best Frontend & Mobile Engineer',
    description: 'Best frontend developer, mobile engineer, and software developer. Expert in React, Next.js, React Native. Available for hire.',
    images: ['/chisomdev.png'],
    creator: '@chisomhenry',
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
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${manrope.variable} font-manrope antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
