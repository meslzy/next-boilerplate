import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";


import { namespaces, languages } from "./config";

const initI18next = async ( lang: string, namespace?: string | string[] ) => {
  let i18n = createInstance();
  i18n.use(initReactI18next);
  i18n.use(resourcesToBackend(( language: string, namespace: string ) => {
    return import(`./locales/${ language }/${ namespace }.json`, {
      assert: {
        type: "json",
      },
    });
  }));
  await i18n.init({
    supportedLngs: languages,
    lng: lang,
    ns: namespace ?? namespaces,
    defaultNS: namespace ?? namespaces,
  });

  return i18n;
};

const useTranslation = async ( lang: string, namespace?: string | string[] ) => {
  const i18n = await initI18next(lang, namespace);

  return {
    t: i18n.t,
    i18n,
  };
};

export {
  useTranslation,
};