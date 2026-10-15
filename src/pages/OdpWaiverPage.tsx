import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Heart,
  Users,
  Sparkles,
  MapPin,
  Calendar,
  Home,
  Compass,
  FileCheck,
  ChevronDown
} from 'lucide-react';
import {
  COMPANY_INFO,
  ODP_SERVICES,
  ODP_RESPITE_COMPARISON,
  OdpServiceItem
} from '../data/siteData';

interface OdpWaiverPageProps {
  onNavigate: (path: string) => void;
}

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const cardStagger: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const OdpWaiverPage: React.FC<OdpWaiverPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredServices =
    activeTab === 'all'
      ? ODP_SERVICES
      : ODP_SERVICES.filter((s) => s.id === activeTab);

  const odpFaqs = [
    {
      q: 'What are Pennsylvania ODP Waiver Services?',
      a: 'The Pennsylvania Office of Developmental Programs (ODP) provides Medicaid Home and Community-Based Services (HCBS) waivers designed to help individuals with intellectual disabilities, autism, and developmental differences live safely and actively in their communities instead of intermediate care facilities.'
    },
    {
      q: 'Which Pennsylvania waivers cover these services at Kenah Wellness?',
      a: 'Our services are delivered under the Consolidated Waiver, the Community Living Waiver, and the Person/Family Directed Support (P/FDS) Waiver. Eligibility is determined through your county Mental Health/Intellectual Disabilities (MH/ID) office and your Supports Coordinator (SC).'
    },
    {
      q: 'How do I choose between In-Home Respite and Out-of-Home Respite?',
      a: 'In-Home Respite is best when the individual prefers their own familiar room, toys, routines, and quiet home comforts while the primary caregiver takes a break. Out-of-Home Respite is ideal when the caregiver needs full space for travel, medical care, or house repairs, or when the individual desires socialization, recreation, and new experiences in a safe community setting.'
    },
    {
      q: 'What is the goal of Habilitation (HAB) Services?',
      a: 'Habilitation is person-centered skill acquisition. Our direct support professionals work with the individual on daily life skills—such as cooking, budgeting, personal care, household tasks, and self-advocacy—fostering autonomy, choice, and self-reliance.'
    },
    {
      q: 'How does Community Participation Support (CPS) work?',
      a: 'CPS focuses on active, inclusive community membership. Individuals are supported to explore volunteering, attend community workshops, join sports or recreational clubs, and develop natural social connections with community members.'
    },
    {
      q: 'How do we get started with Kenah Wellness Services for ODP Waiver supports?',
      a: 'Getting started is simple: click "Get Started" or call us at +1 (412) 546-1860. You can also notify your Supports Coordinator (SC) that you want to select Kenah Wellness Services LLC as your qualified provider.'
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#094454] text-white py-16 lg:py-24 overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#094454] via-[#083b49] to-[#062c37] opacity-95" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#75ADB2]/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Regulatory Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-teal-200/25 backdrop-blur-xs text-xs sm:text-sm font-semibold text-[#75ADB2] mb-4"
            >
              <FileCheck className="w-4 h-4 text-[#75ADB2]" />
              <span>Pennsylvania Office of Developmental Programs (ODP) Provider</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[28px] sm:text-[38px] lg:text-[48px] font-[900] font-outfit tracking-tight leading-[1.2] text-white mb-4"
            >
              Pennsylvania ODP Waiver Services
            </motion.h1>

            {/* Subheadline / Mission */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-teal-100/90 text-[16px] sm:text-[20px] font-[500] leading-[1.5] mb-6"
            >
              Compassionate, person-centered supports authorized under Pennsylvania’s Consolidated Waiver, Community Living Waiver, and P/FDS Waiver. Empowering independence, dignity, choice, and active community participation for individuals with intellectual and developmental disabilities.
            </motion.p>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-teal-200/90 font-medium mb-8"
            >
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#75ADB2]" /> In-Home Respite
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#75ADB2]" /> Out-of-Home Respite
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#75ADB2]" /> Habilitation (HAB)
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#75ADB2]" /> Community Participation Support (CPS)
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onNavigate('/free-quote')}
                className="bg-[#75ADB2] hover:bg-white text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg text-[15px] cursor-pointer inline-flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/contact-us')}
                className="bg-transparent hover:bg-white/10 text-white font-bold px-7 py-3.5 rounded-full border border-teal-200/50 hover:border-white transition-all duration-200 text-[15px] cursor-pointer inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-teal-200 hover:text-white font-medium text-sm transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-[#75ADB2]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PERSON-CENTERED COMMITMENT STRIP */}
      <section className="bg-[#F4F6F0] border-b border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e8f5d3] text-[#094454] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-[#094454]" />
              </div>
              <div>
                <h4 className="font-bold text-[#094454] text-sm">Dignity & Respect</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Honoring individual identity, choices, and personal privacy in every interaction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e8f5d3] text-[#094454] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#094454]" />
              </div>
              <div>
                <h4 className="font-bold text-[#094454] text-sm">Greater Independence</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Skill development that fosters autonomy in self-care, cooking, budgeting, and home routines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e8f5d3] text-[#094454] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#094454]" />
              </div>
              <div>
                <h4 className="font-bold text-[#094454] text-sm">Community Inclusion</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Meaningful participation in volunteerism, social hobbies, parks, and local cultural life.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#e8f5d3] text-[#094454] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#094454]" />
              </div>
              <div>
                <h4 className="font-bold text-[#094454] text-sm">Qualified ODP Staff</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Rigorous clearances, CPR/First Aid certification, and specialized ODP competency training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED SERVICES SHOWCASE */}
      <section id="services-breakdown" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Pennsylvania ODP Services
            </span>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[42px] font-[800] text-[#094454] font-outfit tracking-tight leading-[1.25]">
              Empowering Individuals & Supporting Families
            </h2>
            <p className="text-slate-600 text-[15px] sm:text-[17px] mt-3 leading-relaxed">
              We offer four core specialized waiver services under Pennsylvania’s Office of Developmental Programs (ODP) and the Consolidated Waiver. Each service is individually customized to align with the person’s Individual Support Plan (ISP).
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#094454] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All 4 ODP Services
              </button>
              {ODP_SERVICES.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === srv.id
                      ? 'bg-[#094454] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {srv.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Detailed Stack */}
          <div className="space-y-16">
            {filteredServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  id={service.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    {/* Media Column */}
                    <div
                      className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-100 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#094454]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-teal-300/30">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-extrabold text-[#75ADB2] tracking-wider uppercase font-outfit">
                            Service 0{index + 1}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs font-semibold text-slate-500">
                            PA ODP Consolidated Waiver
                          </span>
                        </div>

                        <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-[800] text-[#094454] font-outfit tracking-tight mb-2">
                          {service.title}
                        </h3>

                        <p className="text-teal-700 font-semibold text-sm sm:text-base mb-4">
                          {service.tagline}
                        </p>

                        <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mb-6">
                          {service.overview}
                        </p>

                        {/* Distinct Key Callout */}
                        <div className="bg-[#F4F6F0] border-l-4 border-[#75ADB2] p-4 rounded-r-xl mb-6">
                          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                            <strong className="text-[#094454] font-bold">Key Distinction: </strong>
                            {service.keyDifferenceOrFocus}
                          </p>
                        </div>

                        {/* Two Columns: Features & Goals */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 pb-6 border-t border-slate-100">
                          <div>
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                              What’s Included:
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                  <CheckCircle2 className="w-4 h-4 text-[#75ADB2] shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                              Core Goals & Outcomes:
                            </h4>
                            <ul className="space-y-2">
                              {service.goals.map((goal, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                  <Sparkles className="w-4 h-4 text-[#094454] shrink-0 mt-0.5" />
                                  <span>{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Who is it for */}
                        <div className="bg-slate-50 p-4 rounded-xl text-xs sm:text-sm text-slate-700 mb-6 border border-slate-100">
                          <strong className="text-[#094454] font-bold">Who is this for? </strong>
                          {service.whoIsItFor}
                        </div>
                      </div>

                      {/* Action Buttons Row */}
                      <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => onNavigate('/free-quote')}
                          className="bg-[#094454] hover:bg-[#75ADB2] hover:text-slate-950 text-white font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onNavigate('/contact-us')}
                          className="bg-white hover:bg-slate-50 text-[#094454] font-bold px-5 py-2.5 rounded-full border border-slate-300 text-xs sm:text-sm transition-colors cursor-pointer"
                        >
                          Contact Us
                        </button>
                        <span className="text-xs text-slate-500 ml-auto hidden sm:inline">
                          Waiver: Consolidated • Community Living • P/FDS
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CLEAR COMPARISON: IN-HOME RESPITE VS. OUT-OF-HOME RESPITE */}
      <section className="py-20 lg:py-24 bg-[#094454] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Caregiver Relief Guide
            </span>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-[800] text-white font-outfit tracking-tight">
              {ODP_RESPITE_COMPARISON.title}
            </h2>
            <p className="text-teal-100/80 text-[15px] sm:text-[16px] mt-2">
              {ODP_RESPITE_COMPARISON.subtitle}
            </p>
          </div>

          {/* Comparison Cards / Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* In-Home Respite Card */}
            <div className="bg-white/10 border border-teal-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#75ADB2] text-slate-950 flex items-center justify-center font-bold">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#75ADB2] uppercase font-bold tracking-wider">
                      Setting: Private Residence
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit">
                      In-Home Respite
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-teal-100/90 leading-relaxed mb-6">
                  Best when maintaining everyday stability is paramount. The individual stays in their own bedroom, enjoys their customary meals, and adheres to their regular bedtime schedule with zero disruption.
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  {ODP_RESPITE_COMPARISON.comparisonPoints.map((item, idx) => (
                    <div key={idx} className="border-t border-teal-800/60 pt-3">
                      <span className="font-bold text-[#75ADB2] block mb-1">{item.feature}</span>
                      <p className="text-teal-100/80">{item.inHome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-teal-800/60">
                <button
                  onClick={() => onNavigate('/free-quote')}
                  className="w-full bg-[#75ADB2] hover:bg-white text-slate-950 font-bold py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Request In-Home Respite
                </button>
              </div>
            </div>

            {/* Out-of-Home Respite Card */}
            <div className="bg-white/10 border border-teal-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-400 text-slate-950 flex items-center justify-center font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#75ADB2] uppercase font-bold tracking-wider">
                      Setting: Community / Licensed Site
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit">
                      Out-of-Home Respite
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-teal-100/90 leading-relaxed mb-6">
                  Best when family caregivers need total physical and mental separation to travel, recuperate, or handle personal emergencies, while offering the individual engaging social activities with peers.
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  {ODP_RESPITE_COMPARISON.comparisonPoints.map((item, idx) => (
                    <div key={idx} className="border-t border-teal-800/60 pt-3">
                      <span className="font-bold text-[#75ADB2] block mb-1">{item.feature}</span>
                      <p className="text-teal-100/80">{item.outOfHome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-teal-800/60">
                <button
                  onClick={() => onNavigate('/free-quote')}
                  className="w-full bg-white hover:bg-[#75ADB2] text-slate-950 font-bold py-3 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Request Out-of-Home Respite
                </button>
              </div>
            </div>
          </div>

          {/* Need help choosing banner */}
          <div className="bg-white/5 border border-teal-600/40 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <h4 className="font-bold text-white text-base mb-1 font-outfit">
              Unsure which respite option best aligns with your family’s situation?
            </h4>
            <p className="text-xs sm:text-sm text-teal-100/80 mb-4">
              Our ODP intake specialists will consult with you and your Supports Coordinator (SC) to evaluate your current waiver budget and recommend the ideal solution.
            </p>
            <button
              onClick={() => onNavigate('/contact-us')}
              className="bg-[#75ADB2] hover:bg-white text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Schedule a Respite Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. HOW TO ENROLL / GET STARTED STEP-BY-STEP */}
      <section className="py-20 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Easy Enrollment
            </span>
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
              How to Get Started with ODP Waiver Services
            </h2>
            <p className="text-slate-600 text-[15px] sm:text-[16px] mt-2">
              We guide you through every step of connecting your Pennsylvania waiver authorizations with Kenah Wellness Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Contact Us or Call',
                desc: 'Reach out to our Allison Park intake team. We discuss your loved one’s unique needs, goals, and current waiver status.'
              },
              {
                step: '02',
                title: 'Coordinate with SC',
                desc: 'Inform your county Supports Coordinator (SC) that you choose Kenah Wellness Services LLC as your designated service provider.'
              },
              {
                step: '03',
                title: 'Person-Centered Plan',
                desc: 'We review the Individual Support Plan (ISP), establish customized goals, match compatible DSP staff, and finalize scheduling.'
              },
              {
                step: '04',
                title: 'Services Begin',
                desc: 'Quality in-home respite, out-of-home respite, HAB, or CPS begins with continuous oversight, compassion, and transparent communication.'
              }
            ].map((st, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardStagger}
                className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md transition-shadow border border-slate-200/70 relative"
              >
                <div className="w-12 h-12 rounded-xl bg-[#094454] text-white flex items-center justify-center font-bold text-lg font-outfit mb-4">
                  {st.step}
                </div>
                <h4 className="font-bold text-[#094454] text-lg font-outfit mb-2">
                  {st.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {st.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('/free-quote')}
              className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] rounded-full px-8 py-3.5 text-[15px] transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
            >
              <span>Get Started with ODP Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Have Questions?
            </span>
            <h2 className="text-[23px] sm:text-[30px] lg:text-[38px] font-[800] text-[#094454] font-outfit tracking-tight">
              Pennsylvania ODP Waiver FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {odpFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-[#094454] text-base sm:text-lg font-outfit cursor-pointer hover:bg-slate-50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#75ADB2] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions banner */}
          <div className="mt-12 text-center bg-[#F4F6F0] p-6 rounded-2xl border border-slate-200/80">
            <p className="text-slate-700 text-sm sm:text-base font-medium mb-3">
              Need assistance checking your Medicaid waiver eligibility or submitting an enrollment request?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/contact-us')}
                className="bg-[#094454] hover:bg-[#75ADB2] hover:text-slate-950 text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors cursor-pointer"
              >
                Contact Our Waiver Team
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-[#094454] hover:text-[#75ADB2] font-bold text-sm transition-colors py-2"
              >
                Call: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA SECTION */}
      <section className="bg-[#094454] text-white py-16 border-t border-teal-800/80 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <span className="text-[#75ADB2] uppercase tracking-[1px] text-xs font-bold font-outfit">
            Kenah Wellness Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-[900] font-outfit tracking-tight text-white">
            “Compassionate Care. Greater Independence. Stronger Communities.”
          </h2>
          <p className="text-teal-100/90 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Kenah Wellness Services provides quality Home Care and Pennsylvania ODP Waiver Services designed to support individuals with intellectual and developmental disabilities in their homes and communities.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('/free-quote')}
              className="bg-[#75ADB2] hover:bg-white text-slate-950 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md cursor-pointer"
            >
              Get Started Today
            </button>
            <button
              onClick={() => onNavigate('/contact-us')}
              className="bg-transparent hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full border border-teal-300 text-sm sm:text-base transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
