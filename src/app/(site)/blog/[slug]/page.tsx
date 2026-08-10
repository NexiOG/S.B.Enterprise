import { notFound } from 'next/navigation';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { getBlogPostingSchema } from '@/lib/schema';
import { blogPosts } from '@/content/blog';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Clock, User, Calendar, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import EnquiryForm from '@/components/forms/EnquiryForm';
import GoogleMapSection from '@/components/common/GoogleMapSection';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return constructMetadata();
  return constructMetadata({
    title: `${post.title} | S.B. Enterprise Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = getBlogPostingSchema(post.title, post.excerpt, post.date, post.author, post.slug);

  return (
    <div className="pt-24 space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Article Header - Dark Dual-Tone */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-20 lg:py-24 border-b border-amber-500/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full font-bold uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 pt-2 border-t border-white/10">
            <User className="w-4 h-4 text-emerald-400" />
            <span>Written by: {post.author} · S.B. Enterprise Kolkata Desk</span>
          </div>
        </div>
      </section>

      {/* Main Article Content & Sidebar - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Article Body (8 cols) */}
            <article className="lg:col-span-8 bg-white border-2 border-amber-200/90 rounded-3xl p-8 sm:p-10 space-y-8 shadow-xl">
              
              {/* Excerpt Box */}
              <div className="p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl text-slate-800 font-semibold leading-relaxed text-base italic">
                "{post.excerpt}"
              </div>

              {/* Formatted Article Content */}
              <div className="space-y-6 text-slate-800 leading-relaxed font-normal text-sm sm:text-base">
                {post.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="font-display text-xl font-bold text-slate-950 pt-6 border-b border-amber-100 pb-2">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              {/* Topic Keywords Tag Cloud */}
              <div className="pt-6 border-t border-amber-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                  Topic Keywords & Tags:
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-amber-900">
                  {post.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-100 border border-amber-300 rounded-full">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

            </article>

            {/* Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-28 space-y-6">
                
                {/* Consultation Card */}
                <div className="p-6 bg-[#0A0E1A] text-white rounded-3xl border border-amber-500/30 space-y-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      KOLKATA DESK HELP
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Need help with TallyPrime or GST compliance?</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our team provides Tally licensing, AnyDesk remote support, custom TDLs, and web development.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all shadow-md"
                  >
                    <span>Speak with Our Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Form */}
                <EnquiryForm defaultInterest="General enquiry" />

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Embedded Location Map */}
      <GoogleMapSection title="Visit Our Service Desk in Kolkata" />

    </div>
  );
}
