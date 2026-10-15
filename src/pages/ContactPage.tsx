import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState<{ [K in keyof FormFields]?: boolean }>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Email format regex matching RFC 5322 standard
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  // Phone regex accepting numbers and phone symbols
  const phoneRegex = /^[0-9()#&+\s*=\-.]+$/;

  const validateField = (name: keyof FormFields, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Your name is required.';
        if (value.trim().length < 2) return 'Please enter at least 2 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address (e.g. john@youremail.com).';
        return undefined;
      case 'phone':
        if (!value.trim()) return 'Phone number is required.';
        if (!phoneRegex.test(value.trim())) return 'Only numbers and phone characters (#, -, *, etc) are accepted.';
        if (value.replace(/\D/g, '').length < 7) return 'Please enter a complete phone number.';
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Please describe how we can help you.';
        if (value.trim().length < 5) return 'Please provide more details (at least 5 characters).';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormFields) => {
    setTouched({ ...touched, [field]: true });
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: keyof FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    // Filter out undefined errors
    const hasErrors = Object.values(newErrors).some((err) => err !== undefined);

    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });
    setErrors(newErrors);

    if (!hasErrors) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full">
      {/* Page Header with Motion */}
      <section className="bg-[#094454] text-white py-14 lg:py-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#75ADB2] uppercase tracking-[1px] text-[12px] font-[800] font-outfit mb-2 block"
          >
            Contact Kenah Wellness Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[27px] sm:text-[36px] lg:text-[46px] font-[900] font-outfit tracking-tight leading-[1.2] mb-3 text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-2xl mx-auto text-teal-100/95 text-[16px] sm:text-[20px] font-[500] leading-[1.5]"
          >
            Home Care & Pennsylvania ODP Waiver Services • Allison Park, PA & Pittsburgh Area
          </motion.p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-14 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-[#F4F6F0] rounded-3xl p-7 sm:p-9 border border-slate-200/90 space-y-6 shadow-xs">
                <h2 className="text-[23px] sm:text-[30px] lg:text-[36px] font-[800] text-[#094454] font-outfit tracking-tight leading-[1.25]">
                  Get in Touch
                </h2>

                <div className="space-y-5 text-[15px] sm:text-[16px] text-slate-700">
                  {/* Email Us */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#75ADB2] text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-[800] text-slate-900 block text-[12px] uppercase tracking-[1px] mb-0.5">
                        Email us
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-slate-800 hover:text-[#75ADB2] transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Call Us */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#75ADB2] text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-[800] text-slate-900 block text-[12px] uppercase tracking-[1px] mb-0.5">
                        Call us
                      </span>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-slate-800 font-semibold hover:text-[#75ADB2] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#75ADB2] text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-[800] text-slate-900 block text-[12px] uppercase tracking-[1px] mb-0.5">
                        Our Location
                      </span>
                      <a
                        href={COMPANY_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-[#094454] leading-relaxed block"
                      >
                        {COMPANY_INFO.address}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5 pt-3 border-t border-slate-200">
                    <div className="w-9 h-9 rounded-full bg-[#75ADB2] text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="w-full">
                      <span className="font-[800] text-slate-900 block text-[12px] uppercase tracking-[1px] mb-1">
                        Working Hours
                      </span>
                      <div className="text-[13px] sm:text-[14px] text-slate-600 space-y-1">
                        <div className="flex justify-between">
                          <span>Mon – Fri:</span>
                          <span className="font-semibold text-slate-800">Always open 24 hrs</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span className="font-semibold text-slate-800">Always open 24 hrs</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-semibold text-slate-800">Always open 24 hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24-Hour In-Home Care Banner */}
              <div className="bg-[#094454] text-white rounded-3xl p-7">
                <h3 className="font-[800] font-outfit text-[18px] sm:text-[20px] text-white mb-1">
                  24-Hour In-Home Care Near You
                </h3>
                <p className="text-[13px] text-teal-100/90 leading-relaxed">
                  Caregivers on duty 24/7 in Allison Park, Wexford, Cranberry Township, and all Pittsburgh neighborhoods.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Contact Form with HTML5 and Custom Client-Side Validation */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-[#F4F6F0] rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm"
            >
              <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
                Contact Form
              </span>
              <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight leading-[1.25] mb-6">
                Contact us Today for Any Questions
              </h2>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 border border-emerald-300 text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-[#3ca200] mx-auto" />
                  <h3 className="text-[20px] font-bold text-[#094454] font-outfit">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[14px] text-slate-700 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our care team has received your message regarding <em>"{formData.subject}"</em> and will reply to <strong>{formData.email}</strong> or call <strong>{formData.phone}</strong> promptly.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: ''
                        });
                        setTouched({});
                        setErrors({});
                      }}
                      className="text-[13px] font-semibold text-[#094454] underline hover:text-[#75ADB2] cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your name */}
                    <div>
                      <label
                        htmlFor="form-field-name_contact_form"
                        className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1"
                      >
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name_contact_form"
                        id="form-field-name_contact_form"
                        required
                        minLength={2}
                        placeholder="John Smith "
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        aria-invalid={touched.name && Boolean(errors.name)}
                        aria-describedby={touched.name && errors.name ? 'error-name' : undefined}
                        className={`w-full bg-white border ${
                          touched.name && errors.name
                            ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                            : 'border-slate-300 focus:border-[#75ADB2]'
                        } rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden transition-all`}
                      />
                      {touched.name && errors.name && (
                        <p id="error-name" className="text-[12px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="form-field-email_contact_form"
                        className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email_contact_form"
                        id="form-field-email_contact_form"
                        required
                        placeholder="e.g. john@youremail.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        aria-invalid={touched.email && Boolean(errors.email)}
                        aria-describedby={touched.email && errors.email ? 'error-email' : undefined}
                        className={`w-full bg-white border ${
                          touched.email && errors.email
                            ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                            : 'border-slate-300 focus:border-[#75ADB2]'
                        } rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden transition-all`}
                      />
                      {touched.email && errors.email && (
                        <p id="error-email" className="text-[12px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="form-field-phone_contact_form"
                        className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone_contact_form"
                        id="form-field-phone_contact_form"
                        required
                        pattern="[0-9()#&+\s*=\-.]+"
                        title="Only numbers and phone characters (#, -, *, etc) are accepted."
                        placeholder="e.g. (1) 23 4567 891"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        aria-invalid={touched.phone && Boolean(errors.phone)}
                        aria-describedby={touched.phone && errors.phone ? 'error-phone' : undefined}
                        className={`w-full bg-white border ${
                          touched.phone && errors.phone
                            ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                            : 'border-slate-300 focus:border-[#75ADB2]'
                        } rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden transition-all`}
                      />
                      {touched.phone && errors.phone && (
                        <p id="error-phone" className="text-[12px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="form-field-subject_contact_form"
                        className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject_contact_form"
                        id="form-field-subject_contact_form"
                        required
                        placeholder="e.g. Question"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        aria-invalid={touched.subject && Boolean(errors.subject)}
                        aria-describedby={touched.subject && errors.subject ? 'error-subject' : undefined}
                        className={`w-full bg-white border ${
                          touched.subject && errors.subject
                            ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                            : 'border-slate-300 focus:border-[#75ADB2]'
                        } rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden transition-all`}
                      />
                      {touched.subject && errors.subject && (
                        <p id="error-subject" className="text-[12px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* How we can help you? */}
                  <div>
                    <label
                      htmlFor="form-field-info_contact_form"
                      className="block text-[12px] font-[800] uppercase tracking-[1px] text-slate-700 mb-1"
                    >
                      How we can help you? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="info_contact_form"
                      id="form-field-info_contact_form"
                      rows={4}
                      required
                      placeholder="Type here"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      aria-invalid={touched.message && Boolean(errors.message)}
                      aria-describedby={touched.message && errors.message ? 'error-message' : undefined}
                      className={`w-full bg-white border ${
                        touched.message && errors.message
                          ? 'border-red-500 focus:border-red-500 ring-1 ring-red-500'
                          : 'border-slate-300 focus:border-[#75ADB2]'
                      } rounded-xl px-4 py-3 text-[15px] text-slate-900 focus:outline-hidden transition-all`}
                    />
                    {touched.message && errors.message && (
                      <p id="error-message" className="text-[12px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-[700] py-3.5 rounded-full text-[15px] uppercase tracking-[1px] transition-all duration-200 cursor-pointer shadow-md"
                    >
                      Talk to us
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted by Families & Google Maps Embed matching the original site */}
      <section className="py-14 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="text-[12px] font-[800] text-[#75ADB2] uppercase tracking-[1px] block mb-1">
              Our clients
            </span>
            <h2 className="text-[23px] sm:text-[30px] lg:text-[40px] font-[800] text-[#094454] font-outfit tracking-tight">
              Trusted by Families
            </h2>
          </div>

          {/* Embedded Google Maps from exact original elementor iframe */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[380px] sm:h-[450px]">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=2400%20Ansys%20Drive%20Suite%20169%20Canonsburg%2C%20PA%20%2015317%20United%20States&t=m&z=15&output=embed&iwloc=near"
              title="2400 Ansys Drive Suite 169 Canonsburg, PA 15317 United States"
              aria-label="2400 Ansys Drive Suite 169 Canonsburg, PA 15317 United States"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
