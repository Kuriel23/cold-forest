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
import { GrInstagram } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

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
          <Box
            m="200px auto"
            w="55%"
            height="400px"
            borderRadius="25px"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <VStack float="left">
              <Avatar
                src="https://i.imgur.com/tdBlmYv.png"
                ml="25px"
                size="3xl"
                boxShadow="5px 0 0 rgba(0, 0, 0, 0.1)"
                transform="translateY(-150px)"
              />
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                transform="translateY(-100px)"
              >
                Raltss 🤍#0008
              </Text>
            </VStack>
            <VStack>
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                ml="30px"
              >
                Fundador e responsável pelos projetos Cold Forest e Cold Game.
                Seu servidor atingiu recentemente a marca de 3500 membros.
              </Text>
              <HStack pt="150px" pl="70%">
                <GrInstagram
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://www.instagram.com/cold.forest_/",
                      "_blank"
                    )
                  }
                />
                <SiDiscord
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://discord.com/users/769327898502889493",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
          </Box>
          <Box
            m="200px auto"
            w="55%"
            height="400px"
            borderRadius="25px"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <VStack float="left" w="55%">
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                ml="30px"
              >
                Programador oficial do servidor Cold Forest, também responsável
                pela programação e montagem do layout para o site.
              </Text>
              <HStack pt="150px" pr="60%">
                <GrInstagram
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://www.instagram.com/kurieldev/",
                      "_blank"
                    )
                  }
                />
                <BsGlobe
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open("https://kurieldev.tk/", "_blank")
                  }
                />
                <SiDiscord
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://discord.com/users/354233941550694400",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
            <VStack>
              <Avatar
                src="https://i.imgur.com/gnIDxL4.jpeg"
                maxW="421px"
                ml="25px"
                size="3xl"
                boxShadow="5px 0 0 rgba(0, 0, 0, 0.1)"
                transform="translateY(-150px)"
              />
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                transform="translateY(-100px)"
              >
                Kuriel#1411
              </Text>
            </VStack>
          </Box>
          <Box
            m="200px auto"
            w="55%"
            height="400px"
            borderRadius="25px"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <VStack float="left">
              <Avatar
                src="https://i.imgur.com/jhEP7ez.png"
                maxW="421px"
                ml="25px"
                size="3xl"
                boxShadow="5px 0 0 rgba(0, 0, 0, 0.1)"
                transform="translateY(-150px)"
              />
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                transform="translateY(-100px)"
              >
                Jeff.#4821
              </Text>
            </VStack>
            <VStack>
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                ml="30px"
              >
                Artista responsável pelo conceito e criação do layout para o
                site Cold Forest e Cold Game. Fundador e Designer da Studio
                Sunflowers.
              </Text>
              <HStack pt="150px" pl="70%">
                <BsGlobe
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open("https://snipfeed.co/floc", "_blank")
                  }
                />
                <SiDiscord
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://discord.com/users/172736048600711169",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
          </Box>
          <Box
            m="200px auto"
            w="55%"
            height="400px"
            borderRadius="25px"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <VStack float="left" w="55%">
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                ml="30px"
              >
                Responsável pelo atendimento e briefing do site: Cold Forest e
                Cold game. Co-fundadora da Studio Sunflowers e Responsável pelo
                marketing do projeto.
              </Text>
              <HStack pt="120px" pr="80%">
                <SiDiscord
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://discord.com/users/354233941550694400",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
            <VStack>
              <Avatar
                src=""
                w="421px"
                ml="25px"
                size="3xl"
                boxShadow="5px 0 0 rgba(0, 0, 0, 0.1)"
                transform="translateY(-150px)"
              />
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                transform="translateY(-100px)"
              >
                BlueFlower#6977
              </Text>
            </VStack>
          </Box>
          <Box
            m="200px auto"
            w="55%"
            height="400px"
            borderRadius="25px"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <VStack float="left">
              <Avatar
                src="https://i.imgur.com/E2N5rQl.gif"
                w="421px"
                ml="25px"
                size="3xl"
                boxShadow="5px 0 0 rgba(0, 0, 0, 0.1)"
                transform="translateY(-150px)"
              />
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                transform="translateY(-100px)"
              >
                vindermermai#0007
              </Text>
            </VStack>
            <VStack>
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                ml="30px"
              >
                Administrator no servidor de Discord do projeto, criou várias Cold Waifus e ajudou em sugestões para o projeto.
              </Text>
              <HStack pt="150px" pl="85%">
                <SiDiscord
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://discord.com/users/991731924596969493",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
          </Box>
          <Box
            m="200px auto"
            w="55%"
            height="400px"
            borderRadius="25px"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
          >
            <VStack float="left" w="55%">
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                ml="30px"
              >
                Ajudante em grande parte da criação das Cold Waifus para o Cold
                Game ser realizado. É moderadora do servidor de Discord do
                projeto.
              </Text>
              <HStack pt="120px" pr="80%">
                <SiDiscord
                  size="48px"
                  mt="50px"
                  color="#B63627"
                  cursor="pointer"
                  onClick={(event) =>
                    window.open(
                      "https://discord.com/users/853258741158510602",
                      "_blank"
                    )
                  }
                />
              </HStack>
            </VStack>
            <VStack>
              <Avatar
                src="https://i.imgur.com/6dOIFOe.png"
                maxW="421px"
                ml="25px"
                size="3xl"
                boxShadow="5px 0 0 rgba(0, 0, 0, 0.1)"
                transform="translateY(-150px)"
              />
              <Text
                color="#B63627"
                fontSize="24px"
                fontFamily="arial_rounded_mt_boldregular"
                mt="50px"
                transform="translateY(-100px)"
              >
                Hio#5708
              </Text>
            </VStack>
          </Box>
          <Footer />
        </Section>
      </Container>
    </>
  );
}
