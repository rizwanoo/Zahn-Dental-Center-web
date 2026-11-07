import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';
import { Language, AppointmentFormValues, AppointmentSubmission } from '../types';
import { CLINIC_INFO, TREATMENTS } from '../data/content';
import { useGsapScrollAnimations } from '../utils/gsapAnimations';

interface ContactPageProps {
  lang: Language;
  prefillTreatment?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, prefillTreatment }) => {
  const formRef = useRef<HTMLDivElement>(null);
  useGsapScrollAnimations([lang]);

  const [formValues, setFormValues] = useState<AppointmentFormValues>({
    name: '',
    phone: '',
    email: '',
    treatment: prefillTreatment || TREATMENTS[0].id,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'morning',
    notes: '',
  });

  useEffect(() => {
    if (prefillTreatment) {
      setFormValues((prev) => ({ ...prev, treatment: prefillTreatment }));
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [prefillTreatment]);

  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState<AppointmentSubmission | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AppointmentFormValues, string>> = {};
    if (!formValues.name.trim()) {
      newErrors.name = lang === 'ar' ? 'يرجى إدخال الاسم الكريم' : 'Please enter your full name';
    }
    if (!formValues.phone.trim() || formValues.phone.length < 8) {
      newErrors.phone = lang === 'ar' ? 'يرجى إدخال رقم هاتف صحيح' : 'Please enter a valid phone number';
    }
    if (formValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = lang === 'ar' ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email format';
    }
    if (!formValues.date) {
      newErrors.date = lang === 'ar' ? 'يرجى تحديد التاريخ المفضل' : 'Please select your preferred date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newSubmission: AppointmentSubmission = {
        ...formValues,
        id: `ZDC-${Math.floor(1000 + Math.random() * 9000)}`,
        createdAt: new Date().toISOString(),
        status: 'received',
      };

      try {
        const stored = localStorage.getItem('zahn_appointments');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(newSubmission);
        localStorage.setItem('zahn_appointments', JSON.stringify(list));
      } catch {
        // ignore
      }

      setSubmission(newSubmission);
      setIsSubmitting(false);

      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 400);
  };

  const selectedTreatmentObj = TREATMENTS.find((t) => t.id === (submission ? submission.treatment : formValues.treatment));
  const treatmentTitle = selectedTreatmentObj
    ? (lang === 'ar' ? selectedTreatmentObj.titleAr : selectedTreatmentObj.titleEn)
    : formValues.treatment;

  const whatsappMessage = submission
    ? encodeURIComponent(
        `Hello Zahn Dental Center, I would like to schedule an appointment.\nRef: ${submission.id}\nPatient: ${submission.name}\nTreatment: ${treatmentTitle}\nDate: ${submission.date} (${submission.timeSlot === 'morning' ? 'Morning 9am-1pm' : 'Evening 4pm-9pm'})\nPhone: ${submission.phone}`
      )
    : '';

  return (
    <div className="w-full pb-20 bg-[#FAF8F5] text-slate-900 font-sans">
      {/* Clean Dark Luxury Header (No empty top section gap!) */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 bg-[#061413] text-white overflow-hidden mb-12 sm:mb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#36D1C4] mb-3 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md gsap-reveal-title">
              <Calendar className="w-4 h-4" />
              <span>{lang === 'ar' ? 'التواصل والمواعيد' : 'Contact & Direct Appointments'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans gsap-reveal-title">
              {lang === 'ar' ? (
                <>
                  دعنا نخطو الخطوة الأولى <br />
                  <span className="font-serif italic font-normal text-[#36D1C4]">
                    نحو ابتسامتك المتألقة
                  </span>
                </>
              ) : (
                <>
                  LET'S TAKE THE FIRST STEP <br />
                  <span className="font-serif italic font-normal text-[#36D1C4]">
                    TOWARDS YOUR SMILE.
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 text-sm sm:text-base text-stone-200 leading-relaxed gsap-reveal-title">
              {lang === 'ar'
                ? 'يسعدنا استقبالك في مركز زان للأسنان بأم الحصم، المنامة. املأ استمارة طلب الموعد أدناه، أو تواصل معنا مباشرة عبر الهاتف أو الواتساب للتنسيق الفوري.'
                : 'Our dental team in Um Al Hassam, Manama is here to assist you. Submit an appointment inquiry directly on this page or reach out via telephone or WhatsApp for immediate consultation scheduling.'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Direct Contact & Location Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6 gsap-reveal-title">
              <h2 className="text-xl font-bold text-slate-900">
                {lang === 'ar' ? 'معلومات العيادة والاتصال' : 'Clinic Details'}
              </h2>

              {/* Location Card */}
              <div className="flex items-start gap-3.5 text-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009E96] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {lang === 'ar' ? 'الموقع في أم الحصم' : 'Location in Um Al Hassam'}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {lang === 'ar' ? CLINIC_INFO.locationAr : CLINIC_INFO.locationEn}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    {lang === 'ar' ? 'المنامة، مملكة البحرين' : 'Manama, Kingdom of Bahrain'}
                  </p>
                </div>
              </div>

              {/* Phone Lines */}
              <div className="flex items-start gap-3.5 text-sm pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009E96] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {lang === 'ar' ? 'خطوط الاتصال المباشرة' : 'Direct Clinic Lines'}
                  </h4>
                  <div className="space-y-1 mt-1">
                    <a
                      href={`tel:${CLINIC_INFO.phone1}`}
                      className="block text-sm font-semibold text-[#009E96] hover:underline"
                      dir="ltr"
                    >
                      {CLINIC_INFO.phoneDisplay1}
                    </a>
                    <a
                      href={`tel:${CLINIC_INFO.phone2}`}
                      className="block text-sm font-semibold text-slate-700 hover:underline"
                      dir="ltr"
                    >
                      {CLINIC_INFO.phoneDisplay2}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Line */}
              <div className="flex items-start gap-3.5 text-sm pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {lang === 'ar' ? 'واتساب العيادة' : 'WhatsApp Appointments'}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {lang === 'ar' ? 'تنسيق واستفسار سريع عبر المراسلة' : 'Quick inquiry & instant confirmation'}
                  </p>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    <span>{CLINIC_INFO.whatsappNumber}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 text-sm pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009E96] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {lang === 'ar' ? 'أوقات العمل المعتمدة' : 'Official Opening Hours'}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 font-medium mt-1">
                    {lang === 'ar' ? CLINIC_INFO.hoursAr.weekdays : CLINIC_INFO.hoursEn.weekdays}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    {lang === 'ar' ? CLINIC_INFO.hoursAr.friday : CLINIC_INFO.hoursEn.friday}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="bg-[#FAF8F5] p-6 border border-stone-200 gsap-reveal-title">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                {lang === 'ar' ? 'قنوات التواصل الاجتماعي الموثقة' : 'Verified Social Channels'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-stone-200 hover:border-[#009E96] text-xs font-semibold text-slate-800 transition-colors"
                >
                  <span>Instagram @zahndental_bh</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
                <a
                  href={CLINIC_INFO.threadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-stone-200 hover:border-[#009E96] text-xs font-semibold text-slate-800 transition-colors"
                >
                  <span>Threads</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>
          </div>

          {/* In-Page Appointment Form (Zero popups!) */}
          <div className="lg:col-span-7" ref={formRef}>
            <div className="bg-white border border-stone-200 shadow-xl p-6 sm:p-10 gsap-reveal-title">
              {submission ? (
                <div className="space-y-6">
                  <div className="p-6 bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#009E96] mx-auto" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      {lang === 'ar' ? 'تم استلام طلب الموعد بنجاح!' : 'Appointment Request Logged!'}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                      {lang === 'ar'
                        ? 'شكراً لتواصلك مع مركز زان للأسنان. سيقوم فريق الاستقبال بمراجعة التاريخ والوقت والتواصل معك خلال وقت قصير للتأكيد النهائي.'
                        : 'Thank you for reaching out to Zahn Dental Center. Our front-desk coordinator will verify your time preference and reach out shortly.'}
                    </p>
                    <div className="inline-block px-4 py-2 bg-white border border-emerald-200 text-xs font-mono font-bold text-[#005B56]">
                      {lang === 'ar' ? 'رقم الطلب المرجعي:' : 'Reference ID:'} {submission.id}
                    </div>
                  </div>

                  <div className="bg-[#FAF8F5] p-5 border border-stone-200 text-xs sm:text-sm space-y-2">
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">{lang === 'ar' ? 'المريض:' : 'Patient:'}</span>
                      <span className="font-semibold text-slate-900">{submission.name}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">{lang === 'ar' ? 'العلاج المطلوب:' : 'Selected Care:'}</span>
                      <span className="font-semibold text-[#009E96] text-right">{treatmentTitle}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-200">
                      <span className="text-stone-500">{lang === 'ar' ? 'الموعد المفضل:' : 'Preferred Date:'}</span>
                      <span className="font-semibold text-slate-900">
                        {submission.date} ({submission.timeSlot === 'morning' ? (lang === 'ar' ? 'صباحاً' : 'Morning') : (lang === 'ar' ? 'مساءً' : 'Evening')})
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-stone-500">{lang === 'ar' ? 'رقم الهاتف:' : 'Contact Phone:'}</span>
                      <span className="font-semibold text-slate-900" dir="ltr">{submission.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/97317331012?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md transition-all text-sm"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>{lang === 'ar' ? 'إرسال وتأكيد مباشر عبر واتساب العيادة' : 'Confirm via Direct WhatsApp'}</span>
                    </a>

                    <button
                      onClick={() => setSubmission(null)}
                      className="w-full py-3 px-4 border border-stone-200 hover:bg-stone-50 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      {lang === 'ar' ? 'تقديم طلب موعد آخر' : 'Submit Another Appointment Request'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-stone-100 pb-4 mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {lang === 'ar' ? 'استمارة حجز موعد استشارة' : 'Appointment Request Form'}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      {lang === 'ar'
                        ? 'يرجى تزويدنا بالتفاصيل الأساسية ليتم حجز الوقت المناسب لك دون أي تأخير'
                        : 'Please provide your details so we can allocate the best clinical slot without delay'}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {lang === 'ar' ? 'الاسم الكريم بالكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'ar' ? 'مثال: عبد الله محمد' : 'e.g. Michael Thorne'}
                      value={formValues.name}
                      onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#009E96] bg-[#FAF8F5]"
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {lang === 'ar' ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        placeholder="+973 3XXXXXXX"
                        value={formValues.phone}
                        onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#009E96] bg-[#FAF8F5]"
                      />
                      {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {lang === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email Address (Optional)'}
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formValues.email}
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#009E96] bg-[#FAF8F5]"
                      />
                      {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {lang === 'ar' ? 'العلاج أو الإجراء المطلوب *' : 'Desired Dental Service *'}
                    </label>
                    <select
                      value={formValues.treatment}
                      onChange={(e) => setFormValues({ ...formValues, treatment: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#009E96] bg-[#FAF8F5]"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {lang === 'ar' ? t.titleAr : t.titleEn}
                        </option>
                      ))}
                      <option value="general-consultation">
                        {lang === 'ar' ? 'فحص شامل واستشارة عامة' : 'Comprehensive Dental Checkup & Consultation'}
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {lang === 'ar' ? 'التاريخ المفضل *' : 'Preferred Appointment Date *'}
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formValues.date}
                        onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                        className="w-full px-4 py-3 text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#009E96] bg-[#FAF8F5]"
                      />
                      {errors.date && <p className="text-xs text-rose-600 mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {lang === 'ar' ? 'الفترة الزمنية المفضلة' : 'Preferred Time of Day'}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormValues({ ...formValues, timeSlot: 'morning' })}
                          className={`py-3 px-3 text-xs font-semibold border transition-colors cursor-pointer ${
                            formValues.timeSlot === 'morning'
                              ? 'bg-[#009E96] text-white border-[#009E96]'
                              : 'bg-[#FAF8F5] text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {lang === 'ar' ? 'صباحاً (9 - 1)' : 'Morning (9-1)'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormValues({ ...formValues, timeSlot: 'evening' })}
                          className={`py-3 px-3 text-xs font-semibold border transition-colors cursor-pointer ${
                            formValues.timeSlot === 'evening'
                              ? 'bg-[#009E96] text-white border-[#009E96]'
                              : 'bg-[#FAF8F5] text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {lang === 'ar' ? 'مساءً (4 - 9)' : 'Evening (4-9)'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {lang === 'ar' ? 'ملاحظات إضافية أو وصف الشكوى (اختياري)' : 'Additional Notes or Symptoms (Optional)'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        lang === 'ar'
                          ? 'هل تعاني من ألم في ضرس معين؟ أو لديك تأمين تود التحقق من تغطيته؟'
                          : 'Mention any tooth sensitivity, aesthetic goals, or insurance details...'
                      }
                      value={formValues.notes}
                      onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#009E96] bg-[#FAF8F5]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#009E96] hover:bg-[#007D77] text-white font-bold shadow-lg transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span className="text-sm sm:text-base">
                      {isSubmitting
                        ? lang === 'ar'
                          ? 'جاري إرسال طلب الموعد...'
                          : 'Sending Request...'
                        : lang === 'ar'
                        ? 'إرسال طلب الموعد'
                        : 'Submit Appointment Request'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-white border border-stone-200 shadow-md">
            <div className="p-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {lang === 'ar' ? 'موقع المركز في أم الحصم، المنامة' : 'Location Map — Um Al Hassam, Manama'}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {lang === 'ar' ? CLINIC_INFO.locationAr : CLINIC_INFO.locationEn}
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Um+Al+Hassam+Bahrain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 hover:border-[#009E96] text-xs font-semibold text-stone-700 hover:text-[#009E96] transition-colors self-start sm:self-auto"
              >
                <span>{lang === 'ar' ? 'فتح في خرائط Google' : 'Open in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative h-80 sm:h-96 w-full bg-stone-100">
              <iframe
                title="Zahn Dental Center Location Map in Um Al Hassam Bahrain"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4402636239127!2d50.5840!3d26.2085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af39c09d784d%3A0x6b7468165b45155f!2sUmm%20Al%20Hassam%2C%20Manama%2C%20Bahrain!5e0!3m2!1sen!2sbh!4v1700000000000!5m2!1sen!2sbh"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
