import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsletterSchema } from '../../lib/validation/schemas';
import { Check, ArrowRight } from 'lucide-react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const validation = newsletterSchema.safeParse({ email, consent });
    if (!validation.success) {
      setErrorMessage(validation.error.errors[0].message);
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-6 space-y-2">
        <h3 className="font-display text-lg md:text-xl tracking-widest text-warm-white uppercase">
          ENTER THE WORLD OF GLAMGAL
        </h3>
        <p className="text-xs text-soft-stone leading-relaxed max-w-md">
          Receive new product announcements, editorial beauty tutorials, and exclusive VIP brand updates.
        </p>
      </div>

      <div className="lg:col-span-6">
        {status === 'success' ? (
          <div className="flex items-center space-x-3 p-4 bg-white/10 border border-warm-taupe/30 text-warm-white animate-fade-in">
            <Check className="w-5 h-5 text-warm-white" />
            <span className="font-display text-xs tracking-wider uppercase">
              WELCOME TO GLAMGAL. PLEASE CHECK YOUR INBOX.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL ADDRESS"
                className="w-full bg-white/5 border border-deep-charcoal focus:border-warm-white text-warm-white placeholder:text-warm-taupe text-xs tracking-wider px-4 py-3.5 outline-none transition-colors pr-12 font-body"
                aria-label="Email Address for Newsletter"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 p-2 text-warm-white hover:opacity-75 focus-visible:outline-none"
                aria-label="Submit Newsletter Subscription"
              >
                {status === 'loading' ? (
                  <div className="w-4 h-4 border-2 border-warm-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="newsletter-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 accent-warm-white cursor-pointer"
              />
              <label htmlFor="newsletter-consent" className="text-[11px] text-warm-taupe leading-tight select-none">
                I agree to receive GLAMGAL marketing updates. View our{' '}
                <Link to="/privacy-policy" className="underline hover:text-warm-white">
                  Privacy Policy
                </Link>.
              </label>
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-400 font-medium tracking-wide animate-fade-in">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
