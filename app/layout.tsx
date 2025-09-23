"use client";  // Mark this component as a Client Component

import { Manrope } from 'next/font/google';
import { useEffect } from 'react';  // Import useEffect
import { usePathname } from 'next/navigation';  // Use the new router system
import NProgress from 'nprogress'; // Import nprogress
import 'nprogress/nprogress.css';  // Import nprogress styles
import './globals.css';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary

// Font setup - Manrope font
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
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
        className={`${manrope.variable} font-manrope antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
