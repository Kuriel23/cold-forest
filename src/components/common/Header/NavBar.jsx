import { HStack, VStack, Center, Link, Text } from '@chakra-ui/react'

const links = [
  {
    title: 'Contato',
    href: '/discord',
    external: true
  },
  {
    title: 'Cold Game',
    href: '/coldgame',
  },
]

export function NavBar () {
  return (
    <>
      <HStack as="nav" spacing="7" display={{ base: "none", lg: "contents" }}>
        {links.map(({ title, href, external = false }) => (
          <Link
            key={title}
            display="flex"
            align="center"
            href={href}
            style={{ textDecoration: "none" }}
            isExternal={external}
          >
            <Text
              ml="4"
              color="#B63627"
              fontSize="xl"
              fontFamily="Pacifico"
              fontWeight="medium"
              _hover={{ color: "#9D2B1F" }}
            >
              {title}
            </Text>
          </Link>
        ))}
      </HStack>
      <VStack
        as="navmobile"
        spacing="3"
        display={{ base: "contents", lg: "none" }}
      >
        {links.map(({ title, href, external }) => (
          <Center key={title}>
            <Link
              key={title}
              display="flex"
              align="center"
              href={href}
              style={{ textDecoration: "none" }}
              isExternal={external}
            >
              <Text
                ml="4"
                color="gray.400"
                fontSize="lg"
                fontFamily="Pacifico"
                fontWeight="medium"
                _hover={{ color: "white" }}
              >
                {title}
              </Text>
            </Link>
          </Center>
        ))}
      </VStack>
    </>
  );
}
