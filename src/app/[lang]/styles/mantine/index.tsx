"use client";

import React from "react";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import theme from "./theme";

interface Props {
  children: React.ReactNode;
}

const Mantine = ( props: Props ) => {
  return (
    <MantineProvider theme={ theme } withCSSVariables={ true } withGlobalStyles={ true } withNormalizeCSS={ true }>
      <Notifications/>
      { props.children }
    </MantineProvider>
  );
};

export default Mantine;