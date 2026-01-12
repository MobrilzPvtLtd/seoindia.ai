import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SEOIndia - AI Software Development',
  description:
    'Leading AI software development company delivering innovative solutions in web, mobile, and AI technologies.',
  keywords:
    'AI development, software development, web development, mobile app, machine learning, consulting',
  openGraph: {
    title: 'SEOIndia - AI Software Development',
    description:
      'Leading AI software development company delivering innovative solutions.',
    type: 'website',
    url: 'https://seoindia.ai',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
