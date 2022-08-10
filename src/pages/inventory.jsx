import { SEO } from "../components/forward/SEO";
import { Container, Section } from "../styles/pages/home";
import { Header } from "../components/common/HeaderGame";
import { useBreakpointValue } from "@chakra-ui/react";

export default function ColdGame() {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <SEO />
      <Container>
        <Section h="100vh" flexDir="column">
          <Header />
        </Section>
      </Container>
    </>
  );
}
