import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "@/store/store";

import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import translationEN from "@/locales/en.json";
import translationFR from "@/locales/fr.json";
import { Toaster } from "react-hot-toast";
import { CircularProgress } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let persistor = persistStore(store);

  const resources = {
    en: {
      translation: translationEN,
    },
    fr: {
      translation: translationFR,
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    lng: "fr",
  });

  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="w-full h-[100vh] flex items-center justify-center">
            <CircularProgress
              size="lg"
              color="secondary"
              aria-label="Loading..."
            />
          </div>
        }
        persistor={persistor}
      >
        <NextUIProvider navigate={router.push}>
          <NextThemesProvider>
            <Toaster />
            <Component {...pageProps} />
          </NextThemesProvider>
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
