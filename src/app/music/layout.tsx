import { SITE_NAME } from '@/components/constants';
import { Metadata } from 'next';

const PAGE_NAME = `${SITE_NAME} - Music`;
const PAGE_DESC = 'Matt Brauner is an amateur clarinetist and saxophonist with over 20 years of performance experience';

export const metadata: Metadata = {
  title: PAGE_NAME,
  description: PAGE_DESC,
  keywords: ['matt brauner', 'new york', 'nyc', 'musician', 'clarinet', 'saxophone'],
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    url: 'https://mattbrauner.com/music',
    title: PAGE_NAME,
    description: PAGE_DESC,
    images: [{ url: 'matt_clarinet.jpeg', width: 2743, height: 3658 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
