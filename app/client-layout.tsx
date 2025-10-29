"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    NProgress.configure({ showSpinner: false });
    handleStart();

    return () => {
      handleStop();
    };
  }, [pathname]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppWidget />
    </>
  );
}

