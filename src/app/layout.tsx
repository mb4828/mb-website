import './globals.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Chat from '@/components/chat';
import { Graph, Person, WebSite, WithContext } from 'schema-dts';
import { SITE_NAME } from '@/components/constants';

// font awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const opensans = Open_Sans({ subsets: ['latin'] });

const PAGE_TITLE = `${SITE_NAME} - Senior Software Engineer`;
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
  title: PAGE_TITLE,
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
    title: PAGE_TITLE,
    type: 'profile',
    images: [{ url: 'matt_og.jpeg', width: 1200, height: 630 }],
    url: 'https://www.mattbrauner.com',
    description: PAGE_DESC,
    locale: 'en_US',
    siteName: SITE_NAME,
    firstName: 'Matt',
    lastName: 'Brauner',
  },
};

export const viewport = {};

const jsonLdPerson: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matt Brauner',
  jobTitle: 'Senior Software Engineer',
  url: 'https://www.mattbrauner.com',
  image: 'https://www.mattbrauner.com/matt_headshot_original.jpg',
  worksFor: [
    {
      '@type': 'Organization',
      name: 'BlackRock',
      sameAs: 'https://blackrock.com',
    },
  ],
  alumniOf: [
    {
      '@type': 'HighSchool',
      name: 'Mahwah High School',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Colgate University',
      sameAs: 'https://colgate.edu',
    },
  ],
  gender: 'Male',
  description: PAGE_DESC,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressCountry: 'United States',
  },
  sameAs: [
    'https://www.facebook.com/matt.brauner/',
    'https://www.instagram.com/matt.brauner/',
    'https://www.threads.net/@matt.brauner',
    'https://www.linkedin.com/in/matt-brauner/',
    'https://github.com/mb4828',
  ],
};

const jsonLdWebSite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: 'https://www.mattbrauner.com',
  image: 'https://www.mattbrauner.com/matt_og.jpeg',
};

const jsonLd: Graph = {
  '@context': 'https://schema.org',
  '@graph': [jsonLdPerson, jsonLdWebSite],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YT3V2M6W5C" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YT3V2M6W5C');
          `}
        </Script>
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NGHRDSMQ');
          `}
        </Script>
        <Script id="ld+json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={opensans.className}>
        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGHRDSMQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
        <Chat />
      </body>
    </html>
  );
}
