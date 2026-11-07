import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language, PageId } from '../types';
import { CLINIC_INFO } from '../data/content';
import { IMAGES } from '../data/assets';

interface FooterProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#121E1D] text-stone-300 pt-16 pb-12 border-t border-[#009E96]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-stone-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white shrink-0 shadow-sm">
                <img
                  src={IMAGES.logo}
                  alt="Zahn Dental Center"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {lang === 'ar' ? CLINIC_INFO.nameAr : CLINIC_INFO.nameEn}
                </h3>
                <p className="text-xs text-[#009E96] font-medium tracking-wide">
                  {lang === 'ar' ? CLINIC_INFO.sloganAr : CLINIC_INFO.sloganEn}
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed">
              {lang === 'ar'
                ? 'مركز طب وتجميل أسنان متكامل في مملكة البحرين، يقدم رعاية دقيقة وأجواء علاجية مريحة تعيد لابتسامتك بريقها الطبيعي.'
                : 'Premier dental healthcare and cosmetic center in the Kingdom of Bahrain, providing comprehensive clinical excellence and exceptional patient comfort.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800/80 hover:bg-[#009E96] text-stone-300 hover:text-white flex items-center justify-center transition-colors text-xs font-semibold"
                aria-label="Instagram @zahndental_bh"
              >
                IG
              </a>
              <a
                href={CLINIC_INFO.threadsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800/80 hover:bg-[#009E96] text-stone-300 hover:text-white flex items-center justify-center transition-colors text-xs font-semibold"
                aria-label="Threads @zahndental_bh"
              >
                TH
              </a>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#009E96]/20 hover:bg-[#009E96] text-[#009E96] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.heylinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-full bg-stone-800/80 hover:bg-[#009E96] text-stone-300 hover:text-white flex items-center gap-1 transition-colors text-xs"
                aria-label="HeyLink Hub"
              >
                <span>Heylink</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {lang === 'ar' ? 'أقسام الموقع' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#009E96] transition-colors cursor-pointer text-stone-400"
                >
                  {lang === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-[#009E96] transition-colors cursor-pointer text-stone-400"
                >
                  {lang === 'ar' ? 'العلاجات والخدمات التخصصية' : 'Dental Treatments'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#009E96] transition-colors cursor-pointer text-stone-400"
                >
                  {lang === 'ar' ? 'عن مركز زان للأسنان' : 'About Zahn Center'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#009E96] transition-colors cursor-pointer text-stone-400"
                >
                  {lang === 'ar' ? 'التواصل وحجز المواعيد' : 'Contact & Appointments'}
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-[#009E96] hover:text-emerald-300 font-semibold cursor-pointer"
                >
                  <span>{lang === 'ar' ? 'طلب موعد استشارة' : 'Request Consultation'}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinical Hours & Insurance */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'أوقات العمل والتأمين' : 'Hours & Insurance'}
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-[#009E96] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-stone-300">
                  {lang === 'ar' ? CLINIC_INFO.hoursAr.weekdays : CLINIC_INFO.hoursEn.weekdays}
                </p>
                <p className="mt-1 text-stone-500">
                  {lang === 'ar' ? CLINIC_INFO.hoursAr.friday : CLINIC_INFO.hoursEn.friday}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800">
              <div className="flex items-center gap-1.5 text-xs font-medium text-stone-300 mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#009E96]" />
                <span>{lang === 'ar' ? 'شركاء التأمين المعتمدين' : 'Approved Insurance'}</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                {lang === 'ar'
                  ? 'نقبل بطاقات MedNet و GEMS TPA و Solidarity وتوفير مستندات المطالبة لجميع الشركات.'
                  : 'Direct billing available for MedNet, GEMS TPA, Solidarity, and full claim assistance.'}
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'موقع المركز والتواصل' : 'Location & Inquiries'}
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#009E96] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {lang === 'ar' ? CLINIC_INFO.locationAr : CLINIC_INFO.locationEn}
              </p>
            </div>

            <div className="space-y-1.5 pt-1">
              <a
                href={`tel:${CLINIC_INFO.phone1}`}
                className="flex items-center gap-2 text-xs text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#009E96]" />
                <span dir="ltr">{CLINIC_INFO.phoneDisplay1}</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone2}`}
                className="flex items-center gap-2 text-xs text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#009E96]" />
                <span dir="ltr">{CLINIC_INFO.phoneDisplay2}</span>
              </a>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#009E96] hover:text-emerald-300 transition-colors font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'واتساب مباشر للعيادة' : 'Direct WhatsApp Line'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.nameEn} ({CLINIC_INFO.nameAr}). {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            <span>{lang === 'ar' ? 'أم الحصم، مملكة البحرين' : 'Um Al Hassam, Kingdom of Bahrain'}</span>
            <span aria-hidden="true">·</span>
            <span>{CLINIC_INFO.sloganAr}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
