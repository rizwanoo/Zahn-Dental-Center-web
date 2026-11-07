import React, { useState } from 'react';
import { Sparkles, Clock, Check } from 'lucide-react';
import { Language, PageId } from '../types';
import { TREATMENTS } from '../data/content';
import { useGsapScrollAnimations } from '../utils/gsapAnimations';

interface TreatmentsPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  lang,
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useGsapScrollAnimations([lang, selectedCategory]);

  const categories = [
    { id: 'all', nameEn: 'All Treatments', nameAr: 'جميع العلاجات' },
    { id: 'cosmetic', nameEn: 'Cosmetic & Veneers', nameAr: 'تجميل الابتسامة وعدسات الخزف' },
    { id: 'whitening', nameEn: 'Laser Whitening', nameAr: 'تبييض الأسنان بالليزر' },
    { id: 'orthodontics', nameEn: 'Orthodontics & Aligners', nameAr: 'التقويم والتقويم الشفاف' },
    { id: 'implants', nameEn: 'Dental Implants', nameAr: 'زراعة الأسنان' },
    { id: 'restorative', nameEn: 'Restorative & Endodontics', nameAr: 'الحشوات وعلاج العصب' },
    { id: 'preventive', nameEn: 'Preventive & Hygiene', nameAr: 'العناية الوقائية والتنظيف' },
    { id: 'pediatric', nameEn: 'Pediatric Care', nameAr: 'طب أسنان الأطفال' },
    { id: 'surgery', nameEn: 'Oral Surgery & Wisdom', nameAr: 'جراحة الفم وضرس العقل' },
  ];

  const filteredTreatments =
    selectedCategory === 'all'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === selectedCategory);

  return (
    <div className="w-full pb-20 bg-[#FAF8F5] text-slate-900 font-sans">
      {/* Clean Dark Luxury Header (No empty top section gap!) */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 bg-[#061413] text-white overflow-hidden mb-12 sm:mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#36D1C4] mb-3 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md gsap-reveal-title">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'الخدمات السريرية المعتمدة' : 'Clinical Treatment Directory'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans gsap-reveal-title">
              {lang === 'ar' ? (
                <>
                  علاجات طبية متقدمة، <br />
                  <span className="font-serif italic font-normal text-[#36D1C4]">
                    لابتسامة تجمع بين الصحة والجمال
                  </span>
                </>
              ) : (
                <>
                  COMPREHENSIVE DENTISTRY. <br />
                  <span className="font-serif italic font-normal text-[#36D1C4]">
                    REFINED AESTHETIC CARE.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 text-sm sm:text-base text-stone-200 leading-relaxed gsap-reveal-title">
              {lang === 'ar'
                ? 'نقدم في مركز زان للأسنان منظومة علاجية متكاملة تشمل طب الأسنان التجميلي، وزراعة الأسنان، والتقويم الشفاف، والعلاجات التحفظية وعلاج العصب، بالاعتماد على أحدث التقنيات الرقمية المعتمدة عالمياً.'
                : 'From digital smile redesigns to pain-free endodontics and permanent dental implant reconstructions, explore our specialized clinical services designed for comfort, function, and enduring beauty.'}
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#009E96] text-white shadow-lg border border-[#36D1C4]/40 font-bold'
                    : 'bg-white/10 text-stone-200 border border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                {lang === 'ar' ? cat.nameAr : cat.nameEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {filteredTreatments.map((treatment, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <section
              key={treatment.id}
              id={treatment.id}
              className="bg-white border border-stone-200 p-6 sm:p-10 lg:p-12 transition-all shadow-sm"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Slot AS-IS */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={treatment.image}
                    alt={treatment.titleEn}
                    className="w-full h-auto object-contain gsap-reveal-img"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Editorial Information */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] gsap-reveal-title">
                      {treatment.category.toUpperCase()}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 gsap-reveal-title">
                      {lang === 'ar' ? treatment.titleAr : treatment.titleEn}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#005B56] mt-1 gsap-reveal-title">
                      {lang === 'ar' ? treatment.subtitleAr : treatment.subtitleEn}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed gsap-reveal-title">
                    {lang === 'ar' ? treatment.descriptionAr : treatment.descriptionEn}
                  </p>

                  {/* Ideal For Note */}
                  <div className="p-3 bg-[#FAF8F5] border-l-4 border-[#009E96] text-xs text-stone-700 gsap-reveal-title">
                    <strong className="text-slate-900">
                      {lang === 'ar' ? 'الحالات المناسبة:' : 'Recommended For:'}{' '}
                    </strong>
                    <span>{lang === 'ar' ? treatment.idealForAr : treatment.idealForEn}</span>
                  </div>

                  {/* Key Clinical Benefits */}
                  <div className="space-y-2 pt-1 gsap-reveal-title">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {lang === 'ar' ? 'المزايا السريرية:' : 'Key Procedure Advantages:'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(lang === 'ar' ? treatment.benefitsAr : treatment.benefitsEn).map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <Check className="w-4 h-4 text-[#009E96] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Strip (NO POPUPS) */}
                  <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <Clock className="w-4 h-4 text-[#009E96]" />
                      <span>
                        {lang === 'ar' ? 'المدة المتوقعة:' : 'Expected Duration:'}{' '}
                        <strong className="text-slate-900">{lang === 'ar' ? treatment.durationAr : treatment.durationEn}</strong>
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenBooking(treatment.id)}
                        className="px-5 py-2.5 bg-[#009E96] hover:bg-[#007D77] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
                      >
                        {lang === 'ar' ? 'طلب موعد لهذا الإجراء' : 'Book This Procedure'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
