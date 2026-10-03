import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { THERAPIES, ROORKEE_SERVICE_AREAS } from '../data/therapies';
import { Calendar, Clock, MapPin, Phone, User, CheckCircle2, MessageCircle, AlertCircle, Home, Building } from 'lucide-react';

export default function BookingSection({ preselectedTherapy, onClearPreselected }) {
  const [therapyType, setTherapyType] = useState('home'); // 'home' or 'clinic'
  const [selectedTherapyId, setSelectedTherapyId] = useState(preselectedTherapy ? preselectedTherapy.id : 1);
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [roorkeeArea, setRoorkeeArea] = useState('Sainipuram');
  const [specificAddress, setSpecificAddress] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected therapy when prop changes
  useEffect(() => {
    if (preselectedTherapy) {
      setSelectedTherapyId(preselectedTherapy.id);
    }
  }, [preselectedTherapy]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const currentTherapy = THERAPIES.find((t) => t.id === Number(selectedTherapyId)) || THERAPIES[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!patientName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (therapyType === 'home' && !specificAddress.trim()) {
      setErrorMessage('Please provide your house/flat or street details for Home Therapy.');
      return;
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C99436', '#183627', '#E8C57D', '#B46D19']
      });
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  const handleResetBooking = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPhone('');
    setSymptoms('');
    setSpecificAddress('');
    if (onClearPreselected) onClearPreselected();
  };

  const timeSlotLabel = {
    morning: 'Morning (08:00 AM - 12:00 PM)',
    afternoon: 'Afternoon (12:00 PM - 04:00 PM)',
    evening: 'Evening (04:00 PM - 08:00 PM)'
  }[timeSlot];

  const whatsappMessage = encodeURIComponent(
    `*AyushKaya Therapy Booking Request*\n\n` +
    `• *Patient:* ${patientName}\n` +
    `• *Phone:* ${phone}\n` +
    `• *Therapy:* ${currentTherapy.name} (${currentTherapy.hindiName})\n` +
    `• *Service Mode:* ${therapyType === 'home' ? 'Home Therapy (Doorstep in Roorkee)' : 'Clinic Visit (Sainipuram, Roorkee)'}\n` +
    `• *Location:* ${roorkeeArea}${specificAddress ? `, ${specificAddress}` : ''}\n` +
    `• *Preferred Date:* ${preferredDate}\n` +
    `• *Time Slot:* ${timeSlotLabel}\n` +
    `• *Condition/Symptoms:* ${symptoms || 'None specified'}\n\n` +
    `Please confirm the appointment slot.`
  );

  return (
    <section id="booking" className="py-16 bg-[#F7F4EA] border-b border-[#C99436]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#B46D19] font-bold px-3 py-1 rounded-full bg-[#C99436]/10 border border-[#C99436]/30">
            Appointments & Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12251B] mt-3">
            Schedule Your Therapy Session
          </h2>
          <p className="text-xs sm:text-sm text-[#12251B]/75 mt-2">
            Select your preferred classical therapy. Available for doorstep home visit in Roorkee or in-clinic at Sainipuram.
          </p>
        </div>

        <div className="bg-[#FCFAF5] rounded-3xl border border-[#C99436]/30 shadow-xl overflow-hidden p-6 sm:p-10">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#183627] text-[#E8C57D] flex items-center justify-center mx-auto border-2 border-[#C99436]">
                <CheckCircle2 className="w-9 h-9 text-[#C99436]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#183627]">
                Appointment Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#12251B]/80 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{patientName}</strong>. Your request for <strong>{currentTherapy.name}</strong> ({therapyType === 'home' ? 'Home Therapy' : 'Clinic Visit'}) on <strong>{preferredDate}</strong> ({timeSlotLabel}) has been recorded.
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F4EA] border border-[#C99436]/30 max-w-md mx-auto text-left text-xs space-y-2">
                <div><strong>Practitioner:</strong> A.K. Goswami</div>
                <div><strong>Service Location:</strong> {therapyType === 'home' ? `${specificAddress}, ${roorkeeArea}, Roorkee` : 'Sainipuram Clinic, Roorkee'}</div>
                <div><strong>Selected Therapy:</strong> {currentTherapy.name} ({currentTherapy.hindiName}) - {currentTherapy.duration}</div>
              </div>

              {/* Instant WhatsApp confirmation CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:brightness-105 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm Instantly on WhatsApp
                </a>
                <button
                  onClick={handleResetBooking}
                  className="px-5 py-3 rounded-xl bg-[#183627] text-white font-semibold text-xs sm:text-sm hover:bg-[#2D5842] transition-all"
                >
                  Book Another Session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Service Mode Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-2">
                  Choose Service Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTherapyType('home')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      therapyType === 'home'
                        ? 'bg-[#183627] text-white border-[#C99436] shadow-md'
                        : 'bg-[#F7F4EA] text-[#12251B] border-[#C99436]/20 hover:border-[#C99436]/50'
                    }`}
                  >
                    <Home className={`w-5 h-5 shrink-0 mt-0.5 ${therapyType === 'home' ? 'text-[#E8C57D]' : 'text-[#C99436]'}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">Home Therapy</div>
                      <div className={`text-[11px] mt-0.5 ${therapyType === 'home' ? 'text-white/80' : 'text-[#12251B]/70'}`}>
                        Practitioner arrives at your home in Roorkee
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTherapyType('clinic')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      therapyType === 'clinic'
                        ? 'bg-[#183627] text-white border-[#C99436] shadow-md'
                        : 'bg-[#F7F4EA] text-[#12251B] border-[#C99436]/20 hover:border-[#C99436]/50'
                    }`}
                  >
                    <Building className={`w-5 h-5 shrink-0 mt-0.5 ${therapyType === 'clinic' ? 'text-[#E8C57D]' : 'text-[#C99436]'}`} />
                    <div>
                      <div className="font-bold text-xs sm:text-sm">Clinic Visit</div>
                      <div className={`text-[11px] mt-0.5 ${therapyType === 'clinic' ? 'text-white/80' : 'text-[#12251B]/70'}`}>
                        Visit Center at Sainipuram, Roorkee
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Therapy Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-2">
                  Select Therapy ({THERAPIES.length} Available)
                </label>
                <select
                  value={selectedTherapyId}
                  onChange={(e) => setSelectedTherapyId(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] font-medium focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                >
                  {THERAPIES.map((th) => (
                    <option key={th.id} value={th.id}>
                      {th.id}. {th.name} ({th.hindiName}) — {th.category} ({th.duration})
                    </option>
                  ))}
                </select>
                <div className="mt-2 text-xs text-[#2D5842] flex items-center justify-between">
                  <span><strong>Target:</strong> {currentTherapy.bodyArea}</span>
                  <span><strong>Recommended:</strong> {currentTherapy.recommendedSessions}</span>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C99436]" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C99436]" /> Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                  >
                    <option value="morning">Morning (08:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="evening">Evening (04:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C99436]" /> Patient Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C99436]" /> Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                  />
                </div>
              </div>

              {/* Location selection for Roorkee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C99436]" /> Roorkee Locality
                  </label>
                  <select
                    value={roorkeeArea}
                    onChange={(e) => setRoorkeeArea(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                  >
                    {ROORKEE_SERVICE_AREAS.map((colony, idx) => (
                      <option key={idx} value={colony}>
                        {colony}, Roorkee
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-1.5">
                    {therapyType === 'home' ? 'Street / House No. (Home Therapy) *' : 'Nearby Landmark (Optional)'}
                  </label>
                  <input
                    type="text"
                    placeholder={therapyType === 'home' ? 'House #, Street, Colony Landmark' : 'e.g. Near Temple / School'}
                    value={specificAddress}
                    onChange={(e) => setSpecificAddress(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                  />
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#183627] mb-1.5">
                  Describe Main Complaint or Pain Duration (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Severe lower back pain radiating down right leg for 3 weeks; knee stiffness while climbing stairs..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#C99436]/30 bg-[#F7F4EA] text-xs sm:text-sm text-[#12251B] focus:outline-none focus:ring-2 focus:ring-[#C99436]"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C99436] to-[#B46D19] text-[#12251B] font-bold text-sm sm:text-base shadow-xl hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Confirm Booking for {currentTherapy.name}
                </button>
                <p className="text-center text-[11px] text-[#12251B]/60 mt-2">
                  No advance payment needed. Vaidya A.K. Goswami will call or message to confirm schedule details.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
