import { Language } from "i18n";

interface Option {
  id: number;
  options: {
    label: string;
    value: string;
    placeholder: string;
  }[];
}
export const options: Record<Language, Option[]> = {
  ru: [
    {
      id: 1,
      options: [
        {
          label:
            "Джинтропин — это сертифицированный и самый известный препарат среди гормонов роста (Соматропин). Имеет сертификат качества. Не является стероидом или половым гормоном. Не требует ПКТ (послекурсовой терапии).",
          value: "info",
          placeholder: "Что такое Джинтропин?",
        },
      ],
    },
    {
      id: 2,
      options: [
        {
          label:
            "Джинтропин используется для лечения дефицита гормона роста у детей и взрослых, кроме того он позволяет нарастить качественную мышечную массу без эффекта отката, сжечь жир, укрепить кости и связки, а также помогает увеличить выносливость и работоспособность, быстро восстанавливаться и даже продлить молодость.",
          value: "usage",
          placeholder: "Для чего применять гормон роста?",
        },
      ],
    },
    {
      id: 3,
      options: [
        {
          label:
            "Джинтропин (Соматотропин) оказывает мощное анаболическое и антикатаболическое действие, усиливает синтез белка и тормозит его распад, а также способствует снижению отложения подкожного жира и его сгоранию. Гормон роста активирует гиперплазию мышечных волокон — это увеличение количества мышечных волокон сверх генетического предела, за счет этого эффекта после отмены препарата не происходит откат.",
          value: "mechanism",
          placeholder: "Как работает Джинтропин?",
        },
      ],
    },
    {
      id: 4,
      options: [
        {
          label:
            "Рекомендуемый курс составляет 3 месяца, можно продлить до 6 месяцев. Стандартная дозировка может варьироваться, но обычно составляет от 2 до 5 МЕ (международных единиц) в день. Врач может корректировать дозу в зависимости от медицинских показаний и целей.",
          value: "duration",
          placeholder: "Длительность курса и дозировки",
        },
      ],
    },
    {
      id: 5,
      options: [
        {
          label:
            "Видимый результат будет уже после 2-3 недель использования Джинтропина.",
          value: "results",
          placeholder: "Через какое время я увижу результат?",
        },
      ],
    },
    {
      id: 6,
      options: [
        {
          label:
            "Ставить Джинтропин необходимо каждый день в жировую складку на животе, либо в плечо (утром натощак за 2 часа до еды или на ночь перед сном). Для вашего удобства мы записали видеоинструкцию по применению, доступную по ссылке: https://www.youtube.com/watch?v=DeAyA9HO52g",
          value: "application",
          placeholder: "Как использовать Джинтропин?",
        },
      ],
    },
    {
      id: 7,
      options: [
        {
          label:
            "Джинтропин необходимо хранить в холодильнике при температуре от +2 до +8°C, при таком режиме хранения сохраняется стабильность препарата на 36 месяцев. Хранение вне холодильника при комнатной температуре сокращает срок годности гормона роста до 6 месяцев.",
          value: "storage",
          placeholder: "Как хранить препарат?",
        },
      ],
    },
    {
      id: 8,
      options: [
        {
          label:
            "Основные побочные эффекты при использовании гормона роста: отеки, вздутие, мышечные боли, боли в суставах, гипертония. Побочные эффекты носят дозозависимый характер и исчезают в течение 2-3 дней при снижении дозировки.",
          value: "sideEffects",
          placeholder: "Какие побочные эффекты могут возникнуть?",
        },
      ],
    },
    {
      id: 9,
      options: [
        {
          label:
            "Купить гормон роста Джинтропин можно, оставив заявку на нашем официальном сайте jintropine.kz или связавшись с нами по телефону +7 777 288 6600. Также препарат доступен для приобретения в аптеках города Алматы: Аптека плюс (Ауэзова 175) Центральная аптека №2 (Назарбаева 91/97 угол улицы Гоголя) Аптека 84 (Толе Би 249).",
          value: "purchase",
          placeholder: "Где можно приобрести Джинтропин?",
        },
      ],
    },
    {
      id: 10,
      options: [
        {
          label:
            "На упаковке Джинтропина должна быть голограмма и уникальный серийный номер, чтобы убедиться в подлинности препарата: 1. Удалите фольгированную полоску с защитного стикера с уникальным номером и фиброволокнами 2. Введите 12-значный код, расположенный под полоской, в специальное окно на официальном сайте https://www.instagram.com/reel/Ct_fMWqxven/?igsh=MTg0ZXp1aDZ0cmhxNw==",
          value: "authenticity",
          placeholder: "Как проверить подлинность препарата?",
        },
      ],
    },
    {
      id: 11,
      options: [
        {
          label:
            "Анализы необходимы для оценки общего состояния здоровья и выявления возможных противопоказаний перед применением гормона роста. Рекомендуется пройти следующие анализы: ТТГ, Т3, Т4 свободный (гормоны щитовидной железы) Глюкоза, инсулин (уровень сахара и инсулина в крови) Онкомаркеры (по желанию): ПСА, РЭА, СА19-9 Анализы сдаются утром натощак, также желательно воздержаться от курения перед сдачей анализов.",
          value: "tests",
          placeholder: "Какие анализы сдать перед применением гормона роста?",
        },
      ],
    },
  ],
  en: [
    {
      id: 1,
      options: [
        {
          label:
            "Jintropin is a certified and most well-known growth hormone (Somatropin) product. It has a quality certificate. It is not a steroid or a sex hormone. Post-cycle therapy (PCT) is not required.",
          value: "info",
          placeholder: "What is Jintropin?",
        },
      ],
    },
    {
      id: 2,
      options: [
        {
          label:
            "Jintropin is used to treat growth hormone deficiency in children and adults, and it also helps to build quality muscle mass without a rebound effect, burn fat, strengthen bones and ligaments, increase endurance and performance, recover quickly, and even prolong youth.",
          value: "usage",
          placeholder: "What is growth hormone used for?",
        },
      ],
    },
    {
      id: 3,
      options: [
        {
          label:
            "Jintropin (Somatotropin) has powerful anabolic and anti-catabolic effects, enhances protein synthesis, slows its breakdown, and helps reduce the deposition and burning of subcutaneous fat. Growth hormone activates the hyperplasia of muscle fibers - this is an increase in the number of muscle fibers beyond the genetic limit, due to this effect there is no rollback after the drug is discontinued.",
          value: "mechanism",
          placeholder: "How does Jintropin work?",
        },
      ],
    },
    {
      id: 4,
      options: [
        {
          label:
            "The recommended course is 3 months, and it can be extended to 6 months. The standard dosage may vary but usually ranges from 2 to 5 IU (international units) per day. The doctor may adjust the dose depending on medical indications and goals.",
          value: "duration",
          placeholder: "Course duration and dosages",
        },
      ],
    },
    {
      id: 5,
      options: [
        {
          label:
            "Visible results will be seen after 2-3 weeks of using Jintropin.",
          value: "results",
          placeholder: "How soon will I see results?",
        },
      ],
    },
    {
      id: 6,
      options: [
        {
          label:
            "Jintropin should be injected daily into the fat fold on the abdomen or in the shoulder (in the morning on an empty stomach 2 hours before a meal or at night before going to bed). For your convenience, we have recorded a video instruction available at the following link: https://www.youtube.com/watch?v=DeAyA9HO52g",
          value: "application",
          placeholder: "How to use Jintropin?",
        },
      ],
    },
    {
      id: 7,
      options: [
        {
          label:
            "Jintropin should be stored in the refrigerator at a temperature of +2 to +8°C; under these storage conditions, the stability of the drug is maintained for 36 months. Storage outside the refrigerator at room temperature reduces the shelf life of the growth hormone to 6 months.",
          value: "storage",
          placeholder: "How to store the drug?",
        },
      ],
    },
    {
      id: 8,
      options: [
        {
          label:
            "The main side effects when using growth hormone: edema, bloating, muscle pain, joint pain, hypertension. Side effects are dose-dependent and disappear within 2-3 days after reducing the dosage.",
          value: "sideEffects",
          placeholder: "What side effects may occur?",
        },
      ],
    },
    {
      id: 9,
      options: [
        {
          label:
            "You can buy Jintropin growth hormone by submitting an application on our official website jintropine.kz or by contacting us at +7 777 288 6600. The drug is also available for purchase in pharmacies in Almaty: Pharmacy Plus (Auezova 175) Central Pharmacy No. 2 (Nazarbayev 91/97 corner of Gogol Street) Pharmacy 84 (Tole Bi 249).",
          value: "purchase",
          placeholder: "Where can I buy Jintropin?",
        },
      ],
    },
    {
      id: 10,
      options: [
        {
          label:
            "The Jintropin package should have a hologram and a unique serial number to ensure the authenticity of the drug: 1. Remove the foil strip from the protective sticker with a unique number and fiber optics 2. Enter the 12-digit code located under the strip into the special field on the official website https://www.instagram.com/reel/Ct_fMWqxven/?igsh=MTg0ZXp1aDZ0cmhxNw==",
          value: "authenticity",
          placeholder: "How to verify the authenticity of the drug?",
        },
      ],
    },
    {
      id: 11,
      options: [
        {
          label:
            "Tests are necessary to assess general health and identify possible contraindications before using growth hormone. The following tests are recommended: TSH, T3, T4 free (thyroid hormones) Glucose, insulin (blood sugar and insulin levels) Tumor markers (optional): PSA, CEA, CA19-9 Tests are done in the morning on an empty stomach, and it is also advisable to refrain from smoking before taking tests.",
          value: "tests",
          placeholder: "What tests should be done before using growth hormone?",
        },
      ],
    },
  ],
};

export default options;
