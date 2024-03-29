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
      <Container backgroundImage="url('https://i.imgur.com/8PLktWw.png')" backgroundRepeat="no-repeat" backgroundPosition="left 150px" backgroundSize="250px">
        <Section h="100vh" flexDir="column">
          <Header />
          <VStack mt="30px" w="100%">
            <HStack>
              <VStack
                display="flex"
                cursor="pointer"
                marginRight="auto"
                ml="150px"
              >
                <Image
                  src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                  h="400px"
                  w="640px"
                />
                <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                  Título
                </Heading>
                <Text
                  color="#B63627"
                  fontSize="24px"
                  _hover={{ color: "#9D2B1F" }}
                >
                  Subtítulo
                </Text>
              </VStack>
              <VStack pl="40px">
                <HStack display="flex" cursor="pointer" marginRight="auto">
                  <Image
                    src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                    h="150px"
                    w="240px"
                  />
                  <VStack>
                    <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                      Título
                    </Heading>
                    <Text
                      color="#B63627"
                      fontSize="24px"
                      _hover={{ color: "#9D2B1F" }}
                    >
                      Subtítulo
                    </Text>
                  </VStack>
                </HStack>
                <HStack display="flex" cursor="pointer" marginRight="auto">
                  <Image
                    src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                    h="150px"
                    w="240px"
                  />
                  <VStack>
                    <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                      Título
                    </Heading>
                    <Text
                      color="#B63627"
                      fontSize="24px"
                      _hover={{ color: "#9D2B1F" }}
                    >
                      Subtítulo
                    </Text>
                  </VStack>
                </HStack>
                <HStack display="flex" cursor="pointer" marginRight="auto">
                  <Image
                    src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                    h="150px"
                    w="240px"
                  />
                  <VStack>
                    <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                      Título
                    </Heading>
                    <Text
                      color="#B63627"
                      fontSize="24px"
                      _hover={{ color: "#9D2B1F" }}
                    >
                      Subtítulo
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
          <HStack
            mt="25px"
            mb="50px"
            display="flex"
            justifyContent="center"
            align="center"
          >
            <Box w="10%" bg="#B63627" h="3px" borderRadius="25px"></Box>
            <BsFillTreeFill size="32px" color="#B63627" />
            <Box w="10%" bg="#B63627" h="3px" borderRadius="25px"></Box>
          </HStack>
          <SimpleGrid ml="15px" mr="15px" columns={[2, null, 3]}>
            <VStack display="flex" cursor="pointer">
              <Image
                src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                h="300px"
                w="480px"
              />
              <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                Título
              </Heading>
              <Text
                color="#B63627"
                fontSize="24px"
                _hover={{ color: "#9D2B1F" }}
              >
                Subtítulo
              </Text>
            </VStack>
            <VStack display="flex" cursor="pointer">
              <Image
                src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                h="300px"
                w="480px"
              />
              <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                Título
              </Heading>
              <Text
                color="#B63627"
                fontSize="24px"
                _hover={{ color: "#9D2B1F" }}
              >
                Subtítulo
              </Text>
            </VStack>
            <VStack display="flex" cursor="pointer">
              <Image
                src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                h="300px"
                w="480px"
              />
              <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                Título
              </Heading>
              <Text
                color="#B63627"
                fontSize="24px"
                _hover={{ color: "#9D2B1F" }}
              >
                Subtítulo
              </Text>
            </VStack>
            <VStack display="flex" cursor="pointer">
              <Image
                src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                h="300px"
                w="480px"
              />
              <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                Título
              </Heading>
              <Text
                color="#B63627"
                fontSize="24px"
                _hover={{ color: "#9D2B1F" }}
              >
                Subtítulo
              </Text>
            </VStack>
            <VStack display="flex" cursor="pointer">
              <Image
                src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                h="300px"
                w="480px"
              />
              <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                Título
              </Heading>
              <Text
                color="#B63627"
                fontSize="24px"
                _hover={{ color: "#9D2B1F" }}
              >
                Subtítulo
              </Text>
            </VStack>
            <VStack display="flex" cursor="pointer">
              <Image
                src="https://www.spclinic.pt/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                h="300px"
                w="480px"
              />
              <Heading color="#B63627" _hover={{ color: "#9D2B1F" }}>
                Título
              </Heading>
              <Text
                color="#B63627"
                fontSize="24px"
                _hover={{ color: "#9D2B1F" }}
              >
                Subtítulo
              </Text>
            </VStack>
          </SimpleGrid>
          <HStack
            mt="25px"
            display="flex"
            justifyContent="center"
            align="center"
          >
            <Text color="#B63627" fontSize="24px" fontWeight="bold">
              Anterior
            </Text>
            <BsFillTreeFill size="32px" color="#B63627" />
            <Text color="#B63627" fontSize="24px" fontWeight="bold">
              Próximo
            </Text>
          </HStack>
          <Footer />
        </Section>
      </Container>
    </>
  );
}
