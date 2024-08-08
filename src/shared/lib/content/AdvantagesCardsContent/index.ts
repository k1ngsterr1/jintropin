import builder from "@assets/Advantages/bolshoiNigga.png";
import sport from "@assets/Advantages/sport.png";
import fighter from "@assets/Advantages/fighter.png";
import karinab_XXX from "@assets/Advantages/molodaya.png";
import { Language } from "i18n";

interface Item {
  id: number;
  image: string;
  number: string;
  title: string;
}

export const items: Record<Language, Item[]> = {
  ru: [
    {
      id: 1,
      image: builder,
      number: "01",
      title: "БОДИБИЛДИНГ",
    },
    {
      id: 2,
      image: sport,
      number: "02",
      title: "НАЧИНАЮЩИЙ СПОРТСМЕН",
    },
    {
      id: 3,
      image: fighter,
      number: "03",
      title: "БОЕВЫЕ ИССКУСТВА",
    },
    {
      id: 4,
      image: karinab_XXX,
      number: "04",
      title: "АНТИ-AGE ТЕРАПИЯ",
    },
  ],
  en: [
    {
      id: 1,
      image: builder,
      number: "01",
      title: "BODYBUILDING",
    },
    {
      id: 2,
      image: sport,
      number: "02",
      title: "BEGINNER ATHLETE",
    },
    {
      id: 3,
      image: fighter,
      number: "03",
      title: "MARTIAL ARTS",
    },
    {
      id: 4,
      image: karinab_XXX,
      number: "04",
      title: "ANTI-AGE THERAPY",
    },
  ],
};
