import './globals.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

// font awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const opensans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matt Brauner | Senior Software Engineer, New York, NY',
  description:
    'Senior technologist with professional experience in full-stack web development, financial technology, and data analysis',
  icons: { icon: 'monogram_navybk.png' },
  themeColor: '#17233d',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  );
}
