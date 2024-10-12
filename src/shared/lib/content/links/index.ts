import { Language } from "i18n";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "+7 777 288 6600", href: "tel:+77772886600" },
];

export const navigation: Record<Language, NavLink[]> = {
  ru: [
    // { label: "ЧТО ТАКОЕ ДЖИНТРОПИН?", href: "/main" },
    { label: "ВОПРОС/ОТВЕТ", href: "questions" },
    { label: "ПРОВЕРИТЬ ОРИГИНАЛЬНОСТЬ", href: "/verification" },
    { label: "КОНТАКТЫ", href: "/contacts" },
  ],
  en: [
    // { label: "WHAT IS JINTROPIN?", href: "/main" },
    { label: "Q/A", href: "questions" },
    { label: "VERIFY AUTHENTICITY", href: "/verification" },
    { label: "CONTACTS", href: "/contacts" },
  ],
};
