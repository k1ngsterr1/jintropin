import { HorizontalRule } from "@ui/Separator";

import WhiteDjine from '@assets/Usage/Usage__Djine.png'
import YellowDjine from '@assets/Usage/Usage__Yellow__djine.png'

export interface ComponentData {
    title: string;
    backgroundImage: string;
    buttonLabel: string;
    buttonUrl: string;
}

export const videoCardsData: ComponentData[] = [
    {
        title: "Первый компонент",
        backgroundImage: WhiteDjine,
        buttonLabel: "Кнопка 1",
        buttonUrl: "/pizda"
    },
    {
        title: "Второй компонент",
        backgroundImage: YellowDjine,
        buttonLabel: "Кнопка 2",
        buttonUrl: "/pizda"
    },
];
