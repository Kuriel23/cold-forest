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
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function Friends() {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen2, onOpen2, onClose2 } = useDisclosure();
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
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                align="center"
                color="#B63627"
                fontSize="3xl"
                fontFamily="arial_rounded_mt_boldregular"
              >
                Adicionar amigo
              </ModalHeader>
              <ModalBody>
                <FormControl isRequired>
                  <FormLabel>ID do Amigo</FormLabel>
                  <Input placeholder="354233941550694400" />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={onOpen2}
                  _hover={{ bg: "green.600", color: "" }}
                  bg="green"
                  mr="10px"
                  color="white"
                >
                  Confirmar
                </Button>
                <Button
                  onClick={onClose}
                  bg="red"
                  _hover={{ bg: "red.700", color: "" }}
                  color="white"
                >
                  Fechar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal onClose={onClose2} isOpen={isOpen2} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                align="center"
                color="#B63627"
                fontSize="3xl"
                fontFamily="arial_rounded_mt_boldregular"
              >
                Pedido de amizade solicitado com sucesso!
              </ModalHeader>
              <ModalBody>Ff</ModalBody>
              <ModalFooter>
                <Button
                  onClick={onClose2}
                  bg="green"
                  _hover={{
                    bg: "green.600",
                    color: "",
                  }}
                  color="white"
                >
                  Entendi
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
                  p="10px"
                  bg="#B63627"
                  flexDirection="right"
                  _hover={{ bg: "#9D2B1F" }}
                  color="white"
                  borderTopRadius={25}
                  alignContent="flex-end"
                  borderBottomLeftRadius={25}
                  onClick={onOpen}
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
                  backgroundImage="https://images.hdqwalls.com/wallpapers/northern-lights-aurora-borealis-4k-fz.jpg"
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
                </VStack>{" "}
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
                </VStack>{" "}
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
                </VStack>{" "}
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
                </VStack>{" "}
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
                </VStack>{" "}
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
                  <Divider
                    align="center"
                    mb="0.3125rem"
                    borderColor="#B63627"
                  />
                </VStack>
              </Box>
            </VStack>
          </Section>
        </Container>
      </div>
    </>
  );
}
