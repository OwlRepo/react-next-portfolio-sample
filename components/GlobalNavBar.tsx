import {
  FaBusinessTime,
  FaCode,
  FaComment,
  FaHome,
  FaPhone,
  FaStackOverflow,
  FaUser,
} from "react-icons/fa";
import {
  Flex,
  HStack,
  IconButton,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import useWindowDimensions from "../customhooks/useWindowDimensions";

const GlobalNavBar = () => {
  const routerHook = useRouter();
  const { width } = useWindowDimensions();
  const [selectedNavButtonIndex, setSelectedNavButtonIndex] = useState<
    number | undefined
  >();
  const navButtonProps = [
    {
      toolTipLabel: "Home",
      ariaLabel: "/",
      icon: <FaHome />,
    },
    {
      toolTipLabel: "Tech Stack",
      ariaLabel: "/techstack",
      icon: <FaStackOverflow />,
    },
    {
      toolTipLabel: "Projects",
      ariaLabel: "/projects",
      icon: <FaCode />,
    },
    {
      toolTipLabel: "Experience",
      ariaLabel: "/experience",
      icon: <FaBusinessTime />,
    },
    {
      toolTipLabel: "Contacts",
      ariaLabel: "/contacts",
      icon: <FaComment />,
    },
  ];

  useEffect(() => {
    for (let i = 0; i < navButtonProps.length; i++) {
      if (navButtonProps[i].ariaLabel.includes(routerHook.pathname)) {
        setSelectedNavButtonIndex(i);
        break;
      }
    }
  }, []);

  return (
    <Flex
      flex={1}
      color="white"
      direction={width < 1024 ? "row" : "column"}
      align="center"
      justify="center"
    >
      {width < 1024 ? (
        <HStack spacing={10}>
          {navButtonProps.map((props, index) => {
            return (
              // <Tooltip
              //   label={props.toolTipLabel}
              //   aria-label={props.ariaLabel}
              //   key={index}
              // >
              <Link as={props.ariaLabel} href={props.ariaLabel} key={index}>
                <IconButton
                  colorScheme="white"
                  aria-label={props.ariaLabel}
                  borderRadius="full"
                  icon={props.icon}
                  color={selectedNavButtonIndex == index ? "black" : "white"}
                  bg={selectedNavButtonIndex == index ? "white" : "transparent"}
                  variant={
                    selectedNavButtonIndex == index ? "solid" : "outline"
                  }
                  onClick={() => setSelectedNavButtonIndex(index)}
                />
              </Link>
              // </Tooltip>
            );
          })}
        </HStack>
      ) : (
        <VStack spacing={10}>
          {navButtonProps.map((props, index) => {
            return (
              // <Tooltip
              //   label={props.toolTipLabel}
              //   aria-label={props.ariaLabel}
              //   key={index}
              // >
              <Link as={props.ariaLabel} href={props.ariaLabel} key={index}>
                <IconButton
                  colorScheme="white"
                  aria-label={props.ariaLabel}
                  borderRadius="full"
                  icon={props.icon}
                  color={selectedNavButtonIndex == index ? "black" : "white"}
                  bg={selectedNavButtonIndex == index ? "white" : "transparent"}
                  variant={
                    selectedNavButtonIndex == index ? "solid" : "outline"
                  }
                />
              </Link>
              // </Tooltip>
            );
          })}
        </VStack>
      )}
    </Flex>
  );
};

export default GlobalNavBar;
