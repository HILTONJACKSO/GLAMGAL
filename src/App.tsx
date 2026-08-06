import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AnalyticsProvider } from './context/AnalyticsContext';
import { CMSProvider } from './context/CMSContext';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { SearchDialog } from './components/search/SearchDialog';
import { CookieConsent } from './components/common/CookieConsent';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { getAnnouncements } from './lib/shopify';
import { AnnouncementMetaobject } from './types/shopify';

// Pages
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SearchPage } from './pages/SearchPage';
import { ConcernsPage } from './pages/ConcernsPage';
import { RoutinesPage } from './pages/RoutinesPage';
import { RoutineDetailPage } from './pages/RoutineDetailPage';
import { AboutPage } from './pages/AboutPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { IngredientsPage } from './pages/IngredientsPage';
import { JournalPage } from './pages/JournalPage';
import { JournalArticlePage } from './pages/JournalArticlePage';
import { BehindTheStudioPage } from './pages/BehindTheStudioPage';
import { VirtualVanityPage } from './pages/VirtualVanityPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll To Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementMetaobject[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAnnouncements();
        setAnnouncements(data);
      } catch (err) {
        console.error('Announcements load error:', err);
      }
    }
    loadData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-warm-white text-obsidian font-body antialiased overflow-x-hidden">
      <ScrollToTop />
      <Header announcements={announcements} onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="flex-1">
        <Routes>
          {/* 1. Home */}
          <Route path="/" element={<HomePage />} />

          {/* 2-8. Fixed Collections */}
          <Route path="/collections/all" element={<CollectionPage defaultHandle="all" />} />
          <Route path="/collections/skincare" element={<CollectionPage defaultHandle="skincare" />} />
          <Route path="/collections/makeup" element={<CollectionPage defaultHandle="makeup" />} />
          <Route path="/collections/body-care" element={<CollectionPage defaultHandle="body-care" />} />
          <Route path="/collections/beauty-tools" element={<CollectionPage defaultHandle="beauty-tools" />} />
          <Route path="/collections/new-arrivals" element={<CollectionPage defaultHandle="new-arrivals" />} />
          <Route path="/collections/best-sellers" element={<CollectionPage defaultHandle="best-sellers" />} />

          {/* 9. Dynamic Collection */}
          <Route path="/collections/:handle" element={<CollectionPage />} />

          {/* 10. Product Detail */}
          <Route path="/products/:handle" element={<ProductDetailPage />} />

          {/* 11. Search */}
          <Route path="/search" element={<SearchPage />} />

          {/* 12. Skin Concerns */}
          <Route path="/concerns" element={<ConcernsPage />} />

          {/* 13-14. Beauty Routines */}
          <Route path="/routines" element={<RoutinesPage />} />
          <Route path="/routines/:handle" element={<RoutineDetailPage />} />

          {/* 15-17. Brand & Education */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/behind-the-scenes" element={<BehindTheStudioPage />} />
          <Route path="/virtual-vanity" element={<VirtualVanityPage />} />

          {/* 18-19. Journal */}
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:handle" element={<JournalArticlePage />} />

          {/* 20-21. Support */}
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 22-26. Configurable Legal Pages */}
          <Route
            path="/shipping-and-delivery"
            element={
              <LegalPage
                title="Shipping & Delivery Policy"
                category="Customer Care"
                contentHtml="<p>We offer complimentary standard shipping on all North American orders over $75. Orders placed before 12 PM EST are dispatched same business day.</p><h2>Delivery Timelines</h2><p>Standard delivery: 3–5 business days. Express overnight: 1 business day.</p>"
              />
            }
          />
          <Route
            path="/returns-and-refunds"
            element={
              <LegalPage
                title="Returns & Refunds Policy"
                category="Customer Care"
                contentHtml="<p>We accept returns of unopened items within 30 days of purchase for a full refund to your original payment method.</p>"
              />
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <LegalPage
                title="Privacy Policy"
                category="Legal"
                contentHtml="<p>GLAMGAL respects your personal privacy. We process customer data strictly to fulfill orders and personalize your storefront experience.</p>"
              />
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <LegalPage
                title="Terms & Conditions"
                category="Legal"
                contentHtml="<p>By using the GLAMGAL website, you agree to comply with our online store terms and conditions.</p>"
              />
            }
          />
          <Route
            path="/cookie-policy"
            element={
              <LegalPage
                title="Cookie Policy"
                category="Legal"
                contentHtml="<p>This policy details how GLAMGAL uses cookies and tracking technologies to maintain security, cart sessions, and performance analytics.</p>"
              />
            }
          />
          <Route
            path="/accessibility"
            element={
              <LegalPage
                title="Accessibility Statement"
                category="Legal"
                contentHtml="<p>GLAMGAL is committed to ensuring digital accessibility for people with disabilities. We target WCAG 2.2 AA standards across all page templates.</p>"
              />
            }
          />

          {/* 27. Cart Page */}
          <Route path="/cart" element={<CartPage />} />

          {/* Admin Dashboard & Login Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />

          {/* 404 Catch All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CookieConsent />
    </div>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <CMSProvider>
        <AnalyticsProvider>
          <CartProvider>
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </CartProvider>
        </AnalyticsProvider>
      </CMSProvider>
    </ErrorBoundary>
  );
}

export default App;
