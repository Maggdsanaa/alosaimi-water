export const COMPANY_INFO = {
  name: "العصيمي للمياه",
  nameEn: "Al-Osaimi Water",
  tagline: "مياه نقية توصل إلى بابك",
  description: "شركة رائدة في توصيل مياه الوايتات ومشاريع المياه المنزلية بصنعاء",
  phone: "+967700000000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "967700000000",
  email: "info@alosaimi-water.com",
  address: "صنعاء - أمانة العاصمة، الجمهورية اليمنية",
  workingHours: "24/7 - على مدار الساعة",
  coordinates: { lat: 15.3694, lng: 44.191 },
};

export const NAV_LINKS = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "اطلب الآن", href: "#order" },
  { label: "تواصل معنا", href: "#contact" },
];

export const SERVICES = [
  {
    icon: "🚛",
    title: "توصيل مياه الوايتات",
    description: "نوفر خدمة توصيل مياه الوايتات لجميع أحياء أمانة العاصمة بأحجام متعددة.",
    features: [
      "أحجام متنوعة (2000/4000/8000 لتر)",
      "توصيل سريع خلال ساعات",
      "مياه نظيفة ومفحوصة",
      "أسعار تنافسية",
    ],
  },
  {
    icon: "🏠",
    title: "مشروع المياه المنزلي",
    description: "خدمة اشتراك شهري لتوصيل المياه بشكل منتظم لبيتك بأسعار مخفضة.",
    features: [
      "اشتراك شهري ثابت",
      "جدول توصيل منتظم",
      "توفير في التكلفة",
      "أولوية في الخدمة",
    ],
  },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "عميل راضٍ" },
  { value: 15000, suffix: "+", label: "عملية توصيل" },
  { value: 24, suffix: "/7", label: "خدمة متواصلة" },
  { value: 10, suffix: "+", label: "سنوات خبرة" },
];

export const TESTIMONIALS = [
  { name: "أحمد الحداد", area: "حدة", text: "خدمة ممتازة وتوصيل سريع" },
  { name: "سالم المطري", area: "الصافية", text: "أسعار مناسبة ومياه نظيفة" },
  { name: "منى الشرعبي", area: "السبعين", text: "أفضل شركة تعاملت معها" },
  { name: "خالد اليافعي", area: "الحصبة", text: "التزام بالمواعيد ومصداقية" },
  { name: "فاطمة الأنسي", area: "شعوب", text: "مشروع المياه المنزلي وفر علي الكثير" },
];

export const FAQS = [
  { question: "ما هي المناطق التي تخدمونها؟", answer: "نغطي جميع أحياء أمانة العاصمة صنعاء." },
  { question: "كم يستغرق التوصيل؟", answer: "من ساعة إلى 3 ساعات حسب موقعك." },
  { question: "هل المياه مفحوصة؟", answer: "نعم، المياه مفحوصة دورياً." },
  { question: "كيف أشترك في المشروع المنزلي؟", answer: "تواصل معنا عبر واتساب." },
  { question: "ما هي طرق الدفع؟", answer: "كاش، تحويل بنكي، ومحافظ إلكترونية." },
  { question: "هل هناك خصومات؟", answer: "نعم، للاشتراكات والطلبات الكبيرة." },
];

export const HOW_IT_WORKS = [
  { icon: "📱", title: "اطلب عبر واتساب", description: "ابدأ طلبك بسهولة من جوالك" },
  { icon: "📍", title: "حدد موقعك على الخريطة", description: "اختر موقعك بدقة لتسريع التوصيل" },
  { icon: "💧", title: "اختر الخدمة والكمية", description: "حدد الخدمة والكمية المناسبة" },
  { icon: "🚚", title: "استلم مياهك", description: "نصل إليك في الوقت المحدد" },
];
