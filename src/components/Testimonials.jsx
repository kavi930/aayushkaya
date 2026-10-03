import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Dr. R.K. Sharma",
    locality: "IIT Roorkee Campus",
    therapy: "Kati Basti & Patra Potli",
    review: "Suffered from persistent L4-L5 disc compression and sciatica for over 8 months. Vaidya A.K. Goswami provided 7 sessions of Kati Basti right at my campus residence. The severe shooting leg pain vanished completely. Highly recommended for authentic Ayurvedic care.",
    rating: 5
  },
  {
    name: "Sunita Verma",
    locality: "Civil Lines, Roorkee",
    therapy: "Janu Basti & Hot-Cold Compress",
    review: "I could barely climb steps due to bilateral knee osteoarthritis. The dough reservoir Janu Basti with warm medicinal oil revitalized my knees within 10 sessions. Professional, clean, and deeply knowledgeable therapist.",
    rating: 5
  },
  {
    name: "Amitabh Singhal",
    locality: "Sainipuram, Roorkee",
    therapy: "Shirodhara & Shiro Abhyang",
    review: "Chronic insomnia and work stress were taking a heavy toll. 5 sessions of warm herbal Shirodhara gave me the deepest sleep I've had in 10 years. AyushKaya is a blessing for Roorkee residents.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#F7F4EA] border-b border-[#C99436]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B46D19] font-bold px-3 py-1 rounded-full bg-[#C99436]/10 border border-[#C99436]/30">
            Patient Healing Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12251B] mt-3">
            Real Recoveries in Roorkee
          </h2>
          <p className="text-xs sm:text-sm text-[#12251B]/75 mt-2">
            Trusted by families, professors, and professionals across Sainipuram and Roorkee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFAF5] p-6 rounded-2xl border border-[#C99436]/25 shadow-card hover:shadow-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#C99436]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#183627] bg-[#C99436]/15 px-2.5 py-0.5 rounded-full border border-[#C99436]/30">
                    {item.therapy}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-[#C99436]/30 mb-2" />
                <p className="text-xs sm:text-sm text-[#12251B]/85 leading-relaxed italic mb-4">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#12251B]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#183627]">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#12251B]/60">
                    <MapPin className="w-3 h-3 text-[#C99436]" />
                    <span>{item.locality}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
