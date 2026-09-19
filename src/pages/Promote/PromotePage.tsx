import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ASSET_IMAGES } from '../../assets/images';
import { 
  Headphones, 
  CreditCard, 
  Megaphone, 
  Smartphone, 
  Mail, 
  Phone, 
  Check, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
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
  MessageSquareShare,
  CalendarCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { clsx } from 'clsx';

type TabType = 'rate-card' | 'overview' | 'inquiry';

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
    icon: <Megaphone className="w-5 h-5 text-brand-yellow" />,
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

export const PromotePage: React.FC = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Tab state (defaults to 'rate-card' if navigating to /rate-card or with tab=rate-card query)
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('rate-card') || path.includes('ratecard') || path.includes('rates')) {
      return 'rate-card';
    }
    const tabParam = searchParams.get('tab');
    if (tabParam === 'overview' || tabParam === 'inquiry' || tabParam === 'rate-card') {
      return tabParam;
    }
    return 'rate-card';
  });

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('rate-card') || path.includes('ratecard') || path.includes('rates')) {
      setActiveTab('rate-card');
    }
  }, [location.pathname]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const handleSelectPackageForInquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    setActiveTab('inquiry');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="w-full select-none overflow-hidden pb-16">
      {/* 1. TOP HEADER & TAB BAR */}
      <section className="w-full pt-8 sm:pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-black uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>IMOLE 106.3 FM • COMMERCIAL DESK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white leading-[1.08]">
            ADVERTISE & GROW
            <br />
            <span className="text-brand-yellow">WITH IMOLE 106.3 FM</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Reach hundreds of thousands of engaged listeners across Lagos, Ogun, and millions streaming worldwide. Explore our transparent rate card and flexible bespoke broadcast packages.
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 max-w-xl mx-auto bg-neutral-900/90 p-1.5 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
          <button
            onClick={() => handleTabChange('rate-card')}
            className={clsx(
              'flex-1 py-3 px-3 sm:px-5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer',
              activeTab === 'rate-card'
                ? 'bg-brand-yellow text-black shadow-lg scale-[1.02]'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            )}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Official Rate Card</span>
          </button>

          <button
            onClick={() => handleTabChange('overview')}
            className={clsx(
              'flex-1 py-3 px-3 sm:px-5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer',
              activeTab === 'overview'
                ? 'bg-brand-yellow text-black shadow-lg scale-[1.02]'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            )}
          >
            <Megaphone className="w-4 h-4 shrink-0" />
            <span>Overview & Info</span>
          </button>

          <button
            onClick={() => handleTabChange('inquiry')}
            className={clsx(
              'flex-1 py-3 px-3 sm:px-5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer',
              activeTab === 'inquiry'
                ? 'bg-brand-yellow text-black shadow-lg scale-[1.02]'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            )}
          >
            <Send className="w-4 h-4 shrink-0" />
            <span>Book Now</span>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TAB 1: OFFICIAL RATE CARD TAB                                             */}
      {/* ========================================================================= */}
      {activeTab === 'rate-card' && (
        <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
          {/* Quick Action Top Bar */}
          <div className="bg-[#121829] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 flex items-center justify-center text-brand-yellow shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-tight">
                  Official Imole 106.3 FM Rate Card
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  Approved commercial broadcast rates for on-air appearances, placements, and sponsorships.
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

          {/* Main Visual Poster & Interactive Pricing Breakdown Grid */}
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
                    Click to Open Full View
                  </span>
                </div>
              </div>

              {/* Station Contact Box */}
              <div className="bg-[#0D1527] border border-white/10 rounded-2xl p-5 space-y-3 shadow-lg">
                <span className="text-[11px] font-black uppercase tracking-widest text-brand-yellow block">
                  COMMERCIAL DESK & BOOKINGS
                </span>

                <div className="space-y-2 text-xs text-gray-300">
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

                    {/* Price list */}
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
                      onClick={() => handleSelectPackageForInquiry(cat.title)}
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
      )}

      {/* ========================================================================= */}
      {/* TAB 2: PACKAGES & OVERVIEW TAB                                            */}
      {/* ========================================================================= */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Top Hero Banner */}
          <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              <div className="lg:col-span-6 rounded-[32px] overflow-hidden relative shadow-2xl border border-white/10 min-h-[340px] sm:min-h-[420px] group">
                <img
                  src={ASSET_IMAGES.hero3}
                  alt="Promote Your Brand on Imole 106.3 FM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="lg:col-span-6 bg-brand-yellow text-black rounded-[32px] p-8 sm:p-12 shadow-2xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display leading-[1.05] tracking-tight text-black">
                    PROMOTE
                    <br />
                    YOUR BUSINESS
                    <br />
                    WITH US!
                  </h2>

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
                  <button
                    onClick={() => setActiveTab('inquiry')}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-black hover:bg-neutral-900 active:scale-95 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all cursor-pointer"
                  >
                    <span>START NOW</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="relative w-full py-16 sm:py-24 my-6 overflow-hidden">
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
                {/* Left Card: Yellow Custom Packages Box */}
                <div className="lg:col-span-5 bg-brand-yellow text-black rounded-[28px] p-8 sm:p-10 relative flex flex-col justify-between shadow-2xl min-h-[240px]">
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
                    <button
                      onClick={() => setActiveTab('inquiry')}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:underline uppercase tracking-wider cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>

                {/* Right Card: White How It Works Box */}
                <div className="lg:col-span-7 bg-white text-black rounded-[28px] p-8 sm:p-12 shadow-2xl space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-black">
                    HOW IT WORKS
                  </h3>

                  <div className="space-y-4">
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
                </div>
              </div>
            </div>
          </section>

          {/* Why Advertise Section */}
          <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              <div className="lg:col-span-7 bg-white text-black rounded-[32px] p-8 sm:p-12 shadow-2xl space-y-6 flex flex-col justify-between">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight text-black">
                  WHY ADVERTISE
                  <br />
                  WITH US?
                </h3>

                <div className="space-y-5">
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

              <div className="lg:col-span-5 bg-[#0F204E] text-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-blue-900/40 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight text-white leading-none">
                    STILL
                    <br />
                    HAVE
                    <br />
                    DOUBTS?
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                    Our commercial broadcast team is ready to answer your questions, customize bespoke radio packages, and get your campaign on air within 24 hours.
                  </p>

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
                      href="tel:+2348097474898"
                      className="flex items-center gap-3 text-xs sm:text-sm font-bold text-gray-200 hover:text-brand-yellow transition-colors"
                    >
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5 text-brand-yellow" />
                      </div>
                      <span>+234 809 747 4898 / 08029102206</span>
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setActiveTab('inquiry')}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    <span>CONTACT US</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: BOOK CAMPAIGN / INQUIRY FORM TAB                                   */}
      {/* ========================================================================= */}
      {activeTab === 'inquiry' && (
        <section className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fadeIn">
          <div className="bg-[#0F204E] p-8 sm:p-12 rounded-[32px] border border-blue-900/40 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight">
                Start Your Broadcast Campaign
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Submit your details below and our commercial partnerships desk will contact you within 24 hours.
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
                  onClick={() => {
                    setInquirySubmitted(false);
                    setSelectedService('');
                  }}
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
                {selectedService && (
                  <div className="p-3.5 bg-brand-yellow/15 border border-brand-yellow/30 rounded-2xl flex items-center justify-between">
                    <span className="text-xs font-black text-brand-yellow uppercase tracking-wider">
                      Selected Service: {selectedService}
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
                    Campaign Goals & Ad Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your product or service, target audience, preferred show slots, or campaign timeline..."
                    defaultValue={selectedService ? `I am interested in booking: ${selectedService}. ` : ''}
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
      )}

      {/* ========================================================================= */}
      {/* 4. LIGHTBOX MODAL FOR FULL-SCREEN RATE CARD POSTER VIEW                   */}
      {/* ========================================================================= */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center">
            {/* Top Close / Action Buttons */}
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

            {/* Poster Image */}
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
