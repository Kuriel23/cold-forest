import { SEO } from "../components/forward/SEO";
import { Container, Section } from "../styles/pages/home";
import { Header } from "../components/common/HeaderGame";
import {
  useBreakpointValue,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ColdGame() {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <SEO />
      <Container>
        <Section h="100vh" flexDir="row">
          <Header />
          <HStack>
            <Image src="/coldGameHome.gif" h="fit-content" w="40%" />
            <VStack textAlign="center" w="100vh" pr="1.875rem">
              <Text
                color="#B63627"
                fontSize="3rem"
                fontFamily="arial_rounded_mt_boldregular"
              >
                Bem-vindo ao ColdGame, usuário!
              </Text>
              <Text
                color="#9D2B1F"
                fontSize="1.5rem"
                fontFamily="arial_rounded_mt_boldregular"
                display="inline-block"
              >
                Aqui no ColdGame, você pode desafiar outros jogadores, ver o seu
                inventário, coletar ColdCoins e mandar pedidos de amizades a
                outros usuários. Esperemos que tenha uma experiência totalmente
                divertida e congelante para si.
              </Text>
            </VStack>
          </HStack>
        </Section>
      </Container>
    </>
  );
}
