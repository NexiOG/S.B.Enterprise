import { TallyEdition, TallyService } from '@/types';

export const tallyEditions: TallyEdition[] = [
  {
    id: 'tallyprime-silver',
    name: 'TallyPrime Silver',
    badge: 'Single User',
    userType: 'Standalone or single-office setup',
    description: 'Ideal for a single PC environment requiring complete GST accounting, inventory, and compliance functionality.',
    price: '₹22,500',
    priceUnit: '+ GST',
    features: [
      'GST, e-Invoice & e-Way Bill generation',
      'Inventory management & batch tracking',
      'Payroll & statutory compliance',
      'Free upgrades within release version',
      'On-site or remote installation assistance',
    ],
  },
  {
    id: 'tallyprime-gold',
    name: 'TallyPrime Gold',
    badge: 'Multi-User (LAN)',
    userType: 'Unlimited users on the same LAN',
    description: 'Designed for growing enterprises requiring simultaneous access across multiple systems on a local network.',
    price: '₹67,500',
    priceUnit: '+ GST',
    isPopular: true,
    features: [
      'All Silver capabilities included',
      'Unlimited multi-user access on local area network',
      'Centralized licence management and administration',
      'Multi-branch and multi-location data consolidation',
      'Priority AMC support from day one',
    ],
  },
  {
    id: 'tallyprime-server',
    name: 'TallyPrime Server',
    badge: 'Enterprise',
    userType: 'High-transaction firms with multi-user concurrency',
    description: 'Enterprise-grade server architecture that ensures zero concurrency delays and high data throughput for heavy transaction volumes.',
    price: 'On request',
    priceUnit: '+ GST',
    features: [
      'Advanced data concurrency & non-blocking server architecture',
      'Real-time user monitoring & security controls',
      'Enterprise-grade uptime & fast data access',
      'Dedicated onboarding & customized AMC SLA',
    ],
  },
];

export const tallyServices: TallyService[] = [
  {
    number: '01',
    title: 'TallyPrime Sales & Installation',
    shortDesc: 'Hassle-free deployment of licensed TallyPrime with proper configuration.',
    fullDesc: 'Single or multi-user setup, on-site and remote installation, licence activation, server configuration, and data migration assistance from older Tally versions.',
  },
  {
    number: '02',
    title: 'Tally Customization & TDL Add-ons',
    shortDesc: 'Custom modules matched to your operational workflow and statutory needs.',
    fullDesc: 'Auto GST calculation, e-Invoice integration, custom voucher formats, specialized invoice printouts, inventory extensions, payroll rules, and custom report formats.',
  },
  {
    number: '03',
    title: 'AMC & Remote Technical Support',
    shortDesc: 'Annual Maintenance Contracts for round-the-year technical peace of mind.',
    fullDesc: 'Priority resolution via AnyDesk / TeamViewer, regular software updates, automated data backup scheduling, and proactive checks to minimize operational downtime.',
  },
  {
    number: '04',
    title: 'GST & Statutory Compliance',
    shortDesc: 'Staying compliant with GST, TDS, e-Invoice and government portals.',
    fullDesc: 'GSTR-1, GSTR-3B return filing support, TDS compliance setup, e-Invoice and e-Way Bill automated generation, and ledger reconciliation.',
  },
  {
    number: '05',
    title: 'Data Recovery & Backup',
    shortDesc: 'Protection from accidental data loss, corruption, or hardware failure.',
    fullDesc: 'Automated scheduled backups, corrupted company data restoration, data split assistance across financial years, and seamless version upgrade migration.',
  },
  {
    number: '06',
    title: 'Training & Consultation',
    shortDesc: 'Practical hands-on training for accounting staff and managers.',
    fullDesc: 'Onboarding for new team members, shortcut training, inventory workflow optimization, and consultative guidance on financial control systems inside Tally.',
  },
];

export const tallyMatrix = {
  headers: ['Capability', 'Silver', 'Gold', 'Server'],
  rows: [
    { capability: 'GST, TDS, e-Invoice & e-Way Bill', silver: 'Yes', gold: 'Yes', server: 'Yes' },
    { capability: 'Multi-user access on LAN', silver: 'No', gold: 'Unlimited', server: 'Unlimited' },
    { capability: 'Data concurrency', silver: 'Standard', silverSub: '', gold: 'Standard', server: 'Advanced Concurrent' },
    { capability: 'User monitoring & access control', silver: 'Basic', gold: 'Advanced', server: 'Enterprise Level' },
    { capability: 'Ideal Business Setup', silver: 'Solo / Small Office', gold: 'Growing Firms', server: 'Large Enterprises' },
  ],
};
