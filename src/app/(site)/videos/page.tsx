'use client';

import { useState } from 'react';
import { videoItems } from '@/content/videos';
import { VideoItem } from '@/types';
import VideoModal from '@/components/videos/VideoModal';
import GoogleMapSection from '@/components/common/GoogleMapSection';
import { Play, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, PageHeaderReveal, InteractiveCard } from '@/components/common/MotionWrapper';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  const topics = ['All', ...Array.from(new Set(videoItems.map((v) => v.topic)))];

  const filteredVideos =
    selectedTopic === 'All'
      ? videoItems
      : videoItems.filter((v) => v.topic === selectedTopic);

  return (
    <div className="pt-24 space-y-0">
      
      {/* Page Hero - Dark Dual-Tone */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[750px] h-[400px] bg-gradient-to-br from-amber-500/15 via-emerald-500/15 to-transparent blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <PageHeaderReveal
            badge="VIDEO GUIDES & PRODUCT WALKTHROUGHS"
            title="Tally & Digital Software"
            highlightText="Video Library."
            description="Watch step-by-step video demonstrations of TallyPrime GST setup, Gold multi-user configuration, custom TDL layouts, and digital software development."
          />
        </div>
      </section>

      {/* Filter & Video Grid - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          
          {/* Filter Pills */}
          <FadeIn direction="up" className="flex flex-wrap items-center gap-2 border-b border-amber-200 pb-4">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest mr-2">Filter Topic:</span>
            {topics.map((t) => (
              <motion.button
                key={t}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTopic(t)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  selectedTopic === t
                    ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                    : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                {t}
              </motion.button>
            ))}
          </FadeIn>

          {/* Video Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredVideos.map((video) => (
                <motion.div
                  layout
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <InteractiveCard
                    lift={-6}
                    className="bg-white border-2 border-amber-200/90 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-amber-500 transition-colors duration-300 group h-full"
                  >
                    {/* Thumbnail Frame */}
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="relative w-full aspect-video bg-[#0A0E1A] overflow-hidden flex items-center justify-center cursor-pointer"
                      aria-label={`Play ${video.title}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-transparent to-transparent z-10" />
                      <div className="z-20 w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform font-bold">
                        <Play className="w-7 h-7 fill-current translate-x-0.5" />
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-xs text-white">
                        <span className="px-3 py-1 bg-[#0A0E1A]/80 backdrop-blur-sm rounded-full border border-white/10 font-bold">{video.topic}</span>
                        <span className="flex items-center gap-1 bg-[#0A0E1A]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 font-mono">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          {video.duration}
                        </span>
                      </div>
                    </button>

                    {/* Content */}
                    <div className="p-8 space-y-4 flex-1">
                      <h2 className="text-xl font-extrabold text-slate-950 group-hover:text-amber-700 transition-colors leading-tight">
                        <button onClick={() => setSelectedVideo(video)} className="text-left cursor-pointer">
                          {video.title}
                        </button>
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{video.description}</p>

                      <div className="pt-3 space-y-2 border-t border-amber-100">
                        <span className="text-[11px] text-amber-800 font-bold uppercase tracking-wider block">Key Points:</span>
                        {video.keyTakeaways.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="px-8 pb-8">
                      <button
                        onClick={() => setSelectedVideo(video)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md cursor-pointer hover:scale-[1.02]"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        Watch Video Guide
                      </button>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Embedded Location Map */}
      <GoogleMapSection title="Visit Our Training Desk in Kolkata" />

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
