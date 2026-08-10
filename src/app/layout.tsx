import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContactButtons from '@/components/layout/FloatingContactButtons';
import SkipToContent from '@/components/layout/SkipToContent';
import { constructMetadata } from '@/lib/metadata';
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/schema';

// Inter: Ultra-Clean Modern Tech Font (used by Vercel, Linear, Stripe, Figma)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-[#0A0E1A] text-white selection:bg-amber-500 selection:text-slate-950`}>
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
