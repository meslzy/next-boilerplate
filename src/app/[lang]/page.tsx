import React from "react";

import type { Metadata } from "next";

import { useTranslation } from "~i18n/server";

import Ui from "./ui";

interface Props {
  params: {
    lang: string;
  };
}

const generateMetadata = async ( props: Props ): Promise<Metadata> => {
  const { t } = await useTranslation(props.params.lang, [
    "metadata",
  ]);

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
};

const Page = async ( props: Props ) => {
  return (
    <Ui/>
  );
};

export {
  generateMetadata,
};

export default Page;