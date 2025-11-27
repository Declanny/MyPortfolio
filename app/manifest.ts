import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chisom Henry Godwin - Software Engineer',
    short_name: 'Chisom Henry',
    description: 'Best frontend developer, mobile engineer, and software developer. Expert in React, Next.js, React Native.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ff6300',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
