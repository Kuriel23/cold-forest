import { Footer } from "../components/common/Footer";
import { SEO } from "../components/forward/SEO";
import { Container, Section } from "../styles/pages/home";
import { Header } from "../components/common/Header";
import {
  useBreakpointValue,
  Box,
  Button,
  VStack,
  Input,
  HStack,
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
  Image,
  GridItem,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import { GrInstagram, GrPinterest, GrTwitter } from "react-icons/gr";
import { FaTree } from "react-icons/fa";
import { VscFoldUp } from "react-icons/vsc";

export default function Home() {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/background.jpg) no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "static",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <SEO />
        <Container>
          <Section h="100vh" flexDir="column">
            <HStack>
              <Grid templateColumns="repeat(3, 1fr)" w="100%" gap={1}>
                <GridItem w="100%">
                  <Box bg="white"></Box>
                </GridItem>
                <GridItem w="100%">
                  <InputGroup m="auto" mt="10px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaSearch color="#CE958F" />}
                    />
                    <Input
                      placeholder="Pesquise..."
                      _placeholder={{ color: "#CE958F", opacity: 1 }}
                      borderColor="#CE958F"
                      borderRadius="50px"
                      variant="outline"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem w="100%" m="auto" isLazy={true}>
                  <Menu m="auto" w="fit-content">
                    <MenuButton
                      bg="#9D2B1F"
                      ml="50%"
                      p="3"
                      w="fit-content"
                      borderBottomRadius="10px"
                    >
                      <RiMenu5Fill size="30px" color="white" />
                    </MenuButton>
                    <MenuList
                      color="#B63627"
                      align="center"
                      borderBottomRadius="25px"
                      fontSize="32px"
                      fontFamily="Indie Flower"
                    >
                      <MenuItem>• Sobre</MenuItem>
                      <MenuItem>• Suporte</MenuItem>
                      <MenuItem>• Créditos</MenuItem>
                      <Box
                        bg="#B63627"
                        w="70%"
                        m="auto"
                        align="center"
                        p={1}
                        mb="-10px"
                        borderTopRadius={25}
                        cursor="pointer"
                        onClick={(event) => (window.location.href = "/")}
                      >
                        <VscFoldUp size="32px" color="white" />
                      </Box>
                    </MenuList>
                  </Menu>
                </GridItem>
              </Grid>
            </HStack>
            <HStack style={{ justifyContent: "center" }} w="100%">
              <VStack w="63%">
                <Image
                  ml="50px"
                  w="100%"
                  src="/apresentation.png"
                  style={{ pointerEvents: "none" }}
                />
                <GrInstagram
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  style={{ transform: "translate(37vh, -18.5vh)" }}
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://www.instagram.com/cold.forest_/",
                      "_blank"
                    )
                  }
                />
                <GrPinterest
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  style={{ transform: "translate(48vh, -24.5vh)" }}
                  cursor="pointer"
                  onClick={(event) =>
                    window.open("https://pin.it/2zP9WLE", "_blank")
                  }
                />
                <GrTwitter
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  style={{ transform: "translate(60vh, -30.5vh)" }}
                  cursor="pointer"
                  onClick={(event) =>
                    window.open("https://twitter.com/coldforest50", "_blank")
                  }
                />
              </VStack>
              <HStack m="0" style={{ justifyContent: "center" }} mb="0">
                <VStack w="37%" ml="150px">
                  <Box
                    bg="#B63627"
                    mr="29.5vh"
                    transform="translateY(40px)"
                    p={1}
                    borderRadius="10px"
                    zIndex={5}
                    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.7)"
                  >
                    <FaTree size="48px" color="white" />
                  </Box>
                  <Button
                    bg="#B63627"
                    _hover={{ bg: "#9D2B1F" }}
                    _active={{ bg: "#9D2B1F" }}
                    borderRadius="50px"
                    w="30vh"
                    mb={30}
                    p={5}
                    h="60px"
                    color="white"
                    fontSize="32px"
                    fontFamily="z_arista_lightregular"
                  >
                    Newsletter
                  </Button>
                  <Box
                    bg="#B63627"
                    transform="translate(-15vh, 40px)"
                    p={1}
                    borderRadius="10px"
                    zIndex={5}
                    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.7)"
                  >
                    <FaTree size="48px" color="white" />
                  </Box>
                  <Button
                    bg="#B63627"
                    _hover={{ bg: "#9D2B1F" }}
                    _active={{ bg: "#9D2B1F" }}
                    borderRadius="50px"
                    w="30vh"
                    p={5}
                    h="60px"
                    color="white"
                    fontSize="32px"
                    fontFamily="z_arista_lightregular"
                  >
                    Cold Game
                  </Button>
                </VStack>
              </HStack>
            </HStack>
          </Section>
        </Container>
      </div>
    </>
  );
}
