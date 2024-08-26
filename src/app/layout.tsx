import './globals.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Chat from '@/components/chat';
import { WebSite, WithContext } from 'schema-dts';
import { SITE_NAME } from '@/components/constants';

// font awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const opensans = Open_Sans({ subsets: ['latin'] });

const PAGE_NAME = 'Matt Brauner | Work';
const PAGE_DESC =
  'Matt Brauner is a New York City based technologist with professional experience in full-stack web development, financial technology, and data analysis';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mattbrauner.com'),
  icons: { icon: 'monogram_navybk.png' },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow',
  },

  title: PAGE_NAME,
  description: PAGE_DESC,
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
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    url: 'https://www.mattbrauner.com',
    title: PAGE_NAME,
    description: PAGE_DESC,
    images: [{ url: 'matt_bk.jpg', width: 2000, height: 1339 }],
  },
};

const jsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: 'Matt Brauner',
  url: 'https://www.mattbrauner.com',
  image: 'matt_bk.jpg',
};

export const viewport = {
  themeColor: '#17233d',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="ld+json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
