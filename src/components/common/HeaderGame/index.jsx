import { VStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();
  const routes = useRouter()

  return (
    <>
      <VStack
        w="17.875rem"
        bg="#9D2B1F"
        backgroundImage="/coldgame.png"
        backgroundPosition="center 4.375rem"
        backgroundSize="15.625rem"
        backgroundRepeat="no-repeat"
        minH="max-content"
        overflowY="auto"
        overflowX="hidden"
      >
        <VStack mt="auto" mb="auto" fontSize="2.5rem" gap={3} ml="50%">
          <Text
            color={asPath === "/coldgame" ? "#9D2B1F" : "white"}
            bg={asPath === "/coldgame" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => routes.push("/coldgame")}
          >
            Início
          </Text>
          <Text
            color={asPath === "/inventory" ? "#9D2B1F" : "white"}
            bg={asPath === "/inventory" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => routes.push("/inventory")}
          >
            Inventário
          </Text>
          <Text
            color={asPath === "/friends" ? "#9D2B1F" : "white"}
            bg={asPath === "/friends" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => routes.push("/friends")}
          >
            Amigos
          </Text>
          <Text
            color={asPath === "/rounds" ? "#9D2B1F" : "white"}
            bg={asPath === "/rounds" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => routes.push("/coldgame")}
          >
            Partidas
          </Text>
          <Text
            color={asPath === "/farm" ? "#9D2B1F" : "white"}
            bg={asPath === "/farm" ? "white" : ""}
            borderRadius="1.5625rem"
            w="18.75rem"
            pl="0.9375rem"
            cursor="pointer"
            onClick={(event) => routes.push("/coldgame")}
          >
            Farm CC
          </Text>
        </VStack>
      </VStack>
    </>
  );
}
