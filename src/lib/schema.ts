import { companyInfo } from '@/content/company';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: 'https://sbenterprise.app',
    logo: 'https://sbenterprise.app/images/luxury_workspace.jpg',
    description: companyInfo.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.location.addressLine1,
      addressLocality: companyInfo.location.city,
      addressRegion: companyInfo.location.state,
      postalCode: companyInfo.location.pincode,
      addressCountry: companyInfo.location.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.contact.phones[0],
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Bengali', 'Hindi'],
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyInfo.name,
    image: 'https://sbenterprise.app/images/luxury_workspace.jpg',
    telephone: companyInfo.contact.phones[0],
    email: companyInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.location.addressLine1,
      addressLocality: companyInfo.location.city,
      addressRegion: companyInfo.location.state,
      postalCode: companyInfo.location.pincode,
      addressCountry: companyInfo.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.636,
      longitude: 88.3756,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
    priceRange: '₹₹',
  };
}

export function getBlogPostingSchema(title: string, excerpt: string, date: string, author: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    datePublished: date,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: companyInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://sbenterprise.app/images/luxury_workspace.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sbenterprise.app/blog/${slug}`,
    },
  };
}

export function getProductSchema(name: string, description: string, categorySlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    category: categorySlug,
    brand: {
      '@type': 'Brand',
      name: companyInfo.name,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };
}
