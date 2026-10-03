import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TherapyCard from './components/TherapyCard';
import TherapyModal from './components/TherapyModal';
import BodyMapFinder from './components/BodyMapFinder';
import DoshaQuizModal from './components/DoshaQuizModal';
import AboutPractitioner from './components/AboutPractitioner';
import BookingSection from './components/BookingSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { THERAPIES, CATEGORIES } from './data/therapies';
import { Search, Sparkles, Filter, Phone, MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTherapyModal, setActiveTherapyModal] = useState(null);
  const [preselectedForBooking, setPreselectedForBooking] = useState(null);
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState(false);

  // Filtered Therapies
  const filteredTherapies = useMemo(() => {
    return THERAPIES.filter((th) => {
      const matchesCategory =
        selectedCategory === 'All' || th.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        th.name.toLowerCase().includes(q) ||
        th.hindiName.toLowerCase().includes(q) ||
        th.tagline.toLowerCase().includes(q) ||
        th.bodyArea.toLowerCase().includes(q) ||
        th.indications.some((ind) => ind.toLowerCase().includes(q)) ||
        th.oilsUsed.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleBookTherapy = (therapy) => {
    setPreselectedForBooking(therapy);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const el = document.getElementById('therapies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavBookClick = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F6F3EB] text-[#12251B] flex flex-col font-sans selection:bg-[#C99436] selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
        onBookClick={handleNavBookClick}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={handleExploreClick}
        onBookClick={handleNavBookClick}
        onOpenQuiz={() => setIsDoshaQuizOpen(true)}
      />

      {/* 24 Classical Therapies Catalog */}
      <section id="therapies" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183627] text-[#E8C57D] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C99436]" />
            Complete Classical Repertoire
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12251B]">
            All 24 Authentic Ayurvedic Therapies
          </h2>
          <p className="text-xs sm:text-sm text-[#12251B]/80 mt-2 max-w-xl mx-auto leading-relaxed">
            From specialized spinal reservoirs and rhythmic Shirodhara to Patra Potli fomentations and clinical leech bio-purification.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 text-[#183627]/50 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by therapy (e.g. Kati Basti, Leech) or condition (Sciatica, Knee, Insomnia)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#C99436]/40 bg-[#FCFAF5] shadow-sm text-xs sm:text-sm text-[#12251B] placeholder:text-[#12251B]/40 focus:outline-none focus:ring-2 focus:ring-[#C99436]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#183627]/50 hover:text-[#183627]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#183627] text-[#E8C57D] shadow-md border border-[#C99436]'
                      : 'bg-[#FCFAF5] text-[#12251B]/80 hover:bg-[#183627]/10 border border-[#C99436]/25'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="text-center text-xs text-[#12251B]/60">
            Showing <strong>{filteredTherapies.length}</strong> of {THERAPIES.length} classical therapies
          </div>
        </div>

        {/* Therapy Cards Grid */}
        {filteredTherapies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTherapies.map((therapy) => (
              <TherapyCard
                key={therapy.id}
                therapy={therapy}
                onViewDetails={(th) => setActiveTherapyModal(th)}
                onBook={(th) => handleBookTherapy(th)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FCFAF5] rounded-3xl border border-[#C99436]/20 max-w-lg mx-auto p-8">
            <Filter className="w-10 h-10 text-[#C99436] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-lg font-bold text-[#183627]">No Therapies Found</h3>
            <p className="text-xs text-[#12251B]/70 mt-1 mb-4">
              We couldn't find any therapy matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-xl bg-[#183627] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Body Area Interactive Finder */}
      <BodyMapFinder
        onViewDetails={(th) => setActiveTherapyModal(th)}
        onBook={(th) => handleBookTherapy(th)}
      />

      {/* About Practitioner & Roorkee Home Therapy */}
      <AboutPractitioner onBookClick={handleNavBookClick} />

      {/* Booking Form Component */}
      <BookingSection
        preselectedTherapy={preselectedForBooking}
        onClearPreselected={() => setPreselectedForBooking(null)}
      />

      {/* Patient Reviews in Roorkee */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer onSelectTherapy={(th) => setActiveTherapyModal(th)} />

      {/* Floating Action Buttons for Roorkee Patients */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/919876543210?text=Namaste%20AyushKaya%2C%20I%20would%20like%20to%20inquire%20about%20Ayurvedic%20therapies."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+919876543210"
          className="w-12 h-12 rounded-full bg-[#183627] border-2 border-[#C99436] text-[#E8C57D] shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          title="Call A.K. Goswami"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Therapy Details Modal */}
      {activeTherapyModal && (
        <TherapyModal
          therapy={activeTherapyModal}
          onClose={() => setActiveTherapyModal(null)}
          onBook={(th) => handleBookTherapy(th)}
        />
      )}

      {/* Dosha & Therapy Quiz Modal */}
      <DoshaQuizModal
        isOpen={isDoshaQuizOpen}
        onClose={() => setIsDoshaQuizOpen(false)}
        onSelectTherapy={(th) => handleBookTherapy(th)}
      />
    </div>
  );
}
