import WhiteDjine from '@assets/Usage/Usage__Djine.png';
import YellowDjine from '@assets/Usage/Usage__Yellow__djine.png';


export interface ComponentData {
    title: string;
    backgroundImage: string;
    buttonLabel: string;
    buttonUrl: string;
    separatorType: 'yellow' | 'blue';
}

export const videoCardsData: ComponentData[] = [
    {
        title: "Первый компонент",
        backgroundImage: WhiteDjine,
        buttonLabel: "Кнопка 1",
        buttonUrl: "/pizda",
        separatorType: 'yellow'
    },
    {
        title: "Второй компонент",
        backgroundImage: YellowDjine,
        buttonLabel: "Кнопка 2",
        buttonUrl: "/pizda",
        separatorType: 'blue'
    },
    {
        title: "Третий компонент",
        backgroundImage: WhiteDjine,
        buttonLabel: "Кнопка 1",
        buttonUrl: "/pizda",
        separatorType: 'yellow'
    },
];
