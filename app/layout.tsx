import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary

const geistSans = localFont({
  src: '/fonts/GeistVF.woff', // Adjusted path
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '/fonts/GeistMonoVF.woff', // Adjusted path
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio app for Chisom',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
