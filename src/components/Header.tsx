import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ChevronDown, Menu, X, ArrowRight, Check, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES, ODP_SERVICES } from '../data/siteData';
import { getImagePath } from '../utils/imagePath';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [odpDropdownOpen, setOdpDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileOdpOpen, setMobileOdpOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const odpDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(target)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        odpDropdownRef.current &&
        !odpDropdownRef.current.contains(target)
      ) {
        setOdpDropdownOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(target)
      ) {
        setAboutDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesDropdownOpen(false);
        setOdpDropdownOpen(false);
        setAboutDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setOdpDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesDropdownOpen((prev) => !prev);
    setOdpDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const toggleOdpDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOdpDropdownOpen((prev) => !prev);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAboutDropdownOpen((prev) => !prev);
    setServicesDropdownOpen(false);
    setOdpDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('/')}
              className="flex items-center focus:outline-hidden text-left cursor-pointer"
              aria-label="Kenah Wellness Services Home"
            >
              <img
                src={getImagePath('/images/WhatsApp-Image-2025-09-30-at-19.08.44.jpeg')}
                alt="Kenah Wellness Services"
                className="h-12 sm:h-14 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo flex flex-col';
                    fallback.innerHTML = `
                      <span class="text-xl sm:text-2xl font-black text-[#094454] tracking-tight">KENAH WELLNESS</span>
                      <span class="text-xs text-[#75ADB2] tracking-widest font-semibold uppercase">Services LLC</span>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-800">
            <button
              onClick={() => handleLinkClick('/')}
              className={`transition-colors hover:text-[#75ADB2] py-2 cursor-pointer ${
                currentPath === '/' ? 'text-[#094454] font-bold' : ''
              }`}
            >
              Home
            </button>

            {/* Services Dropdown (Click to toggle & select, or hover with gap bridge) */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={toggleServicesDropdown}
                className={`flex items-center gap-1.5 transition-colors hover:text-[#75ADB2] py-2 cursor-pointer select-none ${
                  currentPath.startsWith('/services') ? 'text-[#094454] font-bold' : ''
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#75ADB2]' : 'text-slate-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                    role="menu"
                    aria-label="Services Menu"
                  >
                    <div className="px-4 py-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Select a Service
                      </span>
                      <button
                        type="button"
                        onClick={() => handleLinkClick('/services')}
                        className={`text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer ${
                          currentPath === '/services'
                            ? 'text-[#75ADB2]'
                            : 'text-[#094454] hover:text-[#75ADB2]'
                        }`}
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="max-h-[380px] overflow-y-auto py-1">
                      {SERVICES.map((s) => {
                        const isSelected = currentPath === `/services/${s.slug}`;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => handleLinkClick(`/services/${s.slug}`)}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center justify-between group cursor-pointer ${
                              isSelected
                                ? 'bg-[#F4F6F0] text-[#094454] font-bold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-[#094454]'
                            }`}
                            role="menuitem"
                          >
                            <span className="flex items-center gap-2">
                              <span
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  isSelected
                                    ? 'bg-[#75ADB2]'
                                    : 'bg-slate-300 group-hover:bg-[#75ADB2]'
                                }`}
                              />
                              <span>{s.title}</span>
                            </span>
                            {isSelected ? (
                              <Check className="w-4 h-4 text-[#75ADB2] shrink-0" />
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-[#75ADB2] transition-opacity shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ODP Waiver Services Dropdown */}
            <div
              ref={odpDropdownRef}
              className="relative"
              onMouseEnter={() => setOdpDropdownOpen(true)}
              onMouseLeave={() => setOdpDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={toggleOdpDropdown}
                className={`flex items-center gap-1.5 transition-colors hover:text-[#75ADB2] py-2 cursor-pointer select-none ${
                  currentPath.startsWith('/odp') ? 'text-[#094454] font-bold' : ''
                }`}
                aria-expanded={odpDropdownOpen}
                aria-haspopup="true"
              >
                <span>ODP Waiver</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    odpDropdownOpen ? 'rotate-180 text-[#75ADB2]' : 'text-slate-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {odpDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 w-88 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                    role="menu"
                    aria-label="ODP Waiver Services Menu"
                  >
                    <div className="px-4 py-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                          Developmental Disability Services
                        </span>
                        <span className="text-[11px] text-teal-700 font-medium">PA Consolidated & Community Living</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleLinkClick('/odp-waiver-services')}
                        className={`text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer shrink-0 ${
                          currentPath === '/odp-waiver-services'
                            ? 'text-[#75ADB2]'
                            : 'text-[#094454] hover:text-[#75ADB2]'
                        }`}
                      >
                        All ODP <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="py-1">
                      {ODP_SERVICES.map((item) => {
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleLinkClick(`/odp-waiver-services#${item.slug}`)}
                            className="w-full text-left px-4 py-2.5 text-sm transition-all flex items-start justify-between group cursor-pointer hover:bg-slate-50"
                            role="menuitem"
                          >
                            <div className="pr-2">
                              <span className="font-bold text-[#094454] group-hover:text-[#75ADB2] transition-colors block text-[14px]">
                                {item.title}
                              </span>
                              <span className="text-xs text-slate-500 line-clamp-1">
                                {item.tagline}
                              </span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-[#75ADB2] transition-opacity shrink-0 mt-1" />
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-1 pt-2 border-t border-slate-100 px-4">
                      <button
                        type="button"
                        onClick={() => handleLinkClick('/odp-waiver-services')}
                        className="w-full py-2 px-3 rounded-xl bg-[#F4F6F0] hover:bg-[#e8f5d3] text-xs font-bold text-[#094454] flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span>In-Home vs. Out-of-Home Respite Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#094454]" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About us Dropdown (Click to toggle & select, or hover with gap bridge) */}
            <div
              ref={aboutDropdownRef}
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={toggleAboutDropdown}
                className={`flex items-center gap-1.5 transition-colors hover:text-[#75ADB2] py-2 cursor-pointer select-none ${
                  currentPath.startsWith('/about') || currentPath === '/careers'
                    ? 'text-[#094454] font-bold'
                    : ''
                }`}
                aria-expanded={aboutDropdownOpen}
                aria-haspopup="true"
              >
                <span>About us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    aboutDropdownOpen ? 'rotate-180 text-[#75ADB2]' : 'text-slate-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2.5 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                    role="menu"
                    aria-label="About Menu"
                  >
                    {[
                      { title: 'Who we are', path: '/about-us' },
                      { title: 'Careers', path: '/careers' },
                      { title: 'FAQ', path: '/about-us/faq' },
                      { title: 'Customer reviews', path: '/about-us/customer-reviews' }
                    ].map((item) => {
                      const isSelected = currentPath === item.path;
                      return (
                        <button
                          key={item.path}
                          type="button"
                          onClick={() => handleLinkClick(item.path)}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center justify-between group cursor-pointer ${
                            isSelected
                              ? 'bg-[#F4F6F0] text-[#094454] font-bold'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-[#094454]'
                          }`}
                          role="menuitem"
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full transition-colors ${
                                isSelected
                                  ? 'bg-[#75ADB2]'
                                  : 'bg-slate-300 group-hover:bg-[#75ADB2]'
                              }`}
                            />
                            <span>{item.title}</span>
                          </span>
                          {isSelected ? (
                            <Check className="w-4 h-4 text-[#75ADB2] shrink-0" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-[#75ADB2] transition-opacity shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleLinkClick('/blog')}
              className={`transition-colors hover:text-[#75ADB2] py-2 cursor-pointer ${
                currentPath.startsWith('/blog') ? 'text-[#094454] font-bold' : ''
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick('/contact-us')}
              className={`transition-colors hover:text-[#75ADB2] py-2 ${
                currentPath === '/contact-us' ? 'text-[#094454] font-bold' : ''
              }`}
            >
              Contact us
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Phone button */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:border-[#75ADB2] text-slate-800 text-sm font-semibold transition-all hover:shadow-xs group"
              title="Call Kenah Wellness"
            >
              <span className="w-8 h-8 rounded-full bg-[#75ADB2] group-hover:bg-[#094454] text-white flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4 text-slate-900 group-hover:text-white" />
              </span>
              <span className="font-outfit tracking-tight">{COMPANY_INFO.phone}</span>
            </a>

            {/* Free Assessment CTA */}
            <button
              onClick={() => handleLinkClick('/free-quote')}
              className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              Free Assesment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLinkClick('/free-quote')}
              className="sm:hidden bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white text-xs font-semibold px-3 py-2 rounded-full transition-all whitespace-nowrap"
            >
              Free Assesment
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#094454] hover:bg-slate-100 transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              <button
                type="button"
                onClick={() => handleLinkClick('/')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-colors ${
                  currentPath === '/' ? 'bg-[#F4F6F0] text-[#094454] font-bold' : 'text-slate-800'
                }`}
              >
                Home
              </button>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 cursor-pointer"
                >
                  <span className={currentPath.startsWith('/services') ? 'text-[#094454] font-bold' : ''}>
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? 'rotate-180 text-[#75ADB2]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-3 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => handleLinkClick('/services')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer ${
                          currentPath === '/services'
                            ? 'bg-white text-[#75ADB2] font-bold shadow-xs'
                            : 'text-[#094454] font-semibold hover:bg-white/60'
                        }`}
                      >
                        <span>All Services Overview</span>
                        {currentPath === '/services' && <Check className="w-3.5 h-3.5 text-[#75ADB2]" />}
                      </button>
                      {SERVICES.map((s) => {
                        const isSelected = currentPath === `/services/${s.slug}`;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => handleLinkClick(`/services/${s.slug}`)}
                            className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-white text-[#094454] font-bold shadow-xs'
                                : 'text-slate-700 hover:bg-white/60 hover:text-[#094454]'
                            }`}
                          >
                            <span>{s.title}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#75ADB2]" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile ODP Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileOdpOpen(!mobileOdpOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 cursor-pointer"
                >
                  <span className={currentPath.startsWith('/odp') ? 'text-[#094454] font-bold' : ''}>
                    ODP Waiver
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileOdpOpen ? 'rotate-180 text-[#75ADB2]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileOdpOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-3 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => handleLinkClick('/odp-waiver-services')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer ${
                          currentPath === '/odp-waiver-services'
                            ? 'bg-white text-[#75ADB2] font-bold shadow-xs'
                            : 'text-[#094454] font-semibold hover:bg-white/60'
                        }`}
                      >
                        <span>All ODP Services Overview</span>
                        {currentPath === '/odp-waiver-services' && <Check className="w-3.5 h-3.5 text-[#75ADB2]" />}
                      </button>
                      {ODP_SERVICES.map((s) => {
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => handleLinkClick(`/odp-waiver-services#${s.slug}`)}
                            className="w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer transition-colors text-slate-700 hover:bg-white/60 hover:text-[#094454]"
                          >
                            <span>{s.title}</span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile About Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 cursor-pointer"
                >
                  <span
                    className={
                      currentPath.startsWith('/about') || currentPath === '/careers'
                        ? 'text-[#094454] font-bold'
                        : ''
                    }
                  >
                    About us
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileAboutOpen ? 'rotate-180 text-[#75ADB2]' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-3 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl overflow-hidden"
                    >
                      {[
                        { title: 'Who we are', path: '/about-us' },
                        { title: 'Careers', path: '/careers' },
                        { title: 'FAQ', path: '/about-us/faq' },
                        { title: 'Customer reviews', path: '/about-us/customer-reviews' }
                      ].map((item) => {
                        const isSelected = currentPath === item.path;
                        return (
                          <button
                            key={item.path}
                            type="button"
                            onClick={() => handleLinkClick(item.path)}
                            className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-white text-[#094454] font-bold shadow-xs'
                                : 'text-slate-700 hover:bg-white/60 hover:text-[#094454]'
                            }`}
                          >
                            <span>{item.title}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#75ADB2]" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={() => handleLinkClick('/blog')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-colors ${
                  currentPath.startsWith('/blog') ? 'bg-[#F4F6F0] text-[#094454] font-bold' : 'text-slate-800'
                }`}
              >
                Blog
              </button>

              <button
                type="button"
                onClick={() => handleLinkClick('/contact-us')}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium cursor-pointer transition-colors ${
                  currentPath === '/contact-us' ? 'bg-[#F4F6F0] text-[#094454] font-bold' : 'text-slate-800'
                }`}
              >
                Contact us
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 py-3 rounded-full border border-slate-200 bg-white text-slate-900 font-semibold text-sm hover:border-[#75ADB2] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#75ADB2]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => handleLinkClick('/free-quote')}
                className="w-full bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-semibold py-3 rounded-full text-sm transition-colors text-center shadow-xs cursor-pointer"
              >
                Free Assesment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
