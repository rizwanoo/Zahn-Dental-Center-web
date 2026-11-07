import React from 'react';
import { Award, Phone, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Language, PageId } from '../types';
import { CLINIC_INFO, ACCREDITATION_INFO, OWNER_INFO } from '../data/content';
import { IMAGES } from '../data/assets';
import { useGsapScrollAnimations } from '../utils/gsapAnimations';

interface AboutPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate, onOpenBooking }) => {
  useGsapScrollAnimations([lang]);

  return (
    <div className="w-full pb-20 bg-[#FAF8F5] text-slate-900 font-sans">
      {/* Clean Dark Luxury Header (No empty top section gap!) */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 bg-[#061413] text-white overflow-hidden mb-12 sm:mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#36D1C4] mb-3 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md gsap-reveal-title">
              <Award className="w-4 h-4" />
              <span>{lang === 'ar' ? 'فلسفتنا ورؤيتنا' : 'Our Philosophy & Story'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-sans text-white gsap-reveal-title">
              {lang === 'ar' ? (
                <>
                  أكثر من مجرد طب أسنان. <br />
                  <span className="font-serif italic font-normal text-[#36D1C4]">
                    تجربة علاجية مفعمة بالثقة
                  </span>
                </>
              ) : (
                <>
                  MORE THAN DENTISTRY. <br />
                  <span className="font-serif italic font-normal text-[#36D1C4]">
                    A BETTER PATIENT EXPERIENCE.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 text-sm sm:text-base text-stone-200 leading-relaxed gsap-reveal-title">
              {lang === 'ar'
                ? 'تأسس مركز زان للأسنان في قلب أم الحصم بمملكة البحرين ليقدم نموذجاً سريرياً معاصراً يعيد تعريف زيارة طبيب الأسنان. نجمع بين المهارة الطبية الدقيقة وأحدث التقنيات الرقمية في بيئة دافئة ومريحة تُبدد أي مخاوف سابقة.'
                : 'Founded in Um Al Hassam, Bahrain, Zahn Dental Center was built on the conviction that exceptional oral health and radiant smiles belong in an environment of serenity, absolute transparency, and genuine empathy.'}
            </p>
          </div>
        </div>
      </section>

      {/* 01. OWNER MAIN SHOWCASE — 100% FULL SIZE 3277x4096 ORIGINAL PHOTOGRAPH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Owner Photo FULL SIZE UNCROPPED */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <img
              src={IMAGES.ownerDrAhmed}
              alt="Dr. Ahmed, Owner and Clinical Director of Zahn Dental Center"
              className="w-full max-w-[480px] h-auto block object-contain gsap-reveal-img"
              referrerPolicy="no-referrer"
            />
            <p className="text-xs font-bold text-stone-600 mt-3 text-center border-t border-stone-200 pt-2 w-full max-w-[480px]">
              {lang === 'ar' ? 'د. أحمد — المؤسس والمدير الطبي لمركز زان للأسنان' : 'Dr. Ahmed — Founder & Clinical Director, Zahn Dental Center'}
            </p>
          </div>

          {/* Owner Story & Commitment */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] bg-emerald-50 px-3 py-1 border border-emerald-200 gsap-reveal-title">
              {lang === 'ar' ? 'رؤية القيادة الطبية' : 'Clinical Leadership & Vision'}
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight gsap-reveal-title">
              {lang === 'ar' ? (
                <>
                  د. أحمد — المؤسس والمدير الطبي <br />
                  <span className="font-serif italic font-normal text-[#005B56]">
                    لراحة مرضانا وابتسامتهم
                  </span>
                </>
              ) : (
                <>
                  Dr. Ahmed, Founder <br />
                  <span className="font-serif italic font-normal text-[#005B56]">
                    & Clinical Director at Zahn
                  </span>
                </>
              )}
            </h2>

            <div className="p-4 border-l-4 border-[#009E96] bg-stone-50 gsap-reveal-title">
              <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                "{lang === 'ar' ? OWNER_INFO.captionAr : OWNER_INFO.captionEn}"
              </p>
              <p className="text-xs text-stone-500 mt-2">
                {lang === 'ar' ? 'منشور رسمي موثق عبر حساب المركز على الإنستغرام @zahndental_bh' : 'Official clinic highlight from @zahndental_bh'}
              </p>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed gsap-reveal-title">
              {lang === 'ar'
                ? 'يؤمن د. أحمد بأن العلاقة بين طبيب الأسنان والمريض تبنى على الاستماع الواعي، والشرح الطبي المبسط لكل مرحلة علاجية، واستخدام أحدث المعايير الطبية المعتمدة وطنياً ودولياً لتوفير بيئة مطمئنة تشعر فيها بالأمان الكامل.'
                : 'Leading the practice with clinical dedication, Dr. Ahmed ensures that every patient visiting our Um Al Hassam center receives transparent counsel, empathetic listening, and the highest standard of dental technology.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 gsap-reveal-title">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-[#009E96] hover:bg-[#005B56] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                {lang === 'ar' ? 'طلب موعد استشارة مع د. أحمد' : 'Consult with Dr. Ahmed'}
              </button>
              <a
                href="https://www.instagram.com/p/DeEWD0SOAtB/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-stone-300 hover:border-[#009E96] text-stone-700 hover:text-[#009E96] text-xs font-semibold transition-colors"
              >
                <span>{lang === 'ar' ? 'مشاهدة الفيديو على الإنستغرام' : 'View on Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 02. NHRA NATIONAL ACCREDITATION AWARD SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#009E96]/10 text-[#009E96] text-xs font-bold uppercase tracking-wider mb-2 border border-[#009E96]/20 gsap-reveal-title">
            <Award className="w-4 h-4" />
            <span>{lang === 'ar' ? ACCREDITATION_INFO.badgeAr : ACCREDITATION_INFO.badgeEn}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900 gsap-reveal-title">
            {lang === 'ar' ? (
              <>
                الإعتماد الوطني من نهرا <br />
                <span className="font-serif italic font-normal text-[#005B56]">
                  مع شكر خاص للدكتور أحمد الأنصاري
                </span>
              </>
            ) : (
              <>
                National Accreditation from NHRA, <br />
                <span className="font-serif italic font-normal text-[#005B56]">
                  Special thanks to Dr. Ahmed Al-Ansari
                </span>
              </>
            )}
          </h2>

          <div className="mt-4 p-4 border-l-4 border-[#009E96] bg-emerald-50/50 gsap-reveal-title">
            <p className="text-sm sm:text-base text-slate-800 italic leading-relaxed">
              "{lang === 'ar' ? ACCREDITATION_INFO.quoteAr : ACCREDITATION_INFO.quoteEn}"
            </p>
          </div>

          <p className="mt-4 text-sm text-stone-600 leading-relaxed gsap-reveal-title">
            {lang === 'ar' ? ACCREDITATION_INFO.descriptionAr : ACCREDITATION_INFO.descriptionEn}
          </p>
        </div>

        {/* Accreditation photo full size 3277x4096 AS-IS */}
        <div className="w-full flex flex-col items-center">
          <img
            src={IMAGES.nhraAccreditation}
            alt="Zahn Dental Center NHRA Accreditation Award Ceremony with Dr. Ahmed Al-Ansari"
            className="w-full max-w-4xl h-auto block object-contain gsap-reveal-img"
            referrerPolicy="no-referrer"
          />
          <div className="mt-3 flex items-center justify-between w-full max-w-4xl text-xs text-stone-500 border-t border-stone-200 pt-2">
            <span>{lang === 'ar' ? 'صورة توثيقية حقيقية لشهادة الاعتماد الوطني' : 'NHRA Accreditation Award Official Ceremony'}</span>
            <a
              href="https://www.instagram.com/p/Ddq4MP5Ki0Q/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#009E96] hover:underline"
            >
              <span>{lang === 'ar' ? 'عرض منشور التكريم الأصلي' : 'View Post on Instagram'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 03. COMPLETE CLINICAL TEAM SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] bg-emerald-50 px-3 py-1 border border-emerald-200 gsap-reveal-title">
            {lang === 'ar' ? 'فريق العمل الطبي والإداري' : 'The Entire Zahn Team'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 gsap-reveal-title">
            {lang === 'ar'
              ? 'أطباء نفتخر في خبرتهم وبتجاربكم معهم'
              : 'Our United Team Serving You in Um Al Hassam'}
          </h2>
          <p className="mt-3 text-sm text-stone-600 gsap-reveal-title">
            {lang === 'ar'
              ? 'نخبة من أطباء الأسنان، الاستشاريين، والكوادر التمريضية والإدارية يعملون لراحتكم ولتقديم أرقى الخدمات السريرية.'
              : 'Our licensed dentists and supporting clinical personnel dedicated to a tranquil, flawless healthcare experience.'}
          </p>
        </div>

        <div className="space-y-20 gsap-stagger-grid">
          {/* Clear Team Photo 3277x4096 */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900 border-b border-stone-200 pb-2">
              {lang === 'ar' ? 'أطباء نفتخر في خبرتهم' : 'Clinical Doctors & Specialists'}
            </h3>
            <img
              src={IMAGES.teamClearShowcase}
              alt="Zahn Dental Center Clinical Doctors"
              className="w-full max-w-4xl mx-auto h-auto block object-contain gsap-reveal-img"
              referrerPolicy="no-referrer"
            />
            <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-200">
              <span>
                {lang === 'ar'
                  ? 'كوادر متخصصة في زراعة الأسنان، قشور الخزف التجميلية، تقويم الأسنان، وعلاج العصب الدقيق'
                  : 'Specialists in implants, veneers, orthodontics, and restorative endodontics'}
              </span>
              <a
                href="https://www.instagram.com/p/DZZ5MwxDhcU/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#009E96] hover:underline"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Combined Team Group Photo 1365x1820 */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold text-slate-900 border-b border-stone-200 pb-2">
              {lang === 'ar' ? 'نخبة من أطباء الأسنان يعملون لراحتكم' : 'Complete Practice Family'}
            </h3>
            <img
              src={IMAGES.teamGroupCombined}
              alt="Zahn Dental Center Team Combined Group"
              className="w-full max-w-4xl mx-auto h-auto block object-contain gsap-reveal-img"
              referrerPolicy="no-referrer"
            />
            <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-200">
              <span>
                {lang === 'ar'
                  ? 'طاقم متكامل يعتني بك من لحظة اتصالك وحجز الموعد وحتى المتابعة الدورية بعد الإجراء الطبي'
                  : 'Caring dental professionals and reception staff committed to providing an exceptional patient journey'}
              </span>
              <a
                href="https://www.instagram.com/p/DdMXeCnKyj-/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#009E96] hover:underline"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 04. INSURANCE PARTNERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="bg-white border-t-2 border-[#009E96] p-6 sm:p-10 border-x border-b border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#009E96] gsap-reveal-title">
                {lang === 'ar' ? 'التغطية التأمينية والفوترة' : 'Insurance & Direct Billing'}
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight gsap-reveal-title">
                {lang === 'ar'
                  ? 'رعاية صحية ميسرة وشراكات تأمين معتمدة'
                  : 'Seamless Insurance Coordination in Bahrain'}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed gsap-reveal-title">
                {lang === 'ar'
                  ? 'نحرص على تسهيل الإجراءات المالية والتأمينية لمرضانا الكرام. المركز معتمد لدى كبرى شركات إدارة التأمين الصحي في البحرين ويوفر فواتير مفصلة وتقارير علاجية رسمية لاسترداد التكاليف.'
                  : 'We make quality dental care accessible. Our administration team coordinates directly with Bahrain insurance providers and assists with comprehensive claim documentation.'}
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 gsap-stagger-grid">
              {(lang === 'ar' ? CLINIC_INFO.insuranceAr : CLINIC_INFO.insuranceEn).map((ins, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3.5 bg-[#FAF8F5] border border-stone-200 text-xs font-bold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#009E96] shrink-0" />
                  <span>{ins}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Consultation CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#061413] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-[#009E96]">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {lang === 'ar'
                ? 'جاهز لتجربة العناية بأسنانك في بيئة استثنائية؟'
                : 'Ready to Experience Thoughtful Dental Care?'}
            </h3>
            <p className="text-sm text-stone-300 mt-2">
              {lang === 'ar'
                ? 'مركز زان للأسنان يرحب بك في أم الحصم، المنامة. اتصل أو احجز موعدك أونلاين.'
                : 'Zahn Dental Center warmly welcomes you in Um Al Hassam, Manama.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#009E96] hover:bg-[#007D77] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              {lang === 'ar' ? 'طلب موعد استشارة' : 'Book Your Visit'}
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone1}`}
              className="px-5 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#36D1C4]" />
              <span dir="ltr">{CLINIC_INFO.phoneDisplay1}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
