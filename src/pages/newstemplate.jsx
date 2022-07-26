import { Footer } from "../components/common/Footer";
import { SEO } from "../components/forward/SEO";
import { Container, Section } from "../styles/pages/home";
import { Header } from "../components/common/Header";
import {
  useBreakpointValue,
  Box,
  Avatar,
  Button,
  VStack,
  Text,
  Input,
  HStack,
  Heading,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Grid,
  SimpleGrid,
  Divider,
  Image,
  GridItem,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { BsFillTreeFill } from "react-icons/bs";

export default function Home() {
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
          <Box bg="gray.100" w="90%" ml="auto" mr="auto" borderTopRadius="25px">
            <VStack>
              <Heading fontSize="4xl" color="#B63627" mt="30px">
                Título
              </Heading>
              <Heading fontSize="xl" color="#B63627" mt="5px">
                Subtítulo
              </Heading>
              <Text fontSize="xl" color="#B63627" mt="5px">
                Autor
              </Text>
              <HStack
                w="100%"
                display="flex"
                justifyContent="center"
                align="center"
                pt="25px"
                pb="20px"
              >
                <Box w="10%" bg="#B63627" h="3px" borderRadius="25px"></Box>
                <BsFillTreeFill size="32px" color="#B63627" />
                <Box w="10%" bg="#B63627" h="3px" borderRadius="25px"></Box>
              </HStack>
            </VStack>
          </Box>
          <Footer />
        </Section>
      </Container>
    </>
  );
}
