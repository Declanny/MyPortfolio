"use client";

import WhatsAppWidget from '../components/WhatsAppWidget';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <WhatsAppWidget />
    </>
  );
}

