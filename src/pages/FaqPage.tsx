import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does headless checkout work on GLAMGAL?',
      a: 'GLAMGAL custom frontend manages product discovery, shade matching, and cart experience. When you click Checkout, you are securely transferred to Shopify-hosted checkout to finish payment and order processing.',
    },
    {
      q: 'What is your complimentary shipping policy?',
      a: 'We offer complimentary express shipping on all orders over $75 within North America. Standard shipping rates apply for orders below $75.',
    },
    {
      q: 'Are GLAMGAL products clean and cruelty-free?',
      a: 'Yes. All GLAMGAL skincare and makeup formulations are 100% cruelty-free, vegan-friendly, and dermatologist tested for barrier safety.',
    },
    {
      q: 'How do I choose the correct lipstick shade?',
      a: 'Our shade selector features accurate swatches and hex codes. You can also review skin undertone recommendations on product detail pages.',
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 30-day hassle-free return window for unopened products. Contact customer care to initiate a return authorization.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">
      <SEO title="Frequently Asked Questions (FAQ)" description="Find answers about GLAMGAL shipping, returns, formulations, and checkout." />
      <Breadcrumbs items={[{ label: 'FAQS' }]} />

      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="font-display text-xs tracking-mega text-warm-taupe uppercase">HELP CENTER</span>
        <h1 className="font-display text-3xl sm:text-4xl tracking-widest text-obsidian uppercase font-bold">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-soft-stone rounded-sm p-6 space-y-2">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between font-display text-xs tracking-wider text-obsidian uppercase font-bold text-left"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <p className="text-xs text-deep-charcoal leading-relaxed pt-2 font-body animate-fade-in border-t border-soft-stone/40">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
