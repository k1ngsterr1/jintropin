import WhiteDjine from "@assets/Usage/Usage__Djine.png";
import YellowDjine from "@assets/Usage/Usage__Yellow__djine.png";
import { Language } from "i18n";
interface ReelItem {
  id: number;
  separator: string;
  text: string;
  textColor?: string;
  img: string; // Adjust the type if necessary
  buttonColor: "filled" | "outline";
  to: string;
}

export const reelsData: Record<Language, ReelItem[]> = {
  ru: [
    {
      id: 1,
      separator: "#FFF200",
      text: "Почему зарубежные звезды используют гормон роста?",
      img: WhiteDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/Cx76VbEtqz9/?igsh=N3R6NmtzYWJjd24y",
    },
    {
      id: 2,
      separator: "#182F67",
      text: "Джинтропин в соло и медали в бодибилдинге",
      textColor: "#182F67",
      img: YellowDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/C9ClAyjCh7e/?igsh=MWswczAwcHhpZmNuaA==",
    },
    {
      id: 3,
      separator: "#FFF200",
      text: "Можно ли вырасти после 20 лет?",
      img: WhiteDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/p/C57rHe9CI-q/",
    },
    {
      id: 4,
      separator: "#182F67",
      text: "Почему бойцы выбирают Джинтропин?",
      textColor: "#182F67",
      img: YellowDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/C6L9ijFip2F/?igsh=MWpmMnkycGt0MzFtZQ==",
    },
    {
      id: 5,
      separator: "#FFF200",
      text: "Как продлить молодость?",
      img: WhiteDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/C8B5nVUCobL/?igsh=MXZ3Y242NTJuOXl3eQ==",
    },
    {
      id: 6,
      separator: "#182F67",
      text: "Врач-эндокринолог о гормоне роста",
      textColor: "#182F67",
      img: YellowDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/p/C3ALnMICeCN/",
    },
  ],
  en: [
    {
      id: 1,
      separator: "#FFF200",
      text: "Why do international stars use growth hormone?",
      img: WhiteDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/Cx76VbEtqz9/?igsh=N3R6NmtzYWJjd24y",
    },
    {
      id: 2,
      separator: "#182F67",
      text: "Jintropin solo and bodybuilding medals",
      textColor: "#182F67",
      img: YellowDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/C9ClAyjCh7e/?igsh=MWswczAwcHhpZmNuaA==",
    },
    {
      id: 3,
      separator: "#FFF200",
      text: "Is it possible to grow after 20 years?",
      img: WhiteDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/p/C57rHe9CI-q/",
    },
    {
      id: 4,
      separator: "#182F67",
      text: "Why do fighters choose Jintropin?",
      textColor: "#182F67",
      img: YellowDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/C6L9ijFip2F/?igsh=MWpmMnkycGt0MzFtZQ==",
    },
    {
      id: 5,
      separator: "#FFF200",
      text: "How to prolong youth?",
      img: WhiteDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/reel/C8B5nVUCobL/?igsh=MXZ3Y242NTJuOXl3eQ==",
    },
    {
      id: 6,
      separator: "#182F67",
      text: "Endocrinologist on growth hormone",
      textColor: "#182F67",
      img: YellowDjine,
      buttonColor: "filled",
      to: "https://www.instagram.com/p/C3ALnMICeCN/",
    },
  ],
};

export default reelsData;
