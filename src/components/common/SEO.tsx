import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'High-impact makeup, skincare and everyday essentials created for confident self-expression.',
  image = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  canonicalUrl,
  jsonLd,
}) => {
  useEffect(() => {
    // Title
    document.title = `${title} | GLAMGAL Beauty`;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} | GLAMGAL`);

    // Inject JSON-LD structured data if provided
    if (jsonLd) {
      const existingScript = document.getElementById('json-ld-data');
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.id = 'json-ld-data';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, image, canonicalUrl, jsonLd]);

  return null;
};
