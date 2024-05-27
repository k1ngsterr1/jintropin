import Runner from "@assets/Advantages/Advantages__Runner.png";
import Fighter from "@assets/Advantages/Advantages__fighter.png";
import Bodybuilder from "@assets/Advantages/Advantages__bodybuilder.png";
import Girl from "@assets/Advantages/Advantages__girl.png";

export interface CardData {
    imgSrc: string;
    text: string;
    buttonClass: string;
    textClass: string;
}

export const cardsData: CardData[] = [
    {
        imgSrc: Runner,
        text: 'Начинающий спортсмен',
        buttonClass: "ml-10",
        textClass: 'mt-12'
    },
    {
        imgSrc: Fighter,
        text: 'Боец ММА',
        buttonClass: 'ml-12 mt-32',
        textClass: 'mt-28'
    },
    {
        imgSrc: Bodybuilder,
        text: 'Бодибилдер',
        buttonClass: "z-10 ml-6 mt-16",
        textClass: 'mt-12 w-[79%] ml-7'
    },
    {
        imgSrc: Girl,
        text: 'Омоложение',
        buttonClass: "relative right-10 mt-28",
        textClass: 'mt-10'
    }
];

