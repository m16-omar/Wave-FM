import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F5B800', '#FFFFFF', '#000000'],
      });
    }
  };

  return (
    <div className="w-full select-none pb-16 font-sans">
      {/* 1. Hero Page Header with Grayscale Studio DJ & Giant Hollow "IMOLE 106.3" Wireframe */}
      <div className="w-full bg-[#0C0D10] relative overflow-hidden border-b border-white/5 pt-12 pb-28 sm:pt-16 sm:pb-36">
        {/* Background Grayscale DJ / Host Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1800&q=80"
            alt="Radio Host Background"
            className="w-full h-full object-cover grayscale opacity-25 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0D10]/85 via-[#0C0D10]/60 to-[#0C0D10]" />
        </div>

        {/* Giant Hollow Outline Watermark "IMOLE 106.3" in Gold */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pointer-events-none -z-5 overflow-hidden select-none translate-y-6 sm:translate-y-10">
          <span
            className="font-black text-[18vw] text-transparent tracking-tighter uppercase font-display leading-none whitespace-nowrap opacity-60"
            style={{
              WebkitTextStroke: '2px #F5B800',
            }}
          >
            IMOLE 106.3
          </span>
        </div>

        {/* Top Header Row Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none">
              CONTACT US
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main 2-Column Content Grid (Overlapping the Hero Header) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-28 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start justify-center">
          {/* Left Column (6 Cols): Clean White Rounded Info Card */}
          <div className="md:col-span-6 bg-white rounded-[32px] p-8 sm:p-10 text-black shadow-2xl space-y-6 w-full">
            {/* Section 1: OUR SOCIALS */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-black leading-none">
                OUR SOCIALS
              </h3>

              {/* 3 Yellow Pill Buttons */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-brand-yellowHover active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>INSTAGRAM</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-brand-yellowHover active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-4.52z"/>
                  </svg>
                  <span>TIK TOK</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 hover:bg-brand-yellowHover active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                  </svg>
                  <span>FACEBOOK</span>
                </a>
              </div>
            </div>

            {/* Section 2: CONTACTS */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-black leading-none">
                CONTACTS
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm font-semibold text-gray-800 pt-1">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-black shrink-0" />
                  <a
                    href="mailto:info@contact.me"
                    className="hover:text-brand-yellowDark transition-colors font-medium"
                  >
                    info@contact.me
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-black shrink-0" />
                  <a
                    href="tel:+55123323223"
                    className="hover:text-brand-yellowDark transition-colors font-mono font-medium"
                  >
                    +55 123 32 32 23
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div className="leading-relaxed font-medium">
                    Central Street 13
                    <br />
                    1080 London
                    <br />
                    United Kingdom
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols): Dark Rounded Form Card */}
          <div className="md:col-span-6 bg-[#141416] rounded-[32px] p-8 sm:p-10 border border-white/10 text-white shadow-2xl w-full">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-brand-yellow text-black flex items-center justify-center mx-auto shadow-glow-yellow">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase font-display">
                  Message Sent!
                </h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Thank you for contacting Imole 106.3 FM. Our studio team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-brand-yellow text-black font-black text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Field 1: Your Name */}
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#CCCCCC] text-black px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-inner"
                  />
                </div>

                {/* Field 2: Your Email */}
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Your email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#CCCCCC] text-black px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-inner"
                  />
                </div>

                {/* Field 3: Subject */}
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#CCCCCC] text-black px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-inner"
                  />
                </div>

                {/* Field 4: Your Message */}
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Your message (optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#CCCCCC] text-black px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-inner resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-2.5 rounded-full bg-brand-yellow text-black font-black text-xs uppercase tracking-wider hover:bg-brand-yellowHover active:scale-95 transition-all shadow-md cursor-pointer"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
