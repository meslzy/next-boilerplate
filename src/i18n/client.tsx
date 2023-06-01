"use client";

import React from "react";

import i18n from "i18next";

import { namespaces, defaultNamespace } from "~i18n/config";

const TranslationContext = React.createContext<null | typeof i18n.t>(null);

interface Props {
  lang: string;
  resource: any;
}

const TranslationProvider = ( props: React.PropsWithChildren<Props> ) => {
  i18n.init({
    resources: {
      [ props.lang ]: props.resource,
    },
    lng: props.lang,
    ns: namespaces,
    defaultNS: defaultNamespace,
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <TranslationContext.Provider value={ i18n.t }>
      { props.children }
    </TranslationContext.Provider>
  );
};

const useTranslation = () => {
  const translation = React.useContext(TranslationContext);

  if ( !translation ) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }

  return translation;
};

export {
  useTranslation,
};

export default TranslationProvider;