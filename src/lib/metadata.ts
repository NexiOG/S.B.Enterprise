import { Metadata } from 'next';
import { companyInfo } from '@/content/company';

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = 'S.B. Enterprise | Tally Certified Partner & Digital Solutions Kolkata',
  description = 'S.B. Enterprise is a Tally Certified Partner in Kolkata delivering TallyPrime licensing, GST compliance, AMC support, custom TDL, and digital web development.',
  image = '/images/luxury_workspace.jpg',
  path = '',
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  const url = `https://sbenterprise.app${path}`;

  return {
    title,
    description,
    keywords: [
      'Tally Certified Partner Kolkata',
      'TallyPrime Gold Price Kolkata',
      'Tally Silver License Kolkata',
      'Tally Support AMC Kolkata',
      'Custom TDL Developer Kolkata',
      'GST e-Invoicing Tally Kolkata',
      'Web Development Partner Kolkata',
    ],
    authors: [{ name: companyInfo.name }],
    openGraph: {
      title,
      description,
      url,
      siteName: companyInfo.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: url },
  };
}
