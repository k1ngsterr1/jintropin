import {
  SocialButton,
  SocialButtonBigger,
  SocialButtonWithSize,
} from "@shared/ui/Buttons/SocialButton";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

export const tabItems: { text: string; icons: React.ReactNode[] }[] = [
  {
    text: "Соц сети",
    icons: [
      <SocialButton
        icon={FaInstagram}
        href="https://www.instagram.com"
        key="instagram"
      />,
      <SocialButton
        icon={FaWhatsapp}
        href="https://www.whatsapp.com"
        key="whatsapp"
      />,
      <SocialButton
        icon={FaTelegramPlane}
        href="https://t.me/jintropine_channel"
        key="telegram"
      />,
    ],
  },
];

export const getTabItemsMobile = (size: number) => {
  return [
    {
      size: size,
      icons: [
        <SocialButtonWithSize
          icon={FaInstagram}
          size={size}
          href="https://www.instagram.com"
          key="instagram"
        />,
        <SocialButtonWithSize
          icon={FaWhatsapp}
          size={size}
          href="https://www.whatsapp.com"
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
        href="https://www.instagram.com"
        key="instagram"
      />,
      <SocialButtonBigger
        icon={FaWhatsapp}
        href="https://www.whatsapp.com"
        key="whatsapp"
      />,
      <SocialButtonBigger
        icon={FaTelegramPlane}
        href="https://t.me/jintropine_channel"
        key="telegram"
      />,
      <SocialButtonBigger
        icon={FaYoutube}
        href="https://www.youtube.com"
        key="youtube"
      />,
    ],
  },
];
