import { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Tally', href: '/tally' },
  { label: 'Digital Studio', href: '/digital' },
  { label: 'Blog', href: '/blog' },
  { label: 'Videos', href: '/videos' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  solutions: [
    { label: 'TallyPrime Licensing', href: '/tally' },
    { label: 'Tally Services & AMC', href: '/tally#services' },
    { label: 'All Services Hub', href: '/services' },
    { label: 'Digital & Web Services', href: '/digital' },
  ],
  company: [
    { label: 'About S.B. Enterprise', href: '/about' },
    { label: 'Blog & Articles', href: '/blog' },
    { label: 'Video Guides & Demos', href: '/videos' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Privacy Policy', href: '/contact' },
  ],
};
