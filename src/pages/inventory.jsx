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
  Tooltip,
} from "@chakra-ui/react";
import {
  RiCoinsFill,
  RiSwordFill,
  RiShieldFill,
  RiShieldFlashFill,
  RiInkBottleFill,
  RiHeart3Fill,
} from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa";

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
              <HStack>
                <Text
                  color="#B63627"
                  fontSize="5rem"
                  mt="1.875rem"
                  ml="3.75rem"
                  fontFamily="arial_rounded_mt_boldregular"
                >
                  Inventário{" "}
                </Text>
                <a href="#top">
                  {" "}
                  <FaAngleUp
                    size="4rem"
                    color="#B63627"
                    className="icon-position icon-style"
                  />
                </a>
              </HStack>
              <Wrap spacing="1.875rem" justify="center" overflowY="scroll">
                <WrapItem id="top">
                  <VStack>
                    <Image
                      src="https://i.imgur.com/D4r42B9.png"
                      w="25rem"
                      h="25rem"
                      borderTopRadius="0.9375rem"
                    />
                    <Box
                      backgroundImage="https://i.imgur.com/CZfJbNg.png"
                      mb="2.5rem"
                      w="25rem"
                      minH="12.5rem"
                      transform="translateY(-3.125rem)"
                      borderTopRadius="3.125rem"
                      borderBottomRadius="0.9375rem"
                    >
                      <Text
                        color="white"
                        mt="0.625rem"
                        fontSize="1.5rem"
                        align="center"
                      >
                        Raltss
                      </Text>
                      <Accordion mt="0.625rem" allowToggle>
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
                            <Divider mt="0.625rem"></Divider>
                            <Text mt="0.625rem">
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
                            <Tooltip label="Valor">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="blue"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiCoinsFill}
                                />
                                <TagLabel>5000</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Vida">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="red"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiHeart3Fill}
                                />
                                <TagLabel>750</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Escudo">
                              <Tag
                                size="md"
                                mr="0.625rem"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="teal"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFill}
                                />
                                <TagLabel>200</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Mana">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="cyan"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiInkBottleFill}
                                />
                                <TagLabel>500</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Ataque">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="orange"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiSwordFill}
                                />
                                <TagLabel>675</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Defesa">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="yellow"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFlashFill}
                                />
                                <TagLabel>100</TagLabel>
                              </Tag>
                            </Tooltip>
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
                      w="25rem"
                      h="25rem"
                      borderTopRadius="0.9375rem"
                    />
                    <Box
                      backgroundImage="https://i.imgur.com/CZfJbNg.png"
                      mb="2.5rem"
                      w="25rem"
                      minH="12.5rem"
                      transform="translateY(-3.125rem)"
                      borderTopRadius="3.125rem"
                      borderBottomRadius="0.9375rem"
                    >
                      <Text
                        color="white"
                        mt="0.625rem"
                        fontSize="1.5rem"
                        align="center"
                      >
                        Raltss
                      </Text>
                      <Accordion mt="0.625rem" allowToggle>
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
                            <Divider mt="0.625rem"></Divider>
                            <Text mt="0.625rem">
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
                            <Tooltip label="Valor">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="blue"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiCoinsFill}
                                />
                                <TagLabel>5000</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Vida">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="red"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiHeart3Fill}
                                />
                                <TagLabel>750</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Escudo">
                              <Tag
                                size="md"
                                mr="0.625rem"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="teal"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFill}
                                />
                                <TagLabel>200</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Mana">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="cyan"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiInkBottleFill}
                                />
                                <TagLabel>500</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Ataque">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="orange"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiSwordFill}
                                />
                                <TagLabel>675</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Defesa">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="yellow"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFlashFill}
                                />
                                <TagLabel>100</TagLabel>
                              </Tag>
                            </Tooltip>
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
                      w="25rem"
                      h="25rem"
                      borderTopRadius="0.9375rem"
                    />
                    <Box
                      backgroundImage="https://i.imgur.com/CZfJbNg.png"
                      mb="2.5rem"
                      w="25rem"
                      minH="12.5rem"
                      transform="translateY(-3.125rem)"
                      borderTopRadius="3.125rem"
                      borderBottomRadius="0.9375rem"
                    >
                      <Text
                        color="white"
                        mt="0.625rem"
                        fontSize="1.5rem"
                        align="center"
                      >
                        Raltss
                      </Text>
                      <Accordion mt="0.625rem" allowToggle>
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
                            <Divider mt="0.625rem"></Divider>
                            <Text mt="0.625rem">
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
                            <Tooltip label="Valor">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="blue"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiCoinsFill}
                                />
                                <TagLabel>5000</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Vida">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="red"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiHeart3Fill}
                                />
                                <TagLabel>750</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Escudo">
                              <Tag
                                size="md"
                                mr="0.625rem"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="teal"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFill}
                                />
                                <TagLabel>200</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Mana">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="cyan"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiInkBottleFill}
                                />
                                <TagLabel>500</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Ataque">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="orange"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiSwordFill}
                                />
                                <TagLabel>675</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Defesa">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="yellow"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFlashFill}
                                />
                                <TagLabel>100</TagLabel>
                              </Tag>
                            </Tooltip>
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
                      w="25rem"
                      h="25rem"
                      borderTopRadius="0.9375rem"
                    />
                    <Box
                      backgroundImage="https://i.imgur.com/CZfJbNg.png"
                      mb="2.5rem"
                      w="25rem"
                      minH="12.5rem"
                      transform="translateY(-3.125rem)"
                      borderTopRadius="3.125rem"
                      borderBottomRadius="0.9375rem"
                    >
                      <Text
                        color="white"
                        mt="0.625rem"
                        fontSize="1.5rem"
                        align="center"
                      >
                        Raltss
                      </Text>
                      <Accordion mt="0.625rem" allowToggle>
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
                            <Divider mt="0.625rem"></Divider>
                            <Text mt="0.625rem">
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
                            <Tooltip label="Valor">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="blue"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiCoinsFill}
                                />
                                <TagLabel>5000</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Vida">
                              <Tag
                                size="md"
                                variant="subtle"
                                colorScheme="red"
                                mr="0.625rem"
                                mb="0.625rem"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiHeart3Fill}
                                />
                                <TagLabel>750</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Escudo">
                              <Tag
                                size="md"
                                mr="0.625rem"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="teal"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFill}
                                />
                                <TagLabel>200</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Mana">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="cyan"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiInkBottleFill}
                                />
                                <TagLabel>500</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Ataque">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="orange"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiSwordFill}
                                />
                                <TagLabel>675</TagLabel>
                              </Tag>
                            </Tooltip>
                            <Tooltip label="Defesa">
                              <Tag
                                mr="0.625rem"
                                size="md"
                                mb="0.625rem"
                                variant="subtle"
                                colorScheme="yellow"
                              >
                                <TagLeftIcon
                                  boxSize="0.75rem"
                                  as={RiShieldFlashFill}
                                />
                                <TagLabel>100</TagLabel>
                              </Tag>
                            </Tooltip>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
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
