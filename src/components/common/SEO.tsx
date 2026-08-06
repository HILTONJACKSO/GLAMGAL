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
  description = 'GLAMGAL Editorial Hub — Your ultimate beauty resource for zero hidden ingredients, skincare education, backstage studio sessions, and real customer community looks.',
  image = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
  canonicalUrl,
  jsonLd,
}) => {
  useEffect(() => {
    const fullTitle = `${title} | GLAMGAL Editorial & Beauty Hub`;
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://meetglamgal.com');

    // Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta Description & Keywords
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', 'GLAMGAL, beauty editorial, skincare glossary, makeup tutorials, zero hidden ingredients, backstage studio, beauty magazine, clean beauty');
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // OpenGraph Meta Tags
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'GLAMGAL Editorial Hub');
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);

    // Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:site"]', 'name', 'twitter:site', '@glamgalbeauty_');
    setMetaTag('meta[name="twitter:creator"]', 'name', 'twitter:creator', '@glamgalbeauty_');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Schema.org JSON-LD Structured Data for Google Indexing
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'GLAMGAL Editorial Hub',
      url: 'https://meetglamgal.com',
      description: 'The ultimate editorial beauty & education resource with zero hidden ingredients, backstage studio sessions, and real community looks.',
      publisher: {
        '@type': 'Organization',
        name: 'GLAMGAL, LLC',
        logo: {
          '@type': 'ImageObject',
          url: 'https://meetglamgal.com/favicon.png',
        },
        sameAs: ['https://instagram.com/glamgalbeauty_'],
      },
    };

    const schemaToInject = jsonLd || defaultSchema;
    const existingScript = document.getElementById('json-ld-data');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'json-ld-data';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaToInject);
    document.head.appendChild(script);
  }, [title, description, image, canonicalUrl, jsonLd]);

  return null;
};
