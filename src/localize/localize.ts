import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from "./en.json";
import arLocale from "./ar.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enLocale },
    ar: { translation: arLocale },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const isEn = () => {
  return i18n.language === "en";
};

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  document.body.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
};

export default i18n;
