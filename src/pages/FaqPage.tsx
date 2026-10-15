import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Mail, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/siteData';

interface FaqPageProps {
  onNavigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#094454] text-white py-16 lg:py-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#75ADB2] uppercase tracking-[1px] text-[12px] font-[800] font-outfit mb-2 block"
          >
            Got Questions?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[27px] sm:text-[36px] lg:text-[46px] font-[900] font-outfit tracking-tight leading-[1.2] mb-4 text-white"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-2xl mx-auto text-teal-100/90 text-[15px] sm:text-[16px] leading-relaxed"
          >
            Everything you need to know about our Home Care services and Pennsylvania ODP Waiver Services (In-Home & Out-of-Home Respite, HAB, CPS, Consolidated Waiver) in Allison Park & Pittsburgh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="max-w-md mx-auto mt-6"
          >
            <input
              type="text"
              placeholder="Search questions (e.g. costs, background checks, hours)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white text-slate-900 rounded-full px-5 py-3.5 text-sm focus:outline-hidden shadow-lg border border-teal-200/30"
            />
          </motion.div>
        </div>
      </section>

      {/* Accordions */}
      <section className="py-20 bg-[#F4F6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No matching questions found for "{search}". Please call us at {COMPANY_INFO.phone}.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 font-outfit text-base hover:text-[#094454] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#75ADB2]' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}

          {/* Bottom Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-12 bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-4 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#094454] font-outfit">
              Still have questions?
            </h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              Our care coordinators are always here to help guide you through care options, Medicare/Medicaid questions, and personalized scheduling.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-bold px-6 py-3 rounded-full text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <button
                onClick={() => onNavigate('/contact-us')}
                className="border border-slate-300 hover:border-[#094454] text-[#094454] font-bold px-6 py-3 rounded-full text-xs transition-colors cursor-pointer"
              >
                Send a Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
