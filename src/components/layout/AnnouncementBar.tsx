import React, { useState, useEffect } from 'react';
import { AnnouncementMetaobject } from '../../types/shopify';

export const AnnouncementBar: React.FC<{ announcements: AnnouncementMetaobject[] }> = ({ announcements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeAnnouncements = announcements.filter(a => a.active);

  useEffect(() => {
    if (activeAnnouncements.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % activeAnnouncements.length);
    }, 5000); // 5s slow controlled rotation

    return () => clearInterval(interval);
  }, [activeAnnouncements.length, isPaused]);

  if (activeAnnouncements.length === 0) return null;

  const current = activeAnnouncements[currentIndex];

  return (
    <div
      className="bg-obsidian text-warm-white text-[11px] font-display tracking-widest py-2.5 px-4 text-center select-none uppercase border-b border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Announcement Bar"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
        <span className="transition-opacity duration-500 ease-in-out">
          {current.link ? (
            <a href={current.link} className="hover:underline text-warm-white">
              {current.message}
            </a>
          ) : (
            current.message
          )}
        </span>
      </div>
    </div>
  );
};
