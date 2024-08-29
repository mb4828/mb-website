import { SITE_NAME } from '@/components/constants';
import { Metadata } from 'next';

const PAGE_TITLE = `${SITE_NAME} - Clarinetist & Saxophonist`;
const PAGE_DESC =
  'Matt Brauner is a New York City based amateur clarinetist and saxophonist with over 20 years of performance experience';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ['matt brauner', 'new york', 'nyc', 'musician', 'clarinet', 'saxophone'],
  openGraph: {
    title: PAGE_TITLE,
    type: 'profile',
    images: [{ url: 'matt_og.jpeg', width: 1200, height: 630 }],
    url: 'https://www.mattbrauner.com/music',
    description: PAGE_DESC,
    locale: 'en_US',
    siteName: SITE_NAME,
    firstName: 'Matt',
    lastName: 'Brauner',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
