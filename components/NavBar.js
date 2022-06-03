import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  Box,
  Button,
  Text,
  Stack,
  Spacer,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
// import { motion } from 'framer-motion';
import Link from 'next/link';
import Headroom from 'react-headroom';
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  var isDarkModeOn = colorMode === 'dark';

  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      pb={6}
      mb={5}
      px={{
        base: '3%',
        md: '10%',
      }}
      py={{
        base: '3',
        md: '5',
      }}
      className="sticky-header-div"
      bgColor={{
        base: isDarkModeOn ? '#1a202c' : '#ffffff',
        md: '',
      }}
      borderBottomLeftRadius={'full'}
    >
      <Stack
        position={'sticky'}
        flexDir={{ base: 'row', md: 'row' }}
        px={5}
        alignItems="center"
        justifyContent={'space-between'}
      >
        <Box display={{ base: 'contents', md: 'none' }}>
          <HamburgerIcon onClick={onOpen} />
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'contents' }}>
          <Link href="/">
            <Text
              cursor={'pointer'}
              px={5}
              fontSize="md"
              fontWeight="bold"
              textAlign="center"
            >
              Home
            </Text>
          </Link>
        </Box>

        <Box display={{ base: 'none', md: 'contents' }}>
          <Link href="/projects">
            <Text
              cursor={'pointer'}
              mx={5}
              px={5}
              fontSize="md"
              fontWeight="bold"
              textAlign="center"
              _peerFocus={{ bg: 'green.400' }}
            >
              Projects
            </Text>
          </Link>
        </Box>

        <Box size="sm" mx={5} onClick={toggleColorMode} variant="ghost">
          {isDarkModeOn ? <SunIcon /> : <MoonIcon />}
        </Box>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody alignContent={'start'} alignItems="center">
            <Box h={20}></Box>

            <Link href="/">
              <Text
                px={5}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                // color="white"

                // bgClip={'text'}
              >
                Home
              </Text>
            </Link>

            <Text
              px={5}
              fontSize="md"
              fontWeight="bold"
              textAlign="center"
              // color="white"

              // bgClip={'text'}
            >
              Blogs
            </Text>
            <Link href="/projects">
              <Text
                px={5}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                // color="white"

                // bgClip={'text'}
              >
                Projects
              </Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
