import './globals.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Chat from '@/components/chat';

// font awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const opensans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mattbrauner.com'),
  icons: { icon: 'monogram_navybk.png' },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow',
  },

  title: 'Matt Brauner | Work',
  description:
    'Matt Brauner is a New York City based technologist with professional experience in full-stack web development, financial technology, and data analysis',
  keywords: [
    'matt brauner',
    'new york',
    'nyc',
    'software engineer',
    'web development',
    'financial technology',
    'data analysis',
  ],
  openGraph: {
    siteName: 'Matt Brauner',
    title: 'Matt Brauner | Work',
    description:
      'Matt Brauner is a New York City based technologist with professional experience in full-stack web development, financial technology, and data analysis',
    type: 'website',
    locale: 'en_US',
  },
};

export const viewport = {
  themeColor: '#17233d',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="matt_bk.jpg" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YT3V2M6W5C" />
        <Script id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YT3V2M6W5C');
        `}
        </Script>
      </head>
      <body className={opensans.className}>
        <Header />
        {children}
        <Footer />
        <Chat />
      </body>
    </html>
  );
}
