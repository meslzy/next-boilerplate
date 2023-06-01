"use client";

import { Text } from "@mantine/core";

import { useTranslation } from "~i18n/client";

const Ui = () => {
  const t = useTranslation();

  return (
    <Text>{ t("hello") }</Text>
  );
};

export default Ui;