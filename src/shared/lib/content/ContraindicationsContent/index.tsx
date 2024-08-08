import circle from "@assets/Contraindications/circle.svg";
import { Language } from "i18n";
interface CardItem {
  id: number;
  img: string;
  title: string;
  description: string;
}

export const cardsData: Record<Language, CardItem[]> = {
  ru: [
    {
      id: 1,
      img: circle,
      title: "Непереносимость",
      description:
        "Индивидуальная непереносимость соматотропина, возникновение аллергических реакций на компоненты препарата;",
    },
    {
      id: 2,
      img: circle,
      title: "Заболевания и беременность",
      description:
        "Опухолевые заболевания в активной фазе; Беременность и кормление грудью;",
    },
    {
      id: 3,
      img: circle,
      title: "Послеоперационный период",
      description:
        "Очень осторожно следует применять препарат больным сахарным диабетом, внутричерепной гипертензией, гипотиреозом;",
    },
  ],
  en: [
    {
      id: 1,
      img: circle,
      title: "Intolerance",
      description:
        "Individual intolerance to somatotropin, occurrence of allergic reactions to the components of the drug;",
    },
    {
      id: 2,
      img: circle,
      title: "Diseases and Pregnancy",
      description:
        "Tumor diseases in the active phase; Pregnancy and breastfeeding;",
    },
    {
      id: 3,
      img: circle,
      title: "Postoperative Period",
      description:
        "The drug should be used with great caution in patients with diabetes mellitus, intracranial hypertension, hypothyroidism;",
    },
  ],
};

export default cardsData;
