import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  ShieldCheck,
  MapPin,
  Calendar,
  Sparkles,
  Heart,
  Users,
  Home,
  Compass,
  FileCheck
} from 'lucide-react';
import {
  COMPANY_INFO,
  CORE_VALUES,
  SERVICES,
  ODP_SERVICES,
  SERVICE_AREAS,
  TESTIMONIALS,
  FAQS
} from '../data/siteData';
import { BLOG_POSTS } from '../data/blogData';

interface HomePageProps {
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

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Assessment Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Personal Care',
    notes: '',
    agreed: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ open state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-[#094454] text-white overflow-hidden">
        {/* Subtle Ken-Burns background image motion */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/side-view-smiley-nurse-patient-scaled.jpg`}
            alt="Compassionate home caregiver with client"
            className="w-full h-full object-cover object-top lg:object-center opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#094454]/95 via-[#094454]/85 to-[#094454]/60" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-26 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Prominent Suggested Homepage Statement */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-[28px] sm:text-[38px] lg:text-[50px] font-[900] text-white font-outfit tracking-tight leading-[1.18]"
            >
              Compassionate Care. Greater Independence. Stronger Communities.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16px] sm:text-[20px] font-[500] text-teal-100/95 leading-[1.5]"
            >
              Kenah Wellness Services provides quality Home Care and Pennsylvania ODP Waiver Services designed to support individuals with intellectual and developmental disabilities and seniors in their homes and communities.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('/odp-waiver-services')}
                className="bg-[#75ADB2] hover:bg-white text-slate-950 font-[700] px-7 py-3.5 rounded-full transition-colors duration-200 shadow-md hover:shadow-xl text-[15px] cursor-pointer inline-flex items-center gap-2"
              >
                <span>ODP Waiver Services</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('/services')}
                className="bg-white/10 hover:bg-white text-white hover:text-slate-950 font-[700] px-7 py-3.5 rounded-full border border-teal-200/50 hover:border-white transition-all duration-200 text-[15px] cursor-pointer"
              >
                Home Care Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('/free-quote')}
                className="bg-transparent hover:bg-white/15 text-teal-100 hover:text-white font-[600] px-6 py-3.5 rounded-full border border-teal-400/30 transition-all duration-200 text-[15px] cursor-pointer"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column with entrance animation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto lg:h-[480px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/african-social-worker-taking-care-senior-woman-scaled.jpg`}
                  alt="Caregiver taking care of senior"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
              </div>
              {/* Sweet floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[#094454] text-white p-5 rounded-2xl shadow-xl max-w-xs"
              >
                <ShieldCheck className="w-8 h-8 text-[#75ADB2] shrink-0" />
                <div className="text-[12px]">
                  <p className="font-bold text-[14px]">Trusted by Families</p>
                  <p className="text-teal-200/80">Allison Park, Pittsburgh & Allegheny County</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Column with entrance animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block">
                who we are
              </span>

              <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight leading-[1.25]">
                Driven by Loyalty, Compassion & Integrity: Home Care & Pennsylvania ODP Waiver Services
              </h2>

              <p className="text-slate-600 leading-[1.6] text-[15px] sm:text-[16px]">
                With years of dedicated healthcare experience and a team guided by professional caregivers and nurses, Kenah Wellness Services is a trusted choice for families in Allison Park and the greater Pittsburgh area. We provide both premier senior home care and certified Pennsylvania Office of Developmental Programs (ODP) Waiver Services.
              </p>

              <p className="text-slate-600 leading-[1.6] text-[15px] sm:text-[16px]">
                Whether your family needs traditional senior home care, dementia support, In-Home or Out-of-Home Respite, Habilitation (HAB), or Community Participation Support (CPS), our team is fully trained and equipped to provide it. We honor the dignity, personal choice, and individuality of every person we support, creating customized plans that promote comfort, safety, independence, and active community inclusion.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('/about-us')}
                  className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] rounded-full px-7 py-3 text-[15px] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('/odp-waiver-services')}
                  className="bg-transparent hover:bg-slate-100 text-[#094454] font-[700] rounded-full px-6 py-3 text-[15px] border border-slate-300 transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>ODP Waiver Page</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES SECTION */}
      <section className="py-20 lg:py-24 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              our core values
            </span>
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
              What are our core values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardStagger}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/70 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e8f5d3] text-[#094454] group-hover:bg-[#75ADB2] group-hover:text-black transition-colors flex items-center justify-center font-bold font-outfit text-[18px] mb-5">
                    {idx + 1}
                  </div>
                  <h4 className="text-[20px] sm:text-[24px] font-[800] text-[#094454] font-outfit mb-3">
                    {val.title}
                  </h4>
                  <p className="text-slate-600 text-[15px] leading-[1.6]">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('/free-quote')}
              className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] rounded-full px-8 py-3.5 text-[15px] transition-colors cursor-pointer shadow-xs"
            >
              Free Assesment
            </motion.button>
          </div>
        </div>
      </section>

      {/* 4. OUR HOME CARE SERVICES - SUBTLE FADE-IN ENTRANCE ON VIEWPORT */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              our services
            </span>
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
              Our Home Care Services:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardStagger}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-[20px] sm:text-[24px] font-[800] text-[#094454] font-outfit group-hover:text-[#75ADB2] transition-colors mb-2.5">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-[14px] sm:text-[15px] line-clamp-3 leading-[1.6]">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate(`/services/${service.slug}`)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-[700] text-[#094454] hover:text-[#75ADB2] transition-colors group-hover:translate-x-1.5 duration-200 cursor-pointer"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick link to ODP Waiver services */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#094454] hover:text-[#75ADB2] transition-colors cursor-pointer"
            >
              <span>Explore all Home Care Services & Specialties</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. DEDICATED SECTION: PENNSYLVANIA ODP WAIVER SERVICES */}
      <section className="py-20 lg:py-28 bg-[#F4F6F0] relative overflow-hidden border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#75ADB2]/30 text-xs font-bold text-[#094454] uppercase tracking-wider mb-3">
              <FileCheck className="w-3.5 h-3.5 text-[#75ADB2]" />
              <span>Developmental Disability Services</span>
            </div>
            <h2 className="text-[24px] sm:text-[34px] lg:text-[44px] font-[800] text-[#094454] font-outfit tracking-tight leading-[1.2]">
              Pennsylvania ODP Waiver Services
            </h2>
            <p className="text-slate-600 text-[15px] sm:text-[17px] mt-3 leading-relaxed">
              Kenah Wellness Services provides specialized supports under Pennsylvania’s <strong>Office of Developmental Programs (ODP)</strong> and the <strong>Consolidated Waiver</strong>, Community Living Waiver, and P/FDS Waiver. Our person-centered care emphasizes independence, choice, dignity, community participation, and high quality of life.
            </p>
          </motion.div>

          {/* Four Distinct Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {ODP_SERVICES.map((odp, idx) => (
              <motion.div
                key={odp.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardStagger}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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

                    <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                      {odp.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#75ADB2] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate(`/odp-waiver-services#${odp.slug}`)}
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#094454] group-hover:text-white text-[#094454] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Section Action Buttons: Learn More, Contact Us, Get Started */}
          <div className="text-center flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/odp-waiver-services')}
              className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] rounded-full px-8 py-3.5 text-[15px] transition-colors cursor-pointer shadow-sm inline-flex items-center gap-2"
            >
              <span>Learn More About ODP Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/free-quote')}
              className="bg-[#094454] hover:bg-[#75ADB2] hover:text-slate-950 text-white font-[700] rounded-full px-7 py-3.5 text-[15px] transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get Started</span>
            </button>
            <button
              onClick={() => onNavigate('/contact-us')}
              className="bg-white hover:bg-slate-100 text-slate-800 font-[700] rounded-full px-7 py-3.5 text-[15px] border border-slate-300 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* 6. SERVICE AREAS - "Our services Can be Accessed here" */}
      <section className="py-20 lg:py-24 bg-[#094454] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-white font-outfit tracking-tight">
              Our services Can be Accessed here
            </h2>
            <p className="text-teal-200/80 text-[15px] sm:text-[16px] mt-2">
              Serving families throughout Allegheny, Butler, and Washington counties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_AREAS.map((col, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardStagger}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white/5 border border-teal-600/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xs hover:border-[#75ADB2] transition-colors"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-teal-700/50">
                  <MapPin className="w-5 h-5 text-[#75ADB2]" />
                  <h3 className="font-[800] text-[18px] sm:text-[20px] text-white font-outfit">
                    {col.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {col.towns.map((town) => (
                    <li
                      key={town}
                      className="text-[14px] sm:text-[15px] text-teal-100/85 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#75ADB2] shrink-0" />
                      <span>{town}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[14px] text-teal-200/80 mb-4">
              Don’t see your exact community listed? Call our care coordination desk.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#75ADB2] hover:bg-white text-slate-950 font-[700] px-6 py-3 rounded-full transition-all text-[15px] shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 lg:py-28 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Testimonials
            </span>
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
              What Families Are Saying
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {TESTIMONIALS.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardStagger}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <img
                      src={`${import.meta.env.BASE_URL}images/Google_Favicon_2025.svg_-150x150.png`}
                      alt="Google Reviews"
                      className="w-6 h-6 object-contain"
                    />
                    <div className="flex items-center text-amber-400 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 text-[15px] sm:text-[16px] italic leading-[1.6] mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="font-[800] text-[#094454] text-[15px] font-outfit">
                    {item.author}
                  </p>
                  <p className="text-[12px] text-slate-500">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('/about-us/customer-reviews')}
              className="text-[14px] font-[700] text-[#094454] hover:text-[#75ADB2] underline cursor-pointer"
            >
              View all customer reviews & stories →
            </button>
          </div>
        </div>
      </section>

      {/* 7. GET FREE ASSESSMENT ESTIMATE FORM SECTION */}
      <section className="py-20 lg:py-28 bg-white" id="free-assessment-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-[#F4F6F0] rounded-3xl p-7 sm:p-10 border border-slate-200"
            >
              <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
                Get your free estimate
              </span>
              <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight mb-6">
                Get Free Assesment
              </h2>

              {formSubmitted ? (
                <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-[20px] font-bold text-[#094454]">Thank You, {formData.name}!</h3>
                  <p className="text-slate-600 text-[14px]">
                    We have received your assessment request. A member of our clinical team will contact you within 24 hours at <strong>{formData.phone || formData.email}</strong> to arrange a free consultation.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-[12px] text-[#094454] underline pt-3 cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-[800] text-slate-700 uppercase tracking-[1px] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith "
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden focus:border-[#75ADB2]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-[800] text-slate-700 uppercase tracking-[1px] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. john@youremail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-[800] text-slate-700 uppercase tracking-[1px] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (1) 23 4567 891"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-[800] text-slate-700 uppercase tracking-[1px] mb-1.5">
                      Select
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden focus:border-[#75ADB2]"
                    >
                      <option value="Select">Select</option>
                      <option value="Personal Care">Personal Care</option>
                      <option value="Senior Care">Senior Care</option>
                      <option value="End of Life Care">End of Life Care</option>
                      <option value="Respite Care">Respite Care</option>
                      <option value="Dementia Care Support">Dementia Care Support</option>
                      <option value="Companionship">Companionship</option>
                      <option value="Specialized Support">Specialized Support</option>
                      <option value="Additional Services">Additional Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-[800] text-slate-700 uppercase tracking-[1px] mb-1.5">
                      Care Needs / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your loved one's needs, schedule preferences, or any specific requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden focus:border-[#75ADB2]"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="mt-1 accent-[#75ADB2] rounded"
                    />
                    <label htmlFor="consent" className="text-[12px] text-slate-600 leading-normal">
                      By submitting this form, you agree to the processing of your personal data in accordance with the General Data Protection Regulation and our Privacy Policy.
                    </label>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] py-3.5 rounded-full transition-all duration-200 text-[14px] uppercase tracking-[1px] cursor-pointer shadow-md"
                    >
                      Free Assesment
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Satisfaction guarantee side card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#e8f5d3] text-[#3ca200] flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-[20px] sm:text-[24px] font-[800] text-[#094454] font-outfit">
                  100% Satisfaction Guarantee
                </h3>
                <p className="text-slate-600 text-[15px] leading-[1.6]">
                  Your satisfaction is our top priority! We proudly offer a 100% Happiness Guarantee on all our clients.
                </p>
                <div className="pt-2 border-t border-slate-100 space-y-2 text-[13px] text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3ca200]" />
                    <span>No long-term contracts required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3ca200]" />
                    <span>Caregiver compatibility guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3ca200]" />
                    <span>Free in-home clinical assessments</span>
                  </div>
                </div>
              </div>

              {/* Instant Call Card */}
              <div className="bg-[#094454] rounded-3xl p-8 text-white space-y-4">
                <h4 className="font-[800] text-[18px] sm:text-[20px] font-outfit text-white">
                  Prefer to speak right now?
                </h4>
                <p className="text-[13px] text-teal-200/80 leading-relaxed">
                  Our care coordinator is on duty 24 hours a day to answer questions and schedule emergency or planned care.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#75ADB2] hover:bg-white text-slate-950 font-[700] py-3 px-5 rounded-full text-[14px] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQS SECTION - SMOOTH ACCORDION ANIMATION */}
      <section className="py-20 lg:py-28 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading & Contact sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block">
                FAQS
              </span>
              <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-[15px] leading-[1.6]">
                Here are answers to the questions families most frequently ask when exploring in-home care in Allison Park and Pittsburgh.
              </p>

              {/* Contact box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 shadow-xs">
                <h4 className="text-[18px] font-[800] text-[#094454] font-outfit">
                  Schedule a Free Consultation Contact us now!
                </h4>
                <p className="text-[13px] text-slate-600">
                  We are here to help you navigate care options and funding resources.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] py-2.5 px-5 rounded-full text-[13px] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+1(412)546-1860</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Accordion with AnimatePresence */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-3.5"
            >
              {FAQS.slice(0, 4).map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-[700] text-slate-900 font-outfit text-[16px] sm:text-[18px] hover:text-[#094454] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#75ADB2]' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 text-slate-600 text-[15px] leading-[1.6] border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FROM OUR BLOG SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
          >
            <div>
              <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
                from our blog
              </span>
              <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
                Latest Senior & Family Care Guides
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/blog')}
              className="text-[14px] font-[700] text-[#094454] hover:text-[#75ADB2] flex items-center gap-1.5 cursor-pointer"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post, idx) => (
              <motion.div
                key={post.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardStagger}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#094454]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {post.date}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-[16px] sm:text-[18px] font-[800] text-[#094454] font-outfit group-hover:text-[#75ADB2] transition-colors leading-snug mb-3">
                      {post.title}
                    </h4>
                    <p className="text-slate-600 text-[14px] line-clamp-3 leading-[1.6]">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate(`/blog/${post.slug}`)}
                      className="inline-flex items-center gap-1.5 text-[14px] font-[700] text-[#094454] group-hover:text-[#75ADB2] transition-colors cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
