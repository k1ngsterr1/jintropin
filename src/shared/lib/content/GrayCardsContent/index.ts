import muscle from "@assets/Advantages/muscle.svg";
import pills from "@assets/Advantages/pills.svg";
import shield from "@assets/Advantages/shield.svg";
import thunder from "@assets/Advantages/thunder.svg";
import { Language } from "i18n";
interface CardItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const cardsData: Record<Language, CardItem[]> = {
  ru: [
    {
      id: 1,
      image: muscle,
      title: "Ускоряет рост мышц и сжигание жира",
      description:
        "Усиливает синтез белка, замедляет его распад и способствует снижению подкожного жира, обладает анаболическим и антикатаболическим действием",
    },
    {
      id: 2,
      image: thunder,
      title: "Увеличивает силу и выносливость",
      description:
        "Стимулирует липолиз жировой ткани, усвоение минералов, улучшает репродуктивную функцию",
    },
    {
      id: 3,
      image: pills,
      title: "Не распознают допинг-контроль",
      description:
        "Улучшает спортивные показатели, при этом не определяется допинг-тестами при отмене за пару дней до сдачи",
    },
    {
      id: 4,
      image: shield,
      title: "Укрепляет иммунитет",
      description:
        "Уменьшает воспалительные процессы в организме, помогает снизить болевые ощущения, ускорить восстановление и поддерживать иммунитет",
    },
  ],
  en: [
    {
      id: 1,
      image: muscle,
      title: "Accelerates muscle growth and fat burning",
      description:
        "Enhances protein synthesis, slows down its breakdown, and helps reduce subcutaneous fat, has anabolic and anti-catabolic effects",
    },
    {
      id: 2,
      image: thunder,
      title: "Increases strength and endurance",
      description:
        "Stimulates lipolysis of adipose tissue, mineral absorption, and improves reproductive function",
    },
    {
      id: 3,
      image: pills,
      title: "Not detected by doping control",
      description:
        "Improves athletic performance, while not being detected by doping tests if stopped a couple of days before testing",
    },
    {
      id: 4,
      image: shield,
      title: "Strengthens immunity",
      description:
        "Reduces inflammatory processes in the body, helps reduce pain, speeds up recovery, and supports immunity",
    },
  ],
};

export default cardsData;
