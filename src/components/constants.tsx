import { Graph, Person, WebSite, WithContext } from 'schema-dts';

export const SITE_NAME = 'Matt Brauner';

const JSON_LD_PERSON: WithContext<Person> = {
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

const JSON_LD_WEBSITE: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: 'https://www.mattbrauner.com',
  image: 'https://www.mattbrauner.com/matt_og2.jpeg',
};

export const JSON_LD: Graph = {
  '@context': 'https://schema.org',
  '@graph': [JSON_LD_PERSON, JSON_LD_WEBSITE],
};
