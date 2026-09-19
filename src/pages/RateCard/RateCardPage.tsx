import React, { useState } from 'react';
import { ASSET_IMAGES } from '../../assets/images';
import { 
  Download, 
  Maximize2, 
  X, 
  FileText, 
  Sparkles, 
  Radio, 
  Mic2, 
  Disc3, 
  Layers, 
  Clock, 
  Phone,
  MessageSquareShare,
  Send,
  CheckCircle2,
  CalendarCheck2,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingItem {
  name: string;
  price: string;
  unit?: string;
  note?: string;
}

interface PricingCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  badge?: string;
  description: string;
  items: PricingItem[];
}

const RATE_CARD_CATEGORIES: PricingCategory[] = [
  {
    id: 'live-appearances',
    title: 'Live Appearances',
    icon: <Mic2 className="w-5 h-5 text-brand-yellow" />,
    badge: 'STUDIO GUEST',
    description: 'Direct on-air studio interview & live interactive engagement with our station hosts.',
    items: [
      { name: '10 Minutes', price: '₦50,000' },
      { name: '30 Minutes', price: '₦100,000' },
      { name: '60 Minutes', price: '₦150,000' },
    ],
  },
  {
    id: 'programmes-sponsorship',
    title: 'Programmes Sponsorship',
    icon: <Radio className="w-5 h-5 text-brand-yellow" />,
    badge: 'POPULAR',
    description: 'Associate your brand with prime daily radio slots, flagship talk shows, and religious segments.',
    items: [
      { name: '1 Minute Call to Prayer', price: '₦5,000' },
      { name: '5 Minutes', price: '₦20,000' },
      { name: '10 Minutes', price: '₦35,000' },
      { name: '15 Minutes', price: '₦60,000' },
      { name: '30 Minutes', price: '₦120,000' },
      { name: '60 Minutes', price: '₦230,000' },
    ],
  },
  {
    id: 'personal-announcements',
    title: 'Personal Paid Announcements',
    icon: <Sparkles className="w-5 h-5 text-brand-yellow" />,
    badge: 'FAST AIRPLAY',
    description: 'Community notices, special greetings, business announcements, and personal broadcast messages.',
    items: [
      { name: '1 – 50 words', price: '₦10,000' },
      { name: '51 – 75 words', price: '₦15,000' },
      { name: '75 – 100 words', price: '₦20,000' },
    ],
  },
  {
    id: 'placements',
    title: 'Placements & Endorsements',
    icon: <Sparkles className="w-5 h-5 text-brand-yellow" />,
    badge: 'HIGH IMPACT',
    description: 'Presenter live hypes, corporate brand credits, news headlines mentions, and celebrity greetings.',
    items: [
      { name: 'On-air Hype', price: '₦50,000' },
      { name: 'Brand Credits', price: '₦50,000' },
      { name: 'News Mention', price: '₦70,000' },
      { name: 'Guest Appearance', price: '₦100,000' },
      { name: 'Sterling Greetings', price: '₦20,000' },
    ],
  },
  {
    id: 'studio-charges',
    title: 'Studio & Production Charges',
    icon: <Disc3 className="w-5 h-5 text-brand-yellow" />,
    badge: 'FACILITIES',
    description: 'Professional audio production, commercial jingle creation, voice-overs, and studio space hire.',
    items: [
      { name: '(a) Jingle Production', price: '₦50,000' },
      { name: '(b) Voice-Over', price: '₦40,000' },
      { name: '(c) Transfer to DVD', price: '₦5,000' },
      { name: '(d) Studio Hire', price: '₦250,000' },
    ],
  },
  {
    id: 'obituary-missing',
    title: 'Obituary & Missing Items',
    icon: <Layers className="w-5 h-5 text-brand-yellow" />,
    badge: 'ESSENTIALS',
    description: 'Public broadcast notices for missing belongings, remembrance memorials, and bereavement messages.',
    items: [
      { name: '60 secs', price: '₦8,500' },
      { name: '45 secs', price: '₦6,500' },
      { name: '30 secs', price: '₦5,000' },
      { name: '15 secs', price: '₦4,000' },
    ],
  },
];

export const RateCardPage: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectPackage = (serviceName: string) => {
    setSelectedService(serviceName);
    const formElement = document.getElementById('rate-card-inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full select-none overflow-hidden pb-16">
      {/* 1. TOP HEADER */}
      <section className="w-full pt-8 sm:pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>IMOLE 106.3 FM • OFFICIAL RATE CARD</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white leading-[1.08]">
            COMMERCIAL
            <br />
            <span className="text-brand-yellow">BROADCAST RATE CARD</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Transparent pricing for on-air promotions, show sponsorships, studio sessions, jingles, and personal announcements on Ìmọ́lẹ̀ 106.3 FM Lagos.
          </p>
        </div>
      </section>

      {/* 2. MAIN RATE CARD CONTENT */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        {/* Quick Action Top Bar */}
        <div className="bg-[#121829] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-tight">
                Official Station Broadcast Rates
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                Radio Station | Studio | Training | Media | Community — "Your Voice • Our Priority"
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border border-white/10"
            >
              <Maximize2 className="w-3.5 h-3.5 text-brand-yellow" />
              <span>View Full Poster</span>
            </button>

            <a
              href={ASSET_IMAGES.rateCard}
              download="Imole_106.3_FM_Rate_Card.jpeg"
              className="px-4 py-2.5 rounded-xl bg-brand-yellow hover:bg-brand-yellowHover text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download Rate Card</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Rate Card Poster & Interactive Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Visual Rate Card Poster Display */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl group cursor-pointer"
            >
              <img
                src={ASSET_IMAGES.rateCard}
                alt="Imole 106.3 FM Rate Card"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-black flex items-center justify-center shadow-xl">
                  <Maximize2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <span className="font-black text-sm uppercase tracking-wider">
                  Click to Zoom & Enlarge
                </span>
              </div>
            </div>

            {/* Station Commercial Desk Contacts Box */}
            <div className="bg-[#0D1527] border border-white/10 rounded-2xl p-5 space-y-3 shadow-lg">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-yellow block">
                COMMERCIAL DESK & BOOKINGS
              </span>

              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>08097474898 / 08029102206</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquareShare className="w-4 h-4 text-green-400 shrink-0" />
                  <a 
                    href="https://wa.me/2348022000085" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline text-green-300 font-bold"
                  >
                    08022000085 (WhatsApp Chat)
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <span>20, Adetoro John Street, Fadeiyi, Lagos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Interactive Pricing Cards */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RATE_CARD_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#10172B] hover:bg-[#131C35] transition-colors border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-xl group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center shrink-0">
                        {cat.icon}
                      </div>
                      {cat.badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-yellow/20 text-brand-yellow text-[9.5px] font-black uppercase tracking-wider border border-brand-yellow/30">
                          {cat.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-black text-white uppercase font-display leading-tight">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Price items list */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {cat.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs py-1 border-b border-white/5 last:border-0"
                      >
                        <span className="text-gray-300 font-medium truncate pr-2">
                          {item.name}
                        </span>
                        <span className="font-mono font-black text-brand-yellow shrink-0 text-[13px]">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSelectPackage(cat.title)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-yellow hover:text-black font-black text-xs uppercase tracking-wider text-gray-200 transition-all flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
                  >
                    <CalendarCheck2 className="w-3.5 h-3.5" />
                    <span>Select & Inquire</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE INQUIRY FORM */}
      <section id="rate-card-inquiry" className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#0F204E] p-8 sm:p-12 rounded-[32px] border border-blue-900/40 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight">
              Book Broadcast Slot or Jingle
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-medium">
              Send your booking requirements directly to our commercial partnerships team.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-brand-yellow mx-auto animate-bounce" />
              <h4 className="text-xl font-black text-white uppercase font-display">Booking Request Sent!</h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                Thank you for choosing Imole 106.3 FM. Our commercial desk will contact you to finalize your slot.
              </p>
              <button
                onClick={() => {
                  setInquirySubmitted(false);
                  setSelectedService('');
                }}
                className="px-8 py-3 rounded-full bg-brand-yellow text-black font-black text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all cursor-pointer shadow-lg"
              >
                Book Another Slot
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
              {selectedService && (
                <div className="p-3.5 bg-brand-yellow/15 border border-brand-yellow/30 rounded-2xl flex items-center justify-between">
                  <span className="text-xs font-black text-brand-yellow uppercase tracking-wider">
                    Selected Package: {selectedService}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedService('')}
                    className="text-xs text-gray-400 hover:text-white underline cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              )}

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
                    Business / Brand / Organisation
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
                    Phone / WhatsApp Number
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
                  Requirements & Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your product or message, preferred show time slots, or timeline..."
                  defaultValue={selectedService ? `I would like to book: ${selectedService}. ` : ''}
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black uppercase text-xs sm:text-sm tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Rate Card Booking Request</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <span className="font-black uppercase text-xs sm:text-sm tracking-wider text-brand-yellow">
                  ÌMỌ́LẸ̀ 106.3 FM RATE CARD
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={ASSET_IMAGES.rateCard}
                  download="Imole_106.3_FM_Rate_Card.jpeg"
                  className="p-2 rounded-full bg-brand-yellow text-black hover:scale-105 active:scale-95 transition-transform"
                  title="Download Rate Card"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                </a>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-auto max-h-[80vh] rounded-2xl border border-white/20 shadow-2xl">
              <img
                src={ASSET_IMAGES.rateCard}
                alt="Imole 106.3 FM Rate Card Full View"
                className="w-full h-auto object-contain max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RateCardPage;
