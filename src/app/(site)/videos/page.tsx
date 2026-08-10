'use client';

import { useState } from 'react';
import { videoItems } from '@/content/videos';
import { VideoItem } from '@/types';
import VideoModal from '@/components/videos/VideoModal';
import GoogleMapSection from '@/components/common/GoogleMapSection';
import { Play, Clock, CheckCircle2, Video } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span>VIDEO GUIDES & PRODUCT WALKTHROUGHS</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            Tally & Digital Software Video Library.
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed font-normal">
            Watch step-by-step video demonstrations of TallyPrime GST setup, Gold multi-user configuration, custom TDL layouts, and digital software development.
          </p>
        </div>
      </section>

      {/* Filter & Video Grid - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-b border-amber-200 pb-4">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest mr-2">Filter Topic:</span>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  selectedTopic === t
                    ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                    : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white border-2 border-amber-200/90 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all group"
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
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Watch Video Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Location Map */}
      <GoogleMapSection title="Visit Our Training Desk in Kolkata" />

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
