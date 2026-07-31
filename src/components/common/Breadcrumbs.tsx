import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs font-medium tracking-wider text-warm-taupe uppercase">
        <li>
          <Link to="/" className="hover:text-obsidian transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-3 h-3 text-soft-stone" />
            {item.href ? (
              <Link to={item.href} className="hover:text-obsidian transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-obsidian font-semibold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
