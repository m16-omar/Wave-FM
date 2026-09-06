import React, { useState } from 'react';
import { ASSET_IMAGES } from '../../assets/images';
import { Headphones, CreditCard, Megaphone, Smartphone, Mail, Phone, Check, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PromotePage: React.FC = () => {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleScrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full select-none overflow-hidden pb-16">
      {/* 1. TOP HERO SECTION: "PROMOTE YOUR BUSINESS WITH US!" */}
      <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: Rounded Image Box */}
          <div className="lg:col-span-6 rounded-[32px] overflow-hidden relative shadow-2xl border border-white/10 min-h-[340px] sm:min-h-[420px] group">
            <img
              src={ASSET_IMAGES.hero3}
              alt="Promote Your Brand on Imole 106.3 FM"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right: Bright Yellow Brand Box */}
          <div className="lg:col-span-6 bg-brand-yellow text-black rounded-[32px] p-8 sm:p-12 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display leading-[1.05] tracking-tight text-black">
                PROMOTE
                <br />
                YOUR BUSINESS
                <br />
                WITH US!
              </h1>

              <div className="space-y-2">
                <p className="text-base sm:text-lg font-extrabold text-black">
                  Boost Your Brand on IMOLE 106.3 FM
                </p>
                <p className="text-xs sm:text-sm font-semibold text-black/85 leading-relaxed">
                  Are you looking to reach a local audience and grow your business? Imole Radio offers affordable promotional plans tailored for small businesses like yours. Let us help you get your message across to the right ears!
                </p>
              </div>
            </div>

            <div>
              <a
                href="#inquiry"
                onClick={handleScrollToInquiry}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black hover:bg-neutral-900 active:scale-95 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
              >
                <span>START NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "HOW IT WORKS" & BESPOKE PACKAGES SECTION (Photo Background) */}
      <section className="relative w-full py-16 sm:py-24 my-6 overflow-hidden">
        {/* Full-width Background Photo with Warm Cinematic Overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src={ASSET_IMAGES.studio}
            alt="Imole Broadcast Studio"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
            {/* Left Card: Yellow Custom Packages Box (No Price) */}
            <div className="lg:col-span-5 bg-brand-yellow text-black rounded-[28px] p-8 sm:p-10 relative flex flex-col justify-between shadow-2xl min-h-[240px]">
              {/* Handwritten Script Badge "Tailored Plans!" */}
              <span className="font-marker text-2xl sm:text-3xl text-white rotate-[-10deg] absolute -top-5 right-3 sm:right-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] pointer-events-none select-none">
                Tailored Plans!
              </span>

              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-black/80 block">
                  BESPOKE BROADCAST
                </span>

                <div className="font-display">
                  <h3 className="text-3xl sm:text-4xl font-black text-black uppercase leading-tight tracking-tight">
                    CUSTOM
                    <br />
                    PACKAGES
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-bold text-black/85 leading-relaxed mt-3">
                Flexible broadcast advertising plans tailored for local brands, SMEs, and corporate campaigns across Lagos.
              </p>

              <div className="pt-3 mt-2 border-t border-black/15 flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-black/80">
                  Flexible Slots & Jingles
                </span>
                <a
                  href="#inquiry"
                  onClick={handleScrollToInquiry}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:underline uppercase tracking-wider cursor-pointer"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </a>
              </div>
            </div>

            {/* Right Card: White "HOW IT WORKS" Box */}
            <div className="lg:col-span-7 bg-white text-black rounded-[28px] p-8 sm:p-12 shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-black">
                HOW IT WORKS
              </h2>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/30 text-brand-yellowDark flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-black" />
                  </div>
                  <div>
                    <span className="font-black text-sm sm:text-base text-black block">
                      Connect With Us:
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                      Fill out our quick campaign brief or contact our partnerships desk.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/30 text-brand-yellowDark flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-black" />
                  </div>
                  <div>
                    <span className="font-black text-sm sm:text-base text-black block">
                      Submit Your Ad:
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                      Share your business details and a short message. Don't worry if you don't have one ready—we'll help craft the perfect ad!
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/30 text-brand-yellowDark flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3] text-black" />
                  </div>
                  <div>
                    <span className="font-black text-sm sm:text-base text-black block">
                      We Broadcast Your Ad:
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                      Your message will air on our station multiple times a day, reaching local listeners who care about businesses like yours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-[11px] sm:text-xs text-gray-500 font-semibold italic">
                  It's that simple. No complicated processes—just effective local advertising.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHY ADVERTISE WITH US?" & "STILL HAVE DOUBTS?" */}
      <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: White "WHY ADVERTISE WITH US?" */}
          <div className="lg:col-span-7 bg-white text-black rounded-[32px] p-8 sm:p-12 shadow-2xl space-y-6 flex flex-col justify-between">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight text-black">
              WHY ADVERTISE
              <br />
              WITH US?
            </h2>

            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0 text-brand-yellowDark mt-0.5">
                  <Headphones className="w-4 h-4 text-black stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-black text-sm sm:text-base text-black block">
                    Reach Your Community:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    Our listeners are local and loyal across Lagos and surrounding environs!
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0 text-brand-yellowDark mt-0.5">
                  <CreditCard className="w-4 h-4 text-black stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-black text-sm sm:text-base text-black block">
                    Cost-Effective Marketing:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    Plans designed to fit your budget with flexible daypart rotations.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0 text-brand-yellowDark mt-0.5">
                  <Megaphone className="w-4 h-4 text-black stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-black text-sm sm:text-base text-black block">
                    Engaging Promotions:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    Your message broadcast to an active, engaged indigenous audience.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0 text-brand-yellowDark mt-0.5">
                  <Smartphone className="w-4 h-4 text-black stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-black text-sm sm:text-base text-black block">
                    Digital Presence:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    Get featured on our high-traffic website and social media platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Dark "STILL HAVE DOUBTS?" */}
          <div className="lg:col-span-5 bg-[#0F204E] text-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-blue-900/40 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight text-white leading-none">
                STILL
                <br />
                HAVE
                <br />
                DOUBTS?
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                Our commercial broadcast team is ready to answer your questions, customize bespoke radio packages, and get your campaign on air within 24 hours.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:contact@imoleradio.com"
                  className="flex items-center gap-3 text-xs sm:text-sm font-bold text-gray-200 hover:text-brand-yellow transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-brand-yellow" />
                  </div>
                  <span>contact@imoleradio.com</span>
                </a>

                <a
                  href="tel:+2348030000000"
                  className="flex items-center gap-3 text-xs sm:text-sm font-bold text-gray-200 hover:text-brand-yellow transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-brand-yellow" />
                  </div>
                  <span>+234 (0) 803 000 0000</span>
                </a>
              </div>
            </div>

            <div>
              <a
                href="#inquiry"
                onClick={handleScrollToInquiry}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE INQUIRY FORM */}
      <section id="inquiry" className="w-full py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#0F204E] p-8 sm:p-12 rounded-[32px] border border-blue-900/40 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight">
              Start Your Broadcast Campaign
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-medium">
              Submit your details below and our corporate partnerships desk will reach out within 24 hours.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-brand-yellow mx-auto animate-bounce" />
              <h4 className="text-xl font-black text-white uppercase font-display">Inquiry Received!</h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                Thank you for choosing Imole 106.3 FM. Our advertising specialists will contact you shortly to finalize your schedule.
              </p>
              <button
                onClick={() => setInquirySubmitted(false)}
                className="px-8 py-3 rounded-full bg-brand-yellow text-black font-black text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all cursor-pointer shadow-lg"
              >
                Send Another Brief
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setInquirySubmitted(true);
                confetti({
                  particleCount: 60,
                  spread: 70,
                  origin: { y: 0.6 },
                  colors: ['#F5B800', '#532688', '#FFFFFF'],
                });
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tunde Balogun"
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-1.5">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Lagos Enterprises"
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. tunde@apex.ng"
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 803 123 4567"
                    className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-gray-300 mb-1.5">
                  Campaign Goals & Ad Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your product or service, target audience, preferred show slots, or campaign timeline..."
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black uppercase text-xs sm:text-sm tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Broadcast Promotion Request</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
