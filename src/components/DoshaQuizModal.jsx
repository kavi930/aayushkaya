import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RefreshCw, HeartHandshake } from 'lucide-react';
import { THERAPIES } from '../data/therapies';

const QUESTIONS = [
  {
    id: 1,
    question: "How would you describe your primary physical discomfort or stiffness?",
    options: [
      { text: "Sharp, shooting nerve pains, joint cracking, or chronic lower back stiffness", dosha: "vata" },
      { text: "Burning sensations, acid reflux, inflamed red skin, or eye strain", dosha: "pitta" },
      { text: "Heavy lethargy, sluggish metabolism, congestion, or persistent water retention", dosha: "kapha" }
    ]
  },
  {
    id: 2,
    question: "What is your typical sleep pattern and state of mind?",
    options: [
      { text: "Light, irregular sleep, racing thoughts, easily anxious or disturbed", dosha: "vata" },
      { text: "Moderate sleep, wake up feeling heated, irritable under stress or deadline", dosha: "pitta" },
      { text: "Deep, heavy sleep, difficulty waking up early morning, calm and slow to stress", dosha: "kapha" }
    ]
  },
  {
    id: 3,
    question: "How does your digestion and appetite usually behave?",
    options: [
      { text: "Variable and unpredictable, prone to gas, bloating, and constipation", dosha: "vata" },
      { text: "Intense hunger, gets 'hangry', acid reflux, loose stools if meals are missed", dosha: "pitta" },
      { text: "Slow digestion, can easily skip meals without feeling weak, feels heavy after eating", dosha: "kapha" }
    ]
  },
  {
    id: 4,
    question: "How does your skin and body temperature feel?",
    options: [
      { text: "Cold hands/feet, dry rough skin, sensitive to cold winds and dry weather", dosha: "vata" },
      { text: "Warm body temperature, sensitive to heat and sun, oily T-zone or freckles", dosha: "pitta" },
      { text: "Cool, moist, smooth and thick skin, comfortably handles cold but dislikes dampness", dosha: "kapha" }
    ]
  },
  {
    id: 5,
    question: "What is your main goal for receiving Ayurvedic therapy?",
    options: [
      { text: "Pain relief for back/knees, nerve nourishment, deep mental calm & sleep", dosha: "vata" },
      { text: "Cooling mental burnout, calming eye strain, liver detox & skin soothing", dosha: "pitta" },
      { text: "Detoxification, clearing respiratory sinuses, metabolic revival & lymphatic drain", dosha: "kapha" }
    ]
  }
];

export default function DoshaQuizModal({ isOpen, onClose, onSelectTherapy }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const handleSelectOption = (dosha) => {
    const updatedAnswers = { ...answers, [currentStep]: dosha };
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate winner
      const counts = { vata: 0, pitta: 0, kapha: 0 };
      Object.values(updatedAnswers).forEach((d) => counts[d]++);
      
      let dominant = 'vata';
      if (counts.pitta > counts.vata && counts.pitta >= counts.kapha) dominant = 'pitta';
      else if (counts.kapha > counts.vata && counts.kapha > counts.pitta) dominant = 'kapha';

      setResult(dominant);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  // Recommendations based on Dosha
  const getDoshaDetails = () => {
    switch (result) {
      case 'vata':
        return {
          title: "Vata Predominant (Air & Ether)",
          subtitle: "Characterized by mobility, dryness, and coldness. Needs warm, grounding, and oil-rich nourishing therapies.",
          recommendedTherapyIds: [1, 2, 8, 11, 18], // Kati Basti, Janu Basti, Shiro Basti, Shirodhara, Abhyang
          advice: "Warm medicated oil reservoirs and rhythmic herbal oil streams will pacify nerve irritation, sciatica, joint dryness, and mental anxiety."
        };
      case 'pitta':
        return {
          title: "Pitta Predominant (Fire & Water)",
          subtitle: "Characterized by heat, sharp intensity, and acidity. Needs cooling, pacifying, and anti-inflammatory therapies.",
          recommendedTherapyIds: [6, 10, 11, 19, 24], // Liver Basti, Shiro Pichu, Shirodhara, Leech Therapy, Akshi Tarpan
          advice: "Cooling ghrita (ghee) applications, eye pooling with Triphala Ghrita, and localized detoxification will balance internal heat."
        };
      case 'kapha':
      default:
        return {
          title: "Kapha Predominant (Earth & Water)",
          subtitle: "Characterized by heaviness, density, and stability. Needs invigorating, heating, and detoxifying therapies.",
          recommendedTherapyIds: [12, 13, 15, 21, 22], // Hot cold compress, Patar Potli, Fire cupping, Nasya, Karan Dhupan
          advice: "Warm medicated leaf fomentations (Patra Potli), fire cupping, and sinus cleansing (Nasya) will expel sluggish Ama."
        };
    }
  };

  const doshaInfo = result ? getDoshaDetails() : null;
  const recommendedTherapies = doshaInfo
    ? THERAPIES.filter((t) => doshaInfo.recommendedTherapyIds.includes(t.id))
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FCFAF5] w-full max-w-xl rounded-2xl border border-[#C99436]/40 shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#183627] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-[#C99436]/20 text-[#E8C57D]">
              <Sparkles className="w-5 h-5 text-[#C99436]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Ayurvedic Prakriti & Therapy Matcher
              </h3>
              <p className="text-[11px] text-[#E8C57D]">
                Identify your primary biological imbalance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!result ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-[#12251B]/60 mb-2">
                <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-[#183627]/10 h-1.5 rounded-full mb-6 overflow-hidden">
                <div
                  className="bg-[#C99436] h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <h4 className="font-serif text-lg font-bold text-[#12251B] mb-5">
                {QUESTIONS[currentStep].question}
              </h4>

              {/* Options */}
              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.dosha)}
                    className="w-full text-left p-4 rounded-xl border border-[#C99436]/25 bg-[#F7F4EA] hover:bg-[#183627] hover:text-white transition-all text-xs sm:text-sm font-medium leading-relaxed group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/70 group-hover:bg-[#C99436] text-[#12251B] group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#C99436]/30">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5 animate-fade-in">
              <div className="p-4 rounded-xl bg-[#183627] text-white text-center">
                <span className="text-xs uppercase tracking-widest text-[#E8C57D] font-bold">
                  Assessment Analysis Result
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mt-1">
                  {doshaInfo.title}
                </h4>
                <p className="text-xs text-[#FCFAF5]/80 mt-2 max-w-md mx-auto leading-relaxed">
                  {doshaInfo.subtitle}
                </p>
                <div className="mt-3 p-2.5 rounded-lg bg-white/10 text-xs text-[#E8C57D]">
                  {doshaInfo.advice}
                </div>
              </div>

              <div>
                <h5 className="text-xs uppercase tracking-wider font-bold text-[#183627] mb-2 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#C99436]" />
                  Your Top Recommended Therapies from the 24
                </h5>
                <div className="space-y-2">
                  {recommendedTherapies.map((therapy) => (
                    <div
                      key={therapy.id}
                      className="p-3 rounded-xl bg-[#F7F4EA] border border-[#C99436]/25 flex items-center justify-between gap-3 hover:border-[#C99436] transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-[#C99436]">
                            No. {therapy.id < 10 ? `0${therapy.id}` : therapy.id}
                          </span>
                          <span className="font-serif font-bold text-sm text-[#12251B]">
                            {therapy.name}
                          </span>
                          <span className="text-xs text-[#B46D19] font-hindi">
                            ({therapy.hindiName})
                          </span>
                        </div>
                        <p className="text-[11px] text-[#12251B]/70 line-clamp-1 mt-0.5">
                          {therapy.tagline}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectTherapy(therapy);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#C99436] text-[#12251B] hover:bg-[#B46D19] hover:text-white transition-all shrink-0"
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#12251B]/10">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#183627] hover:text-[#C99436]"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Retake Test
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-[#183627] text-white hover:bg-[#2D5842] transition-all"
                >
                  Close & View Therapies
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
