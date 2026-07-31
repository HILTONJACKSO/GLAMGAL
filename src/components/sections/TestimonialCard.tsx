import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface TestimonialProps {
  name: string;
  rating: number;
  testimonial: string;
  productPurchased: string;
  verified?: boolean;
}

export const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  rating,
  testimonial,
  productPurchased,
  verified = true,
}) => {
  return (
    <div className="bg-white border border-soft-stone p-6 rounded-sm space-y-4 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-obsidian text-obsidian" />
          ))}
        </div>
        <p className="text-xs text-obsidian italic leading-relaxed font-body">
          "{testimonial}"
        </p>
      </div>

      <div className="pt-4 border-t border-soft-stone/40 flex items-center justify-between">
        <div>
          <h4 className="font-display text-xs tracking-wider text-obsidian uppercase font-semibold">
            {name}
          </h4>
          <span className="text-[10px] text-warm-taupe block">Purchased: {productPurchased}</span>
        </div>
        {verified && (
          <span className="flex items-center space-x-1 text-[10px] font-display text-emerald-700 uppercase">
            <CheckCircle className="w-3 h-3" />
            <span>VERIFIED</span>
          </span>
        )}
      </div>
    </div>
  );
};
