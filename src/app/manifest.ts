import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'S.B. Enterprise - Tally Partner Kolkata',
    short_name: 'S.B. Enterprise',
    description: 'Official Tally Certified Partner & Digital Solutions in Kolkata',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0E1A',
    theme_color: '#F59E0B',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
