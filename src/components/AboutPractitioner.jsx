import React from 'react';
import { Award, CheckCircle2, Home, MapPin, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { ROORKEE_SERVICE_AREAS } from '../data/therapies';

export default function AboutPractitioner({ onBookClick }) {
  return (
    <section id="about" className="py-16 bg-[#183627] text-[#FCFAF5] border-b border-[#C99436]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C99436]/20 border border-[#C99436]/40 text-[#E8C57D] text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-[#C99436]" />
              Vaidya Profile & Practice
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Healing Through Classical Ayurvedic Wisdom by <span className="text-[#E8C57D]">A.K. Goswami</span>
            </h2>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              At <strong>AyushKaya</strong>, therapies are not generic spa treatments; they are classical medical procedures executed according to the centuries-old texts of <em>Charaka Samhita</em> and <em>Ashtanga Hridaya</em>.
            </p>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Recognizing that patients with acute sciatica, severe knee osteoarthritis, or post-operative stiffness find travel burdensome, <strong>A.K. Goswami offers dedicated Doorstep Home Therapy</strong> in Sainipuram and across Roorkee. All specialized equipment—including portable therapy setups, temperature-controlled herbal warming apparatus, sanitized linen, and freshly prepared organic black gram flour rings—are brought directly to your home.
            </p>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#C99436] shrink-0 mt-0.5" />
                <span className="text-xs text-white/90">
                  <strong>Genuine Tailams:</strong> Only unadulterated classical Ayurvedic oils and pure Triphala Ghrita
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#C99436] shrink-0 mt-0.5" />
                <span className="text-xs text-white/90">
                  <strong>Hygienic Standards:</strong> Sterile equipment, single-use herbs for potlis, and clinical safety
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#C99436] shrink-0 mt-0.5" />
                <span className="text-xs text-white/90">
                  <strong>Dosha Diagnosis:</strong> Customized temperature and herbal oil selection based on patient's constitution
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#C99436] shrink-0 mt-0.5" />
                <span className="text-xs text-white/90">
                  <strong>Complete Support:</strong> Pre-therapy dietary guidance and post-therapy restorative care
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onBookClick}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C99436] to-[#B46D19] text-[#12251B] font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg"
              >
                Schedule Consultation or Home Visit
              </button>
              <a
                href="https://wa.me/919876543210?text=Namaste%20A.K.%20Goswami%20ji%2C%20I%20would%20like%20to%20consult%20for%20Ayurvedic%20therapy."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#86efac] hover:bg-[#25D366]/30 text-xs sm:text-sm font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#4ade80]" />
                WhatsApp Vaidya Ji
              </a>
            </div>
          </div>

          {/* Right Column: Home Therapy & Roorkee Coverage Card */}
          <div className="lg:col-span-5 bg-[#12251B] p-6 sm:p-8 rounded-2xl border border-[#C99436]/40 shadow-2xl relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-[#C99436]/20 text-[#E8C57D]">
                <Home className="w-5 h-5 text-[#C99436]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Roorkee Home Therapy Service
                </h3>
                <p className="text-[11px] text-[#E8C57D]">
                  Convenient, peaceful healing in the comfort of your home
                </p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed mb-5">
              Available 7 days a week across Sainipuram and neighboring Roorkee sectors for elderly patients, working professionals, and those recovering from surgery or chronic pain.
            </p>

            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#E8C57D] block mb-2">
                Key Coverage Sectors in Roorkee:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ROORKEE_SERVICE_AREAS.map((colony, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#183627] text-white/90 border border-white/10"
                  >
                    {colony}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#183627] border border-[#C99436]/30 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#C99436] shrink-0" />
                <span>
                  <strong>Center Address:</strong> Sainipuram, Roorkee, Uttarakhand
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4 text-[#C99436] shrink-0" />
                <span>
                  <strong>Direct Inquiries:</strong> +91 98765 43210
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
