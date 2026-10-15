import React, { useState } from 'react';
import { Briefcase, Heart, DollarSign, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface CareersPageProps {
  onNavigate: (path: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Compassionate Caregiver',
    experience: '1-3 years',
    availability: 'Full-Time',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#094454] text-white py-16 lg:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#75ADB2] uppercase tracking-wider text-xs font-bold font-outfit mb-2 block">
            Join Our Care Family
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit tracking-tight mb-4">
            Careers at Kenah Wellness Services
          </h1>
          <p className="max-w-2xl mx-auto text-teal-100/90 text-sm sm:text-base leading-relaxed">
            Want to work with us? We believe our caregivers are the heart of what we do. Make a meaningful difference every single day.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-kicker">Why Us</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#094454] font-outfit tracking-tight">
              Why You'll Love Working With Us
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              We offer more than just a job—we offer a path to personal and professional growth in a company that truly cares about you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F4F6F0] rounded-2xl p-8 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#75ADB2] text-slate-950 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#094454] font-outfit">
                Meaningful Work
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Make a real impact by providing dignity, comfort, and companionship to seniors and individuals in need across our local community.
              </p>
            </div>

            <div className="bg-[#F4F6F0] rounded-2xl p-8 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#75ADB2] text-slate-950 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#094454] font-outfit">
                Competitive Pay & Recognition
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We value your hard work and dedication with industry-competitive wages, bonus opportunities, and consistent caregiver appreciation.
              </p>
            </div>

            <div className="bg-[#F4F6F0] rounded-2xl p-8 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#75ADB2] text-slate-950 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#094454] font-outfit">
                Flexible Schedules
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need full-time, part-time, weekend shifts, or overnight assignments, we work around your life and family commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions & Application Form */}
      <section className="py-20 bg-[#F4F6F0]" id="apply">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Openings list */}
            <div className="lg:col-span-5 space-y-6">
              <span className="section-kicker">Current Openings</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#094454] font-outfit">
                Immediate Openings in Allison Park & Pittsburgh
              </h2>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#094454] font-outfit">
                      Compassionate Caregivers
                    </h3>
                    <p className="text-xs text-slate-500">Category: Caregivers • Pittsburgh, PA & Allison Park, PA</p>
                  </div>
                  <span className="bg-[#e8f5d3] text-[#094454] text-xs font-bold px-2.5 py-1 rounded-md">
                    Full Time / Part Time
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assist clients with personal care, meal preparation, companionship, and mobility support. Must have compassionate mindset and reliable transportation.
                </p>
                <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-100">
                  <p>✓ Competitive hourly wage</p>
                  <p>✓ Paid orientation and specialized training</p>
                  <p>✓ 24/7 clinical team support</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#094454] font-outfit">
                      Dementia Care Specialists
                    </h3>
                    <p className="text-xs text-slate-500">Category: Specialized Care • Allegheny County</p>
                  </div>
                  <span className="bg-[#e8f5d3] text-[#094454] text-xs font-bold px-2.5 py-1 rounded-md">
                    Flexible Shifts
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experience in memory care and cognitive stimulation is preferred. Comprehensive paid training provided.
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
              <h3 className="text-2xl font-bold text-[#094454] font-outfit mb-2">
                Apply Online Today
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Fill out the brief form below and our recruitment coordinator will contact you to discuss available shifts.
              </p>

              {submitted ? (
                <div className="bg-[#e8f5d3] rounded-2xl p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#3ca200] mx-auto" />
                  <h4 className="text-xl font-bold text-[#094454]">Application Submitted!</h4>
                  <p className="text-sm text-slate-700">
                    Thank you for applying, {formData.name}. Our recruitment specialist will review your details and call you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#094454] underline pt-3"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (412) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Position
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      >
                        <option value="Compassionate Caregiver">Compassionate Caregiver</option>
                        <option value="Dementia Care Specialist">Dementia Care Specialist</option>
                        <option value="Senior Companion">Senior Companion</option>
                        <option value="Certified Nursing Assistant (CNA)">Certified Nursing Assistant (CNA)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Availability
                      </label>
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Weekend Only">Weekend Only</option>
                        <option value="Overnights">Overnights</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Experience / Note (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your caregiving background, certifications, or why you want to join Kenah Wellness..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
