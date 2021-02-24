import { Box, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import GlobalHeader from "../components/GlobalHeader";
import GlobalNavBar from "../components/GlobalNavBar";
import Head from "next/head";
import { useRouter } from "next/router";
import useWindowDimensions from "../customhooks/useWindowDimensions";

const contacts = () => {
  const routerHook = useRouter();
  const { height, width } = useWindowDimensions();
  return (
    <Box>
      {/* Header */}
      <Head>
        <title>Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body */}
      <Flex
        direction="column"
        h={height}
        bgGradient="linear(to-br,deepskyBlue,white)"
        color="white"
      >
        <GlobalHeader />
        <Flex flex={1} direction={width < 1024 ? "column" : "row"}>
          <GlobalNavBar />
          <Flex
            flex={10}
            direction="column"
            align="center"
            justify="center"
            bg="whiteAlpha.500"
            color="blackAlpha.700"
            borderTopLeftRadius={50.0}
          >
            <Heading>{routerHook.pathname}</Heading>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default contacts;
