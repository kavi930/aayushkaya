import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "How does Doorstep Home Therapy in Roorkee work? What do I need to prepare?",
    a: "Vaidya A.K. Goswami and therapy assistants bring all necessary specialized equipment to your residence—including portable therapeutic bedding, temperature-regulated oil warmers, fresh organic black gram dough for basti reservoirs, sanitized linen, and medicated herbal decoctions. All you need to provide is a quiet, comfortable room with warm room temperature and a warm water supply."
  },
  {
    q: "What makes Basti therapies (Kati, Janu, Griva) so effective for spine & joint pain?",
    a: "Unlike superficial lotions, Basti therapies create a sealed reservoir of warm medicated herbal oil (such as Mahanarayana or Sahacharadi) maintained at 38°-40°C for 45 minutes directly over the distressed joint or vertebra. The sustained hydrostatic pressure and heat drive therapeutic lipid-soluble herbal compounds deep through the skin layers into synovial capsules, spinal ligaments, and nerve sheaths, deeply pacifying aggravated Vata."
  },
  {
    q: "How does clinical Leech Therapy (Jalaukavacharana) work and is it safe?",
    a: "Authentic clinical leech therapy is an established Ayurvedic surgical bio-purification method. We exclusively use sterile, certified medicinal leeches (Hirudo medicinalis). The leech injects saliva rich in natural Hirudin (potent anticoagulant), vasodilators, and analgesic peptides while extracting stagnant venous deoxygenated blood. It causes only a minor momentary sensation like an ant bite. It is exceptional for varicose veins, chronic eczema, non-healing ulcers, and localized inflammatory swellings."
  },
  {
    q: "How many sessions are typically required for noticeable recovery?",
    a: "Acute muscular stiffness often resolves within 3 to 5 sessions. Chronic degenerative conditions such as lumbar disc herniation, severe knee osteoarthritis, cervical spondylosis, or chronic insomnia generally require a standard classical course of 7 to 14 consecutive sessions to facilitate tissue regeneration and doshic equilibrium."
  },
  {
    q: "What is the difference between Patar Potli and Sristhisali Pind Swedan?",
    a: "Patar Potli (Patra Potli Pinda Swedana) uses boluses filled with medicinal leaves (Nirgundi, Eranda, Arka) fried in medicated oils; it is drying, heating, and anti-inflammatory, perfect for arthritis, stiffness, and frozen shoulder. Sristhisali (Shashtika Shali Pinda Swedana) uses precious 60-day red rice slow-cooked in herbal milk and Bala root; it is deeply nourishing (Brimhana), rejuvenating emaciated muscles, neuropathy, and tone."
  },
  {
    q: "How do I care for my body immediately following an Ayurvedic therapy?",
    a: "Keep the treated region warm and shielded from drafts, air conditioning, and direct cold winds. Drink warm boiled water infused with cumin or dry ginger. Avoid heavy, greasy, refrigerated, or spicy foods. Wait 30-45 minutes before taking a warm water bath."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 bg-[#FCFAF5] border-b border-[#C99436]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B46D19] font-bold px-3 py-1 rounded-full bg-[#C99436]/10 border border-[#C99436]/30">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12251B] mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#12251B]/75 mt-2">
            Clear insights into procedures, home therapy logistics, and classical Ayurvedic recovery.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#C99436]/25 bg-[#F7F4EA] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-[#183627] hover:text-[#C99436] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C99436] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C99436] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#12251B]/80 leading-relaxed border-t border-[#C99436]/15 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
