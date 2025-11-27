export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chisom Henry Godwin',
    alternateName: ['Chisom Henry', 'Chisom'],
    url: 'https://www.chisomhenry.me',
    image: 'https://www.chisomhenry.me/chisomdev.png',
    sameAs: [
      'https://github.com/chisomhenry',
      'https://linkedin.com/in/chisomhenry',
      'https://twitter.com/chisomhenry',
    ],
    jobTitle: 'Software Engineer',
    description: 'Best frontend developer, mobile engineer, and software developer. Expert in React, Next.js, React Native, TypeScript.',
    knowsAbout: [
      'Frontend Development',
      'Mobile Development',
      'React',
      'React Native',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Mobile App Development',
      'Software Engineering',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chisom Henry - Software Engineer',
    url: 'https://www.chisomhenry.me',
    description: 'Portfolio of Chisom Henry Godwin - Best frontend developer, mobile engineer, and software developer.',
    author: {
      '@type': 'Person',
      name: 'Chisom Henry Godwin',
    },
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Chisom Henry - Software Development Services',
    description: 'Professional frontend development, mobile app development, and software engineering services.',
    url: 'https://www.chisomhenry.me',
    image: 'https://www.chisomhenry.me/chisomdev.png',
    priceRange: '$$',
    telephone: '+234',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
