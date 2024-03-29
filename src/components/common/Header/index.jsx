import {
  Flex,
  HStack,
  IconButton,
  Box,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody
} from '@chakra-ui/react'
import { HiOutlineMenuAlt3, HiOutlineX, HiHome } from "react-icons/hi";
import { Logo } from './Logo'
import { NavBar } from './NavBar'

export function Header () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        as="header"
        w="100%"
        h="120px"
        px={{ base: "9", lg: "24" }}
        m="0 auto"
        bg="white"
        align="center"
        justify="space-between"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.3)"
      >
        <IconButton
          as={HiHome}
          fontSize={40}
          color="#B63627"
          bg="transparent"
          cursor="pointer"
          _active={{ bg: "transparent" }}
          _hover={{ color: "#9D2B1F" }}
          onClick={(event) => (window.location.href = "/")}
        />

        <Logo />

        <HStack spacing="16" display={{ base: "none", lg: "flex" }}>
          <NavBar />
        </HStack>

        <IconButton
          as={HiOutlineMenuAlt3}
          display={{ base: "unset", lg: "none" }}
          fontSize={40}
          bg="transparent"
          color="#B63627"
          cursor="pointer"
          onClick={onOpen}
          _hover={{ bg: "transparent" }}
        />

        <Drawer onClose={onClose} isOpen={isOpen} bg="#100F14" size="sm">
          <DrawerContent bg="#100F14">
            <DrawerHeader bg="#100F14" borderBottomWidth="3px">
              <HStack spacing="3rem">
                <IconButton
                  as={HiOutlineX}
                  display={{ base: "unset", lg: "none" }}
                  fontSize={40}
                  color="white"
                  cursor="pointer"
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                  onClick={onClose}
                />
              </HStack>
            </DrawerHeader>
            <DrawerBody onClick={onClose} bg="#100F14">
              <NavBar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}
