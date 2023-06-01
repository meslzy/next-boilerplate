import React from "react";

import { Kanit } from "next/font/google";

import { useTranslation } from "~i18n/server";
import TranslationProvider from "~i18n/client";

import Emotion from "./styles/emotion";
import Mantine from "./styles/mantine";

const kanit = Kanit({
  display: "auto",
  subsets: [ "latin", "thai" ],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
});

interface Props {
  params: {
    lang: string;
  };
}

const Layout = async ( props: React.PropsWithChildren<Props> ) => {
  const { t, i18n } = await useTranslation(props.params.lang);

  return (
    <html dir={ t<string>("dir") } lang={ props.params.lang }>
      <head>
        <link href={ "/favicon.ico" } rel={ "icon" }/>
        <meta content={ "initial-scale=1.0, width=device-width" } name={ "viewport" }/>
      </head>
      <body className={ kanit.className }>
        <Emotion>
          <Mantine>
            <TranslationProvider lang={ props.params.lang } resource={ i18n.getDataByLanguage(props.params.lang) }>
              { props.children }
            </TranslationProvider>
          </Mantine>
        </Emotion>
      </body>
    </html>
  );
};

export default Layout;