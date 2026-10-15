import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Heart, Users, Award, CheckCircle2, ArrowRight, FileCheck, Sparkles, Home, Compass } from 'lucide-react';
import { CORE_VALUES, COMPANY_INFO } from '../data/siteData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

const cardStagger: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Page Header */}
      <section className="bg-[#094454] text-white py-16 lg:py-22 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-teal-200/25 text-xs sm:text-sm font-semibold text-[#75ADB2] mb-3"
          >
            <FileCheck className="w-4 h-4 text-[#75ADB2]" />
            <span>Home Care & Pennsylvania ODP Waiver Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[28px] sm:text-[38px] lg:text-[48px] font-[900] font-outfit tracking-tight leading-[1.2] mb-4 text-white"
          >
            “Compassionate Care. Greater Independence. Stronger Communities.”
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-3xl mx-auto text-teal-100/90 text-[15px] sm:text-[18px] leading-relaxed"
          >
            Kenah Wellness Services provides quality Home Care and Pennsylvania ODP Waiver Services designed to support individuals with intellectual and developmental disabilities and seniors in Allison Park, Pittsburgh, and surrounding communities.
          </motion.p>
        </div>
      </section>

      {/* Main Story & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block">
                Who We Are
              </span>
              <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight leading-[1.25]">
                A Person-Centered Provider Offering Home Care & ODP Waiver Supports
              </h2>
              <p className="text-slate-700 leading-[1.6] text-[15px] sm:text-[16px]">
                Operated by a dedicated clinical and administrative team with years of healthcare experience, Kenah Wellness Services values the health, dignity, and autonomy of our clients above all else.
              </p>
              <p className="text-slate-700 leading-[1.6] text-[15px] sm:text-[16px]">
                We have expanded our offerings to provide both premier private-duty senior home care and certified Pennsylvania Office of Developmental Programs (ODP) Medicaid Waiver services—including In-Home Respite, Out-of-Home Respite, Habilitation (HAB), and Community Participation Support (CPS).
              </p>
              <p className="text-slate-700 leading-[1.6] text-[15px] sm:text-[16px]">
                Whether assisting an elder with daily living activities or helping an individual with developmental differences master life skills and explore community volunteerism, we adhere to a strictly person-centered philosophy rooted in dignity, choice, and respect.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/odp-waiver-services')}
                  className="bg-[#094454] hover:bg-[#75ADB2] hover:text-slate-950 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore ODP Waiver Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/contact-us')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-full text-sm transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-slate-100">
                <img
                  src="/images/african-social-worker-taking-care-senior-woman-scaled.jpg"
                  alt="Kenah Wellness caregiver with client"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expanded ODP Waiver Services Showcase */}
      <section className="py-16 bg-[#F4F6F0] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Expanded Capabilities
            </span>
            <h2 className="text-[23px] sm:text-[32px] lg:text-[38px] font-[800] text-[#094454] font-outfit tracking-tight">
              Pennsylvania ODP Waiver Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Authorized under Pennsylvania’s Consolidated Waiver, Community Living Waiver, and P/FDS Waiver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e8f5d3] text-[#094454] flex items-center justify-center font-bold mb-4">
                  <Home className="w-5 h-5 text-[#094454]" />
                </div>
                <h3 className="font-bold text-[#094454] text-lg font-outfit mb-2">
                  In-Home Respite
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Caregiver relief provided directly within the individual’s private residence, preserving familiar comfort, routines, and safety.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/odp-waiver-services#in-home-respite')}
                className="mt-4 text-xs font-bold text-[#75ADB2] hover:text-[#094454] flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e8f5d3] text-[#094454] flex items-center justify-center font-bold mb-4">
                  <Compass className="w-5 h-5 text-[#094454]" />
                </div>
                <h3 className="font-bold text-[#094454] text-lg font-outfit mb-2">
                  Out-of-Home Respite
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Supervised short-term care delivered in approved, licensed community or facility settings, giving families full rest and individuals fresh social outings.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/odp-waiver-services#out-of-home-respite')}
                className="mt-4 text-xs font-bold text-[#75ADB2] hover:text-[#094454] flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e8f5d3] text-[#094454] flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5 text-[#094454]" />
                </div>
                <h3 className="font-bold text-[#094454] text-lg font-outfit mb-2">
                  Habilitation (HAB)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Active, goal-driven skill acquisition focused on cooking, self-care, budgeting, and home management to foster maximum self-determination.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/odp-waiver-services#habilitation-hab')}
                className="mt-4 text-xs font-bold text-[#75ADB2] hover:text-[#094454] flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#e8f5d3] text-[#094454] flex items-center justify-center font-bold mb-4">
                  <Users className="w-5 h-5 text-[#094454]" />
                </div>
                <h3 className="font-bold text-[#094454] text-lg font-outfit mb-2">
                  Community Participation (CPS)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Empowering meaningful community inclusion through volunteering, civic events, recreation, and building genuine natural friendships.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/odp-waiver-services#community-participation-support-cps')}
                className="mt-4 text-xs font-bold text-[#75ADB2] hover:text-[#094454] flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Block */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4"
        >
          <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block">
            Our Purpose
          </span>
          <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit">
            Our Mission Statement
          </h2>
          <blockquote className="text-[16px] sm:text-[20px] text-slate-700 italic max-w-3xl mx-auto leading-relaxed pt-2">
            “To deliver individualized, dignified, and trustworthy home care and Pennsylvania ODP waiver services that protect independence, ensure absolute safety, nurture community connection, and provide comfort and peace of mind to every family we serve.”
          </blockquote>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={cardStagger}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 flex flex-col justify-between group shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#75ADB2] text-slate-950 flex items-center justify-center font-bold text-base mb-4 group-hover:bg-[#094454] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] font-[800] text-[#094454] font-outfit mb-3">
                    {val.title}
                  </h3>
                  <p className="text-slate-600 text-[14px] sm:text-[15px] leading-[1.6]">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kenah Wellness */}
      <section className="py-20 bg-[#094454] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] font-outfit tracking-tight text-white">
              Why Families Choose Kenah Wellness Services
            </h2>
            <p className="text-teal-200/80 text-[15px] sm:text-[16px] mt-3">
              We hold our team to the highest standards of integrity, safety, person-centered care, and clinical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-teal-600/30 p-7 rounded-2xl space-y-3 hover:border-[#75ADB2] transition-colors"
            >
              <ShieldCheck className="w-8 h-8 text-[#75ADB2]" />
              <h3 className="text-[18px] sm:text-[20px] font-[800] font-outfit text-white">Vigorously Screened Staff</h3>
              <p className="text-[13px] sm:text-[14px] text-teal-100/80 leading-relaxed">
                Background checks, child abuse clearances, CPR/First Aid credentials, and specialized ODP competency training are verified for every team member.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-teal-600/30 p-7 rounded-2xl space-y-3 hover:border-[#75ADB2] transition-colors"
            >
              <Heart className="w-8 h-8 text-[#75ADB2]" />
              <h3 className="text-[18px] sm:text-[20px] font-[800] font-outfit text-white">Person-Centered Plans</h3>
              <p className="text-[13px] sm:text-[14px] text-teal-100/80 leading-relaxed">
                Every individual has unique aspirations. We collaborate with families, physicians, and Supports Coordinators (SCs) to honor personal choice and independence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.19 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-teal-600/30 p-7 rounded-2xl space-y-3 hover:border-[#75ADB2] transition-colors"
            >
              <Users className="w-8 h-8 text-[#75ADB2]" />
              <h3 className="text-[18px] sm:text-[20px] font-[800] font-outfit text-white">24/7 Dedicated Support</h3>
              <p className="text-[13px] sm:text-[14px] text-teal-100/80 leading-relaxed">
                Our care coordinators and supervisors are available around the clock. Whether you need planned respite, urgent coverage, or have questions, we are here.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 text-center flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => onNavigate('/free-quote')}
              className="bg-[#75ADB2] hover:bg-white text-slate-950 font-[700] px-8 py-3.5 rounded-full transition-all text-[15px] shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/contact-us')}
              className="bg-transparent hover:bg-white/10 text-white font-[700] px-7 py-3.5 rounded-full border border-teal-300 text-[15px] transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
