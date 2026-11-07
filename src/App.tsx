/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Language, PageId } from './types';
import { CLINIC_INFO } from './data/content';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<Language>('en');
  const [prefillTreatment, setPrefillTreatment] = useState<string | undefined>(undefined);

  // Sync RTL and lang attribute on document
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  // Ensure absolute URLs for social share preview cards (WhatsApp, Facebook, Twitter, iMessage)
  useEffect(() => {
    try {
      const origin = window.location.origin;
      const fullUrl = window.location.href;
      
      const ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (ogUrlMeta) ogUrlMeta.setAttribute('content', fullUrl);
      else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        meta.setAttribute('content', fullUrl);
        document.head.appendChild(meta);
      }

      const ogImgMeta = document.querySelector('meta[property="og:image"]');
      if (ogImgMeta) {
        const currentImg = ogImgMeta.getAttribute('content');
        if (currentImg && !currentImg.startsWith('http')) {
          ogImgMeta.setAttribute('content', `${origin}${currentImg}`);
        }
      }

      const twitterImgMeta = document.querySelector('meta[name="twitter:image"]');
      if (twitterImgMeta) {
        const currentImg = twitterImgMeta.getAttribute('content');
        if (currentImg && !currentImg.startsWith('http')) {
          twitterImgMeta.setAttribute('content', `${origin}${currentImg}`);
        }
      }
    } catch {
      // Ignore fallback errors
    }
  }, []);

  // Always scroll to TOP of page whenever current page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  // Direct In-Page Booking (Navigates to Contact page and scrolls to top)
  const handleOpenBooking = (treatmentId?: string) => {
    setPrefillTreatment(treatmentId);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 font-sans selection:bg-[#009E96]/20 selection:text-[#005B56] overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'treatments' && (
          <TreatmentsPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            lang={lang}
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage lang={lang} prefillTreatment={prefillTreatment} />
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Quick WhatsApp Action Button on Mobile */}
      <div className="fixed bottom-5 right-5 rtl:right-auto rtl:left-5 z-40 sm:hidden flex flex-col gap-2.5">
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl active:scale-95 transition-transform border border-emerald-400/40"
          aria-label="Direct WhatsApp message"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
