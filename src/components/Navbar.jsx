import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, Calendar } from 'lucide-react';

export default function Navbar({ onOpenDoshaQuiz, onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#12251B]/95 backdrop-blur-md text-white border-b border-[#C99436]/30 shadow-lg">
      {/* Top Banner Notice for Roorkee Home Therapy */}
      <div className="bg-[#183627] border-b border-[#C99436]/20 px-4 py-1.5 text-xs text-[#E8C57D] flex justify-between items-center text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C99436]" />
            Ayurvedic Home Therapy available in Sainipuram, Roorkee & nearby localities
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-white/80">
            Consultation & Panchakarma by <strong className="text-white">A.K. Goswami</strong>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C99436] to-[#B46D19] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#12251B] flex items-center justify-center border border-[#E8C57D]/30">
                {/* Traditional Kalasha & Lotus iconography */}
                <svg className="w-7 h-7 text-[#E8C57D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-11z" />
                  <path d="M12 9v4" />
                  <path d="M10 11h4" />
                  <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold tracking-wider text-[#F7F4EA]">
                  Ayush<span className="text-[#C99436]">Kaya</span>
                </span>
                <span className="text-xs font-hindi text-[#D8B878] hidden sm:inline">आयुष्काय</span>
              </div>
              <p className="text-[11px] text-[#D8B878] tracking-widest uppercase">
                Traditional Ayurvedic Therapies & Panchakarma
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <a href="#therapies" className="text-white/85 hover:text-[#C99436] transition-colors">
              24 Therapies
            </a>
            <a href="#bodymap" className="text-white/85 hover:text-[#C99436] transition-colors">
              Body Map
            </a>
            <a href="#about" className="text-white/85 hover:text-[#C99436] transition-colors">
              About Practitioner
            </a>
            <a href="#faq" className="text-white/85 hover:text-[#C99436] transition-colors">
              FAQs
            </a>
            <button
              onClick={onOpenDoshaQuiz}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C99436]/15 text-[#E8C57D] border border-[#C99436]/40 hover:bg-[#C99436]/25 transition-all text-xs font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C99436]" />
              Dosha Assessment
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Namaste%2C%20I%20would%20like%20to%20inquire%20about%20Ayurvedic%20therapies%20at%20AyushKaya%20in%20Roorkee."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#86efac] hover:bg-[#25D366]/30 text-xs font-semibold transition-all"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#4ade80]" />
              WhatsApp
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#C99436] to-[#B46D19] text-[#12251B] font-bold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book Therapy
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12251B] border-t border-[#C99436]/20 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#therapies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#C99436] font-medium"
          >
            24 Ayurvedic Therapies
          </a>
          <a
            href="#bodymap"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#C99436] font-medium"
          >
            Body Area Therapy Finder
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#C99436] font-medium"
          >
            About A.K. Goswami
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white/90 hover:text-[#C99436] font-medium"
          >
            Frequently Asked Questions
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDoshaQuiz();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#C99436]/15 border border-[#C99436]/40 text-[#E8C57D] font-semibold text-sm"
          >
            <Sparkles className="w-4 h-4 text-[#C99436]" />
            Take Dosha & Therapy Quiz
          </button>
          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#183627] border border-white/10 text-white text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#C99436]" />
              Call Vaidya Ji
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-[#C99436] to-[#B46D19] text-[#12251B] text-xs font-bold"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
