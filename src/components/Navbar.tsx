import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Menu, X, Globe, MessageCircle, Phone } from 'lucide-react';
import { Language, PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { IMAGES } from '../data/assets';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: (prefillTreatment?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key and outside click to close dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks: { id: PageId; labelEn: string; labelAr: string }[] = [
    { id: 'home', labelEn: 'Home', labelAr: 'الرئيسية' },
    { id: 'treatments', labelEn: 'Treatments', labelAr: 'العلاجات' },
    { id: 'about', labelEn: 'About Zahn', labelAr: 'عن زان' },
    { id: 'contact', labelEn: 'Contact & Appointments', labelAr: 'التواصل والمواعيد' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-[100vw] overflow-x-hidden ${
        isScrolled
          ? 'bg-[#061413]/95 backdrop-blur-xl border-b border-[#009E96]/30 shadow-xl py-2 sm:py-2.5 text-white'
          : 'bg-transparent py-2.5 sm:py-3.5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-1.5 sm:gap-3 lg:gap-6 w-full min-w-0">
          {/* Brand Logo & Compact Responsive Title */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-1.5 sm:gap-2.5 text-left shrink-0 cursor-pointer focus:outline-none min-w-0"
            aria-label="Zahn Dental Center Home"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#009E96] shadow-sm shrink-0 bg-white ring-2 ring-[#009E96]/40">
              <img
                src={IMAGES.logo}
                alt="Zahn Dental Center Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="text-xs sm:text-base font-extrabold tracking-tight whitespace-nowrap text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-sans">
                {lang === 'ar' ? (
                  <>
                    <span>مركز زان</span>
                    <span className="hidden sm:inline"> للأسنان</span>
                  </>
                ) : (
                  <>
                    <span>Zahn</span>
                    <span className="hidden sm:inline"> Dental Center</span>
                  </>
                )}
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold whitespace-nowrap text-[#36D1C4] drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] hidden md:inline-block">
                {lang === 'ar' ? 'البحرين · أم الحصم' : 'Bahrain · Um Al Hassam'}
              </span>
            </div>
          </button>

          {/* Desktop Single-Line Navigation Links (lg:flex >= 1024px) */}
          <nav
            className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 bg-slate-950/70 p-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-lg shrink-0"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer rounded-full ${
                    isActive
                      ? 'text-white bg-[#009E96] shadow-md font-bold'
                      : 'text-stone-200 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {lang === 'ar' ? link.labelAr : link.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Action Strip (Compact and zero overflow on narrow mobile screens) */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/20 backdrop-blur-md text-white transition-all duration-200 shrink-0 cursor-pointer shadow-md"
              title={lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
            >
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#36D1C4]" />
              <span className="whitespace-nowrap font-medium">
                {lang === 'en' ? 'العربية' : 'English'}
              </span>
            </button>

            {/* Direct WhatsApp Contact Button */}
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600/80 hover:bg-emerald-600 text-white border border-emerald-400/40 backdrop-blur-md transition-all duration-200 shrink-0 shadow-md"
              title="WhatsApp Direct Contact"
              aria-label="WhatsApp Zahn Dental Center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>

            {/* Primary Appointment CTA (Compact text on small screens to fit perfectly) */}
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs md:text-sm font-bold rounded-full text-white bg-[#009E96] hover:bg-[#007D77] shadow-md transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer active:scale-95 border border-[#36D1C4]/50"
            >
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span className="whitespace-nowrap">
                {lang === 'ar' ? (
                  <>
                    <span>احجز</span>
                    <span className="hidden sm:inline"> موعدك</span>
                  </>
                ) : (
                  <>
                    <span>Book</span>
                    <span className="hidden sm:inline"> Visit</span>
                  </>
                )}
              </span>
            </button>

            {/* Hamburger Menu Toggle Button (Visible on screens < 1024px) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-slate-950/70 text-white hover:bg-slate-900 transition-colors cursor-pointer shrink-0 border border-white/10"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#36D1C4]" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Overlay Dropdown Panel (Visible when opened on screens < 1024px) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-14 sm:top-16 left-0 right-0 bg-[#0A1A19] border-b border-[#009E96]/30 shadow-2xl p-4 sm:p-6 transition-transform duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#36D1C4] px-3">
                {lang === 'ar' ? 'أقسام المركز' : 'Navigation Menu'}
              </span>

              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-base font-semibold rounded-2xl text-left cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[#009E96] text-white shadow-md'
                        : 'text-stone-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between px-3 py-1">
                  <span className="text-xs text-stone-400">
                    {lang === 'ar' ? 'اللغة / Language' : 'Language'}
                  </span>
                  <button
                    onClick={() => {
                      onToggleLang();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-white/15 text-white border border-white/20"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#36D1C4]" />
                    <span>{lang === 'en' ? 'العربية' : 'English'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${CLINIC_INFO.phone1}`}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/15 text-xs font-semibold text-stone-200 hover:bg-white/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#36D1C4]" />
                    <span>{lang === 'ar' ? 'اتصل بالعيادة' : 'Call Clinic'}</span>
                  </a>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-700/80 text-emerald-100 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-700"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-white bg-[#009E96] hover:bg-[#007D77] font-bold text-sm shadow-lg border border-[#36D1C4]/30"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'الانتقال لحجز الموعد' : 'Go to Appointment Booking'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
