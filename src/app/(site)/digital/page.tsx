'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Globe, Paintbrush, Smartphone, Search, Code2, Server,
  CheckCircle2, Sparkles, Terminal, Zap, ShieldCheck, ChevronDown,
  Clock, Check, Layers, Database, Lock, Cpu, Monitor, Cloud,
  Wifi, Shield, Headphones, BarChart3, Palette, Layout,
  Rocket, Settings, Users, FileCode, BrainCircuit,
} from 'lucide-react';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import GoogleMapSection from '@/components/common/GoogleMapSection';

/* ─── NexiOG Service Catalogue ─── */

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    shortLabel: 'Web Dev',
    tagline: 'Custom, responsive & high-performance web applications engineered for scale.',
    icon: Globe,
    description:
      'We build custom websites and enterprise-grade web applications using modern frameworks. From responsive corporate sites to complex SaaS platforms, every project is engineered with clean, documented code and deployed through robust CI/CD pipelines.',
    features: [
      'Custom Website & Web Application Development',
      'Enterprise Web Apps with Microservice Architecture',
      'E-commerce Solutions & Scalable Online Stores',
      'CMS Platforms & Content Management Systems',
      'API Design & Process Automation',
      'AI & Automation — Custom AI Workflows & LLM Integration',
      'Ongoing Maintenance, Monitoring & Performance Tuning',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS EKS', 'Docker', 'GitHub Actions'],
    process: ['Plan & Discovery', 'Design', 'Develop', 'Deploy', 'Optimize & Maintain'],
  },
  {
    id: 'web-design',
    title: 'Web Design',
    shortLabel: 'Design',
    tagline: 'Conversion-focused UI/UX design tailored to your business identity.',
    icon: Paintbrush,
    description:
      'We don\'t use templates. Every interface is custom-designed around your brand, your users, and your conversion goals. Our designs are responsive, accessible, and built to perform on every device.',
    features: [
      'Custom UI/UX Design Built for Conversion',
      'Responsive Design for All Devices & Screen Sizes',
      'Brand Identity Integration & Visual Language Systems',
      'High-Performance Frontend with Next.js',
      'Business-Focused Design Driving Measurable Growth',
      'Seamless Integration with E-commerce & CMS Ecosystems',
    ],
    techStack: ['Figma', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'shadcn/ui', 'Radix UI'],
    process: ['Brand Audit', 'Wireframes', 'Visual Design', 'Prototype', 'Handoff & Build'],
  },
  {
    id: 'app-dev',
    title: 'App Development',
    shortLabel: 'Mobile',
    tagline: 'Bespoke iOS & Android applications built for performance & scalability.',
    icon: Smartphone,
    description:
      'From concept to App Store — we build native and cross-platform mobile applications tailored to your business. Whether it\'s a delivery app, telemedicine platform, or field-sales tool, we deliver production-grade software with end-to-end support.',
    features: [
      'Custom iOS & Android Mobile App Development',
      'Enterprise-Level Application Architecture',
      'High-Performance, Scalable & Secure Builds',
      'Offline-First Data Sync & Push Notifications',
      'Camera Barcode Scanning & Bluetooth Printer Integration',
      'End-to-End Service: Concept → Deployment → Ongoing Support',
    ],
    techStack: ['React Native', 'Flutter', 'Node.js API', 'Firebase', 'SQLite', 'AWS'],
    process: ['Discovery', 'Architecture', 'Sprint Development', 'QA & Testing', 'Store Publishing'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    shortLabel: 'SEO',
    tagline: 'Dominate search results and scale revenue through digital channels.',
    icon: Search,
    description:
      'We combine technical SEO expertise with data-driven marketing strategies to improve your online visibility, rank higher on Google, and drive qualified leads to your business.',
    features: [
      'Technical SEO Audits & On-Page Optimization',
      'Search Engine Ranking & Keyword Strategy',
      'Google Business Profile & Local Pack Optimization',
      'Schema.org Structured Data (JSON-LD) Implementation',
      'Core Web Vitals & PageSpeed Optimization',
      'Monthly Performance Reporting & Analytics',
    ],
    techStack: ['Google Search Console', 'Lighthouse', 'Schema.org', 'Google Analytics', 'Ahrefs', 'SEMrush'],
    process: ['Site Audit', 'Keyword Research', 'On-Page Fixes', 'Content Strategy', 'Monitor & Report'],
  },
  {
    id: 'software-dev',
    title: 'Custom Software Development',
    shortLabel: 'Software',
    tagline: 'Enterprise SaaS, complex APIs & automated workflows — engineered from scratch.',
    icon: Code2,
    description:
      'Our engineering-first approach delivers custom enterprise SaaS systems, complex API architectures, and automated tools that streamline corporate operations. Every solution is built for scalability, security, and measurable business growth.',
    features: [
      'Custom Enterprise SaaS System Architecture',
      'Complex API Design & Development',
      'CRM & ERP System Development',
      'Process Automation & Workflow Optimization',
      'Scalability & Security by Design',
      'Performance Optimization with Minimal Maintenance Overhead',
    ],
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'GraphQL', 'tRPC', 'Docker', 'Kubernetes'],
    process: ['Requirements Engineering', 'System Design', 'Agile Sprints', 'Integration Testing', 'Deployment & SLA'],
  },
  {
    id: 'it-solutions',
    title: 'Managed Enterprise IT',
    shortLabel: 'IT Infra',
    tagline: 'Secure, high-availability IT infrastructure & cybersecurity operations.',
    icon: Server,
    description:
      'We manage your entire IT infrastructure — from cloud platforms and network architecture to cybersecurity operations and disaster recovery. Our managed services guarantee high uptime, rapid incident response, and full compliance.',
    features: [
      'Cybersecurity: EDR, Firewall Management, Zero-Trust Architecture',
      'Cloud Management: AWS, Azure, Microsoft 365',
      'Network Architecture: SD-WAN, VPN, VLAN Configuration',
      '24/7/365 Helpdesk Support & Network Operations Center (NOC)',
      'Disaster Recovery: Automated Off-Site Backups & Bare-Metal Recovery',
      'Compliance Support: HIPAA, SOC2, GDPR',
    ],
    techStack: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Pulumi', 'Sentry', 'Grafana', 'Prometheus'],
    process: ['Infrastructure Audit', 'Architecture Design', 'Migration', '24/7 Monitoring', 'Compliance & DR'],
  },
];

/* ─── Full Tech Stack Grid ─── */

const techStackGrid = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Framer Motion', 'GSAP'] },
  { category: 'Backend', items: ['Node.js', 'TypeScript', 'Bun', 'GraphQL', 'tRPC', 'Express', 'Fastify'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Redis'] },
  { category: 'Auth & Security', items: ['Clerk', 'Auth0', 'JWT', 'Zero-Trust', 'OAuth2'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { category: 'Monitoring', items: ['Sentry', 'Grafana', 'Prometheus'] },
];

/* ─── FAQs ─── */

const faqs = [
  {
    q: 'What industries do you work with?',
    a: 'We work across all industries — from retail, manufacturing, and healthcare to fintech, logistics, and education. Our solutions are custom-built for each client\'s specific business context.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A standard corporate website takes 3–4 weeks. Complex web applications and SaaS platforms take 6–10 weeks. Mobile apps typically take 8–12 weeks from concept to store publishing.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes. Every project includes dedicated post-launch support, performance monitoring, and ongoing maintenance. We offer monthly retainer plans for continuous optimization.',
  },
  {
    q: 'Can you integrate with our existing systems (Tally, ERP, CRM)?',
    a: 'Absolutely. We specialize in building custom API bridges that connect web and mobile applications directly with existing business systems like TallyPrime, SAP, and custom ERPs.',
  },
];

export default function DigitalPage() {
  const [selectedService, setSelectedService] = useState<string>('web-dev');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeService = services.find((s) => s.id === selectedService) || services[0];

  return (
    <div className="pt-24 space-y-0">

      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[750px] h-[400px] bg-gradient-to-br from-amber-500/15 via-emerald-500/15 to-transparent blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span>POWERED BY NEXIOG TECHNOLOGIES</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            We Engineer the Tech.<br />
            <span className="text-amber-400">You Capture the Market.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed font-normal">
            From concept to launch — high-performance websites, custom software, mobile applications, IT infrastructure, and digital marketing strategies that drive measurable business growth.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {['Web Development', 'Web Design', 'App Development', 'SEO & Marketing', 'Custom Software', 'IT Solutions'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact?interest=Digital%20Studio"
              className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg flex items-center gap-2 transition-all"
            >
              Get a Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#services"
              className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold text-sm rounded-xl border border-white/10 flex items-center gap-2 transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Services Deep-Dive Navigator ── */}
      <section id="services" className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">

          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950">
              Six core capabilities. One engineering team.
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl font-normal leading-relaxed">
              Select a service below to explore technical specifications, features, and our development process.
            </p>
          </div>

          {/* Service Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {services.map((s) => {
              const Icon = s.icon;
              const isSelected = selectedService === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-md font-extrabold'
                      : 'bg-white text-slate-800 border-amber-200/80 hover:border-amber-400'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-slate-950' : 'text-amber-600'}`} />
                  <span className="text-xs font-bold leading-tight">{s.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Spec Card */}
          <div className="bg-white border-2 border-amber-200/90 rounded-3xl p-8 lg:p-10 space-y-8 shadow-md">
            <div className="space-y-3">
              <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-widest block">
                SERVICE SPECIFICATION
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-950">{activeService.title}</h3>
              <p className="text-xs font-bold text-amber-800">{activeService.tagline}</p>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">{activeService.description}</p>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-950 uppercase block">Engineering Stack:</span>
              <div className="flex flex-wrap gap-2">
                {activeService.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold rounded-xl">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features & Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-amber-100">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-950 uppercase">Key Features & Capabilities</h4>
                <div className="space-y-2.5 text-xs text-slate-700">
                  {activeService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-950 uppercase">Development Process</h4>
                <div className="space-y-3">
                  {activeService.process.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                        i === 0 ? 'bg-amber-500 text-slate-950' : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/contact?interest=${encodeURIComponent(activeService.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0A0E1A] hover:bg-slate-900 rounded-xl transition-all shadow-sm"
                  >
                    Inquire About {activeService.shortLabel}
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Full Tech Stack Section ── */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span>ENGINEERING STACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Technologies we work with.
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl font-normal leading-relaxed">
              Our team works across the full modern stack — frontend frameworks, backend APIs, databases, cloud infrastructure, authentication, and observability tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStackGrid.map((group) => (
              <div key={group.category} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
                <h3 className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-950 text-slate-200 border border-slate-800 text-xs font-bold rounded-xl">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Timeline Estimator ── */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>TYPICAL TIMELINES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950">
              From brief to launch — how long does it take?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Corporate Website', timeline: '3–4 Weeks', icon: Globe, desc: 'Responsive multi-page website with SEO, CMS, and contact forms.' },
              { label: 'Web Application / SaaS', timeline: '6–10 Weeks', icon: Code2, desc: 'Custom dashboards, portals, and enterprise web software.' },
              { label: 'Mobile Application', timeline: '8–12 Weeks', icon: Smartphone, desc: 'Native iOS & Android apps from concept to store publishing.' },
              { label: 'E-Commerce Platform', timeline: '5–8 Weeks', icon: BarChart3, desc: 'Scalable online stores with payment gateways and inventory.' },
              { label: 'Custom Software / API', timeline: '6–12 Weeks', icon: Terminal, desc: 'Enterprise SaaS, CRM/ERP systems, and API integrations.' },
              { label: 'IT Infrastructure Setup', timeline: '2–4 Weeks', icon: Server, desc: 'Cloud migration, network architecture, and security hardening.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white border-2 border-amber-200/90 rounded-2xl p-6 space-y-4 shadow-sm hover:border-amber-500 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <Icon className="w-5 h-5 text-amber-700" />
                    <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">{item.timeline}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-950">{item.label}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact?interest=Digital%20Studio%20Project"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A0E1A] hover:bg-slate-900 text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Get a Custom Scope Quote
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span>FREQUENTLY ASKED</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Common questions answered.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Embedded Location Map */}
      <GoogleMapSection />

    </div>
  );
}
