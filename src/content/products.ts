import { Product, ProductCategory } from '@/types';

export const productCategories: ProductCategory[] = [
  {
    id: 'software',
    slug: 'software',
    name: 'TallyPrime Software',
    description: 'Licensed TallyPrime editions for accounting, GST, inventory, and enterprise data management.',
    badge: 'Category 01',
  },
  {
    id: 'services',
    slug: 'services',
    name: 'Tally Support & Services',
    description: 'Customization, AMC, GST return filing assistance, data recovery, and staff training.',
    badge: 'Category 02',
  },
  {
    id: 'digital',
    slug: 'digital',
    name: 'Digital & Web Services',
    description: 'Web development, mobile applications, custom business software, and search engine optimization.',
    badge: 'Category 03',
  },
];

export const productsList: Product[] = [
  {
    id: 'tallyprime-silver-prod',
    slug: 'tallyprime-silver',
    categorySlug: 'software',
    name: 'TallyPrime Silver Edition',
    subtitle: 'Single User Licence for Independent & Standalone Offices',
    priceDisplay: '₹22,500',
    priceNote: '+ 18% GST',
    description: 'TallyPrime Silver is designed for single-user environments where one accountant or business owner manages books of accounts, inventory, GST compliance, and billing on a single desktop computer.',
    highlights: [
      'Comprehensive accounting & financial reporting',
      'Automated GST, e-Invoice, and e-Way Bill integration',
      'Inventory control with batch and expiry tracking',
      'Payroll management & statutory reports',
      'Certified activation and data migration assistance',
    ],
    specifications: {
      'User License': 'Single User (Single System)',
      'Operating System': 'Windows 10 / 11 (64-bit recommended)',
      'Compliance Features': 'GST, TDS, TCS, e-Invoice, e-Way Bill',
      'Installation': 'Remote or On-Site at Kolkata Location',
      'Upgrades': 'Free updates within release version',
    },
    imageKey: 'tallyHero',
  },
  {
    id: 'tallyprime-gold-prod',
    slug: 'tallyprime-gold',
    categorySlug: 'software',
    name: 'TallyPrime Gold Edition',
    subtitle: 'Unlimited Multi-User LAN Licence for Growing Business Teams',
    priceDisplay: '₹67,500',
    priceNote: '+ 18% GST',
    description: 'TallyPrime Gold provides unlimited multi-user access over a Local Area Network (LAN), allowing multiple accountants and managers to work on the same financial data simultaneously.',
    highlights: [
      'Unlimited multi-user concurrent access on LAN',
      'Remote access capabilities for authorized users',
      'Multi-company and multi-currency support',
      'Advanced security control and user rights management',
      'Kolkata certified partner installation & LAN setup',
    ],
    specifications: {
      'User License': 'Unlimited Multi-User (Local Area Network)',
      'Operating System': 'Windows 10 / 11 / Windows Server',
      'Compliance Features': 'GST, TDS, TCS, e-Invoice, e-Way Bill',
      'Installation': 'Remote or On-Site LAN Setup',
      'Upgrades': 'Free updates within release version',
    },
    imageKey: 'tallyHero',
  },
];
