import './globals.scss';
import { Open_Sans } from 'next/font/google';
import Script from 'next/script';
import { SITE_NAME, JSON_LD } from '@/components/constants';
import BaseComponent from '@/components/base.module';
import { Metadata } from 'next';

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
    images: [{ url: 'matt_og2.jpeg', width: 1200, height: 630 }],
    url: 'https://www.mattbrauner.com',
    description: PAGE_DESC,
    locale: 'en_US',
    siteName: SITE_NAME,
    firstName: 'Matt',
    lastName: 'Brauner',
  },
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
        <Script id="ld+json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
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

        <BaseComponent>{children}</BaseComponent>
      </body>
    </html>
  );
}
