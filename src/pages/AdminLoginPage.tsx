import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { SEO } from '../components/common/SEO';
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, state } = useCMS();
  const navigate = useNavigate();

  // If already logged in, redirect directly to dashboard
  if (state.isAuthenticated) {
    navigate('/admin');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(email, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid admin credentials. Use admin@glamgal.com or click Demo Auto-Fill below.');
    }
  };

  const handleDemoFill = () => {
    setEmail('admin@glamgal.com');
    setPassword('glamgal2026');
    setError('');
  };

  return (
    <div className="min-h-screen bg-obsidian text-warm-white flex items-center justify-center p-6 relative overflow-hidden">
      <SEO title="Admin Login — GLAMGAL Dashboard" description="Secure login portal for GLAMGAL storefront CMS & section management." />

      {/* Luxury Ambient Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B89275]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-[#141414] rounded-[28px] p-8 sm:p-10 border border-deep-charcoal shadow-2xl relative z-10 space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-deep-charcoal border border-[#B89275]/40 text-[#B89275] mb-2">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <span className="font-display text-[10px] tracking-mega text-[#B89275] uppercase block font-semibold">
            GLAMGAL CONTROL CENTER
          </span>

          <h1 className="font-display text-2xl sm:text-3xl tracking-widest text-warm-white uppercase font-black">
            ADMIN DASHBOARD
          </h1>

          <p className="text-xs text-soft-stone font-body">
            Manage site sections, pages, hero banners, product text & media uploads.
          </p>
        </div>

        {/* Form Error Message */}
        {error && (
          <div className="bg-red-950/60 border border-red-800 text-red-200 text-xs p-3.5 rounded-xl text-center font-body">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
              ADMIN EMAIL ADDRESS
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-warm-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@glamgal.com"
                required
                className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs pl-10 pr-4 py-3.5 rounded-xl outline-none transition-colors font-body"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-display text-[10px] tracking-widest text-warm-taupe uppercase">
              SECRET PASSWORD
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-warm-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full bg-deep-charcoal border border-deep-charcoal focus:border-[#B89275] text-warm-white text-xs pl-10 pr-4 py-3.5 rounded-xl outline-none transition-colors font-body"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-warm-white hover:bg-[#B89275] text-obsidian hover:text-white font-display text-xs tracking-[0.2em] py-4 rounded-xl uppercase transition-all duration-300 flex items-center justify-center space-x-2 font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>ENTER DASHBOARD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Quick Login Assistant */}
        <div className="pt-4 border-t border-deep-charcoal text-center space-y-3">
          <button
            type="button"
            onClick={handleDemoFill}
            className="w-full bg-deep-charcoal hover:bg-deep-charcoal/80 text-[#B89275] border border-[#B89275]/30 text-[11px] font-display tracking-wider py-2.5 px-4 rounded-xl uppercase transition-all flex items-center justify-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTO-FILL DEMO CREDENTIALS</span>
          </button>

          <span className="text-[10px] text-warm-taupe block font-body">
            Demo Credentials: <code className="text-warm-white">admin@glamgal.com</code> / <code className="text-warm-white">glamgal2026</code>
          </span>
        </div>
      </div>
    </div>
  );
};
