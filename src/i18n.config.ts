import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en.json";
import vn from "./locale/vn.json";

i18n.use(initReactI18next).init({
     fallbackLng: "en",
     lng: "en",
     resources: {
          en: {
               translation: en,
          },
          vn: {
               translation: vn,
          },
     },
     interpolation: {
          escapeValue: false, // react already safes from xss
     },
});

export default i18n;
