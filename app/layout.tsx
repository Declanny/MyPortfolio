"use client";  // Mark this component as a Client Component

import localFont from 'next/font/local';
import { useEffect } from 'react';  // Import useEffect
import { usePathname } from 'next/navigation';  // Use the new router system
import NProgress from 'nprogress'; // Import nprogress
import 'nprogress/nprogress.css';  // Import nprogress styles
import './globals.css';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary

// Font setup
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

// Removed the metadata export
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // To track route changes

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    // Start NProgress when the route changes
    NProgress.configure({ showSpinner: false });

    handleStart(); // Start progress bar on initial load

    return () => {
      handleStop(); // Clean up when component unmounts
    };
  }, [pathname]); // Re-run when the path changes

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
