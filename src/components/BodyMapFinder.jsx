import React, { useState } from 'react';
import { BODY_PARTS, THERAPIES } from '../data/therapies';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BodyMapFinder({ onViewDetails, onBook }) {
  const [selectedPartId, setSelectedPartId] = useState('lowerback');

  const selectedPart = BODY_PARTS.find((p) => p.id === selectedPartId) || BODY_PARTS[0];
  const matchedTherapies = THERAPIES.filter((t) => selectedPart.therapyIds.includes(t.id));

  return (
    <section id="bodymap" className="py-16 bg-[#F7F4EA] border-b border-[#C99436]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B46D19] font-bold px-3 py-1 rounded-full bg-[#C99436]/10 border border-[#C99436]/30">
            Targeted Anatomical Relief
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12251B] mt-3">
            Where Are You Experiencing Discomfort?
          </h2>
          <p className="text-xs sm:text-sm text-[#12251B]/75 mt-2">
            Select a target anatomical zone to instantly discover classical Ayurvedic reservoirs, oil streams, and therapies tailored for that exact area.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BODY_PARTS.map((part) => {
            const isSelected = part.id === selectedPartId;
            return (
              <button
                key={part.id}
                onClick={() => setSelectedPartId(part.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#183627] text-[#E8C57D] shadow-md border border-[#C99436]'
                    : 'bg-[#FCFAF5] text-[#12251B]/80 hover:bg-[#183627]/10 border border-[#C99436]/20'
                }`}
              >
                {part.label}
              </button>
            );
          })}
        </div>

        {/* Matched Therapies Display */}
        <div className="bg-[#FCFAF5] p-6 sm:p-8 rounded-2xl border border-[#C99436]/30 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#12251B]/10">
            <div>
              <span className="text-xs font-semibold text-[#B46D19] uppercase tracking-wider">
                Specialized Therapies For
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#183627]">
                {selectedPart.label}
              </h3>
            </div>
            <span className="text-xs font-medium text-[#183627] bg-[#C99436]/15 px-3 py-1 rounded-full border border-[#C99436]/30">
              {matchedTherapies.length} Therapeutic Procedure{matchedTherapies.length > 1 ? 's' : ''} Recommended
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedTherapies.map((therapy) => (
              <div
                key={therapy.id}
                className="bg-[#F7F4EA] p-5 rounded-xl border border-[#C99436]/25 hover:border-[#C99436] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif font-bold text-sm text-[#C99436]">
                      No. {therapy.id < 10 ? `0${therapy.id}` : therapy.id}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-[#183627] bg-white/70 px-2 py-0.5 rounded border border-[#183627]/10">
                      {therapy.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#12251B]">
                    {therapy.name}{' '}
                    <span className="font-hindi text-xs text-[#B46D19] font-normal">
                      ({therapy.hindiName})
                    </span>
                  </h4>
                  <p className="text-xs text-[#12251B]/80 mt-1.5 leading-relaxed line-clamp-2">
                    {therapy.tagline}
                  </p>
                  <div className="mt-3 space-y-1">
                    {therapy.indications.slice(0, 2).map((ind, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#183627]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C99436] shrink-0" />
                        <span className="truncate">{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#12251B]/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onViewDetails(therapy)}
                    className="text-xs font-semibold text-[#183627] hover:text-[#C99436] flex items-center gap-1"
                  >
                    Read Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onBook(therapy)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#C99436] text-[#12251B] hover:bg-[#B46D19] hover:text-white transition-all shadow-sm"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
