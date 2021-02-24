import { Box, Flex, Heading, SlideFade, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import useWindowDimensions from "../customhooks/useWindowDimensions";

interface Props {}

const GlobalHeader: React.FC<Props> = () => {
  const { width } = useWindowDimensions();
  return (
    <Flex
      direction="row"
      bg="transparent"
      p="8"
      align="start"
      justify={width < 1024 ? "center" : "flex-end"}
    >
      <Heading>&bull; C R Y O &bull;</Heading>
    </Flex>
  );
};

export default GlobalHeader;
