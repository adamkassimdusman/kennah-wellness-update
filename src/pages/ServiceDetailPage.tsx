import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem, SERVICES, COMPANY_INFO } from '../data/siteData';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate }) => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string; email?: string } = {};

    if (!formName.trim()) {
      newErrors.name = 'Please enter your name';
    }
    if (!formPhone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    }
    if (formEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail)) {
      newErrors.email = 'Please enter a valid email format';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Header Banner matching original font size */}
      <section className="bg-[#094454] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-1.5 text-teal-200 hover:text-white text-[12px] font-extrabold uppercase tracking-[1px] mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[27px] sm:text-[36px] lg:text-[46px] font-[900] font-outfit tracking-tight leading-[1.2] mb-4 text-white"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-teal-100/95 text-[16px] sm:text-[20px] font-[500] leading-[1.5]"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Word-for-word Service Sections */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl overflow-hidden shadow-md aspect-16/10 bg-slate-100"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Detail Sections from the original website */}
              {service.detailSections.map((sec, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: sIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  <h2 className="text-[23px] sm:text-[30px] lg:text-[36px] font-[800] text-[#094454] font-outfit tracking-tight leading-[1.25]">
                    {sec.heading}
                  </h2>

                  {sec.subheading && (
                    <h3 className="text-[19px] sm:text-[23px] font-[800] text-[#094454] font-outfit tracking-tight pt-1">
                      {sec.subheading}
                    </h3>
                  )}

                  <div className="space-y-3.5 text-slate-700 leading-[1.6] text-[15px] sm:text-[16px]">
                    {sec.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="space-y-2.5 pt-2 pl-2">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-[#75ADB2] shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              {/* What Includes Box */}
              {service.whatIncludesTitle && service.whatIncludesBullets && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="bg-[#F4F6F0] rounded-2xl p-7 border border-slate-200 space-y-4"
                >
                  <h3 className="text-[20px] sm:text-[24px] font-[800] text-[#094454] font-outfit">
                    {service.whatIncludesTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {service.whatIncludesBullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-[14px] sm:text-[15px] text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#75ADB2] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Closing notes */}
              {service.closingText && service.closingText.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="space-y-2 text-[15px] sm:text-[16px] text-slate-700 font-medium"
                >
                  {service.closingText.map((t, idx) => (
                    <p key={idx}>{t}</p>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Right Column: In-Home Assessment Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-24"
            >
              <div className="bg-[#F4F6F0] rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs">
                <span className="text-[12px] font-[800] uppercase tracking-[1px] text-[#75ADB2] block mb-1">
                  Complimentary Consultation
                </span>
                <h3 className="text-[20px] sm:text-[24px] font-[800] text-[#094454] font-outfit mb-2">
                  Request {service.title} Assessment
                </h3>
                <p className="text-[14px] text-slate-600 mb-5 leading-[1.5]">
                  Schedule a free in-home consultation with our clinical coordinator in Allison Park, PA, or Pittsburgh.
                </p>

                {submitted ? (
                  <div className="bg-white rounded-2xl p-6 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-[18px] font-bold text-[#094454]">Consultation Requested!</h4>
                    <p className="text-[13px] text-slate-600">
                      Our coordinator will call you at <strong>{formPhone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[12px] text-[#094454] underline pt-2 cursor-pointer"
                    >
                      Request another service
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                    <div>
                      <label className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formName}
                        onChange={(e) => {
                          setFormName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-xl px-4 py-2.5 text-[15px] focus:outline-hidden focus:border-[#75ADB2]`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (1) 23 4567 891"
                        value={formPhone}
                        onChange={(e) => {
                          setFormPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full bg-white border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-xl px-4 py-2.5 text-[15px] focus:outline-hidden focus:border-[#75ADB2]`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@youremail.com"
                        value={formEmail}
                        onChange={(e) => {
                          setFormEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-xl px-4 py-2.5 text-[15px] focus:outline-hidden focus:border-[#75ADB2]`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] py-3 rounded-full text-[14px] uppercase tracking-[1px] transition-colors cursor-pointer mt-2"
                    >
                      Book Free Assessment
                    </button>
                  </form>
                )}

                <div className="mt-5 pt-4 border-t border-slate-200 text-center">
                  <span className="text-[12px] text-slate-500 block mb-1">Or call our care coordinator 24/7:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-[15px] font-[700] text-[#094454] hover:text-[#75ADB2] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#75ADB2]" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* All Services Navigation */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                <h4 className="text-[12px] font-[800] text-[#094454] uppercase tracking-[1px] border-b border-slate-100 pb-2">
                  All Home Care Services
                </h4>
                <div className="space-y-1">
                  {SERVICES.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(`/services/${item.slug}`)}
                      className={`w-full text-left py-2 px-2.5 rounded-lg text-[14px] transition-all flex items-center justify-between ${
                        item.id === service.id
                          ? 'bg-[#F4F6F0] font-bold text-[#094454]'
                          : 'text-slate-600 hover:text-[#094454] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
