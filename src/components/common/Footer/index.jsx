import { Box, Text, HStack } from "@chakra-ui/react";
import { GrInstagram, GrPinterest, GrTwitter } from "react-icons/gr";

export function Footer() {
  return (
    <Box as="footer" m="50px auto" pb="50px">
      <Text color="#B63627" m="auto">
        Conheça nossas redes sociais.
      </Text>
      <HStack m="5px auto" gap="10">
        <GrInstagram
          size="48px"
          color="#B63627"
          cursor="pointer"
          onClick={(event) =>
            window.open("https://www.instagram.com/cold.forest_/", "_blank")
          }
        />
        <GrPinterest
          size="48px"
          color="#B63627"
          cursor="pointer"
          onClick={(event) => window.open("https://pin.it/2zP9WLE", "_blank")}
        />
        <GrTwitter
          size="48px"
          color="#B63627"
          cursor="pointer"
          onClick={(event) =>
            window.open("https://twitter.com/coldforest50", "_blank")
          }
        />
      </HStack>
    </Box>
  );
}
