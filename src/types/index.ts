export interface CompanyInfo {
  name: string;
  legalName?: string;
  tagline: string;
  partnerStatus?: string;
  description?: string;
  location: {
    addressLine1?: string;
    address?: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark?: string;
    country?: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsShareUrl?: string;
  };
  contact: {
    phones: string[];
    whatsapp?: string;
    whatsappDisplay?: string;
    email: string;
    displayHours: string;
    hoursDetail: {
      days: string;
      time: string;
      sunday?: string;
    };
  };
  badges?: string[];
  social?: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  features?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  badge?: string;
}

export interface Product {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  subtitle: string;
  priceDisplay?: string;
  priceNote?: string;
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
  imageKey: string;
  isPopular?: boolean;
}

export interface TallyEdition {
  id: string;
  name: string;
  badge: string;
  userType: string;
  description: string;
  price: string;
  priceUnit: string;
  isPopular?: boolean;
  features: string[];
}

export interface TallyService {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
}

export interface NexiogOffering {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: 'Tally' | 'GST' | 'Customization' | 'Digital';
  imageKey: string;
  keywords: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  topic: string;
  description: string;
  embedId: string;
  thumbnailKey: string;
  keyTakeaways: string[];
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  interest: 'TallyPrime' | 'Tally services' | 'S.B. Enterprise products' | 'Nexiog products' | 'General enquiry';
  message: string;
}
