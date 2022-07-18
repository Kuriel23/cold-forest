import { Link } from '../../forward/Link'

import { Image } from '@chakra-ui/react'

export function Logo () {
  return (
    <Link href="/">
      <Image
        m="auto"
        src="/logo.png"
        alt="logo"
        width="100%"
        height="110px"
        style={{
          filter:
            "invert(33%) sepia(27%) saturate(3973%) hue-rotate(340deg) brightness(77%) contrast(95%)",
        }}
      />
    </Link>
  );
}
