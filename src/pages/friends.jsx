import { SEO } from "../components/forward/SEO";
import { Container, Section } from "../styles/pages/home";
import { Header } from "../components/common/HeaderGame";
import {
  useBreakpointValue,
  HStack,
  Image,
  Text,
  VStack,
  Divider,
  Box,
    Button,
    Avatar
} from "@chakra-ui/react";

export default function Friends() {
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
          background: "url(/background.jpg) no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
        }}
      >
        <SEO />
        <Container>
          <Section h="100vh" flexDir="row">
            <Header />
            <VStack ml="auto" mr="auto">
              <HStack mt="1.875rem" display="flex">
                <Text
                  color="#B63627"
                  fontSize="5rem"
                  alignContent="flex-start"
                  fontFamily="arial_rounded_mt_boldregular"
                >
                  Lista de amigos
                </Text>
                <Button
                  p="1.875rem"
                  bg="#B63627"
                  flexDirection="right"
                  _hover={{ bg: "#9D2B1F" }}
                  color="white"
                  borderTopRadius={25}
                  alignContent="flex-end"
                  borderBottomLeftRadius={25}
                >
                  Adicionar amigo
                </Button>
              </HStack>
              <Box
                mt="9.375rem"
                boxShadow="0.3125rem 0.3125rem 0.625rem rgba(0, 0, 0,.5)"
                w="93.75rem"
                maxH="70%"
                overflowY="auto"
                borderBottomRadius="1.5625rem"
              >
                <VStack
                  pl="1rem"
                  align="self-start"
                  //backgroundImage="https://images.hdqwalls.com/wallpapers/northern-lights-aurora-borealis-4k-fz.jpg"
                  backgroundPosition="top left"
                >
                  <HStack mt="0.3125rem">
                    <Avatar src="https://cdn.discordapp.com/avatars/354233941550694400/a_e35d10c150b1354b1eea12b4655837a4.gif?size=4096" />
                    <Text
                      color="#B63627"
                      fontSize="2.5rem"
                      fontFamily="arial_rounded_mt_boldregular"
                    >
                      Kuriel#1411
                    </Text>
                  </HStack>
                  <Divider align="center" mb="0.3125rem" borderColor="#B63627" />
                </VStack>
                <VStack
                  pl="1rem"
                  align="self-start"
                  //backgroundImage="https://cdn.discordapp.com/attachments/880253879093174314/929027038961074216/1641567634422.png"
                  backgroundPosition="center"
                >
                  <HStack mt="0.3125rem">
                    <Avatar src="https://cdn.discordapp.com/avatars/354233941550694400/a_e35d10c150b1354b1eea12b4655837a4.gif?size=4096" />
                    <Text
                      color="#B63627"
                      fontSize="2.5rem"
                      fontFamily="arial_rounded_mt_boldregular"
                    >
                      Kuriel#1411
                    </Text>
                  </HStack>
                  <Divider align="center" mb="0.3125rem" borderColor="#B63627" />
                </VStack>
                <VStack
                  pl="1rem"
                  align="self-start"
                  //backgroundImage="https://cdn.discordapp.com/attachments/972575951806410792/983117568351043665/unknown.png"
                  backgroundPosition="center"
                >
                  <HStack mt="0.3125rem">
                    <Avatar src="https://cdn.discordapp.com/avatars/354233941550694400/a_e35d10c150b1354b1eea12b4655837a4.gif?size=4096" />
                    <Text
                      color="#B63627"
                      fontSize="2.5rem"
                      fontFamily="arial_rounded_mt_boldregular"
                    >
                      Kuriel#1411
                    </Text>
                  </HStack>
                  <Divider align="center" mb="0.3125rem" borderColor="#B63627" />
                </VStack>
                <VStack
                  pl="1rem"
                  align="self-start"
                  backgroundPosition="center"
                >
                  <HStack mt="0.3125rem">
                    <Avatar src="https://cdn.discordapp.com/avatars/354233941550694400/a_e35d10c150b1354b1eea12b4655837a4.gif?size=4096" />
                    <Text
                      color="#B63627"
                      fontSize="2.5rem"
                      fontFamily="arial_rounded_mt_boldregular"
                    >
                      Kuriel#1411
                    </Text>
                  </HStack>
                  <Divider align="center" mb="0.3125rem" borderColor="#B63627" />
                </VStack>
              </Box>
            </VStack>
          </Section>
        </Container>
      </div>
    </>
  );
}
