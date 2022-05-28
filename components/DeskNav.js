import React from 'react';
import { Button, Text, Stack, Spacer, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';
const DeskNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  var isDarkModeOn = colorMode === 'dark';

  return (
    <div>
      <Stack
        // bg="blackAlpha.300"
        // justifyContent={'space-around'}
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="flex-start"
        alignItems={'center'}
        px={10}
        display={{ base: 'none', md: 'flex' }}
      >
        <Spacer />
        <Link href="/">
          <Text
            cursor={'pointer'}
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
        </Link>
        <Link href="/projects">
          <Text
            cursor={'pointer'}
            mx={5}
            px={5}
            fontSize="md"
            fontWeight="bold"
            textAlign="center"
            // color="white"
            _peerFocus={{ bg: 'green.400' }}
          >
            Projects{' '}
          </Text>
        </Link>
        <Text
          mx={5}
          px={5}
          fontSize="md"
          fontWeight="bold"
          textAlign="center"
          // color="white"
        >
          Blog
        </Text>
        <Button size="sm" mx={5} onClick={toggleColorMode} variant="unstyled">
          {isDarkModeOn ? <SunIcon /> : <MoonIcon />}{' '}
        </Button>{' '}
      </Stack>
    </div>
  );
};

export default DeskNav;
