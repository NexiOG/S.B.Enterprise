import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { productCategories, productsList } from '@/content/products';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = productCategories.find((c) => c.slug === category);
  if (!cat) return constructMetadata();
  return constructMetadata({
    title: `${cat.name} | S.B. Enterprise`,
    description: cat.description,
    path: `/products/${category}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = productCategories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const categoryProducts = productsList.filter((p) => p.categorySlug === category);

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-slate-900 to-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary-300">{cat.name}</span>
          </div>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-300 bg-primary-500/20 rounded-full">
            {cat.badge}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl text-white leading-tight">{cat.name}</h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">{cat.description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-warm-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:shadow-card transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-warm-100 pb-2">
                  <span className="uppercase tracking-wider font-medium">{prod.categorySlug}</span>
                  {prod.priceDisplay && (
                    <span className="font-bold text-primary-600">{prod.priceDisplay}</span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-slate-800">{prod.name}</h2>
                <p className="text-xs text-accent-500 font-semibold">{prod.subtitle}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{prod.description}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-warm-100">
                <ul className="space-y-1.5">
                  {prod.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/products/${prod.categorySlug}/${prod.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors pt-1"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
