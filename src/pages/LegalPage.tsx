import React from 'react';
import { COMPANY_INFO } from '../data/siteData';

interface LegalPageProps {
  type: 'terms' | 'privacy';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-[#094454] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#75ADB2] uppercase tracking-wider text-xs font-bold font-outfit mb-2 block">
            Legal Information
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit tracking-tight">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 leading-relaxed text-sm sm:text-base space-y-6">
          {isPrivacy ? (
            <>
              <h2 className="text-xl font-bold text-[#094454] font-outfit">1. Information We Collect</h2>
              <p>
                When you interact with Kenah Wellness Services LLC, we may collect your name, physical address, email address, telephone numbers, and where appropriate for personalized care planning, date of birth and medical history overview.
              </p>

              <h2 className="text-xl font-bold text-[#094454] font-outfit">2. How We Use Your Information</h2>
              <p>
                We use the information we collect strictly to evaluate care needs, coordinate caregivers, communicate with designated family members or healthcare proxies, and ensure compliance with healthcare safety standards.
              </p>

              <h2 className="text-xl font-bold text-[#094454] font-outfit">3. Confidentiality & Data Protection</h2>
              <p>
                We maintain strict physical, electronic, and procedural safeguards in accordance with applicable healthcare privacy and data protection standards. We never sell, rent, or trade your personal or health data to third parties.
              </p>

              <h2 className="text-xl font-bold text-[#094454] font-outfit">4. Contacting Our Privacy Officer</h2>
              <p>
                If you have questions about your personal data or wish to update your records, please contact us at {COMPANY_INFO.email} or call {COMPANY_INFO.phone}.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-[#094454] font-outfit">1. Services Provided</h2>
              <p>
                Kenah Wellness Services LLC provides non-medical home care, personal care assistance, senior companionship, respite care, and specialized supportive services across Allison Park and greater Pittsburgh, PA.
              </p>

              <h2 className="text-xl font-bold text-[#094454] font-outfit">2. Care Agreements & Scheduling</h2>
              <p>
                All services are arranged through mutually agreed-upon personalized care plans following an in-home assessment. We provide flexible schedules and 24/7 care availability with clear cancellation and modification procedures.
              </p>

              <h2 className="text-xl font-bold text-[#094454] font-outfit">3. Caregiver Standards</h2>
              <p>
                All caregivers assigned to your home are thoroughly background-checked, insured, bonded, and supervised by our clinical care coordination team.
              </p>

              <h2 className="text-xl font-bold text-[#094454] font-outfit">4. Inquiries</h2>
              <p>
                For questions regarding our service agreements, please reach out to our office at {COMPANY_INFO.address} or call {COMPANY_INFO.phone}.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
