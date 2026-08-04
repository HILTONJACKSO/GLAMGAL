import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsletterSchema } from '../../lib/validation/schemas';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

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
    <div className="bg-gradient-to-r from-obsidian via-[#1C1613] to-obsidian rounded-2xl p-6 sm:p-10 border border-deep-charcoal shadow-xl text-warm-white max-w-7xl mx-auto my-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-2">
          <div className="flex items-center space-x-1.5 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-display text-[10px] sm:text-xs font-bold tracking-mega uppercase">
              VIP MEMBERSHIP
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl md:text-3xl tracking-widest text-warm-white uppercase font-black">
            ENTER THE WORLD OF GLAMGAL
          </h3>

          <p className="text-xs sm:text-sm text-soft-stone leading-relaxed max-w-md font-light">
            Receive new product announcements, editorial beauty tutorials, and exclusive VIP brand updates.
          </p>
        </div>

        <div className="lg:col-span-6">
          {status === 'success' ? (
            <div className="flex items-center space-x-3 p-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 rounded-xl animate-fade-in">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="font-display text-xs tracking-wider uppercase font-bold">
                WELCOME TO GLAMGAL VIP. PLEASE CHECK YOUR INBOX.
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
                  className="w-full bg-white/10 border border-white/20 focus:border-amber-400 text-warm-white placeholder:text-warm-taupe text-xs tracking-wider px-4 py-3.5 rounded-xl outline-none transition-all pr-12 font-body"
                  aria-label="Email Address for Newsletter"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-2 p-2.5 bg-amber-500 hover:bg-amber-400 text-obsidian rounded-lg transition-colors focus-visible:outline-none"
                  aria-label="Submit Newsletter Subscription"
                >
                  {status === 'loading' ? (
                    <div className="w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4 font-bold" />
                  )}
                </button>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-amber-500 cursor-pointer"
                />
                <label htmlFor="newsletter-consent" className="text-[11px] text-soft-stone leading-tight select-none">
                  I agree to receive GLAMGAL marketing updates. View our{' '}
                  <Link to="/privacy-policy" className="underline text-warm-white hover:text-amber-400">
                    Privacy Policy
                  </Link>.
                </label>
              </div>

              {status === 'error' && (
                <p className="text-xs text-rose-400 font-medium tracking-wide animate-fade-in">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

