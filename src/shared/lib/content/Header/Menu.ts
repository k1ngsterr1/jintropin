import { Language } from "i18n";

interface Link {
  text: string;
  href: string;
}
export const links: Record<Language, Link[]> = {
  ru: [
    {
      text: "Отзывы",
      href: "/feedback",
    },
    {
      text: "Преимущества",
      href: "/advantages",
    },
    {
      text: "Сертификат",
      href: "/certificate",
    },
    {
      text: "Основное",
      href: "/home",
    },
    {
      text: "Контакты",
      href: "/contacts",
    },
    {
      text: "Противопоказания",
      href: "/contraindications",
    },
    {
      text: "Проверка",
      href: "/verification",
    },
    {
      text: "Вопросы",
      href: "/questions",
    },
  ],
  en: [
    {
      text: "Feedback",
      href: "/feedback",
    },
    {
      text: "Advantages",
      href: "/advantages",
    },
    {
      text: "Certificate",
      href: "/certificate",
    },
    {
      text: "Home",
      href: "/home",
    },
    {
      text: "Contacts",
      href: "/contacts",
    },
    {
      text: "Contraindications",
      href: "/contraindications",
    },
    {
      text: "Verification",
      href: "/verification",
    },
    {
      text: "Questions",
      href: "/questions",
    },
  ],
};
