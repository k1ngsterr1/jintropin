import { Language } from "i18n";

interface BannerItem {
  id: number;
  text: string;
}

export const bannerData: Record<Language, BannerItem[]> = {
  ru: [
    { id: 1, text: "КОНСУЛЬТАЦИЯ" },
    { id: 2, text: "КОНСУЛЬТАЦИЯ" },
    { id: 3, text: "КОНСУЛЬТАЦИЯ" },
    { id: 4, text: "КОНСУЛЬТАЦИЯ" },
    { id: 5, text: "КОНСУЛЬТАЦИЯ" },
    { id: 6, text: "КОНСУЛЬТАЦИЯ" },
  ],
  en: [
    { id: 1, text: "CONSULTATION" },
    { id: 2, text: "CONSULTATION" },
    { id: 3, text: "CONSULTATION" },
    { id: 4, text: "CONSULTATION" },
    { id: 5, text: "CONSULTATION" },
    { id: 6, text: "CONSULTATION" },
  ],
};

export default bannerData;
