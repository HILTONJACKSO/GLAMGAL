import React, { useState } from 'react';
import { Image } from '../../types/shopify';

interface ProductGalleryProps {
  images: Image[];
  title: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImage = images[selectedIndex] || images[0];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto gap-3 max-h-[550px] scrollbar-none py-1">
          {images.map((img, idx) => (
            <button
              key={img.id || idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative flex-shrink-0 w-16 h-20 border overflow-hidden transition-all focus-visible:outline-none ${
                selectedIndex === idx
                  ? 'border-obsidian ring-1 ring-obsidian'
                  : 'border-soft-stone opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.altText || `${title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image Display Container */}
      <div className="relative flex-1 aspect-[3/4] bg-warm-white border border-soft-stone/40 overflow-hidden">
        <img
          src={currentImage.url}
          alt={currentImage.altText || title}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
        />
      </div>
    </div>
  );
};
