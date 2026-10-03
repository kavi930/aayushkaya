import React from 'react';
import { Clock, Calendar, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function TherapyCard({ therapy, onViewDetails, onBook }) {
  const formattedId = therapy.id < 10 ? `0${therapy.id}` : `${therapy.id}`;

  return (
    <div className="bg-[#FCFAF5] rounded-2xl border border-[#C99436]/25 shadow-card hover:shadow-gold transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
      {/* Top Header */}
      <div className="p-5 sm:p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="font-serif font-extrabold text-2xl text-[#C99436] tracking-tight bg-[#C99436]/10 px-2.5 py-0.5 rounded-lg border border-[#C99436]/30">
            {formattedId}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#183627] text-[#E8C57D]">
            {therapy.category}
          </span>
        </div>

        {/* Title & Hindi Translation */}
        <div className="mb-2">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-xl font-bold text-[#12251B] group-hover:text-[#183627]">
              {therapy.name}
            </h3>
            <span className="font-hindi text-sm text-[#B46D19] font-medium">
              {therapy.hindiName}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#2D5842] mt-1 font-medium">
            <Activity className="w-3.5 h-3.5 text-[#C99436]" />
            <span>Target: {therapy.bodyArea}</span>
          </div>
        </div>

        {/* Description Tagline */}
        <p className="text-xs text-[#12251B]/80 leading-relaxed mb-4 line-clamp-2">
          {therapy.tagline}
        </p>

        {/* Indications Pills */}
        <div className="space-y-1.5 mb-4">
          <span className="text-[11px] font-semibold text-[#183627] block uppercase tracking-wider">
            Effective for:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {therapy.indications.slice(0, 2).map((ind, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-[#F7F4EA] border border-[#C99436]/20 text-[#12251B]/85"
              >
                <CheckCircle2 className="w-3 h-3 text-[#C99436] shrink-0" />
                <span className="truncate max-w-[190px]">{ind}</span>
              </span>
            ))}
            {therapy.indications.length > 2 && (
              <span className="text-[10px] text-[#B46D19] font-semibold self-center">
                +{therapy.indications.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Duration & Sessions info */}
        <div className="pt-3 border-t border-[#12251B]/10 grid grid-cols-2 gap-2 text-xs text-[#12251B]/70">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C99436]" />
            <span>{therapy.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C99436]" />
            <span className="truncate">{therapy.recommendedSessions}</span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-4 bg-[#F7F4EA] border-t border-[#C99436]/20 flex items-center gap-2">
        <button
          onClick={() => onViewDetails(therapy)}
          className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-[#183627] hover:bg-[#183627] hover:text-white transition-all text-center border border-[#183627]/20 flex items-center justify-center gap-1"
        >
          View Details
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onBook(therapy)}
          className="py-2 px-3.5 rounded-lg text-xs font-bold bg-[#C99436] text-[#12251B] hover:bg-[#B46D19] hover:text-white transition-all shadow-sm"
        >
          Book
        </button>
      </div>
    </div>
  );
}
