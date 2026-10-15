import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#094454] text-white overflow-hidden">
      {/* Top CTA Banner */}
      <div className="border-b border-teal-800/60 bg-[#063542]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-extrabold uppercase text-[#75ADB2] tracking-wider block mb-1 font-outfit">
                Kenah Wellness Services LLC
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-outfit tracking-tight">
                “Compassionate Care. Greater Independence. Stronger Communities.”
              </h2>
              <p className="text-teal-200/80 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Kenah Wellness Services provides quality Home Care and Pennsylvania ODP Waiver Services designed to support individuals with intellectual and developmental disabilities in their homes and communities.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('/free-quote')}
                className="bg-[#75ADB2] hover:bg-white text-slate-950 font-bold px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={() => onNavigate('/contact-us')}
                className="bg-transparent hover:bg-white/10 text-white font-bold px-6 py-3 rounded-full border border-teal-300 text-sm sm:text-base transition-all cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Newsletter */}
          <div className="space-y-5">
            <div className="bg-white/95 rounded-xl p-3 inline-block">
              <img
                src="/images/WhatsApp-Image-2025-09-30-at-19.08.44.jpeg"
                alt="Kenah Wellness Services"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            <h6 className="text-base font-bold text-white uppercase tracking-wider font-outfit">
              Subscribe to Our Newsletter
            </h6>
            <p className="text-teal-100/75 text-sm leading-relaxed">
              Receive updates on home care guidance, Pennsylvania ODP waiver resources, and caregiver support.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/10 border border-teal-600/40 focus:border-[#75ADB2] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-teal-200/50 w-full focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="bg-[#75ADB2] hover:bg-white text-slate-950 font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Thank you for subscribing!
                </p>
              )}
            </form>
          </div>

          {/* Col 2: Services & ODP Waivers */}
          <div className="space-y-4">
            <h6 className="text-base font-bold text-white uppercase tracking-wider font-outfit border-b border-teal-800/80 pb-2.5 flex items-center justify-between">
              <span>Our Services</span>
              <span className="text-[10px] text-[#75ADB2] font-semibold">Home Care & ODP</span>
            </h6>
            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 block mb-1">
                  PA ODP Waiver Supports:
                </span>
                <ul className="space-y-1.5 text-xs text-teal-100/90 pl-1">
                  <li>
                    <button
                      onClick={() => onNavigate('/odp-waiver-services#in-home-respite')}
                      className="hover:text-[#75ADB2] transition-colors text-left flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#75ADB2] shrink-0" />
                      <span>In-Home Respite</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/odp-waiver-services#out-of-home-respite')}
                      className="hover:text-[#75ADB2] transition-colors text-left flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#75ADB2] shrink-0" />
                      <span>Out-of-Home Respite</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/odp-waiver-services#habilitation-hab')}
                      className="hover:text-[#75ADB2] transition-colors text-left flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#75ADB2] shrink-0" />
                      <span>Habilitation (HAB)</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/odp-waiver-services#community-participation-support-cps')}
                      className="hover:text-[#75ADB2] transition-colors text-left flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#75ADB2] shrink-0" />
                      <span>Community Participation (CPS)</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-teal-800/40">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 block mb-1">
                  Home Care Services:
                </span>
                <ul className="space-y-1.5 text-xs text-teal-100/90 pl-1">
                  <li>
                    <button
                      onClick={() => onNavigate('/services/personal-care')}
                      className="hover:text-[#75ADB2] transition-colors text-left flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>Personal Care & Senior Care</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/services/dementia-care-support')}
                      className="hover:text-[#75ADB2] transition-colors text-left flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>Dementia Care Support</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onNavigate('/services')}
                      className="hover:text-[#75ADB2] font-semibold transition-colors text-left flex items-center gap-1.5 text-teal-200"
                    >
                      <ArrowRight className="w-3 h-3 text-[#75ADB2] shrink-0" />
                      <span>View All Home Care Services →</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h6 className="text-base font-bold text-white uppercase tracking-wider font-outfit border-b border-teal-800/80 pb-2.5">
              Contact Info
            </h6>
            <ul className="space-y-3.5 text-sm text-teal-100/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#75ADB2] shrink-0 mt-1" />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#75ADB2] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#75ADB2] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Working hours & Social */}
          <div className="space-y-4">
            <h6 className="text-base font-bold text-white uppercase tracking-wider font-outfit border-b border-teal-800/80 pb-2.5">
              Working hours
            </h6>
            <div className="space-y-2 text-sm text-teal-100/80">
              <div className="flex items-center justify-between border-b border-teal-800/40 pb-1.5">
                <span className="font-medium text-white">Mon – Fri:</span>
                <span className="text-[#75ADB2] font-semibold">{COMPANY_INFO.hours.weekdays}</span>
              </div>
              <div className="flex items-center justify-between border-b border-teal-800/40 pb-1.5">
                <span className="font-medium text-white">Saturday:</span>
                <span className="text-[#75ADB2] font-semibold">{COMPANY_INFO.hours.saturday}</span>
              </div>
              <div className="flex items-center justify-between pb-1.5">
                <span className="font-medium text-white">Sunday:</span>
                <span className="text-[#75ADB2] font-semibold">{COMPANY_INFO.hours.sunday}</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="block text-xs uppercase font-bold text-teal-300 tracking-wider mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#75ADB2] hover:text-slate-900 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#75ADB2] hover:text-slate-900 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#75ADB2] hover:text-slate-900 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#75ADB2] hover:text-slate-900 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="mt-12 pt-8 border-t border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-200/70">
          <p>© {new Date().getFullYear()} Kenah Wellness Services LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/about-us/terms-of-service')}
              className="hover:text-white transition-colors"
            >
              Terms of service
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('/about-us/privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
