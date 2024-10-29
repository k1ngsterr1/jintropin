// Popup.tsx
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  show: boolean;
  onClose: () => void;
}

const Popup: React.FC<Props> = ({ show, onClose }) => {
  if (!show) return null;
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-dark rounded-lg shadow-lg p-8 w-80 border-2 border-primary">
        <h2 className="text-xl font-bold mb-4 text-primary text-center">
          {t("contact-pc.popup_heading")}
        </h2>
        <p className="text-white text-center mb-6">
          {t("contact-pc.popup_text")}
        </p>
        <button
          onClick={onClose}
          className="w-full border-2 border-primary text-primary py-2 px-4 rounded hover:bg-hover hover:text-dark transition duration-300"
        >
          {t("contact-pc.popup_close")}
        </button>
      </div>
    </div>
  );
};

export default Popup;
