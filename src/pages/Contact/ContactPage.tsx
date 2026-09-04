import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Calendar,
  Tv,
  Megaphone,
  Download,
  Send,
  Sparkles,
  ArrowDownCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Schedule } from '../../components/radio/Schedule';
import { VIDEOS_DATA } from '../../data/videos';
import { EVENTS_DATA } from '../../data/events';
import { STATION_INFO } from '../../data/station';
import { VideoCard } from '../../components/cards/VideoCard';
import { EventCard } from '../../components/cards/EventCard';
import { Modal } from '../../components/ui/Modal';
import { Tabs } from '../../components/ui/Tabs';
import type { TabItem } from '../../components/ui/Tabs';
import type { VideoItem } from '../../types/video';

export const ContactPage: React.FC = () => {
  const location = useLocation();

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Video widget state
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Events widget state
  const [activeEventsTab, setActiveEventsTab] = useState<'upcoming' | 'past'>('upcoming');

  // Promote widget state
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Scroll to hash on load or hash change
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const yOffset = -90; // offset for sticky navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 120);
      }
    }
  }, [location]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F5B800', '#532688', '#000000', '#FFFFFF'],
      });
    }
  };

  const videoCategories: TabItem[] = [
    { id: 'all', label: 'All Videos', count: VIDEOS_DATA.length },
    { id: 'Studio Sessions', label: 'Studio Sessions' },
    { id: 'Comedy & Highlights', label: 'Comedy Highlights' },
    { id: 'DJ Masterclass', label: 'DJ Masterclass' },
    { id: 'Festival Highlights', label: 'Festival Highlights' },
    { id: 'Interviews', label: 'Interviews' },
  ];

  const filteredVideos = VIDEOS_DATA.filter((v) => {
    return selectedVideoCategory === 'all' || v.category === selectedVideoCategory;
  });

  const eventTabs: TabItem[] = [
    {
      id: 'upcoming',
      label: 'Upcoming Festivals & Concerts',
      count: EVENTS_DATA.filter((e) => !e.isPast).length,
    },
    {
      id: 'past',
      label: 'Past Events & Archives',
      count: EVENTS_DATA.filter((e) => e.isPast).length,
    },
  ];

  const filteredEvents = EVENTS_DATA.filter((e) => {
    return activeEventsTab === 'upcoming' ? !e.isPast : e.isPast;
  });

  const audienceStats = [
    { value: '450,000+', label: 'Weekly Active FM Listeners' },
    { value: '1.2M+', label: 'Monthly Digital Audio Streams' },
    { value: '78%', label: 'Key 18-34 Urban Demographic' },
    { value: '#1', label: 'Urban Indigenous Voice in Lagos' },
  ];

  const advertisingPackages = [
    {
      name: 'On-Air Spot Campaign',
      tagline: 'High frequency rotation during morning & afternoon drive times.',
      features: [
        '30s & 60s prime broadcast audio commercials',
        'Live presenter voice reads & endorsements',
        'Hourly sponsor tags during Morning Drive',
        'Inclusion in audio stream pre-rolls',
      ],
      badge: 'Popular',
    },
    {
      name: 'Digital & App Sponsorship',
      tagline: 'Multi-platform visual and interactive digital branding.',
      features: [
        'Sticky audio player banner takeovers',
        'Sponsored podcast episode mentions',
        'Newsletter feature to 45,000 VIP subscribers',
        'Social media giveaway campaign hosting',
      ],
      badge: 'Digital',
    },
    {
      name: 'Festival & Event Partnership',
      tagline: 'Direct experiential engagement at Imole live concerts.',
      features: [
        'On-site experiential booth placement',
        'Mainstage visual LED screen branding',
        'VIP hospitality lounge naming rights',
        'Live on-air remote broadcasts from your venue',
      ],
      badge: 'Experiential',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full select-none pb-24 font-sans space-y-20 sm:space-y-28">
      {/* ========================================================================= */}
      {/* 1. HERO PAGE HEADER & QUICK HUB JUMP NAVIGATION                           */}
      {/* ========================================================================= */}
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Station Central Hub • Launched 21st Nov 2025</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none">
                CONTACT US
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed max-w-sm">
              Get in touch with our studio team, explore our station bio & leadership, view the weekly on-air schedule, watch video archives, and partner with Imole 106.3 FM.
            </p>
          </div>

          {/* Quick Hub Jump Pill Navigation */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={() => scrollToSection('station-bio')}
              className="px-4 py-2 rounded-full bg-brand-yellow text-black hover:bg-brand-yellowHover text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Station Bio & Leadership</span>
            </button>
            <button
              onClick={() => scrollToSection('contact-form')}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border border-white/10 backdrop-blur-md cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Form</span>
            </button>
            <button
              onClick={() => scrollToSection('schedule')}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border border-white/10 backdrop-blur-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Weekly Schedule</span>
            </button>
            <button
              onClick={() => scrollToSection('videos')}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border border-white/10 backdrop-blur-md cursor-pointer"
            >
              <Tv className="w-3.5 h-3.5" />
              <span>Videos Archive</span>
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border border-white/10 backdrop-blur-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Events & Concerts</span>
            </button>
            <button
              onClick={() => scrollToSection('promote')}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 border border-white/10 backdrop-blur-md cursor-pointer"
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Promote / Advertise</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CONTACT INFO & FORM SECTION (Overlapping Hero)                          */}
      {/* ========================================================================= */}
      <section id="contact-form" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-28 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start justify-center">
          {/* Left Column: Clean White Rounded Info Card */}
          <div className="md:col-span-6 bg-white rounded-[32px] p-8 sm:p-10 text-black shadow-2xl space-y-6 w-full">
            {/* Section 1: OUR SOCIALS */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black uppercase font-display tracking-tight text-black leading-none">
                OUR SOCIALS
              </h3>

              {/* Yellow Pill Buttons */}
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
                    href="mailto:info@imolefm.com"
                    className="hover:text-brand-yellowDark transition-colors font-medium"
                  >
                    info@imolefm.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-black shrink-0" />
                  <a
                    href="tel:+2348004665336"
                    className="hover:text-brand-yellowDark transition-colors font-mono font-medium"
                  >
                    +234 800 466 5336 (0800-IMOLE-FM)
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div className="leading-relaxed font-medium">
                    20, Adetoro John Street,
                    <br />
                    Fadeyi, Lagos.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Rounded Form Card */}
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
                  Thank you for reaching out to Imole 106.3 FM. Our studio team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-brand-yellow text-black font-black text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
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
      </section>

      {/* ========================================================================= */}
      {/* 3. STATION BIO & LEADERSHIP SECTION                                       */}
      {/* ========================================================================= */}
      <section id="station-bio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/15 text-brand-yellow text-xs font-black uppercase tracking-widest border border-brand-yellow/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Station Bio • Launched 21st November 2025</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
            Imole 106.3FM — Station Bio
          </h2>

          <p className="text-sm sm:text-base text-brand-yellow font-bold uppercase tracking-wider">
            {STATION_INFO.tagline} • {STATION_INFO.motto}
          </p>
        </div>

        {/* Narrative Bio Container */}
        <div className="bg-[#141416] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#532688]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            <p className="border-l-4 border-brand-yellow pl-4 sm:pl-6 text-white font-medium">
              <strong className="text-brand-yellow font-black">Imole 106.3FM</strong> is Lagos's urban indigenous voice — a commercial radio station born to inform, inspire, and illuminate. Launched on <strong>21st November 2025</strong>, Imole ("light" in Yoruba) broadcasts to Lagos and its environs, reaching millions of listeners with programming rooted in culture, community, and conversation that matters.
            </p>

            <p className="border-l-4 border-white/20 pl-4 sm:pl-6">
              Under the leadership of <strong>Chairman Dr. Moses O. Bodunrin</strong> and <strong>Vice Chairman Mrs. Deborah O. Bodunrin</strong>, and driven day-to-day by <strong>General Manager Mrs. Peju Adekunle</strong>, Imole 106.3FM is more than a radio station — it is a movement to bring light to every home, every ward, and every heart it reaches.
            </p>

            <p className="border-l-4 border-brand-yellow pl-4 sm:pl-6 text-gray-300">
              From news and lifestyle to faith-driven programming and civic engagement, Imole 106.3FM stands as a trusted companion for the people of Lagos — indigenous in spirit, urban in sound, and unwavering in its mission to shine.
            </p>
          </div>
        </div>

        {/* Core Pillars (INFORM • INSPIRE • ILLUMINATE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATION_INFO.pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-background-card p-6 sm:p-8 rounded-3xl border border-border hover:border-brand-yellow/50 transition-all shadow-card group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-black font-black flex items-center justify-center mb-4 text-lg font-display shadow-glow-yellow group-hover:scale-105 transition-transform">
                0{i + 1}
              </div>
              <h3 className="text-xl font-black text-white uppercase font-display tracking-tight mb-2 group-hover:text-brand-yellow transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Executive Leadership Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-brand-yellow text-black text-xs font-black uppercase tracking-wider">
              EXECUTIVE LEADERSHIP
            </span>
            <div className="flex-1 border-b border-dashed border-brand-yellow/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {STATION_INFO.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="bg-[#141416] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col group hover:border-brand-yellow/40 transition-all"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent" />

                  {/* Role Tag Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider">
                    {leader.role}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase font-display tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-brand-yellow font-bold mt-0.5 mb-2">
                      {leader.title}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WIDGET 1: WEEKLY SCHEDULE WIDGET                                       */}
      {/* ========================================================================= */}
      <section id="schedule" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        {/* Header */}
        <div className="border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
              <Calendar className="w-4 h-4" />
              <span>Broadcast Program Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Weekly Radio Schedule
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
              All times are broadcast in West Africa Time (WAT). Tune in live on 106.3 FM or our high-definition digital streams.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-brand-yellow font-bold bg-brand-yellow/10 px-3 py-1.5 rounded-lg border border-brand-yellow/20">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              Live Feed Active
            </span>
          </div>
        </div>

        {/* Schedule Component */}
        <div className="bg-background-card/50 rounded-3xl p-4 sm:p-8 border border-white/5 shadow-2xl">
          <Schedule defaultDay="monday" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WIDGET 2: VIDEOS ARCHIVE WIDGET                                        */}
      {/* ========================================================================= */}
      <section id="videos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
            <Tv className="w-4 h-4" />
            <span>Imole Visual Broadcast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Video Archive & Studio Live
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
            Stream full HD studio DJ sets, artist freestyle battles, live acoustic jam sessions, and aftermovies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="overflow-x-auto pb-1">
          <Tabs
            tabs={videoCategories}
            activeTab={selectedVideoCategory}
            onChange={setSelectedVideoCategory}
            variant="pills"
          />
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={(vid) => setSelectedVideo(vid)}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WIDGET 3: EVENTS & CONCERTS WIDGET                                     */}
      {/* ========================================================================= */}
      <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
            <Calendar className="w-4 h-4" />
            <span>Station Calendar & Live Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Imole Live Events & Festivals
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
            Concerts, club nights, summer festivals and free live breakfast broadcasts powered by Imole 106.3 FM.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="overflow-x-auto pb-1">
          <Tabs
            tabs={eventTabs}
            activeTab={activeEventsTab}
            onChange={(id) => setActiveEventsTab(id as 'upcoming' | 'past')}
            variant="pills"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WIDGET 4: PROMOTE & ADVERTISE WIDGET                                   */}
      {/* ========================================================================= */}
      <section id="promote" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/15 text-brand-yellow text-xs font-black uppercase tracking-widest border border-brand-yellow/30">
            <Megaphone className="w-3.5 h-3.5" />
            <span>Commercial & Media Partnerships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Amplify Your Brand on Imole 106.3 FM
          </h2>

          <p className="text-base text-gray-300">
            Connect with an energized, trend-conscious urban audience through broadcast radio commercials, digital streaming sponsorships, and major music festivals.
          </p>
        </div>

        {/* Audience Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {audienceStats.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-background-card border border-border text-center shadow-card"
            >
              <h3 className="text-3xl sm:text-4xl font-black text-brand-yellow mb-1 font-mono">
                {st.value}
              </h3>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                {st.label}
              </p>
            </div>
          ))}
        </div>

        {/* Advertising Packages Grid */}
        <div>
          <h3 className="text-2xl font-black text-white text-center mb-8">
            Advertising & Sponsorship Opportunities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advertisingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-background-card border border-border hover:border-brand-yellow/50 transition-all flex flex-col justify-between shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30">
                      {pkg.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-white mb-2">
                    {pkg.name}
                  </h4>

                  <p className="text-xs text-gray-400 mb-6">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-3 text-xs text-gray-300">
                    {pkg.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-border">
                  <button
                    onClick={() => scrollToSection('inquiry')}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-brand-yellow hover:text-black text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Rates & Avails</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit Download & Inquiry Form */}
        <div
          id="inquiry"
          className="p-8 sm:p-12 rounded-3xl bg-background-secondary border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-24"
        >
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-black text-white">
              Download 2026 Media Kit
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Get full listener demographics, daypart coverage maps, pricing rate cards, and technical spec sheets in our official PDF media kit.
            </p>
            <button
              onClick={() => alert('Downloading Imole 106.3 FM Media Kit 2026 (PDF)...')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider shadow-glow-yellow hover:scale-105 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Media Kit (PDF)</span>
            </button>
          </div>

          <div className="lg:col-span-7 bg-background-card p-6 sm:p-8 rounded-2xl border border-border">
            {inquirySubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-brand-yellow mx-auto" />
                <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-gray-400">
                  Our sales and sponsorships team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="px-6 py-2 rounded-full bg-brand-yellow text-black font-bold text-xs uppercase tracking-wider hover:bg-brand-yellowHover transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                  confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.6 },
                    colors: ['#F5B800', '#532688', '#FFFFFF'],
                  });
                }}
                className="space-y-4"
              >
                <h4 className="text-base font-extrabold text-white">
                  Quick Advertiser Inquiry
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-3.5 py-2.5 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company / Brand"
                    className="w-full px-3.5 py-2.5 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    className="w-full px-3.5 py-2.5 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-3.5 py-2.5 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about your campaign goals, timeline, and estimated budget..."
                  className="w-full px-3.5 py-2.5 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-yellow text-black font-extrabold uppercase text-xs tracking-wider shadow-glow-yellow hover:bg-brand-yellowHover transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. VIDEO POPUP MODAL                                                      */}
      {/* ========================================================================= */}
      {selectedVideo && (
        <Modal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          title={selectedVideo.title}
          maxWidth="4xl"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
            <iframe
              src={selectedVideo.videoUrl}
              title={selectedVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
            <span>
              {selectedVideo.viewsCount} views • Published {selectedVideo.publishedAt}
            </span>
            <span className="text-brand-yellow font-bold uppercase">
              {selectedVideo.category}
            </span>
          </div>
        </Modal>
      )}
    </div>
  );
};
