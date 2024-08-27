import { SITE_NAME, SITE_TITLE } from '@/components/constants';
import { Metadata } from 'next';

const PAGE_TITLE = `${SITE_TITLE} - Music`;
const PAGE_DESC =
  'Matt Brauner is a New York City based amateur clarinetist and saxophonist with over 20 years of performance experience';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: ['matt brauner', 'new york', 'nyc', 'musician', 'clarinet', 'saxophone'],
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    url: 'https://mattbrauner.com/music',
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [{ url: 'matt_og.jpeg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
