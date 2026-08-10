import { VideoItem } from '@/types';

export const videoItems: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'TallyPrime GST & e-Way Bill Quick Configuration Walkthrough',
    duration: '08:45',
    topic: 'Tally & GST',
    description: 'A practical, step-by-step video guide demonstrating how to configure GSP login, generate e-Way Bills directly from sales vouchers, and verify tax rates in TallyPrime.',
    embedId: 'dQw4w9WgXcQ',
    thumbnailKey: 'tallyHero',
    keyTakeaways: [
      'Configuring direct e-Way Bill GSP credentials in TallyPrime settings',
      'Creating compliant sales vouchers with HSN/SAC codes',
      'Handling distance, transporter ID, and vehicle details',
      'Printing tax invoices with embedded e-Way Bill numbers',
    ],
  },
  {
    id: 'vid-2',
    title: 'TallyPrime Gold Multi-User Network Setup & Security Best Practices',
    duration: '11:20',
    topic: 'Network Setup',
    description: 'Learn how to configure Tally License Server across a Local Area Network (LAN), set up user access roles, and protect company data files from unauthorized access.',
    embedId: '3JZ_D3ELwOQ',
    thumbnailKey: 'tallySection',
    keyTakeaways: [
      'Installing and activating Tally License Server on the host PC',
      'Configuring Windows Firewall rules for Tally port communications',
      'Setting up user accounts, passwords, and permission levels',
      'Verifying multi-user data synchronization stability',
    ],
  },
  {
    id: 'vid-3',
    title: 'Custom TDL Invoice Layouts & Automated QR Code Demonstration',
    duration: '06:15',
    topic: 'TDL Customization',
    description: 'Demonstration of custom Tally Definition Language (TDL) add-ons showing custom letterhead headers, dynamic UPI payment QR codes, and multi-page voucher layouts.',
    embedId: 'L_LUpnjgPso',
    thumbnailKey: 'supportVisual',
    keyTakeaways: [
      'Loading .tcp customization files inside TallyPrime Add-On Management',
      'Configuring company logo and custom header fields',
      'Testing dynamic UPI QR code generation on printed tax invoices',
      'Setting up batch barcode label formats for thermal printers',
    ],
  },
  {
    id: 'vid-4',
    title: 'Overview of Nexiog Custom Web & App Development Process',
    duration: '09:30',
    topic: 'Digital Services',
    description: 'An overview of how S.B. Enterprise works with Nexiog to scope, design, build, and deploy custom web portals and mobile applications for local B2B enterprises.',
    embedId: '2Vv-BfVoq4g',
    thumbnailKey: 'nexiogHero',
    keyTakeaways: [
      'Initial requirement discovery and scoping with S.B. Enterprise',
      'UI/UX wireframing and prototyping by Nexiog design studio',
      'Backend integration with business systems and database design',
      'Deployment, domain setup, and ongoing technical maintenance',
    ],
  },
];
