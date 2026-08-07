import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cleanAnnouncements = [
    { id: 'ann-1', message: 'BEAUTY MADE SIMPLE FOR YOU' },
    { id: 'ann-2', message: 'FIND YOUR DAILY SKINCARE ROUTINE' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cleanAnnouncements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [cleanAnnouncements.length]);

  const current = cleanAnnouncements[currentIndex];

  return (
    <div className="bg-[#8C2337] text-white py-2.5 px-4 text-center text-xs font-display tracking-[0.2em] uppercase font-bold relative z-50 select-none overflow-hidden border-b border-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? cleanAnnouncements.length - 1 : prev - 1))}
          className="p-1 hover:opacity-75 transition-opacity focus-visible:outline-none"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 flex items-center justify-center space-x-2 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="text-[11px] sm:text-xs tracking-[0.22em] font-bold">
            {current.message}
          </span>
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % cleanAnnouncements.length)}
          className="p-1 hover:opacity-75 transition-opacity focus-visible:outline-none"
          aria-label="Next announcement"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
