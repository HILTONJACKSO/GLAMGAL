import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { contactFormSchema } from '../lib/validation/schemas';
import { Check, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    reason: 'General Enquiry',
    message: '',
    privacyConsent: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
      <SEO title="Contact GLAMGAL Customer Support" description="Reach out to our customer concierge for order support, product questions, or wholesale." />
      <Breadcrumbs items={[{ label: 'CONTACT US' }]} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">CUSTOMER CONCIERGE</span>
          <h1 className="font-display text-3xl tracking-widest text-obsidian uppercase font-bold">
            GET IN TOUCH WITH GLAMGAL
          </h1>
          <p className="text-xs text-deep-charcoal font-body leading-relaxed">
            Our beauty specialists are available Monday through Friday to assist with shade matching, order tracking, and product guidance.
          </p>

          <div className="space-y-4 pt-4 border-t border-soft-stone text-xs text-obsidian font-display uppercase">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-warm-taupe" />
              <span>CARE@GLAMGAL.COM</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-warm-taupe" />
              <span>+1 (800) 555-GLAM</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-warm-taupe" />
              <span>GLAMGAL BEAUTY HQ, NEW YORK, NY</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-white p-8 border border-soft-stone rounded-sm">
          {status === 'success' ? (
            <div className="text-center py-12 space-y-4">
              <Check className="w-12 h-12 text-obsidian mx-auto" />
              <h3 className="font-display text-lg tracking-widest text-obsidian uppercase font-bold">
                THANK YOU FOR CONTACTING GLAMGAL
              </h3>
              <p className="text-xs text-warm-taupe">
                Your message has been logged with reference #{Math.floor(Math.random() * 899999 + 100000)}. Our support team will reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-display text-[10px] tracking-widest uppercase mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-soft-stone p-3 text-xs outline-none focus:border-obsidian"
                    required
                  />
                </div>
                <div>
                  <label className="block font-display text-[10px] tracking-widest uppercase mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-soft-stone p-3 text-xs outline-none focus:border-obsidian"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-display text-[10px] tracking-widest uppercase mb-1">PHONE NUMBER (OPTIONAL)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-soft-stone p-3 text-xs outline-none focus:border-obsidian"
                  />
                </div>
                <div>
                  <label className="block font-display text-[10px] tracking-widest uppercase mb-1">SHOPIFY ORDER # (OPTIONAL)</label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full border border-soft-stone p-3 text-xs outline-none focus:border-obsidian"
                    placeholder="e.g. GG-10492"
                  />
                </div>
              </div>

              <div>
                <label className="block font-display text-[10px] tracking-widest uppercase mb-1">REASON FOR CONTACT *</label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value as any })}
                  className="w-full border border-soft-stone p-3 text-xs outline-none focus:border-obsidian bg-white"
                >
                  <option value="Product Question">Product Question</option>
                  <option value="Order Support">Order Support</option>
                  <option value="Shipping">Shipping & Delivery</option>
                  <option value="Returns">Returns & Refunds</option>
                  <option value="Wholesale">Wholesale Inquiry</option>
                  <option value="Collaboration">Creator Collaboration</option>
                  <option value="Press">Press & Media</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block font-display text-[10px] tracking-widest uppercase mb-1">MESSAGE *</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-soft-stone p-3 text-xs outline-none focus:border-obsidian font-body"
                  required
                />
              </div>

              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  id="contact-consent"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-0.5"
                  required
                />
                <label htmlFor="contact-consent" className="text-[11px] text-warm-taupe select-none">
                  I agree to the processing of my contact information in accordance with GLAMGAL's{' '}
                  <Link to="/privacy-policy" className="underline">Privacy Policy</Link>.
                </label>
              </div>

              {status === 'error' && <p className="text-xs text-red-600 font-semibold">{errorMessage}</p>}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-obsidian text-warm-white font-display text-xs tracking-[0.2em] py-4 uppercase hover:bg-black transition-colors flex items-center justify-center space-x-2"
              >
                {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>SUBMIT MESSAGE</span>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
