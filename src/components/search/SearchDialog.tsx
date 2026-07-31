import React, { useEffect } from 'react';
import { PredictiveSearch } from './PredictiveSearch';
import { X } from 'lucide-react';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-obsidian/70 backdrop-blur-md transition-opacity animate-fade-in" onClick={onClose} />

      {/* Main Dialog Modal */}
      <div className="relative w-full h-full max-h-[85vh] bg-warm-white border-b border-soft-stone shadow-2xl flex flex-col animate-slide-up">
        <div className="absolute top-6 right-6 z-10">
          <button
            onClick={onClose}
            className="p-3 bg-obsidian text-warm-white rounded-full hover:bg-black transition-transform hover:scale-105"
            aria-label="Close Search Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <PredictiveSearch onClose={onClose} />
      </div>
    </div>
  );
};
