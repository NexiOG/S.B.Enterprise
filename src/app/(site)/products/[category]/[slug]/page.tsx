import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { getProductSchema } from '@/lib/schema';
import { productsList } from '@/content/products';
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { companyInfo } from '@/content/company';
import EnquiryForm from '@/components/forms/EnquiryForm';

interface ProductDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productsList.find((p) => p.slug === slug);
  if (!product) return constructMetadata();
  return constructMetadata({
    title: `${product.name} | S.B. Enterprise`,
    description: product.description,
    path: `/products/${product.categorySlug}/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category, slug } = await params;
  const product = productsList.find((p) => p.slug === slug && p.categorySlug === category);

  if (!product) {
    notFound();
  }

  const productSchema = getProductSchema(product.name, product.description, product.categorySlug);

  return (
    <div className="pt-24 pb-16 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-stone-900 text-stone-50 py-12 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center space-x-2 font-mono text-xs text-stone-400">
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/products/${product.categorySlug}`} className="capitalize hover:text-white transition-colors">
              {product.categorySlug}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-sand">{product.name}</span>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-leaf font-semibold block">
              OFFERING SPECIFICATION
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-brand-terracotta font-mono text-sm">{product.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Detail Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Product Info & Specs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#FCFBF8] border border-stone-200 rounded-subtle p-6 lg:p-8 space-y-6">
              {product.priceDisplay && (
                <div className="p-4 bg-stone-100 border border-stone-200 rounded-subtle flex items-center justify-between font-mono">
                  <div>
                    <span className="text-xs text-stone-500 block uppercase">Price Indicative</span>
                    <span className="text-2xl font-bold text-stone-900">{product.priceDisplay}</span>
                  </div>
                  {product.priceNote && (
                    <span className="text-xs text-stone-600 bg-stone-200 px-2.5 py-1 rounded">
                      {product.priceNote}
                    </span>
                  )}
                </div>
              )}

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-stone-900">Overview</h2>
                <p className="text-stone-700 text-sm leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-stone-900">Key Capabilities & Highlights</h3>
                <ul className="space-y-2 font-mono text-xs text-stone-700">
                  {product.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-leaf shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <h3 className="text-base font-bold text-stone-900 font-mono text-xs uppercase tracking-wider">
                  Technical & Operational Specifications
                </h3>
                <div className="border border-stone-200 rounded-subtle overflow-hidden">
                  <table className="w-full text-left font-mono text-xs">
                    <tbody className="divide-y divide-stone-200">
                      {Object.entries(product.specifications).map(([key, val]) => (
                        <tr key={key} className="bg-stone-50/50">
                          <td className="py-2.5 px-4 font-semibold text-stone-700 bg-stone-100/60 w-1/3 border-r border-stone-200">
                            {key}
                          </td>
                          <td className="py-2.5 px-4 text-stone-900">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="p-4 bg-brand-surface text-stone-100 rounded-subtle font-mono text-xs flex items-center justify-between border border-brand-forest/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-leaf" />
                  <span>Verified S.B. Enterprise Onboarding & Assistance</span>
                </div>
                <span>Kolkata Desk</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Enquiry Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-24">
              <EnquiryForm defaultInterest="TallyPrime" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
