import { IMAGES } from './assets';
import { TreatmentItem } from '../types';

export const CLINIC_INFO = {
  nameEn: 'Zahn Dental Center',
  nameAr: 'مركز زان للأسنان',
  sloganEn: 'YOUR SMILE STARTS HERE.',
  sloganAr: 'ابتسامتك تبدأ هنا',
  subheadlineEn: 'Welcome to Zahn Dental Center, where your smile starts with thoughtful care, modern dentistry and a comfortable patient experience.',
  subheadlineAr: 'مرحباً بكم في مركز زان للأسنان، حيث تبدأ ابتسامتكم برعاية فائقة، وتقنيات طبية متقدمة، وتجربة علاجية مفعمة بالراحة والهدوء.',
  locationEn: 'Building 71, Road 3201 / Road 3315, Block 333, Um Al Hassam, Manama, Bahrain',
  locationAr: 'مبنى 71، طريق 3201 / 3315، مجمع 333، أم الحصم، المنامة، مملكة البحرين',
  phone1: '+973 17331012',
  phone2: '+973 17331017',
  phoneDisplay1: '+973 1733 1012',
  phoneDisplay2: '+973 1733 1017',
  whatsappUrl: 'https://wa.me/97317331012',
  whatsappNumber: '+973 1733 1012',
  instagramUrl: 'https://www.instagram.com/zahndental_bh/',
  instagramHandle: '@zahndental_bh',
  threadsUrl: 'https://www.threads.com/@zahndental_bh',
  threadsHandle: '@zahndental_bh',
  heylinkUrl: 'https://heylink.me/zahn',
  email: 'info@zahndental.bh',
  hoursEn: {
    weekdays: 'Saturday – Thursday: 9:00 AM – 1:00 PM & 4:00 PM – 9:00 PM',
    friday: 'Friday: Closed / Dedicated Appointments',
  },
  hoursAr: {
    weekdays: 'السبت إلى الخميس: 9:00 صباحاً – 1:00 ظهراً ومن 4:00 عصراً – 9:00 مساءً',
    friday: 'الجمعة: مغلق / مواعيد مسبقة خاصة',
  },
  insuranceEn: ['MedNet Bahrain', 'GEMS TPA', 'Solidarity', 'Bupa Arabia', 'Direct Medical Invoicing'],
  insuranceAr: ['ميدنت البحرين (MedNet)', 'جيمس تي بي إيه (GEMS TPA)', 'سوليدرتي', 'بوبا العربية', 'فواتير وتقارير استرداد مباشر'],
};

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'cosmetic-veneers',
    category: 'cosmetic',
    titleEn: 'Cosmetic Veneers & Smile Makeovers',
    titleAr: 'ابتسامة هوليوود وقشور الخزف التجميلية',
    subtitleEn: 'Ultra-thin handcrafted ceramic veneers tailored to your facial symmetry.',
    subtitleAr: 'قشور خزفية فائقة الدقة والجمال مصممة خصيصاً لتناسب تناسق ملامح وجهك.',
    descriptionEn: 'Using digital smile design and premium ultra-thin porcelain (E-Max), our cosmetic specialists correct tooth discoloration, minor misalignments, chips, and irregular spacing while preserving maximum natural enamel.',
    descriptionAr: 'من خلال التصميم الرقمي للابتسامة وعدسات الإيماكس (E-Max) فائقة الرقة، نقوم بتصحيح تصبغات الأسنان، وتعديل الفراغات، وتنسيق أطراف الأسنان مع الحفاظ الأقصى على بنية السن الطبيعية.',
    benefitsEn: [
      'Digital 3D preview of your new smile before procedure',
      'High stain-resistance and biocompatible porcelain',
      'Minimally invasive tooth preparation',
      'Long-lasting natural luminescence and translucency'
    ],
    benefitsAr: [
      'معاينة رقمية ثلاثية الأبعاد لابتسامتك الجديدة قبل البدء',
      'مقاومة فائقة للتصبغات مع خزف حيوي عالي الجودة',
      'تحضير دقيق وبسيط يحافظ على طبقة المينا الطبيعية',
      'شفافية ولمعان طبيعي يضاهي بريق الأسنان الحقيقية'
    ],
    durationEn: '2 – 3 visits',
    durationAr: 'من 2 إلى 3 جلسات',
    idealForEn: 'Chipped, discolored, uneven or gapped teeth seeking a radiant transformation.',
    idealForAr: 'الأسنان المتكسرة، المتصبغة، غير المتناسقة أو التي بها فراغات ملحوظة.',
    image: IMAGES.smile,
  },
  {
    id: 'teeth-whitening',
    category: 'whitening',
    titleEn: 'Advanced Laser & In-Clinic Whitening',
    titleAr: 'تبييض الأسنان المتقدم بالليزر',
    subtitleEn: 'Noticeably brighter teeth in a single gentle, clinically supervised session.',
    subtitleAr: 'أسنان أفتح بعدة درجات في جلسة واحدة مريحة وبإشراف طبي دقيق.',
    descriptionEn: 'Our clinic uses certified gentle cold-light and laser whitening systems formulated to lift deep intrinsic and extrinsic stains caused by coffee, tea, and age while incorporating desensitizing minerals for maximum patient comfort.',
    descriptionAr: 'نستخدم أحدث تقنيات التبييض الضوئي والليزر الآمن المعتمد لإزالة التصبغات العميقة الناتجة عن القهوة والشاي وعوامل الزمن، مع تطبيق مواد واقية لحماية حساسية الأسنان.',
    benefitsEn: [
      'Up to 6–8 shades lighter in 45–60 minutes',
      'Enamel-safe pH balanced medical formulations',
      'Includes sensitivity prevention protocol',
      'Customized home-care maintenance guidance'
    ],
    benefitsAr: [
      'تفتيح من 6 إلى 8 درجات خلال 45–60 دقيقة فقط',
      'تركيبات طبية متوازنة آمنة تماماً على طبقة المينا',
      'بروتوكول حماية متكامل للحد من تحسس الأسنان',
      'إرشادات وقوالب مخصصة للحفاظ على النتيجة طويلاً'
    ],
    durationEn: '45 – 60 minutes',
    durationAr: '45 إلى 60 دقيقة',
    idealForEn: 'Patients preparing for special occasions or seeking immediate smile refreshment.',
    idealForAr: 'الراغبين في انتعاش فوري لابتسامتهم والمقبلين على مناسبات هامة.',
    image: IMAGES.smile,
  },
  {
    id: 'orthodontics-aligners',
    category: 'orthodontics',
    titleEn: 'Orthodontics & Clear Aligners',
    titleAr: 'تقويم الأسنان والتقويم الشفاف',
    subtitleEn: 'Discreet alignment and orthodontic precision for adults and teens.',
    subtitleAr: 'تصحيح إطباق وتراصف الأسنان بتقنيات شفافة غير مرئية للكبار واليافعين.',
    descriptionEn: 'Straighten crowded, rotated, or spaced teeth with almost invisible custom-milled thermoplastic clear aligners, or choose modern low-profile ceramic and conventional brackets for comprehensive bite corrections.',
    descriptionAr: 'معالجة تزاحم الأسنان واعوجاجها والفراغات بواسطة قوالب التقويم الشفاف غير المرئية القابلة للإزالة، أو حاصرات السيراميك والمعدن الحديثة للحالات التقويمية المتقدمة.',
    benefitsEn: [
      'Removable aligners for effortless eating and hygiene',
      'Digital 3D bite staging and movement tracking',
      'Gentle, gradual forces reduce discomfort',
      'Clear aesthetic appearance suitable for professional environments'
    ],
    benefitsAr: [
      'قوالب قابلة للنزع لسهولة تناول الطعام وتنظيف الأسنان',
      'تخطيط رقمي ثلاثي الأبعاد لخطوات حركة الأسنان',
      'قوى تدريجية ناعمة تقلل الإحساس بالضغط',
      'مظهر شفاف أنيق وغير ملحوظ مناسب للحياة اليومية والعمل'
    ],
    durationEn: '6 – 18 months based on case',
    durationAr: 'من 6 إلى 18 شهراً حسب الحالة',
    idealForEn: 'Crowding, spacing, open bite, overbite, or relapse after prior braces.',
    idealForAr: 'تزاحم الأسنان، الفراغات، العضة المفتوحة، أو تراجع نتائج تقويم سابق.',
    image: IMAGES.operatory,
  },
  {
    id: 'dental-implants',
    category: 'implants',
    titleEn: 'Precision Dental Implants & Bone Preservation',
    titleAr: 'زراعة الأسنان وتعويض الفقد',
    subtitleEn: 'Permanent, lifelike tooth replacements anchored with surgical precision.',
    subtitleAr: 'تعويض دائم ومتين للأسنان المفقودة مثبت بدقة جراحية عالية وثبات طبيعي.',
    descriptionEn: 'Restore the full chewing power, bone health, and aesthetic confidence of missing teeth with medical-grade titanium and zirconia implant fixtures seamlessly integrated with custom-crafted porcelain crowns.',
    descriptionAr: 'استعادة القدرة الكاملة على المضغ، وحماية عظام الفك، وتجديد ثقتك بابتسامتك من خلال غرسات التيتانيوم الطبية والزركونيا المكسوة بتيجان خزفية مطابقة تماماً للأسنان الطبيعية.',
    benefitsEn: [
      '3D CBCT guided implant placement for millimeter precision',
      'Prevents jawbone shrinkage and neighboring tooth shifting',
      'Permanent foundation that functions just like a natural root',
      'Matches adjacent teeth in shade, contour, and translucency'
    ],
    benefitsAr: [
      'تخطيط جراحي دقيق بالمسح الشعاعي ثلاثي الأبعاد',
      'يحمي عظام الفك من التراجع ويمنع ميلان الأسنان المجاورة',
      'حل دائم ومتين يماثل جذر السن الطبيعي تماماً',
      'تطابق تام في اللون والشفافية وتفاصيل السطح مع بقية الأسنان'
    ],
    durationEn: 'Surgical placement + osseointegration period',
    durationAr: 'جلسة الزراعة + فترة الالتئام والتتويج',
    idealForEn: 'Single, multiple, or full-arch tooth replacement with lasting stability.',
    idealForAr: 'فقدان سن واحد أو عدة أسنان أو الفك الكامل مع ثبات دائم مدى الحياة.',
    image: IMAGES.restorative,
  },
  {
    id: 'restorative-endodontics',
    category: 'restorative',
    titleEn: 'Restorative Care & Gentle Root Canal Therapy',
    titleAr: 'الحشوات التجميلية وعلاج العصب بدون ألم',
    subtitleEn: 'Relieve discomfort and save your natural tooth with microscopic precision.',
    subtitleAr: 'إنهاء آلام الأسنان والحفاظ على السن الطبيعي بدقة ميكروسكوبية متناهية.',
    descriptionEn: 'Using rotary nickel-titanium instrumentation and apex locators, we perform gentle, comfortable root canal treatments to eliminate infection and relieve pain, followed by tooth-colored composite or ceramic crown reinforcement.',
    descriptionAr: 'باستخدام الأجهزة الدوارة الحديثة ومحددات الذروة الإلكترونية، نجري علاج عصب الأسنان دون أي ألم لتطهير القنوات وحفظ السن من الخلع، مع ترميمه بحشوات تجميلية مطابقة للون السن أو تيجان حامية.',
    benefitsEn: [
      'Pain-free digital anesthesia protocols',
      'Hermetic root canal sealing prevents re-infection',
      'Aesthetic composite restorations blend invisibly',
      'Preserves your own natural tooth structure'
    ],
    benefitsAr: [
      'بروتوكول تخدير موضعي دقيق لتجربة خالية تماماً من الألم',
      'إغلاق محكم لقنوات الجذور لمنع عودة الالتهاب مستقبلاً',
      'حشوات تجميلية حيوية تندمج بسلاسة مع نسيج السن',
      'الحفاظ على السن الطبيعي وتجنب الحاجة إلى الخلع'
    ],
    durationEn: '1 – 2 appointments',
    durationAr: 'جلسة إلى جلستين',
    idealForEn: 'Toothache, deep decay, fractured teeth, or leaking aged fillings.',
    idealForAr: 'آلام الأسنان، التسوس العميق، التصدعات أو استبدال الحشوات القديمة التالفة.',
    image: IMAGES.operatory,
  },
  {
    id: 'preventive-hygiene',
    category: 'preventive',
    titleEn: 'Preventive Care, Ultrasonic Scaling & Air Polishing',
    titleAr: 'العناية الوقائية وتنظيف الأسنان العميق',
    subtitleEn: 'Hospital-grade hygiene for healthy pink gums and sparkling breath.',
    subtitleAr: 'جلسات تنظيف وتقليح متطورة لصحة اللثة ونضارة الفم ورائحة منعشة.',
    descriptionEn: 'Gentle ultrasonic tartar debridement combined with warm airflow polishing safely clears plaque, calculus, and coffee/tobacco surface stains without scratching sensitive enamel.',
    descriptionAr: 'تنظيف وتلميع بالموجات فوق الصوتية وتدفق الهواء اللطيف لإزالة التكلسات والجير والتصبغات الخارجية السطحية بلطف فائق ودون خدش لطبقة المينا.',
    benefitsEn: [
      'Reverses early gingivitis and eliminates bleeding gums',
      'Removes stubborn plaque biofilm and bad breath bacteria',
      'Comprehensive periodontal pocket measurement',
      'Includes professional fluoride application'
    ],
    benefitsAr: [
      'معالجة التهاب اللثة المبكر وإيقاف النزيف أثناء تنظيف الأسنان',
      'إزالة طبقات البلاك الصعبة والبكتيريا المسببة لرائحة الفم',
      'فحص قياسي دقيق لصحة اللثة وعمق الجيوب اللثوية',
      'تطبيق فلورايد وقائي لتقوية طبقة المينا ضد التسوس'
    ],
    durationEn: '30 – 45 minutes',
    durationAr: '30 إلى 45 دقيقة',
    idealForEn: 'Every 6 months for adults and teenagers for optimal oral wellness.',
    idealForAr: 'كل 6 أشهر للبالغين واليافعين للمحافظة على ابتسامة مشرقة ولثة صحية.',
    image: IMAGES.lounge,
  },
  {
    id: 'pediatric-dentistry',
    category: 'pediatric',
    titleEn: 'Gentle Pediatric Dental Care',
    titleAr: 'طب أسنان الأطفال والرعاية اللطيفة',
    subtitleEn: 'A welcoming, fear-free dental experience for your little ones.',
    subtitleAr: 'تجربة مرحة وودودة تبني علاقة إيجابية وتزيل خوف الأطفال من طبيب الأسنان.',
    descriptionEn: 'Dedicated gentle care tailored to infants, children, and young adolescents. We focus on preventive pit-and-fissure sealants, pediatric fillings, baby tooth preservation, and habit correction in a playful and reassuring atmosphere.',
    descriptionAr: 'رعاية خاصة للأطفال والناشئين في بيئة هادئة ومريحة، تركز على وقاية الأسنان اللبنية والدائمة بسد الشقوق الوقائي، وحشوات الأسنان اللطيفة، وتوجيه العادات الفموية الصحيحة.',
    benefitsEn: [
      'Positive first-visit conditioning reduces anxiety',
      'Protective fissure sealants stop molar decay before it starts',
      'Gentle tooth decay treatment designed specifically for children',
      'Fun, encouraging oral hygiene education'
    ],
    benefitsAr: [
      'تهيئة نفسية إيجابية ومحببة تجعل زيارة الطبيب تجربة ممتعة',
      'سدادات الشقوق الوقائية لحماية الأضراس الجديدة من التسوس',
      'علاجات خاصة للأسنان اللبنية للحفاظ على المسافات الطبيعية',
      'تعليم مبسط وممتع لطرق تنظيف الأسنان الصحيحة في المنزل'
    ],
    durationEn: '30 – 40 minutes',
    durationAr: '30 إلى 40 دقيقة',
    idealForEn: 'Children from age 1 through teenage years.',
    idealForAr: 'الأطفال من عمر سنة وحتى مرحلة المراهقة.',
    image: IMAGES.lounge,
  },
  {
    id: 'oral-surgery-wisdom',
    category: 'surgery',
    titleEn: 'Oral Surgery & Wisdom Tooth Removal',
    titleAr: 'جراحة الفم والخلع الجراحي لضرس العقل',
    subtitleEn: 'Safe, minimally traumatic extractions with swift post-operative healing.',
    subtitleAr: 'خلع جراحي دقيق وآمن مع تقنيات شفاء سريعة وراحة تامة بعد الإجراء.',
    descriptionEn: 'When wisdom teeth are impacted, causing recurrent pericoronitis, cyst development, or crowd pressure on front teeth, our surgical team performs atraumatic removal with advanced local anesthesia and suture techniques.',
    descriptionAr: 'عند انحشار ضرس العقل أو تسببه بالتهابات متكررة وضغط على الأسنان المجاورة، يقوم فريقنا بإجراء الخلع الجراحي الدقيق والمدروس بأعلى معايير الأمان والتخدير لتقليل التورم وسرعة الشفاء.',
    benefitsEn: [
      'Detailed 3D radiographic assessment of nerve proximity',
      'Atraumatic surgical technique preserves surrounding bone',
      'Targeted anti-inflammatory post-care guidance',
      'Relieves jaw pain, headaches, and tooth shifting'
    ],
    benefitsAr: [
      'تقييم شعاعي دقيق يوضح علاقة الجذور بالقنوات العصبية',
      'تقنيات جراحية ناعمة تحافظ على نسيج العظم وتسرع التئام اللثة',
      'بروتوكول دوائي وإرشادات منزلية واضحة لتفادي أي مضاعفات',
      'التخلص من آلام الفك والصداع وضغط الأسنان المتزاحمة'
    ],
    durationEn: '40 – 60 minutes',
    durationAr: '40 إلى 60 دقيقة',
    idealForEn: 'Impacted or painful wisdom teeth, non-restorable roots, or orthodontic extractions.',
    idealForAr: 'ضروس العقل المطمورة أو المؤلمة والجذور غير القابلة للترميم.',
    image: IMAGES.restorative,
  },
];

export const CLINIC_VALUES = [
  {
    number: '01',
    titleEn: 'Thoughtful Patient Comfort',
    titleAr: 'راحة المريض أولاً',
    descEn: 'From our serene Um Al Hassam lounge to gentle digital anesthesia, every detail is engineered to make your appointment tranquil, unhurried, and painless.',
    descAr: 'من استراحة الاستقبال الهادئة بأم الحصم وحتى بروتوكولات التخدير الرقمي الخفيف، صُممت كل تفصيلة لتمنحك زيارة مطمئنة وخالية تماماً من التوتر والألم.',
  },
  {
    number: '02',
    titleEn: 'Advanced Clinical Precision',
    titleAr: 'دقة طبية وتقنيات حديثة',
    descEn: 'We employ low-radiation digital radiography, intraoral optical scanners, and certified ceramic materials to ensure durable, biologically harmonious results.',
    descAr: 'نعتمد على التصوير الإشعاعي الرقمي منخفض الجرعة، والماسحات الضوئية الدقيقة، والمواد الخزفية المعتمدة لضمان نتائج علاجية تدوم طويلاً بانسجام بيولوجي كامل.',
  },
  {
    number: '03',
    titleEn: 'Hospital-Grade Sterilization',
    titleAr: 'تعقيم وفق أعلى المعايير الطبية',
    descEn: 'Sterilization cycles follow strict international autoclaving standards, packaged single-use instrument barriers, and continuous air purification.',
    descAr: 'تخضع جميع الأدوات لدورات تعقيم أوتوكلاف مشددة وفق أحدث البروتوكولات الصحية الدولية، مع حواجز وقاية معقمة ذات استخدام فردي وتطهير مستمر للغرف.',
  },
  {
    number: '04',
    titleEn: 'Honest, Transparent Treatment',
    titleAr: 'شفافية وصدق في خطط العلاج',
    descEn: 'No confusing medical jargon or unnecessary procedures. We present clear treatment options, transparent timelines, and insurance coordination before starting.',
    descAr: 'خطط علاجية واضحة ومباشرة دون أي إجراءات غير ضرورية. نوضح لك كافة الخيارات والمراحل الزمنية وتفاصيل التغطية التأمينية بكل شفافية ومصداقية.',
  },
];

export const CLINIC_STATS = [
  {
    valueEn: '28.2K+',
    valueAr: '+28.2 ألف',
    labelEn: 'Community of Smiles in Bahrain',
    labelAr: 'متابع ومريض يثقون برعايتنا',
  },
  {
    valueEn: '1,700+',
    valueAr: '+1,700',
    labelEn: 'Documented Clinical Cases',
    labelAr: 'حالة علاجية وتوثيق سريري',
  },
  {
    valueEn: '100%',
    valueAr: '100%',
    labelEn: 'Hospital-Grade Sterilization Standard',
    labelAr: 'معايير تعقيم طبي فندقي صارم',
  },
  {
    valueEn: '2',
    valueAr: '2',
    labelEn: 'Direct Clinic Phone Lines in Manama',
    labelAr: 'خطوط هاتفية مباشرة للتواصل السريع',
  },
];

export const DOCTORS = [
  {
    id: 'dr-ahmed-alshaikh',
    nameEn: 'Dr. Ahmed Al-Shaikh',
    nameAr: 'د. أحمد الشيخ',
    roleEn: 'Consultant Dental Surgeon & Implantologist',
    roleAr: 'استشاري جراحة وزراعة الأسنان',
    licenseEn: 'NHRA Licensed Consultant · Bahrain',
    licenseAr: 'استشاري مرخص من الهيئة الوطنية للمهن الصحية (نهرا)',
    specialtiesEn: ['Dental Implants & Bone Preservation', 'Complex Oral Rehabilitation', 'Surgical Wisdom Extractions'],
    specialtiesAr: ['زراعة الأسنان وحماية عظام الفك', 'إعادة تأهيل الابتسامة الشاملة', 'الخلع الجراحي لضروس العقل'],
    bioEn: 'Senior consultant specializing in precision surgical implants and full-arch restorative dentistry with over 15 years of clinical practice in Bahrain.',
    bioAr: 'استشاري أول متخصص في زراعة الأسنان الجراحية الدقيقة وإعادة التأهيل الشامل لابتسامة طبيعية متينة بخبرة تزيد عن 15 عاماً في البحرين.',
    image: IMAGES.doctorAhmed,
  },
  {
    id: 'dr-zainab',
    nameEn: 'Dr. Zainab',
    nameAr: 'د. زينب',
    roleEn: 'Specialist Cosmetic & Pediatric Dentist',
    roleAr: 'أخصائية تجميل الأسنان ورعاية الأطفال',
    licenseEn: 'NHRA Licensed Specialist · Bahrain',
    licenseAr: 'أخصائية مرخصة من الهيئة الوطنية للمهن الصحية (نهرا)',
    specialtiesEn: ['Cosmetic Porcelain Veneers (E-Max)', 'Gentle Pediatric Dentistry', 'Advanced Laser Whitening'],
    specialtiesAr: ['قشور الخزف التجميلية (E-Max)', 'طب أسنان الأطفال الودود', 'تبييض الأسنان بالليزر والضوء البارد'],
    bioEn: 'Dedicated to artistic digital smile design and creating fear-free, welcoming dental experiences for children and cosmetic patients.',
    bioAr: 'متخصصة في تصميم الابتسامة الرقمي وصناعة تجارب علاجية هادئة محببة للأطفال والمقبلين على تجميل الأسنان دون أي خوف.',
    image: IMAGES.doctorZainab,
  },
];

export const ACCREDITATION_INFO = {
  titleEn: 'Official NHRA National Accreditation',
  titleAr: 'الاعتماد الوطني الرسمي من نهرا (NHRA)',
  quoteEn: 'Thanks to Allah, today at Zahn Clinic we received the National Accreditation from NHRA. Special thanks to Dr. Ahmed Al-Ansari.',
  quoteAr: 'بفضل من الله حصلنا في عيادة زان على الإعتماد الوطني من نهرا 👌🏻 شكر خاص الى الدكتور أحمد الأنصاري 🌹',
  descriptionEn: 'The National Health Regulatory Authority (NHRA) accreditation represents the gold standard in healthcare safety, hygiene, and patient-centered clinical governance in the Kingdom of Bahrain.',
  descriptionAr: 'يعد اعتماد الهيئة الوطنية لتنظيم المهن والخدمات الصحية (نهرا) أعلى وسام ثقة واعتراف وطني بجودة الرعاية الطبية، وصرامة التعقيم، وسلامة المرضى في مملكة البحرين.',
  image: IMAGES.nhraAccreditation,
  badgeEn: 'NHRA National Accreditation · Bahrain',
  badgeAr: 'اعتماد وطني رسمي · مملكة البحرين',
};

export const OWNER_INFO = {
  nameEn: 'Dr. Ahmed',
  nameAr: 'د. أحمد',
  titleEn: 'Founder & Clinical Director',
  titleAr: 'المؤسس والمدير الطبي للمركز',
  captionEn: 'Always dedicated and actively answering your dental questions and guiding treatment plans with absolute clinical transparency.',
  captionAr: 'د. أحمد دائماً وأبداً ما يقصر، يتابع استفساراتكم أولاً بأول ويشرف شخصياً على أدق تفاصيل رعايتكم وخططكم العلاجية.',
  image: IMAGES.ownerDrAhmed,
  directInstagramPost: 'https://www.instagram.com/p/DeEWD0SOAtB/',
};
