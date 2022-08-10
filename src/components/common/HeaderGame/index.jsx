import { IconButton, VStack, Text } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/router";

export function Header({ ...rest }) {

  const { asPath } = useRouter();

  return (
    <>
      <VStack w="21.875rem" bg="#9D2B1F" h="100%">
        <VStack mt="auto" mb="auto" fontSize="2.5rem" gap={3} ml="50%">
          <Text
            color={asPath === "/coldgame" ? "black" : "white"}
            bg={asPath === "/coldgame" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => (window.location.href = "/coldgame")}
          >
            Início
          </Text>
          <Text
            color={asPath === "/inventory" ? "black" : "white"}
            bg={asPath === "/inventory" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => (window.location.href = "/inventory")}
          >
            Inventário
          </Text>
          <Text
            color={asPath === "/friends" ? "black" : "white"}
            bg={asPath === "/friends" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => (window.location.href = "/friends")}
          >
            Amigos
          </Text>
          <Text
            color={asPath === "/rounds" ? "black" : "white"}
            bg={asPath === "/rounds" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => (window.location.href = "/rounds")}
          >
            Partidas
          </Text>
          <Text
            color={asPath === "/farm" ? "black" : "white"}
            bg={asPath === "/farm" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => (window.location.href = "/farm")}
          >
            Farm CC
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
