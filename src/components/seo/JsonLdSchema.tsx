import { companyInfo } from '@/content/company';

export default function JsonLdSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sbenterprise.co.in/#organization',
    name: companyInfo.name,
    legalName: companyInfo.name,
    url: 'https://sbenterprise.co.in',
    logo: 'https://sbenterprise.co.in/images/sbe_tally_partner.jpg',
    image: 'https://sbenterprise.co.in/images/sbe_slide1_branded_v2.jpg',
    description:
      'Official Authorized Tally Solutions Partner in Kolkata. Delivering genuine TallyPrime licensing, 24*7 remote AnyDesk/UltraViewer support, custom TDLs, and Next.js web application development across West Bengal.',
    telephone: companyInfo.contact.phones[0],
    email: companyInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.location.addressLines[0],
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: companyInfo.location.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: companyInfo.location.mapCoordinates.lat,
      longitude: companyInfo.location.mapCoordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    priceRange: '₹₹',
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TallyPrime Licensing & Support - S.B. Enterprise Kolkata',
    operatingSystem: 'Windows 10, Windows 11, Windows Server',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '22500.00',
      priceCurrency: 'INR',
    },
    author: {
      '@type': 'Organization',
      name: companyInfo.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
    </>
  );
}
