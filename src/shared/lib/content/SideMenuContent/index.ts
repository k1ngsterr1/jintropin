export type Language = "en" | "ru";

interface MenuItem {
  name: string;
  href: string;
}

const sideMenuContent: Record<Language, MenuItem[]> = {
  ru: [
    { name: "Отзывы", href: "/feedback" },
    { name: "Преимущества", href: "/advantages" },
    { name: "Сертификат", href: "/certificate" },
    { name: "Основное", href: "/home" },
    { name: "Контакты", href: "/contacts" },
    { name: "Противопоказания", href: "/contraindications" },
    { name: "Проверка", href: "/verification" },
  ],
  en: [
    { name: "Feedback", href: "/feedback" },
    { name: "Advantages", href: "/advantages" },
    { name: "Certificate", href: "/certificate" },
    { name: "Main", href: "/home" },
    { name: "Contacts", href: "/contacts" },
    { name: "Contraindications", href: "/contraindications" },
    { name: "Verification", href: "/verification" },
  ],
};

export default sideMenuContent;
