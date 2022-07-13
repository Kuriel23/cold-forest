import { Footer } from '../components/common/Footer'
import { SEO } from '../components/forward/SEO'
import { Container, Section } from '../styles/pages/home'
import { Header } from '../components/common/Header'
import {
  useBreakpointValue,
  Text,
  Heading,
  Box,
  Button,
  Avatar,
  VStack,
  Link,
  Tag,
  HStack,
  Center
} from '@chakra-ui/react'

export default function Home () {
  const isLgBreakpoint = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <>
      <SEO />

      <Container>
        <Section>
          <Header />
        </Section>
        <Footer />
      </Container>
    </>
  )
}
