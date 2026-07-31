import React from 'react';

export const LoadingState: React.FC<{ message?: string }> = ({ message = 'CURATING GLAMGAL EXPERIENCE...' }) => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center p-8 text-center" aria-live="polite">
      <div className="w-10 h-10 border-2 border-soft-stone border-t-obsidian rounded-full animate-spin mb-4" />
      <span className="font-display text-xs tracking-widest text-obsidian uppercase animate-pulse">
        {message}
      </span>
    </div>
  );
};
