import Head from 'next/head';
import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Flex,
  Container,
  Heading,
  Spacer,
  Stack,
  useDisclosure,
  Button,
  Input,
  // MenuIcon,
} from '@chakra-ui/react';
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  SunIcon,
  MoonIcon,
} from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import QuickLink from '../components/QuickLink';
import Social from '../components/Social';
import BubbleEffect from '../components/BubbleEffect';
// import DeskNav from '../components/DeskNav';
// import MobNav from '../components/MobNav';
import Profile from '../components/Profile';

const Index = () => {
  // const btnRef = React.useRef();
  return (
    <>
      <Box
      // bgColor={'gray.100'}
      // alignSelf={'center'}
      // mx={'auto'}
      // px={{ base: '5', md: '50' }}
      // borderTopRightRadius="full"
      >
        <Profile />
        <QuickLink />
        <Social />
      </Box>
    </>
  );
};

export default Index;
