import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('glamgal_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('glamgal_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('glamgal_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 bg-obsidian text-warm-white p-6 border border-warm-taupe/30 shadow-2xl rounded-sm transition-all duration-300">
      <h4 className="font-display text-sm tracking-wider uppercase mb-2">PRIVACY & COOKIES</h4>
      <p className="text-xs text-soft-stone leading-relaxed mb-4">
        GLAMGAL uses essential cookies to enable secure shopping, personalize content, and analyze performance. Review our{' '}
        <Link to="/privacy-policy" className="underline hover:text-warm-white">
          Privacy Policy
        </Link>{' '}
        for details.
      </p>
      <div className="flex items-center space-x-3">
        <button
          onClick={handleAccept}
          className="flex-1 bg-warm-white text-obsidian font-display text-xs tracking-widest py-2.5 px-4 uppercase hover:bg-white transition-colors"
        >
          ACCEPT ALL
        </button>
        <button
          onClick={handleDecline}
          className="bg-transparent border border-soft-stone text-soft-stone font-display text-xs tracking-widest py-2.5 px-4 uppercase hover:text-warm-white hover:border-warm-white transition-colors"
        >
          ESSENTIAL ONLY
        </button>
      </div>
    </div>
  );
};
