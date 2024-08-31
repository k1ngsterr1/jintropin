import {
  SocialButton,
  SocialButtonBigger,
  SocialButtonWithSize,
} from "@shared/ui/Buttons/SocialButton";
import { SocialLink } from "@shared/ui/Buttons/SocialLink";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

export type Language = "en" | "ru";

interface TabItem {
  text: string;
  icons: React.ReactNode[];
}

export const tabItems: Record<Language, TabItem[]> = {
  ru: [
    {
      text: "Соц сети",
      icons: [
        <SocialButton
          icon={FaInstagram}
          href="https://www.instagram.com/jintropin_shop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          key="instagram"
        />,
        <SocialButton
          icon={FaWhatsapp}
          href="https://wa.me/77772886600"
          key="whatsapp"
        />,
        <SocialButton
          icon={FaTelegramPlane}
          href="https://t.me/jintropine_channel"
          key="telegram"
        />,
      ],
    },
  ],
  en: [
    {
      text: "Social Media",
      icons: [
        <SocialButton
          icon={FaInstagram}
          href="https://www.instagram.com/jintropin_shop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          key="instagram"
        />,
        <SocialButton
          icon={FaWhatsapp}
          href="https://wa.me/77772886600"
          key="whatsapp"
        />,
        <SocialButton
          icon={FaTelegramPlane}
          href="https://t.me/jintropine_channel"
          key="telegram"
        />,
      ],
    },
  ],
};

export const getTabItemsMobile = (size: number) => {
  return [
    {
      size: size,
      icons: [
        <SocialButtonWithSize
          icon={FaInstagram}
          size={size}
          href="https://www.instagram.com/jintropin_shop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          key="instagram"
        />,
        <SocialButtonWithSize
          icon={FaWhatsapp}
          size={size}
          href="https://wa.me/77772886600"
          key="whatsapp"
        />,
        <SocialButtonWithSize
          icon={FaTelegramPlane}
          size={size}
          href="https://t.me/jintropine_channel"
          key="telegram"
        />,
      ],
    },
  ];
};

export const socialItems: { text: string; icons: React.ReactNode[] }[] = [
  {
    text: "Соц сети",
    icons: [
      <SocialButtonBigger
        icon={FaInstagram}
        href="https://www.instagram.com/jintropin_shop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        key="instagram"
      />,
      <SocialButtonBigger
        icon={FaWhatsapp}
        href="https://wa.me/77772886600"
        key="whatsapp"
      />,
      <SocialButtonBigger
        icon={FaTelegramPlane}
        href="https://t.me/jintropine_channel"
        key="telegram"
      />,
      <SocialButtonBigger
        icon={FaYoutube}
        href="https://youtube.com/@jintropine_shop?si=I_PumWwHqzqQTrUTrfr"
        key="youtube"
      />,
    ],
  },
];

export const adaptedItems: { text: string; icons: React.ReactNode[] }[] = [
  {
    text: "Соц сети",
    icons: [
      <SocialLink
        icon={FaInstagram}
        href="https://www.instagram.com/jintropin_shop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        key="instagram"
      />,
      <SocialLink
        icon={FaWhatsapp}
        href="https://wa.me/77772886600"
        key="whatsapp"
      />,
      <SocialLink
        icon={FaTelegramPlane}
        href="https://t.me/jintropine_channel"
        key="telegram"
      />,
      <SocialLink
        icon={FaYoutube}
        href="https://youtube.com/@jintropine_shop?si=I_PumWwHqzqQTrUTrfr"
        key="youtube"
      />,
    ],
  },
];
export const adaptedMain: { text: string; icons: React.ReactNode[] }[] = [
  {
    text: "Соц сети",
    icons: [
      <SocialLink
        icon={FaInstagram}
        href="https://www.instagram.com/jintropin_shop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        key="instagram"
      />,
      <SocialLink
        icon={FaWhatsapp}
        href="https://wa.me/77772886600"
        key="whatsapp"
      />,
      <SocialLink
        icon={FaTelegramPlane}
        href="https://t.me/jintropine_channel"
        key="telegram"
      />,
    ],
  },
];
