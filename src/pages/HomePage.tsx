import React from 'react';
import { Calendar, ArrowRight, Sparkles, MapPin, Phone, MessageCircle, Award, ExternalLink } from 'lucide-react';
import { Language, PageId } from '../types';
import { CLINIC_INFO, TREATMENTS, CLINIC_VALUES, CLINIC_STATS, ACCREDITATION_INFO, OWNER_INFO } from '../data/content';
import { IMAGES } from '../data/assets';
import { useGsapScrollAnimations } from '../utils/gsapAnimations';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (prefillTreatment?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate, onOpenBooking }) => {
  const featuredTreatments = TREATMENTS.slice(0, 4);

  // Initialize GSAP scroll-triggered animations
  useGsapScrollAnimations([lang]);

  return (
    <div className="w-full bg-[#FAF8F5] text-slate-900 font-sans">
      {/* 01. CINEMATIC HERO SECTION
          Home page background image with subtle/light dark tint as requested.
          NO card box wrapping the text — clean borderless typography directly over hero!
      */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 sm:pb-28 lg:pt-36 overflow-hidden">
        {/* Background photo with subtle light tint */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroBgInsta}
            alt="Zahn Dental Center Official Clinic Interior & Technology"
            className="w-full h-full object-cover object-center scale-105 gsap-reveal-img"
            referrerPolicy="no-referrer"
          />
          {/* Subtle light tint overlay */}
          <div className="absolute inset-0 bg-[#030E0D]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030E0D]/70 via-[#030E0D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#030E0D]/60" />
        </div>

        {/* Hero Content - BORDERLESS typography directly over hero (No box wrapper!) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-12">
          <div className="max-w-3xl">
            {/* Oversized Headline - BORDERLESS */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-sans gsap-reveal-title">
              {lang === 'ar' ? (
                <>
                  ابتسامتك تبدأ هنا، <br />
                  <span className="text-[#36D1C4] font-serif font-normal italic">برعاية سريرية</span> راقية.
                </>
              ) : (
                <>
                  YOUR SMILE DESERVES <br />
                  <span className="text-[#36D1C4] font-serif font-normal italic">EXCEPTIONAL</span> CARE.
                </>
              )}
            </h1>

            {/* Subtitle - BORDERLESS */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-100 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] gsap-reveal-title">
              {lang === 'ar' ? CLINIC_INFO.subheadlineAr : CLINIC_INFO.subheadlineEn}
            </p>

            {/* CTAs (Direct navigation, NO popups) */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 gsap-reveal-title">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2.5 px-7 py-4 bg-[#009E96] hover:bg-[#007D77] text-white text-sm sm:text-base font-bold shadow-xl transition-all duration-200 cursor-pointer active:scale-95 rounded-full border border-[#36D1C4]/50"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>{lang === 'ar' ? 'احجز موعدك الآن' : 'BOOK YOUR APPOINTMENT'}</span>
              </button>

              <button
                onClick={() => onNavigate('treatments')}
                className="flex items-center gap-2 px-7 py-4 bg-black/60 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md text-sm sm:text-base font-semibold rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>{lang === 'ar' ? 'استكشف العلاجات' : 'EXPLORE OUR TREATMENTS'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#36D1C4]" />
              </button>
            </div>

            {/* Contact Pills */}
            <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#36D1C4]" />
                <span className="font-medium">{lang === 'ar' ? 'أم الحصم، المنامة، البحرين' : 'Um Al Hassam, Manama, Bahrain'}</span>
              </div>
              <span className="hidden sm:inline text-stone-400">·</span>
              <a
                href={`tel:${CLINIC_INFO.phone1}`}
                className="flex items-center gap-2 hover:text-[#36D1C4] transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#36D1C4]" />
                <span dir="ltr">{CLINIC_INFO.phoneDisplay1}</span>
              </a>
              <span className="hidden sm:inline text-stone-400">·</span>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Line</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02. KEY CLINIC STATS (UNBOXED STRIP) */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-stone-200 gsap-stagger-grid">
            {CLINIC_STATS.map((stat, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i % 2 === 1 ? 'ps-4' : ''}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#009E96] tracking-tight tabular-nums">
                  {lang === 'ar' ? stat.valueAr : stat.valueEn}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 font-semibold">
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. OFFICIAL NHRA ACCREDITATION AWARD (FULL SIZE 3277x4096 ORIGINAL PHOTOGRAPH) */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#009E96]/10 text-[#009E96] text-xs font-bold uppercase tracking-wider mb-3 border border-[#009E96]/20 gsap-reveal-title">
            <Award className="w-4 h-4" />
            <span>{lang === 'ar' ? ACCREDITATION_INFO.badgeAr : ACCREDITATION_INFO.badgeEn}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight gsap-reveal-title">
            {lang === 'ar' ? (
              <>
                الإعتماد الوطني من نهرا <br />
                <span className="font-serif italic font-normal text-[#005B56]">
                  وسام فخر وريادة في الرعاية الصحية
                </span>
              </>
            ) : (
              <>
                National Accreditation <br />
                <span className="font-serif italic font-normal text-[#005B56]">
                  from the NHRA of Bahrain
                </span>
              </>
            )}
          </h2>

          <div className="mt-4 p-4 border-l-4 border-[#009E96] bg-emerald-50/50 gsap-reveal-title">
            <p className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
              "{lang === 'ar' ? ACCREDITATION_INFO.quoteAr : ACCREDITATION_INFO.quoteEn}"
            </p>
            <p className="text-xs text-stone-500 mt-2">
              {lang === 'ar' ? 'منشور رسمي موثق على إنستغرام @zahndental_bh مع شكر خاص للدكتور أحمد الأنصاري' : 'Official post on @zahndental_bh with special thanks to Dr. Ahmed Al-Ansari'}
            </p>
          </div>
        </div>

        {/* 100% UNBOUNDED 3277x4096 ORIGINAL PHOTOGRAPH */}
        <div className="w-full flex flex-col items-center">
          <img
            src={IMAGES.nhraAccreditation}
            alt="Zahn Dental Center NHRA National Accreditation Award in Bahrain"
            className="w-full max-w-4xl h-auto block object-contain gsap-reveal-img"
            referrerPolicy="no-referrer"
          />
          <div className="mt-4 flex items-center justify-between w-full max-w-4xl text-xs text-stone-500 border-t border-stone-200 pt-3">
            <span>{lang === 'ar' ? 'الصورة الأصلية الكاملة لشهادة الاعتماد الوطني' : 'Original High-Resolution NHRA Accreditation Photograph'}</span>
            <a
              href="https://www.instagram.com/p/Ddq4MP5Ki0Q/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#009E96] hover:underline"
            >
              <span>{lang === 'ar' ? 'عرض المنشور على إنستغرام' : 'View Post on Instagram'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 04. OWNER & CLINICAL LEADERSHIP (DR. AHMED 3277x4096 ORIGINAL PHOTOGRAPH) */}
      <section className="py-20 sm:py-28 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Owner Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] bg-emerald-50 px-3 py-1 border border-emerald-200 gsap-reveal-title">
                {lang === 'ar' ? 'المؤسس والمدير الطبي' : 'Founder & Clinical Director'}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight gsap-reveal-title">
                {lang === 'ar' ? (
                  <>
                    د. أحمد — عيادة زان <br />
                    <span className="font-serif italic font-normal text-[#005B56]">
                      يتابع استفساراتكم وإجاباتكم أولاً بأول
                    </span>
                  </>
                ) : (
                  <>
                    Dr. Ahmed, <br />
                    <span className="font-serif italic font-normal text-[#005B56]">
                      Founder & Clinical Director at Zahn
                    </span>
                  </>
                )}
              </h2>

              <div className="p-4 border-l-4 border-[#009E96] bg-stone-50 gsap-reveal-title">
                <p className="text-base font-semibold text-slate-800 leading-relaxed">
                  "{lang === 'ar' ? OWNER_INFO.captionAr : OWNER_INFO.captionEn}"
                </p>
                <p className="text-xs text-stone-500 mt-2">
                  {lang === 'ar' ? 'منشور توثيقي من صفحة المركز على الإنستغرام @zahndental_bh' : 'Official post highlight from @zahndental_bh'}
                </p>
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed gsap-reveal-title">
                {lang === 'ar'
                  ? 'يحرص د. أحمد وفريق أطباء مركز زان على التواصل الشخصي والمباشر مع المرضى، وتوضيح خطط العلاج التجميلي والزراعة والتقويم بكل شفافية، لضمان شعور المريض بالأمان التام والراحة طوال رحلة العلاج.'
                  : 'Dr. Ahmed oversees clinical excellence at Zahn Dental Center, providing direct, empathetic listening, transparent consultation, and precision restorative care in Um Al Hassam.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 gsap-reveal-title">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3.5 bg-[#009E96] hover:bg-[#005B56] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  {lang === 'ar' ? 'طلب موعد استشارة مع د. أحمد' : 'Schedule Consultation with Dr. Ahmed'}
                </button>
                <a
                  href={OWNER_INFO.directInstagramPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-stone-300 hover:border-[#009E96] text-stone-700 hover:text-[#009E96] text-xs font-semibold transition-colors"
                >
                  <span>{lang === 'ar' ? 'مشاهدة الفيديو على الإنستغرام' : 'View on Instagram'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Owner Photo FULL 3277x4096 UNCROPPED PHOTOGRAPH */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <img
                src={IMAGES.ownerDrAhmed}
                alt="Dr. Ahmed, Founder of Zahn Dental Center in Bahrain"
                className="w-full max-w-[480px] h-auto block object-contain gsap-reveal-img"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs font-bold text-stone-600 mt-3 text-center border-t border-stone-200 pt-2 w-full max-w-[480px]">
                {lang === 'ar' ? 'د. أحمد — المؤسس والمدير الطبي لمركز زان للأسنان' : 'Dr. Ahmed — Founder & Clinical Director, Zahn Dental Center'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CLINICAL TEAM ORIGINAL PHOTOGRAPHS SHOWCASE */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] bg-emerald-50 px-3 py-1 border border-emerald-200 gsap-reveal-title">
            {lang === 'ar' ? 'أطباء وكوادر مركز زان' : 'Clinical Team & Specialists'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3 gsap-reveal-title">
            {lang === 'ar' ? (
              <>
                أطباء نفتخر في خبرتهم <br />
                <span className="font-serif italic font-normal text-[#005B56]">
                  وبتجاربكم الناجحة معهم
                </span>
              </>
            ) : (
              <>
                Distinguished Doctors & Team, <br />
                <span className="font-serif italic font-normal text-[#005B56]">
                  Proud of Your Successful Experiences
                </span>
              </>
            )}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 gsap-reveal-title">
            {lang === 'ar'
              ? 'فريق متكامل من الاستشاريين والأخصائيين وطاقم التمريض والاستقبال يعملون على مدار الأسبوع لراحتكم في أم الحصم.'
              : 'Our complete team of licensed dentists, clinical hygienists, and reception staff in Um Al Hassam, Manama.'}
          </p>
        </div>

        {/* Both Clinical Team Photos displayed at FULL 100% UNCROPPED NATURAL DIMENSIONS */}
        <div className="space-y-24 gsap-stagger-grid">
          {/* Team Photo 1: Clear Doctors Team (3277x4096) */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900 border-b border-stone-200 pb-2">
              {lang === 'ar' ? 'أطباء نفتخر في خبرتهم' : 'Experienced Dental Practitioners'}
            </h3>
            <img
              src={IMAGES.teamClearShowcase}
              alt="Zahn Dental Center Clinical Doctors Poster in Bahrain"
              className="w-full max-w-4xl mx-auto h-auto block object-contain gsap-reveal-img"
              referrerPolicy="no-referrer"
            />
            <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-200">
              <span>
                {lang === 'ar'
                  ? 'كادر طبي وطني مرخص من الهيئة الوطنية للمهن الصحية (NHRA)'
                  : 'Licensed dental practitioners certified by the NHRA of Bahrain'}
              </span>
              <a
                href="https://www.instagram.com/p/DZZ5MwxDhcU/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#009E96] hover:underline"
              >
                <span>{lang === 'ar' ? 'عرض منشور الأطباء على إنستغرام' : 'View Post on Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Team Photo 2: Combined Team Group (1365x1820) */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900 border-b border-stone-200 pb-2">
              {lang === 'ar' ? 'نخبة من أطباء الأسنان يعملون لراحتكم' : 'Complete Team Dedicated to Your Care'}
            </h3>
            <img
              src={IMAGES.teamGroupCombined}
              alt="Complete Zahn Dental Center Combined Team Photo"
              className="w-full max-w-4xl mx-auto h-auto block object-contain gsap-reveal-img"
              referrerPolicy="no-referrer"
            />
            <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-200">
              <span>
                {lang === 'ar'
                  ? 'فريق العمل الكامل في مركز زان للأسنان، في خدمة مرضانا لتقديم أفضل رعاية وعناية متكاملة'
                  : 'Complete practice family at Zahn Dental Center in Um Al Hassam'}
              </span>
              <a
                href="https://www.instagram.com/p/DdMXeCnKyj-/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#009E96] hover:underline"
              >
                <span>{lang === 'ar' ? 'عرض منشور الطاقم على إنستغرام' : 'View Post on Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 06. FEATURED TREATMENTS */}
      <section className="py-20 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] gsap-reveal-title">
                {lang === 'ar' ? 'الخدمات والعلاجات السريرية' : 'Comprehensive Care'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 gsap-reveal-title">
                {lang === 'ar' ? (
                  <>
                    علاجات متخصصة تلبي <br />
                    <span className="font-serif italic font-normal text-[#005B56]">
                      أدق تطلعات ابتسامتك
                    </span>
                  </>
                ) : (
                  <>
                    Artisan dental care <br />
                    <span className="font-serif italic font-normal text-[#005B56]">
                      engineered for long-lasting health.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <button
              onClick={() => onNavigate('treatments')}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 hover:border-[#009E96] text-stone-700 hover:text-[#009E96] text-sm font-semibold transition-colors cursor-pointer self-start md:self-end"
            >
              <span>{lang === 'ar' ? 'عرض جميع العلاجات (8 خدمات)' : 'View All Treatments (8 Services)'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>

          {/* Treatment Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gsap-stagger-grid">
            {featuredTreatments.map((treatment, idx) => (
              <div
                key={treatment.id}
                className="bg-[#FAF8F5] border-t-2 border-[#009E96] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={treatment.image}
                    alt={treatment.titleEn}
                    className="w-full h-56 object-cover mb-4 gsap-reveal-img"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-bold text-[#009E96] uppercase tracking-wider">
                    {String(idx + 1).padStart(2, '0')} · {treatment.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    {lang === 'ar' ? treatment.titleAr : treatment.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#005B56] font-medium mt-1">
                    {lang === 'ar' ? treatment.subtitleAr : treatment.subtitleEn}
                  </p>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    {lang === 'ar' ? treatment.descriptionAr : treatment.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    {lang === 'ar' ? 'المدة التقديرية:' : 'Expected Visits:'}{' '}
                    <strong className="text-slate-800">{lang === 'ar' ? treatment.durationAr : treatment.durationEn}</strong>
                  </span>

                  <button
                    onClick={() => onOpenBooking(treatment.id)}
                    className="px-4 py-2 bg-[#009E96] hover:bg-[#005B56] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    {lang === 'ar' ? 'طلب موعد هذا العلاج' : 'Book Procedure'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. WHY PATIENTS CHOOSE ZAHN */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] gsap-reveal-title">
              {lang === 'ar' ? 'لماذا يختار المرضى مركز زان؟' : 'Why Patients Trust Zahn'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 gsap-reveal-title">
              {lang === 'ar' ? (
                <>
                  معايير راسخة في الأمان، <br />
                  <span className="font-serif italic font-normal text-[#005B56]">
                    والشفافية والراحة السريرية
                  </span>
                </>
              ) : (
                <>
                  Rooted in trust, <br />
                  <span className="font-serif italic font-normal text-[#005B56]">
                    precision and patient peace of mind.
                  </span>
                </>
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gsap-stagger-grid">
            {CLINIC_VALUES.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 border-t-2 border-stone-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif font-bold text-[#009E96]">
                    {pillar.number}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-3">
                    {lang === 'ar' ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                    {lang === 'ar' ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. FINAL APPOINTMENT ACTION STRIP */}
      <section className="py-16 bg-[#030E0D] text-white border-t border-[#009E96]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#36D1C4]">
              {lang === 'ar' ? 'خطوتك الأولى نحو ابتسامة صحية' : 'Start Your Journey'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
              {lang === 'ar' ? CLINIC_INFO.sloganAr : CLINIC_INFO.sloganEn}
            </h2>
            <p className="text-sm sm:text-base text-stone-300 mt-4 leading-relaxed">
              {lang === 'ar'
                ? 'فريقنا في أم الحصم مستعد للإجابة على استفساراتك وتحديد الموعد المناسب لجدولك اليومي. اختر الوقت المفضل وسنقوم بالتنسيق معك مباشرة.'
                : 'Our dental specialists in Um Al Hassam are ready to assist you. Book directly on our contact page or message our reception via WhatsApp.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2.5 px-8 py-4 bg-[#009E96] hover:bg-[#007D77] text-white font-bold text-sm sm:text-base shadow-lg transition-transform cursor-pointer active:scale-95 rounded-full"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>{lang === 'ar' ? 'طلب موعد استشارة' : 'Book Your Appointment'}</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-4 bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base border border-emerald-400/40 backdrop-blur-sm transition-colors rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{lang === 'ar' ? 'محادثة واتساب فورية' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
