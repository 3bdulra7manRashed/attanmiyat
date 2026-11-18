export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface EntityCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageMaxWidthPercent: number;
  cardPadding: string;
  href: string;
  buttonText: string;
  buttonGradient: string;
}

export interface IconFeatureItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  marginTop?: string;
}

export interface ValueCardItem {
  id: string;
  iconHex: string;
  title: string;
  paragraphs: string[];
  padding: string;
  lineHeight: string;
  textAlign: "center" | "justify";
  paragraphPaddingBottom?: string;
}

export interface CounterItem {
  value: number;
  title: string;
  titleLineHeight?: string;
}

export interface MasaratServiceSubgroup {
  heading: string;
  items: string[];
}

export interface MasaratServiceColumn {
  title: string;
  image: string;
  subgroups: MasaratServiceSubgroup[];
}

export interface StandardServiceColumn {
  title: string;
  titleTag: "h4" | "h1";
  titleFontSize: string;
  image: string;
  items: string[];
  hasTrailingSpace?: boolean;
}

export const siteMetadata = {
  title: "شركة التنميات القابضة",
  description: "نحو عمل مؤسسي مستدام",
  favicon32: "/images/favicon-32x32.png",
  favicon192: "/images/favicon-192x192.png",
};

export const headerContent = {
  logo: "/images/attanmiyat_logo_wide.png",
  logoAlt: "شركة التنميات القابضة",
  navItems: [
    { id: "menu-item-48", label: "المسارات الرائدة", href: "#masaratsa" },
    { id: "menu-item-49", label: "النخبة الادارية", href: "#annokhbah" },
    { id: "menu-item-50", label: "مركز رواد القيادة", href: "#rowad" },
  ] as NavItem[],
};

export const heroContent = {
  title: "شركة التنميات القابضة",
  subtitle: "نحو عمل مؤسسي مستدام",
  badgeImage: "/images/AttanmiyatLogoWhiteBG.png",
  badgeAlt: "شركة التنميات القابضة",
};

export const entitiesSectionContent = {
  heading: "كيانات متخصصة في القطاع الخيري",
  bgDecoration: "/images/Image-1-min.png",
  // Visual LEFT to RIGHT column order matching original layout
  cards: [
    {
      id: "rowad-card",
      title: "رواد القيادة",
      description: "مركز يعنى بتطوير القيادات من خلال منهجيات عالمية معتمدة",
      image: "/images/Rowad-logo-min.png",
      imageAlt: "رواد القيادة",
      imageMaxWidthPercent: 41,
      cardPadding: "40px 47px 70px 47px",
      href: "#rowad",
      buttonText: "تعرف أكثر",
      buttonGradient: "linear-gradient(214deg, #ff3019 0%, #bfab28 100%)",
    },
    {
      id: "annokhbah-card",
      title: "النخبة الإدارية",
      description:
        "مركز يعمل في تصميم وتنفيذ البرامج التدريبية، ودراسة الاحتياج التدريبي للموارد البشرية",
      image: "/images/alnnokhba-logo-min.png",
      imageAlt: "النخبة الإدارية",
      imageMaxWidthPercent: 63,
      cardPadding: "56px 47px 40px 47px",
      href: "#annokhbah",
      buttonText: "تعرف أكثر",
      buttonGradient: "linear-gradient(214deg, #2819ff 0%, #2ca3d6 100%)",
    },
    {
      id: "masaratsa-card",
      title: "المسارات الرائدة",
      description: "مكتب متخصص في الاستشارات الادارية وتقنية المعلومات",
      image: "/images/Almasarat-Logo.png",
      imageAlt: "المسارات الرائدة",
      imageMaxWidthPercent: 75,
      cardPadding: "40px 47px 62px 47px",
      href: "#masaratsa",
      buttonText: "تعرف أكثر",
      buttonGradient: "linear-gradient(214deg, #1b5b09 0%, #92ba27 100%)",
    },
  ] as EntityCardItem[],
};

export const whoWeServeContent = {
  heading: "من نخدم",
  // Visual LEFT to RIGHT column order
  items: [
    {
      id: "social-pioneers",
      title: "رواد العمل الاجتماعي",
      image: "/images/icon-4.png",
    },
    {
      id: "innovative-projects",
      title: "المشروعات الجديدة والمبتكرة",
      image: "/images/icon-2.png",
    },
    {
      id: "charity-leaders",
      title: "قيادات العمل الخيري",
      image: "/images/icon-6.png",
    },
    {
      id: "sector-staff",
      title: "منسوبو القطاع الخيري",
      image: "/images/icon-5.png",
    },
    {
      id: "existing-charities",
      title: "المنظمات الخيرية القائمة",
      image: "/images/icon-1.png",
    },
  ] as IconFeatureItem[],
};

export const distinguishesUsContent = {
  heading: "ما الذي يميزنا",
  // Visual LEFT to RIGHT column order
  items: [
    {
      id: "empowerment",
      title: "التمكين",
      description: "نقل الخبرات وتمكين العملاء",
      image: "/images/icon-11-dist.png",
    },
    {
      id: "accreditation",
      title: "الاعتماد",
      description: "فريق يملك خبرات واعتمادات عالمية",
      image: "/images/icon-8.png",
    },
    {
      id: "integration",
      title: "التكامل",
      description: "خدمات ومكونات متكاملة",
      image: "/images/icon-7.png",
    },
    {
      id: "support",
      title: "الدعم",
      description: "متابعة وإشراف فني بعد تقديم الخدمة",
      image: "/images/icon-12-dist.png",
      marginTop: "-11px",
    },
    {
      id: "methodology",
      title: "المنهجية",
      description: "العمل بمنهجيات علمية مجربة",
      image: "/images/icon-9.png",
      marginTop: "-11px",
    },
  ] as IconFeatureItem[],
};

export const valuesVisionMissionContent = {
  // Visual LEFT to RIGHT column order
  cards: [
    {
      id: "values",
      iconHex: "\ue606",
      title: "قيمنا",
      paragraphs: [
        "نقدم خدمات بمهنية واحترافية",
        "نعمل بمسؤولية تجاه عملائنا",
        "نعمل بشراكة مع عملائنا",
      ],
      padding: "20px 26px 10px 26px",
      lineHeight: "1em",
      textAlign: "center",
      paragraphPaddingBottom: "14px",
    },
    {
      id: "vision",
      iconHex: "\ue0ef",
      title: "رؤيتنا",
      paragraphs: [
        "منظومة تكاملية فاعلية في تحقيق المؤسسية والاستدامة لمستهدفيها",
      ],
      padding: "20px 26px 38px 26px",
      lineHeight: "2em",
      textAlign: "center",
      paragraphPaddingBottom: "0px",
    },
    {
      id: "mission",
      iconHex: "\ue010",
      title: "رسالتنا",
      paragraphs: [
        "مجموعة غير هادفة للربح تدعم تحقيق المؤسسية والاستدامة في قطاع العمل الخيري عبر منظومة من الكيانات الفاعلة",
      ],
      padding: "20px 26px 10px 26px",
      lineHeight: "1.7em",
      textAlign: "justify",
      paragraphPaddingBottom: "14px",
    },
  ] as ValueCardItem[],
};

export const certificationsContent = {
  icon: "/images/icon-8.png",
  heading: "الاعتمادات والجوائز",
  image: "/images/Certifications.png",
  imageAlt: "الاعتمادات والجوائز",
};

export const masaratContent = {
  id: "masaratsa",
  logo: "/images/Almasarat-Logo-1.png",
  logoAlt: "المسارات الرائدة",
  logoWidth: 352,
  counterColor: "#88a646",
  borderColor: "#88a646",
  // Visual LEFT to RIGHT
  counters: [
    { value: 150, title: "مشروع", titleLineHeight: "1.9em" },
    { value: 350, title: "استشارة", titleLineHeight: "1.9em" },
    { value: 70, title: "جهة مستفيدة", titleLineHeight: "1.9em" },
    { value: 10, title: "أعوام من العطاء والتطوير", titleLineHeight: "1.9em" },
  ] as CounterItem[],
  servicesHeading: "خدماتنا",
  // Visual LEFT to RIGHT
  serviceColumns: [
    {
      title: "الاستشارات التقنية",
      image: "/images/icon-14.png",
      subgroups: [
        {
          heading: "الاستشارات",
          items: ["– بناء استراتيجية التقنية", "– بناء وتطوير أنظمة ERP"],
        },
        {
          heading: "الحلول التقنية",
          items: [
            "– أنظمة Workflow",
            "– أنظمة إدارة المشاريع",
            "– أنظمة إدارة الاستراتيجية",
          ],
        },
        {
          heading: "التحليل والتقييم",
          items: [
            "– الجاهزية للتحول التقني",
            "– تقييم الواقع التقني في المنظمات",
          ],
        },
      ],
    },
    {
      title: "الاستشارات الإدارية",
      image: "/images/icon-13.png",
      subgroups: [
        {
          heading: "البناء والتطوير",
          items: [
            "– الخطط الاستراتيجية",
            "– أنظمة إدارة الأداء المؤسسي",
            "– الأوصاف الوظيفية",
            "– اللوائح التنظيمية",
            "– التأهيل للتميز المؤسسي",
          ],
        },
        {
          heading: "الابتكار والتحسين",
          items: ["– ابتكار مشروعات جديدة", "– تطوير الخدمات والمنتجات"],
        },
        {
          heading: "التحليل والتقييم",
          items: ["– الواقع المؤسسي", "– تقييم مستوى التميز المؤسسي"],
        },
      ],
    },
  ] as MasaratServiceColumn[],
  ctaText: "تفضل بزيارة موقع المسارات الرائدة",
  ctaHref: "http://masaratsa.com/",
  ctaGradient: "linear-gradient(214deg, #1b5b09 0%, #92ba27 100%)",
};

export const annokhbahContent = {
  id: "annokhbah",
  logo: "/images/alnnokhba-logo-min.png",
  logoAlt: "النخبة الإدارية",
  logoWidth: 256,
  counterColor: "#bf3228",
  borderColor: "#0c71c3",
  // Visual LEFT to RIGHT
  counters: [
    { value: 5000, title: "برنامج تدريبي", titleLineHeight: "1em" },
    { value: 1200, title: "متدرب سنويًا", titleLineHeight: "1em" },
    { value: 2500, title: "جهة مستفيدة", titleLineHeight: "1em" },
    { value: 20, title: "عام من الخبرة والتميز", titleLineHeight: "1em" },
  ] as CounterItem[],
  servicesHeading: "خدماتنا",
  // Visual LEFT to RIGHT
  serviceColumns: [
    {
      title: "التحليل والتقييم",
      titleTag: "h4",
      titleFontSize: "26px",
      image: "/images/icon-12-service.png",
      items: ["– تحليل الجدارات الوظيفية"],
    },
    {
      title: "التدريب والتثقيف",
      titleTag: "h4",
      titleFontSize: "26px",
      image: "/images/icon-11-service.png",
      items: [
        "– تنفيذ البرامج التدريبية.",
        "– إعداد وتنفيذ الملتقيات والبرامج التثقيفية.",
        "– برامج التدريب الخاصة بالنخب والكفاءات المتخصصة.",
      ],
    },
    {
      title: "الاستشارات",
      titleTag: "h4",
      titleFontSize: "26px",
      image: "/images/icon-10.png",
      items: [
        "– ابتكار تصميم برامج التدريب والتطوير",
        "– دراسة الاحتياج التدريبي للموظفين وفق منهجيات علمية.",
      ],
    },
  ] as StandardServiceColumn[],
  ctaText: "تفضل بزيارة موقع النخبة الإدارية",
  ctaHref: "http://annokhbah.com/",
  ctaGradient: "linear-gradient(214deg, #2819ff 0%, #2ca3d6 100%)",
};

export const rowadContent = {
  id: "rowad",
  logo: "/images/Rowad-logo-min.png",
  logoAlt: "مركز رواد القيادة",
  logoWidth: 184,
  counterColor: "#db6200",
  borderColor: "#e58900",
  // Visual LEFT to RIGHT
  counters: [
    { value: 10, title: "برامج متخصصة", titleLineHeight: "1.9em" },
    { value: 300, title: "مستفيد", titleLineHeight: "1.9em" },
    { value: 85, title: "جهة مستفيدة", titleLineHeight: "1.9em" },
    { value: 4, title: "أعوام من التركيز والتأثير", titleLineHeight: "1.9em" },
  ] as CounterItem[],
  servicesHeading: "خدماتنا",
  // Visual LEFT to RIGHT
  serviceColumns: [
    {
      title: "التمكين الشخصي",
      titleTag: "h1",
      titleFontSize: "26px",
      image: "/images/icon-15.png",
      items: [
        "– برامج المتابعة الفردية لتعزيز السلوكيات القيادة.",
        "– جلسات التمكين الشخصي للقيادات الفاعلة.",
      ],
    },
    {
      title: "برامج القيادات",
      titleTag: "h1",
      titleFontSize: "26px",
      image: "/images/icon-16.png",
      items: [
        " – تطوير المهارات والسلوكيات لدى القيادات العاملة.",
        "– تأهيل الصف الثاني للأدوار القيادية.",
        "– إعداد وتنفيذ الملتقيات والبرامج التثقيفية في القيادة.",
        "– برامج التطوير القيادية للكفاءات المتخصصة. ",
      ],
    },
    {
      title: "المقاييس العلمية وأدوات التحليل",
      titleTag: "h1",
      titleFontSize: "20px",
      image: "/images/icon-17.png",
      items: [
        "– على المستوى الشخصي أو فرق العمل بالمنظمات.",
        "– تحليل الأنماط الشخصية.",
        "– تحليل الأنماط القيادية.",
        "– تحليل نقاط القوة والمواهب.",
      ],
    },
  ] as StandardServiceColumn[],
  ctaText: "تفضل بزيارة موقع مركز رواد القيادة",
  ctaHref: "http://rowad-q.com",
  ctaGradient: "linear-gradient(214deg, #ff3019 0%, #bfab28 100%)",
};

export const clientsContent = {
  images: [
    { src: "/images/Client-1-min.jpg", alt: "من عملائنا - المؤسسات المانحة والأوقاف", width: 1050 },
    { src: "/images/Client-2-min.jpg", alt: "من عملائنا", width: 985 },
    { src: "/images/Client-3-min.jpg", alt: "من عملائنا", width: 930 },
  ],
};

export const footerContent = {
  text: "للتواصل عبر البريد: info@attanmiyat.com وعبر الجوال: 0539456419",
};
