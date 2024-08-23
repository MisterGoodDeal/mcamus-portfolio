"use client";
import { FC, ReactNode } from "react";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import translationEN from "@/locales/en.json";
import translationFR from "@/locales/fr.json";

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: FC<I18nProviderProps> = ({
  children,
}: I18nProviderProps) => {
  const resources = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  };

  i18n
    .use(initReactI18next) // initialiser react-i18next
    .init({
      resources,
      fallbackLng: "fr", // langue par défaut si la traduction n'est pas trouvée
      debug: true, // activer les logs de débogage

      interpolation: {
        escapeValue: false, // éviter l'échappement automatique des valeurs
      },

      lng: "fr", // langue par défaut
    });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
