import React, { useState } from 'react';
import { Megaphone, CheckCircle2, Download, Send } from 'lucide-react';

export const PromotePage: React.FC = () => {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const stats = [
    { value: '450,000+', label: 'Weekly Active FM Listeners' },
    { value: '1.2M+', label: 'Monthly Digital Audio Streams' },
    { value: '78%', label: 'Key 18-34 Urban Demographic' },
    { value: '#1', label: 'Ranked Youth Music Media in Region' },
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

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/15 text-brand-yellow text-xs font-black uppercase tracking-widest border border-brand-yellow/30">
            <Megaphone className="w-3.5 h-3.5" />
            <span>Commercial & Media Partnerships</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Amplify Your Brand on Imole 106.3 FM
          </h1>

          <p className="text-base text-gray-300">
            Connect with an energized, trend-conscious urban audience through broadcast radio commercials, digital streaming sponsorships, and major music festivals.
          </p>
        </div>

        {/* Audience Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st, i) => (
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

        {/* Packages Grid */}
        <div>
          <h2 className="text-2xl font-black text-white text-center mb-8">
            Advertising & Sponsorship Opportunities
          </h2>

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

                  <h3 className="text-xl font-extrabold text-white mb-2">
                    {pkg.name}
                  </h3>

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
                  <a
                    href="#inquiry"
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-brand-yellow hover:text-black text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Rates & Avails</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit Download & Inquiry Form */}
        <div id="inquiry" className="p-8 sm:p-12 rounded-3xl bg-background-secondary border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-black text-white">
              Download 2026 Media Kit
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Get full listener demographics, daypart coverage maps, pricing rate cards, and technical spec sheets in our official PDF media kit.
            </p>
            <button
              onClick={() => alert('Downloading Imole 106.3 FM Media Kit 2026 (PDF)...')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider shadow-glow-yellow hover:scale-105 transition-all"
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
                <p className="text-xs text-gray-400">Our sales and sponsorships team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4"
              >
                <h4 className="text-base font-extrabold text-white">Quick Advertiser Inquiry</h4>
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
                  className="w-full py-3 rounded-xl bg-brand-yellow text-black font-extrabold uppercase text-xs tracking-wider shadow-glow-yellow hover:bg-brand-yellowHover transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partnership Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
