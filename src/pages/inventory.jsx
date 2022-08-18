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
  Tag,
  TagLeftIcon,
  TagLabel,
  Box,
  Wrap,
  WrapItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  RiCoinsFill,
  RiSwordFill,
  RiShieldFill,
  RiShieldFlashFill,
  RiInkBottleFill,
  RiHeart3Fill,
} from "react-icons/ri";

export default function Inventory() {
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
          <Section h="100vh" flexDir="row">
            <Header />
            <VStack>
              <Text
                color="#B63627"
                fontSize="5rem"
                mt="30px"
                ml="60px"
                fontFamily="arial_rounded_mt_boldregular"
              >
                Inventário
              </Text>
              <Wrap justify="center">
                <WrapItem>
                  <VStack>
                    <Image
                      src="https://i.imgur.com/D4r42B9.png"
                      w="400px"
                      h="400px"
                      borderTopRadius="15px"
                    />
                    <Box
                      backgroundImage="https://i.imgur.com/CZfJbNg.png"
                      mb="40px"
                      w="400px"
                      minH="200px"
                      transform="translateY(-50px)"
                      borderTopRadius="50px"
                      borderBottomRadius="15px"
                    >
                      <Text
                        color="white"
                        mt="10px"
                        fontSize="24px"
                        align="center"
                      >
                        Raltss
                      </Text>
                      <Accordion mt="10px" allowToggle>
                        <AccordionItem color="white">
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Informações
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Dono da Cold Forest!
                            <Divider mt="10px"></Divider>
                            <Text mt="10px">
                              Pertence a <Text as="b">Cold Forest</Text>
                            </Text>
                          </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem color="white">
                          <h2>
                            <AccordionButton>
                              <Box flex="1" textAlign="left">
                                Estados
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4} align="center">
                            <Tag
                              size="md"
                              variant="subtle"
                              colorScheme="blue"
                              mr="10px"
                              mb="10px"
                            >
                              <TagLeftIcon boxSize="12px" as={RiCoinsFill} />
                              <TagLabel>5000</TagLabel>
                            </Tag>
                            <Tag
                              size="md"
                              variant="subtle"
                              colorScheme="red"
                              mr="10px"
                              mb="10px"
                            >
                              <TagLeftIcon boxSize="12px" as={RiHeart3Fill} />
                              <TagLabel>750</TagLabel>
                            </Tag>
                            <Tag
                              size="md"
                              mr="10px"
                              mb="10px"
                              variant="subtle"
                              colorScheme="teal"
                            >
                              <TagLeftIcon boxSize="12px" as={RiShieldFill} />
                              <TagLabel>200</TagLabel>
                            </Tag>
                            <Tag
                              mr="10px"
                              size="md"
                              mb="10px"
                              variant="subtle"
                              colorScheme="cyan"
                            >
                              <TagLeftIcon boxSize="12px" as={RiInkBottleFill} />
                              <TagLabel>500</TagLabel>
                            </Tag>
                            <Tag
                              mr="10px"
                              size="md"
                              mb="10px"
                              variant="subtle"
                              colorScheme="orange"
                            >
                              <TagLeftIcon boxSize="12px" as={RiSwordFill} />
                              <TagLabel>675</TagLabel>
                            </Tag>
                            <Tag
                              mr="10px"
                              size="md"
                              mb="10px"
                              variant="subtle"
                              colorScheme="yellow"
                            >
                              <TagLeftIcon boxSize="12px" as={RiShieldFlashFill} />
                              <TagLabel>100</TagLabel>
                            </Tag>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  </VStack>
                </WrapItem>
                <WrapItem>
                  <VStack>
                    <Image
                      src="https://i.imgur.com/D4r42B9.png"
                      w="400px"
                      h="400px"
                      borderTopRadius="15px"
                    />
                    <Box
                      bg="#B63627"
                      mb="40px"
                      w="400px"
                      h="200px"
                      transform="translateY(-50px)"
                      borderTopRadius="50px"
                      borderBottomRadius="15px"
                    >
                      <Text
                        color="white"
                        mt="10px"
                        fontSize="24px"
                        align="center"
                      >
                        Raltss
                      </Text>
                    </Box>
                  </VStack>
                </WrapItem>
                <WrapItem>
                  <VStack>
                    <Image
                      src="https://i.imgur.com/D4r42B9.png"
                      w="400px"
                      h="400px"
                      borderTopRadius="15px"
                    />
                    <Box
                      bg="#B63627"
                      mb="40px"
                      w="400px"
                      h="200px"
                      transform="translateY(-50px)"
                      borderTopRadius="50px"
                      borderBottomRadius="15px"
                    >
                      <Text
                        color="white"
                        mt="10px"
                        fontSize="24px"
                        align="center"
                      >
                        Raltss
                      </Text>
                    </Box>
                  </VStack>
                </WrapItem>
                <WrapItem>
                  <VStack>
                    <Image
                      src="https://i.imgur.com/D4r42B9.png"
                      w="400px"
                      h="400px"
                      borderTopRadius="15px"
                    />
                    <Box
                      bg="#B63627"
                      mb="40px"
                      w="400px"
                      h="200px"
                      transform="translateY(-50px)"
                      borderTopRadius="50px"
                      borderBottomRadius="15px"
                    >
                      <Text
                        color="white"
                        mt="10px"
                        fontSize="24px"
                        align="center"
                      >
                        Raltss
                      </Text>
                    </Box>
                  </VStack>
                </WrapItem>
              </Wrap>
            </VStack>
          </Section>
        </Container>
      </div>
    </>
  );
}
