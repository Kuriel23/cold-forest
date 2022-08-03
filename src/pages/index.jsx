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
        className="home"
        style={{
          position: "static",
          height: "100vh",
          overflow: "hidden",
          background: "url(/background.jpg) no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
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
                  <InputGroup m="auto" mt="0.53vw">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<FaSearch color="#CE958F" />}
                    />
                    <Input
                      placeholder="Pesquise..."
                      _placeholder={{ color: "#CE958F", opacity: 1 }}
                      borderColor="#CE958F"
                      borderRadius="2.65vw"
                      variant="outline"
                    />
                  </InputGroup>
                </GridItem>
                <GridItem w="100%" m="auto">
                  <Menu m="auto" w="fit-content" islazy={true}>
                    <MenuButton
                      bg="#9D2B1F"
                      ml="50%"
                      p="3"
                      w="fit-content"
                      borderBottomRadius="0.53vw"
                    >
                      <RiMenu5Fill size="30px" color="white" />
                    </MenuButton>
                    <MenuList
                      color="#B63627"
                      align="center"
                      borderBottomRadius="25px"
                      fontSize="24px"
                      fontFamily="Acme"
                      style={{ fontAlign: "center", textAlign: "center" }}
                      boxShadow={`0px 0px 10px rgba(0, 0, 0, 0.4)`}
                    >
                      <MenuItem>• Sobre</MenuItem>
                      <MenuItem
                        onClick={(event) =>
                          (window.location.href = "/discord")
                        }
                      >
                        • Suporte
                      </MenuItem>
                      <MenuItem
                        onClick={(event) =>
                          (window.location.href = "/creditos")
                        }
                      >
                        • Créditos
                      </MenuItem>
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
                        <VscFoldUp size="1.69vw" color="white" />
                      </Box>
                    </MenuList>
                  </Menu>
                </GridItem>
              </Grid>
            </HStack>
            <HStack style={{ justifyContent: "center" }} w="100%">
              <VStack display={{ base: "none", xl: "flex" }} w="63%">
                <Image
                  ml="2.65vw"
                  w="100vw"
                  src="/apresentation.png"
                  style={{ pointerEvents: "none" }}
                />
                <HStack
                  pl="9.54vw"
                  display="inline-flex"
                  mt="2.65vw"
                  gap="40px"
                  style={{ transform: "translate(18.70vw, -9.35vw)" }}
                >
                  <GrInstagram
                    size="2.54vw"
                    color="#B63627"
                    cursor="pointer"
                    onClick={(event) =>
                      window.open(
                        "https://www.instagram.com/cold.forest_/",
                        "_blank"
                      )
                    }
                  />
                  <GrPinterest
                    size="2.54vw"
                    color="#B63627"
                    cursor="pointer"
                    onClick={(event) =>
                      window.open("https://pin.it/2zP9WLE", "_blank")
                    }
                  />
                  <GrTwitter
                    size="2.54vw"
                    color="#B63627"
                    display={{ base: "none", lg: "none", xl: "flex" }}
                    cursor="pointer"
                    onClick={(event) =>
                      window.open("https://twitter.com/coldforest50", "_blank")
                    }
                  />
                </HStack>
              </VStack>
              <HStack m="0" style={{ justifyContent: "center" }} mb="0">
                <VStack w="37%" ml="150px">
                  <Box
                    bg="#B63627"
                    mr="36.5vh"
                    transform="translateY(40px)"
                    p={1}
                    borderRadius="0.53vw"
                    zIndex={5}
                    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.7)"
                  >
                    <FaTree size="2.54vw" color="white" />
                  </Box>
                  <Button
                    bg="#B63627"
                    _hover={{ bg: "#9D2B1F" }}
                    _active={{ bg: "#9D2B1F" }}
                    borderRadius="2.65vw"
                    w="37vh"
                    mb={30}
                    p={5}
                    h="3.18vw"
                    color="white"
                    fontSize="1.69vw"
                    fontFamily="z_arista_lightregular"
                    onClick={(event) => (window.location.href = "/newsletter")}
                  >
                    Newsletter
                  </Button>
                  <Box
                    bg="#B63627"
                    transform="translate(-18vh, 40px)"
                    p={1}
                    borderRadius="0.53vw"
                    zIndex={5}
                    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.7)"
                  >
                    <FaTree size="2.54vw" color="white" />
                  </Box>
                  <Button
                    bg="#B63627"
                    _hover={{ bg: "#9D2B1F" }}
                    _active={{ bg: "#9D2B1F" }}
                    borderRadius="2.65vw"
                    w="37vh"
                    p={5}
                    h="3.18vw"
                    color="white"
                    fontSize="1.69vw"
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
