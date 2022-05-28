import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { Stack, Box, Text, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
const MobNav = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  var isDarkModeOn = colorMode === 'dark';
  return (
    <div>
      {' '}
      <Stack
        flexDir={{ base: 'row', md: 'column' }}
        alignItems="flex-start"
        alignItems={'center'}
        px={10}
        display={{ base: 'flex', md: 'none' }}
      >
        <Button ref={btnRef} variant="unstyled" onClick={onOpen}>
          <MoonIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}

            <DrawerBody alignContent={'start'} alignItems="center">
              <Box h={20}></Box>

              <Link href={'/'}>
                <motion.div whileHover={{ scale: 1.15 }} id="">
                  <Text
                    px={5}
                    px={5}
                    fontSize="md"
                    fontWeight="bold"
                    textAlign="center"
                    // color="white"

                    // bgClip={'text'}
                  >
                    Home
                  </Text>
                </motion.div>
              </Link>

              <Text
                px={5}
                px={5}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                // color="white"

                // bgClip={'text'}
              >
                Blogs
              </Text>
              <Link href={'/projects'}>
                <Text
                  px={5}
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
        <Spacer />
        <Button size="sm" mx={5} onClick={toggleColorMode} variant="unstyled">
          {isDarkModeOn ? <SunIcon /> : <MoonIcon />}{' '}
        </Button>{' '}
      </Stack>
    </div>
  );
};

export default MobNav;
