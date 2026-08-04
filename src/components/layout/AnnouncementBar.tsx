import React, { useState, useEffect } from 'react';
import { AnnouncementMetaobject } from '../../types/shopify';
import { useCMS } from '../../context/CMSContext';
import { Sparkles, Tag, ChevronLeft, ChevronRight, Check, Copy } from 'lucide-react';

export const AnnouncementBar: React.FC<{ announcements: AnnouncementMetaobject[] }> = ({ announcements }) => {
  const { state } = useCMS();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Combine active announcements and active promo codes
  const activeAnnouncements = (announcements || []).filter((a) => a.active);
  const activePromos = (state?.promos || []).filter((p) => p.active);

  const items: Array<{
    id: string;
    type: 'announcement' | 'promo';
    message: string;
    code?: string;
    link?: string;
  }> = [
    ...activePromos.map((p) => {
      const discountLabel =
        p.discountType === 'percentage'
          ? `${p.discountValue}% OFF`
          : p.discountType === 'free_shipping'
          ? 'FREE SHIPPING'
          : `$${p.discountValue} OFF`;
      return {
        id: p.id,
        type: 'promo' as const,
        message: `${discountLabel} • ${p.description}`,
        code: p.code,
      };
    }),
    ...activeAnnouncements.map((a) => ({
      id: a.id,
      type: 'announcement' as const,
      message: a.message,
      link: a.link,
    })),
  ];

  // Fallback if empty
  if (items.length === 0) {
    items.push({
      id: 'default-1',
      type: 'promo',
      message: 'COMPLIMENTARY SHIPPING ON ALL ORDERS OVER $75',
      code: 'GLAMGAL2026',
    });
  }

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  const current = items[currentIndex % items.length];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div
      className="bg-gradient-to-r from-[#6B1538] via-[#A8325C] to-[#6B1538] text-white text-[11px] font-display tracking-widest py-2.5 px-4 select-none uppercase border-b border-amber-300/30 shadow-md relative z-40 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Announcement & Promotional Bar"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Arrow Control */}
        {items.length > 1 && (
          <button
            onClick={handlePrev}
            className="p-1 text-amber-200/80 hover:text-white transition-colors"
            title="Previous Promotion"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Center Promotion Content */}
        <div className="flex-1 flex items-center justify-center space-x-2 sm:space-x-3 text-center overflow-hidden px-2">
          {current.type === 'promo' ? (
            <div className="inline-flex items-center space-x-1.5 bg-amber-400 text-obsidian px-2 py-0.5 rounded-full font-bold text-[9px] tracking-mega shadow-xs flex-shrink-0">
              <Tag className="w-3 h-3 text-obsidian" />
              <span>LIMITED OFFER</span>
            </div>
          ) : (
            <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0 animate-pulse" />
          )}

          <span className="truncate font-semibold tracking-wider text-warm-white">
            {current.link ? (
              <a href={current.link} className="hover:underline text-amber-200 font-bold">
                {current.message} ↗
              </a>
            ) : (
              current.message
            )}
          </span>

          {current.code && (
            <button
              onClick={() => handleCopyCode(current.code!)}
              className="inline-flex items-center space-x-1.5 bg-white/15 hover:bg-white/30 border border-white/30 text-amber-200 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all ml-2"
              title="Click to copy promo code"
            >
              {copiedCode === current.code ? (
                <>
                  <Check className="w-3 h-3 text-emerald-300" />
                  <span className="text-emerald-300">COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>CODE: <strong className="text-white">{current.code}</strong></span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Right Arrow Control */}
        {items.length > 1 && (
          <button
            onClick={handleNext}
            className="p-1 text-amber-200/80 hover:text-white transition-colors"
            title="Next Promotion"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

