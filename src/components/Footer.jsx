import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { THERAPIES } from '../data/therapies';

export default function Footer({ onSelectTherapy }) {
  return (
    <footer className="bg-[#12251B] text-[#FCFAF5] border-t border-[#C99436]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C99436] p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#12251B] flex items-center justify-center text-[#E8C57D]">
                  <Sparkles className="w-5 h-5 text-[#C99436]" />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  Ayush<span className="text-[#C99436]">Kaya</span>
                </span>
                <span className="text-xs font-hindi text-[#D8B878] ml-2">आयुष्काय</span>
              </div>
            </div>

            <p className="text-xs text-white/75 leading-relaxed">
              Authentic Ayurvedic Therapies & Traditional Panchakarma led by <strong>A.K. Goswami</strong>. Restoring bodily harmony and metabolic vitality through classical procedures in Roorkee & nearby areas.
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E8C57D] font-hindi leading-relaxed">
              "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।<br />
              सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥"
            </div>
          </div>

          {/* Col 2: Quick Therapies Directory */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E8C57D] uppercase tracking-wider">
              Directory of 24 Classical Therapies
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-white/70">
              {THERAPIES.map((th) => (
                <button
                  key={th.id}
                  onClick={() => onSelectTherapy(th)}
                  className="text-left hover:text-[#C99436] truncate transition-colors flex items-center gap-1"
                >
                  <span className="text-[#C99436] font-mono text-[10px] w-4 shrink-0">
                    {th.id}.
                  </span>
                  <span className="truncate">{th.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#E8C57D] uppercase tracking-wider">
              Practitioner & Location
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C99436] shrink-0 mt-0.5" />
                <span>
                  <strong>AyushKaya Clinic:</strong><br />
                  Sainipuram, Roorkee, Uttarakhand - 247667<br />
                  <span className="text-[#E8C57D] text-[11px]">(Doorstep Home Visits Available across Roorkee)</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C99436] shrink-0" />
                <span>Daily: 07:00 AM - 08:00 PM (By Appointment)</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C99436] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#C99436]">
                  +91 98765 43210 (A.K. Goswami)
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210?text=Namaste%20AyushKaya%2C%20I%20would%20like%20to%20inquire%20about%20treatment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#86efac] text-xs font-bold hover:bg-[#25D366]/30 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Instant WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-2">
          <p>© {new Date().getFullYear()} AyushKaya Ayurveda, Roorkee. Traditional healing legacy by A.K. Goswami.</p>
          <p className="text-[#E8C57D]/80">
            Dedicated to authentic Panchakarma & Doorstep Home Therapy
          </p>
        </div>
      </div>
    </footer>
  );
}
