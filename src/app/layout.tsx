import React from 'react';
import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wolfonstyle.com'),
  title: 'WOLFON STYLE | Premium Apparel & Manufacturing',
  description: 'Premium apparel brand and customized manufacturing supply platform, featuring heavy-weight drop shoulder t-shirts, upcoming drops, and private label ordering.',
  openGraph: {
    title: 'WOLFON STYLE | Premium Apparel & Manufacturing',
    description: 'Direct factory apparel manufacturing in Bangladesh — heavyweight essentials, private label supply, and raw materials for global brands.',
    url: 'https://wolfonstyle.com',
    siteName: 'Wolfon Style',
    images: [{ url: '/images/meta/og-image.webp', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WOLFON STYLE | Premium Apparel & Manufacturing',
    description: 'Direct factory apparel manufacturing in Bangladesh — heavyweight essentials, private label supply, and raw materials for global brands.',
    images: ['/images/meta/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#121212] text-[#e5e2e1] antialiased selection:bg-[#FFB800] selection:text-[#121212]">
        {children}
      </body>
    </html>
  );
}
