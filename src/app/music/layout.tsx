import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matt Brauner | Music',
  description: 'Matt Brauner is an amateur clarinetist and saxophonist with over 20 years of performance experience',
  keywords: ['matt brauner', 'new york', 'nyc', 'musician', 'clarinet', 'saxophone'],
  openGraph: {
    url: 'https://mattbrauner.com',
    type: 'website',
    title: 'Matt Brauner | Music',
    description: 'Matt Brauner is an amateur clarinetist and saxophonist with over 20 years of performance experience',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
