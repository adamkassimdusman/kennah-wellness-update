import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, FileCheck, Heart, Sparkles, Users } from 'lucide-react';
import { SERVICES, ODP_SERVICES, COMPANY_INFO } from '../data/siteData';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

const cardStagger: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      delay: i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedBranch, setSelectedBranch] = useState<'all' | 'homecare' | 'odp'>('all');

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Page Header */}
      <section className="bg-[#094454] text-white py-14 lg:py-20 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-teal-200/25 text-xs sm:text-sm font-semibold text-[#75ADB2] mb-3"
          >
            <FileCheck className="w-4 h-4 text-[#75ADB2]" />
            <span>Dual Service Provider: Home Care & PA ODP Waiver Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[27px] sm:text-[38px] lg:text-[48px] font-[900] font-outfit tracking-tight leading-[1.2] mb-3 text-white"
          >
            Our Care & Waiver Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-teal-100/95 text-[16px] sm:text-[20px] font-[500] leading-[1.5] mb-6"
          >
            Kenah Wellness Services provides quality Home Care and Pennsylvania ODP Waiver Services designed to support seniors and individuals with intellectual and developmental disabilities in their homes and communities.
          </motion.p>

          {/* Service Pillar Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <button
              onClick={() => setSelectedBranch('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedBranch === 'all'
                  ? 'bg-[#75ADB2] text-slate-950 shadow-md font-extrabold'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              All Services ({SERVICES.length + ODP_SERVICES.length})
            </button>
            <button
              onClick={() => setSelectedBranch('homecare')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedBranch === 'homecare'
                  ? 'bg-[#75ADB2] text-slate-950 shadow-md font-extrabold'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Home Care Services ({SERVICES.length})
            </button>
            <button
              onClick={() => setSelectedBranch('odp')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedBranch === 'odp'
                  ? 'bg-[#75ADB2] text-slate-950 shadow-md font-extrabold'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              PA ODP Waiver Services ({ODP_SERVICES.length})
            </button>
          </motion.div>
        </div>
      </section>

      {/* 1. PENNSYLVANIA ODP WAIVER SERVICES SHOWCASE */}
      {(selectedBranch === 'all' || selectedBranch === 'odp') && (
        <section className="py-16 lg:py-20 bg-[#F4F6F0] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-extrabold text-[#75ADB2] uppercase tracking-wider block font-outfit mb-1">
                  Pillar 01 • Developmental Disability Supports
                </span>
                <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-[800] text-[#094454] font-outfit tracking-tight">
                  Pennsylvania ODP Waiver Services
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
                  Authorized under Pennsylvania’s Office of Developmental Programs (ODP) and the Consolidated Waiver. Supporting dignity, choice, self-care, and community participation.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/odp-waiver-services')}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#094454] hover:text-[#75ADB2] transition-colors cursor-pointer shrink-0"
              >
                <span>Dedicated ODP Page & Comparison</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ODP_SERVICES.map((odp, idx) => (
                <motion.div
                  key={odp.id}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardStagger}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                      <img
                        src={odp.image}
                        alt={odp.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#094454]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {odp.shortTitle}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-[11px] font-extrabold uppercase text-[#75ADB2] tracking-wider block mb-1 font-outfit">
                        {odp.category}
                      </span>
                      <h3 className="text-[18px] sm:text-[20px] font-[800] text-[#094454] font-outfit group-hover:text-[#75ADB2] transition-colors mb-2">
                        {odp.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {odp.shortDesc}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                        {odp.features.slice(0, 3).map((f, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#75ADB2] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => onNavigate(`/odp-waiver-services#${odp.slug}`)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#094454] group-hover:text-white text-[#094454] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* In-Home vs Out-of-Home Respite Callout */}
            <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f5d3] text-[#094454] flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-[#094454]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#094454] text-sm sm:text-base font-outfit">
                    Looking for Respite Care? In-Home vs. Out-of-Home
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    We offer both in-home relief in the comfort of your residence and out-of-home respite in safe, structured community settings.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onNavigate('/odp-waiver-services')}
                  className="bg-[#094454] hover:bg-[#75ADB2] hover:text-slate-950 text-white font-bold px-5 py-2.5 rounded-full text-xs transition-colors cursor-pointer"
                >
                  Compare Options
                </button>
                <button
                  onClick={() => onNavigate('/contact-us')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2.5 rounded-full text-xs transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. HOME CARE SERVICES GRID */}
      {(selectedBranch === 'all' || selectedBranch === 'homecare') && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-extrabold text-[#75ADB2] uppercase tracking-wider block font-outfit mb-1">
                  Pillar 02 • Senior & Personal Assistance
                </span>
                <h2 className="text-[24px] sm:text-[32px] lg:text-[38px] font-[800] text-[#094454] font-outfit tracking-tight">
                  Our Home Care Services
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
                  Dedicated, compassionate in-home care designed for seniors and families in Allison Park and the Pittsburgh region. Available 24/7.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/free-quote')}
                className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                Free Assessment
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardStagger}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                    <div>
                      <h3 className="text-[19px] sm:text-[21px] font-[800] text-[#094454] font-outfit group-hover:text-[#75ADB2] transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-[13px] sm:text-[14px] leading-[1.6] line-clamp-3 mb-4">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-[800] text-slate-400 uppercase tracking-[1px] block mb-1">
                          Includes:
                        </span>
                        {service.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#75ADB2] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => onNavigate(`/services/${service.slug}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-[700] text-[#094454] hover:text-[#75ADB2] transition-colors cursor-pointer"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                      <button
                        onClick={() => onNavigate('/free-quote')}
                        className="text-xs bg-[#F4F6F0] hover:bg-[#75ADB2] hover:text-black font-semibold px-3 py-1.5 rounded-full text-[#094454] transition-colors cursor-pointer"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Box */}
      <section className="py-16 bg-[#F4F6F0] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-[#094454] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl"
          >
            <span className="text-[#75ADB2] uppercase tracking-[1px] text-xs font-bold font-outfit">
              Kenah Wellness Services
            </span>
            <h2 className="text-[23px] sm:text-[32px] font-[800] font-outfit text-white">
              “Compassionate Care. Greater Independence. Stronger Communities.”
            </h2>
            <p className="text-teal-100/90 text-[15px] sm:text-[16px] max-w-2xl mx-auto leading-[1.6]">
              Whether you need senior home care, In-Home or Out-of-Home Respite, Habilitation (HAB), or Community Participation Support (CPS), our team is ready to assist.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/free-quote')}
                className="bg-[#75ADB2] hover:bg-white text-slate-950 font-[700] px-7 py-3 rounded-full transition-colors text-[15px] cursor-pointer shadow-md inline-flex items-center gap-1.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/contact-us')}
                className="bg-transparent hover:bg-white/10 text-white font-[700] px-6 py-3 rounded-full border border-teal-300 text-[15px] transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 border border-teal-300/40 hover:border-white text-white font-[700] px-6 py-3 rounded-full text-[15px] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#75ADB2]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
