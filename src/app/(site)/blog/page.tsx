import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { blogPosts } from '@/content/blog';
import { formatDate } from '@/lib/utils';
import { ArrowRight, Clock, ShieldCheck, BookOpen, Calendar, Tag } from 'lucide-react';
import GoogleMapSection from '@/components/common/GoogleMapSection';

export const metadata = constructMetadata({
  title: 'Blog & Technical Articles | S.B. Enterprise Kolkata',
  description: 'Practical guides on TallyPrime Gold vs Silver, GST & e-Invoicing compliance in West Bengal, TDL invoice customization, and web software integrations.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div className="pt-24 space-y-0">
      
      {/* Page Hero - Dark Dual-Tone */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[750px] h-[400px] bg-gradient-to-br from-amber-500/15 via-emerald-500/15 to-transparent blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span>EXPERT KNOWLEDGE BASE & ARTICLES</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            Tally, GST & Digital Software Insights.
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed font-normal">
            Factual educational guides written by our Kolkata technical team covering TallyPrime licensing, GST returns, AnyDesk support SLAs, TDL invoice scripting, and Next.js web applications.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {['Educational Guides', 'Tally Certified Knowledge', 'Kolkata Desk Insights'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Section - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          
          {blogPosts.length > 0 && (
            <div className="bg-white border-2 border-amber-200/90 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 text-xs font-extrabold text-slate-950 bg-amber-400 rounded-full uppercase">
                    Featured Article
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    {formatDate(blogPosts[0].date)}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  {blogPosts[0].category}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-amber-700 transition-colors">
                  {blogPosts[0].title}
                </Link>
              </h2>

              <p className="text-slate-700 leading-relaxed font-normal text-base max-w-4xl">
                {blogPosts[0].excerpt}
              </p>

              <div className="pt-4 border-t border-amber-100 flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500">Author: {blogPosts[0].author}</span>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* All Articles Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-amber-200 pb-4">
              <h2 className="text-2xl font-extrabold text-slate-950">All Articles & Guides</h2>
              <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                {blogPosts.length} Published Articles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border-2 border-amber-200/90 rounded-3xl p-7 space-y-5 flex flex-col justify-between shadow-md hover:border-amber-500 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full font-bold">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 font-medium">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-950 group-hover:text-amber-700 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-medium">{formatDate(post.date)}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all shadow-xs"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Location Map */}
      <GoogleMapSection title="Visit Our Service Desk in Kolkata" />

    </div>
  );
}
