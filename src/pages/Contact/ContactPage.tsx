import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Radio } from 'lucide-react';
import { SocialLinks } from '../../components/ui/SocialLinks';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
    songRequest: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-border pb-6">
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
            <Radio className="w-4 h-4" />
            <span>Connect with the Airwaves</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Contact & Studio Request
          </h1>
          <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
            Send on-air song requests, voice notes, press inquiries, or general station feedback directly to our studio booth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Contact Info & Hotline Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Hotline Callout */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-yellow/20 via-background-card to-background-card border border-brand-yellow/40 shadow-card">
              <div className="flex items-center gap-2 text-brand-yellow font-black text-xs uppercase tracking-widest mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
                <span>On-Air Studio Live Line</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                +1 (800) 555-WAVE
              </h3>
              <p className="text-xs text-gray-300 mb-4">
                Lines open 24/7 during live shows for on-air calls, comedy sketches, and shoutouts.
              </p>
              <a
                href="tel:+18005559283"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider shadow-glow-yellow hover:scale-105 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Studio Now</span>
              </a>
            </div>

            {/* Station Contacts */}
            <div className="p-6 rounded-3xl bg-background-card border border-border space-y-4">
              <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-brand-yellow pl-3">
                Station Contacts
              </h4>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">General Inquiries:</strong>
                    <a href="mailto:info@wave985fm.live" className="text-gray-400 hover:text-brand-yellow">
                      info@wave985fm.live
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Radio className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Music Submissions & Demos:</strong>
                    <a href="mailto:music@wave985fm.live" className="text-gray-400 hover:text-brand-cyan">
                      music@wave985fm.live
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Main Broadcast Studio:</strong>
                    <span className="text-gray-400">
                      450 Broadcast Way, Studio Suite 10<br />Metro City, NY 10001
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <SocialLinks size="sm" variant="pills" />
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact & Song Request Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-background-card border border-border shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-yellow text-black flex items-center justify-center mx-auto shadow-glow-yellow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white">
                  Message Sent to Studio!
                </h3>
                <p className="text-sm text-gray-400 max-w-md mx-auto">
                  Thank you for reaching out to WAVE 98.5 FM. If you submitted a song request, listen closely to the upcoming hour!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Send a Message to the DJ Booth
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl text-white text-xs focus:outline-none focus:border-brand-yellow"
                    >
                      <option value="song-request">On-Air Song Request / Shoutout</option>
                      <option value="general">General Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="demo">Demo Submission</option>
                      <option value="events">Event Sponsorship</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1.5">
                      Song / Artist Request (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.songRequest}
                      onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                      placeholder="e.g. Peggy Gou - Starry Night"
                      className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-1.5">
                    Your Message / Shoutout *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message, dedication, or question here..."
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-xl text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-yellow"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-yellow text-black font-black uppercase text-xs sm:text-sm tracking-wider shadow-glow-yellow hover:bg-brand-yellowHover active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit to Studio</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
