import React from 'react';
import { X, CheckCircle2, Clock, Calendar, Droplet, HeartHandshake, ShieldAlert, Sparkles, MessageCircle } from 'lucide-react';

export default function TherapyModal({ therapy, onClose, onBook }) {
  if (!therapy) return null;

  const formattedId = therapy.id < 10 ? `0${therapy.id}` : `${therapy.id}`;

  const whatsappMessage = encodeURIComponent(
    `Namaste Vaidya ji, I am interested in booking *${therapy.name}* (${therapy.hindiName}) for my condition. Please share consultation and scheduling details for Roorkee.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-[#FCFAF5] w-full max-w-2xl rounded-2xl border border-[#C99436]/40 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#183627] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="font-serif font-extrabold text-xl px-2.5 py-0.5 rounded bg-[#C99436] text-[#12251B]">
              No. {formattedId}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#E8C57D] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 border border-[#E8C57D]/30">
              {therapy.category}
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {therapy.name}
            </h2>
            <span className="font-hindi text-lg text-[#E8C57D]">
              {therapy.hindiName}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#FCFAF5]/85 mt-2 max-w-xl">
            {therapy.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#E8C57D]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C99436]" />
              <span>Duration: <strong>{therapy.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C99436]" />
              <span>Recommended Course: <strong>{therapy.recommendedSessions}</strong></span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[68vh] overflow-y-auto">
          {/* Key Indications */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#183627] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C99436]" />
              Primary Indications & Treatable Conditions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {therapy.indications.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2 rounded-lg bg-[#F7F4EA] border border-[#C99436]/20 text-xs text-[#12251B]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C99436] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#183627] mb-1.5 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-[#C99436]" />
              Therapeutic Action & Physiological Benefits
            </h4>
            <p className="text-xs sm:text-sm text-[#12251B]/85 bg-amber-50/50 p-3 rounded-xl border border-amber-200/60 leading-relaxed">
              {therapy.benefits}
            </p>
          </div>

          {/* Traditional Medicated Oils Used */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#183627] mb-1.5 flex items-center gap-1.5">
              <Droplet className="w-4 h-4 text-[#C99436]" />
              Classical Medicated Oils & Herbs (Tailams / Ghrita)
            </h4>
            <div className="p-3 rounded-xl bg-[#183627]/5 border border-[#183627]/15 text-xs text-[#183627] font-medium leading-relaxed">
              {therapy.oilsUsed}
            </div>
          </div>

          {/* Procedure Walkthrough */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#183627] mb-1.5">
              Classical Procedure Walkthrough
            </h4>
            <p className="text-xs sm:text-sm text-[#12251B]/85 bg-[#F7F4EA] p-3 rounded-xl border border-[#C99436]/20 leading-relaxed">
              {therapy.procedure}
            </p>
          </div>

          {/* Pre & Post Care Guidelines */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#A64B2A] mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#A64B2A]" />
              Pre & Post-Therapy Guidelines (Pathya / Apathya)
            </h4>
            <p className="text-xs sm:text-sm text-[#12251B]/85 bg-orange-50/60 p-3 rounded-xl border border-orange-200/70 leading-relaxed">
              {therapy.prePostCare}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#F7F4EA] border-t border-[#C99436]/30 flex flex-wrap items-center justify-end gap-3">
          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#166534] text-xs font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Ask via WhatsApp
          </a>
          <button
            onClick={() => {
              onClose();
              onBook(therapy);
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C99436] to-[#B46D19] text-[#12251B] font-bold text-xs sm:text-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            <Calendar className="w-4 h-4" />
            Book {therapy.name} (Home/Clinic)
          </button>
        </div>
      </div>
    </div>
  );
}
