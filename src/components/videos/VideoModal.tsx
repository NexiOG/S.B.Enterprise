'use client';

import { X, CheckCircle2 } from 'lucide-react';
import { VideoItem } from '@/types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white text-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-warm-200 bg-warm-50">
          <div>
            <p className="text-xs text-slate-400 font-medium">
              {video.topic} · {video.duration}
            </p>
            <h3 className="text-base font-bold text-slate-800 line-clamp-1 mt-0.5">{video.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-warm-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black w-full shrink-0">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.embedId}?autoplay=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Details */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">{video.description}</p>

          <div className="space-y-3 pt-3 border-t border-warm-200">
            <span className="text-xs text-slate-400 font-semibold uppercase">Key Takeaways:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {video.keyTakeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-3 bg-warm-50 rounded-xl border border-warm-200 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
