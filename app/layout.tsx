import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';

// Font setup - Manrope font
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Chisom.dev - Full-Stack Developer & Business Strategy Consultant',
  description: 'Portfolio of Chisom - Full-Stack Developer & Business Strategy Consultant. Building digital experiences and transforming ideas into reality.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
