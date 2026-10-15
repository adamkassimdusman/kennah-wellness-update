import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Phone, Calendar, Clock, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES, ODP_SERVICES } from '../data/siteData';

interface FreeAssessmentPageProps {
  onNavigate: (path: string) => void;
}

export const FreeAssessmentPage: React.FC<FreeAssessmentPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    patientType: 'new',
    service: 'Personal Care',
    fullName: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    city: 'Allison Park',
    state: 'Pennsylvania',
    zip: '15101',
    scheduleNeeds: 'Weekdays daytime',
    notes: '',
    agreed: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phone && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#094454] text-white py-16 lg:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#75ADB2] uppercase tracking-wider text-xs font-bold font-outfit mb-2 block">
            Complimentary Consultation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit tracking-tight mb-4">
            Request Free Assessment
          </h1>
          <p className="max-w-2xl mx-auto text-teal-100/90 text-sm sm:text-base leading-relaxed">
            Take the first step toward compassionate, dependable home care. Our clinical team is ready to listen, guide you, and provide the support your family deserves.
          </p>
        </div>
      </section>

      {/* Main Assessment Form */}
      <section className="py-20 bg-[#F4F6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e8f5d3] text-[#3ca200] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#094454] font-outfit">
                  Assessment Request Received!
                </h2>
                <p className="text-slate-600 max-w-lg mx-auto text-sm leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our care coordinator will contact you at <strong>{formData.phone}</strong> within 24 hours to schedule your free in-home assessment.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-kenah-outline text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Submit another assessment request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Patient Status */}
                <div>
                  <h3 className="text-base font-bold text-[#094454] uppercase tracking-wider font-outfit mb-3">
                    1. Patient Status
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.patientType === 'new' ? 'border-[#75ADB2] bg-[#F4F6F0]' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input
                        type="radio"
                        name="patientType"
                        value="new"
                        checked={formData.patientType === 'new'}
                        onChange={() => setFormData({ ...formData, patientType: 'new' })}
                        className="accent-[#75ADB2]"
                      />
                      <span className="text-sm font-semibold text-slate-800">I am a new patient</span>
                    </label>

                    <label className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.patientType === 'returning' ? 'border-[#75ADB2] bg-[#F4F6F0]' : 'border-slate-200 hover:border-slate-300'}`}>
                      <input
                        type="radio"
                        name="patientType"
                        value="returning"
                        checked={formData.patientType === 'returning'}
                        onChange={() => setFormData({ ...formData, patientType: 'returning' })}
                        className="accent-[#75ADB2]"
                      />
                      <span className="text-sm font-semibold text-slate-800">I am a returning client / family</span>
                    </label>
                  </div>
                </div>

                {/* 2. Service Selection */}
                <div>
                  <h3 className="text-base font-bold text-[#094454] uppercase tracking-wider font-outfit mb-3">
                    2. Primary Service Needed
                  </h3>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                  >
                    <optgroup label="Pennsylvania ODP Waiver Services">
                      {ODP_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Home Care Services">
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* 3. Contact & Patient Details */}
                <div>
                  <h3 className="text-base font-bold text-[#094454] uppercase tracking-wider font-outfit mb-3">
                    3. Contact Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Patient Date of Birth (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
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

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Location Details */}
                <div>
                  <h3 className="text-base font-bold text-[#094454] uppercase tracking-wider font-outfit mb-3">
                    4. Home Address & Community
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Street Address
                      </label>
                      <input
                        type="text"
                        placeholder="123 Main Street"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        City / Town
                      </label>
                      <input
                        type="text"
                        placeholder="Allison Park"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Schedule & Notes */}
                <div>
                  <h3 className="text-base font-bold text-[#094454] uppercase tracking-wider font-outfit mb-3">
                    5. Care Needs & Schedule
                  </h3>
                  <textarea
                    rows={3}
                    placeholder="Describe any medical conditions, mobility challenges, or preferred times for caregivers..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                  />
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200">
                  <input
                    type="checkbox"
                    id="consent-free"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 accent-[#75ADB2]"
                  />
                  <label htmlFor="consent-free" className="text-xs text-slate-600 leading-normal">
                    By submitting this form, you agree to the processing of your personal data in accordance with the General Data Protection Regulation and our Privacy Policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-bold py-4 rounded-full text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
                >
                  Submit Free Assessment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
