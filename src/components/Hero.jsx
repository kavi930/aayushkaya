import React from 'react';
import { Sparkles, Calendar, ShieldCheck, Home, Droplets, MapPin, ArrowRight } from 'lucide-react';

export default function Hero({ onExploreClick, onBookClick, onOpenQuiz }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12251B] via-[#183627] to-[#12251B] text-[#F7F4EA] pt-12 pb-20 border-b border-[#C99436]/20">
      {/* Decorative Traditional Mandala/Aura Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#C99436] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#E8C57D] border-dashed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#C99436]/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Sanskrit Shloka Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C99436]/15 border border-[#C99436]/40 text-[#E8C57D] text-xs sm:text-sm font-hindi">
            <Sparkles className="w-3.5 h-3.5 text-[#C99436]" />
            <span>स्वस्थस्य स्वास्थ्य रक्षणं आतुरस्य विकार प्रशमनं च</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white/80 hidden sm:inline font-sans text-xs">Charaka Samhita</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FCFAF5] leading-[1.15]">
            Classical Ayurvedic Therapies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C57D] via-[#C99436] to-[#D8B878]">Panchakarma</span>
          </h1>

          {/* Subtitle with Practitioner & Roorkee Context */}
          <p className="text-base sm:text-lg text-[#FCFAF5]/85 max-w-2xl mx-auto leading-relaxed">
            Experience healing touch under the guidance of <strong className="text-[#E8C57D]">A.K. Goswami</strong>. Offering 24 authentic therapeutic procedures including specialized Basti reservoirs, Shirodhara, Potli fomentation, and clinical bio-purification.
          </p>

          {/* Location & Home Service Callout */}
          <div className="inline-flex items-center gap-2 bg-[#1B3B2B]/90 border border-[#C99436]/30 px-4 py-2 rounded-xl text-xs sm:text-sm text-[#F7F4EA]">
            <MapPin className="w-4 h-4 text-[#C99436] shrink-0" />
            <span>
              <strong>Clinic & Doorstep Home Therapy</strong> in Sainipuram, Roorkee & surrounding areas
            </span>
          </div>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C99436] to-[#B46D19] text-[#12251B] font-bold text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Schedule Therapy (Home or Clinic)
            </button>
            <button
              onClick={onExploreClick}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1B3B2B] hover:bg-[#2D5842] border border-[#C99436]/40 text-[#F7F4EA] font-semibold text-sm transition-all shadow-md"
            >
              Explore All 24 Therapies
              <ArrowRight className="w-4 h-4 text-[#C99436]" />
            </button>
            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-[#E8C57D] font-medium text-xs sm:text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#C99436]" />
              Find My Dosha Therapy
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#C99436]/20">
          <div className="p-4 rounded-xl bg-[#183627]/80 border border-[#C99436]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#C99436]/15 flex items-center justify-center text-[#E8C57D] mb-2.5">
              <Droplets className="w-5 h-5 text-[#C99436]" />
            </div>
            <h2 className="text-sm font-bold text-white mb-1">Authentic Medicated Oils</h2>
            <p className="text-xs text-white/70">Mahanarayana, Sahacharadi, Ksheerabala & pure Triphala Ghrita</p>
          </div>

          <div className="p-4 rounded-xl bg-[#183627]/80 border border-[#C99436]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#C99436]/15 flex items-center justify-center text-[#E8C57D] mb-2.5">
              <Home className="w-5 h-5 text-[#C99436]" />
            </div>
            <h2 className="text-sm font-bold text-white mb-1">Doorstep Home Therapy</h2>
            <p className="text-xs text-white/70">Portable wooden droni, sanitized tools brought directly to your home in Roorkee</p>
          </div>

          <div className="p-4 rounded-xl bg-[#183627]/80 border border-[#C99436]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#C99436]/15 flex items-center justify-center text-[#E8C57D] mb-2.5">
              <ShieldCheck className="w-5 h-5 text-[#C99436]" />
            </div>
            <h2 className="text-sm font-bold text-white mb-1">24 Classical Therapies</h2>
            <p className="text-xs text-white/70">Kati, Janu, Griva Basti, Shirodhara, Cupping, Potli Swedan & Leech Therapy</p>
          </div>

          <div className="p-4 rounded-xl bg-[#183627]/80 border border-[#C99436]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#C99436]/15 flex items-center justify-center text-[#E8C57D] mb-2.5">
              <Sparkles className="w-5 h-5 text-[#C99436]" />
            </div>
            <h2 className="text-sm font-bold text-white mb-1">Holistic Diagnosis</h2>
            <p className="text-xs text-white/70">Personalized pulse & dosha imbalance evaluation by A.K. Goswami</p>
          </div>
        </div>
      </div>
    </section>
  );
}
