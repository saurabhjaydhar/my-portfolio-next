import React from 'react';
import { motion } from 'framer-motion';
import { Text, Box, Stack, Center, useColorModeValue } from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';

const QuickLink = () => {
  const bg = useColorModeValue('blackAlpha.300', 'gray.200');

  const tempArr = [
    'prjects',
    'achievements',
    'prjects',
    'achievements',
    'prjects',
    'achievements',
    'prjects',
    'achievements',
  ];
  return (
    <Box>
      <Text
        mt={8}
        mb={3}
        fontFamily="cursive"
        fontWeight={'bold'}
        bgGradient="linear(to-t, red.700, pink.500)"
        bgClip={'text'}
      >
        Quick Links
      </Text>

      <Wrap>
        {tempArr.map((item, index) => {
          return (
            <WrapItem key={index}>
              <motion.div whileHover={{ scale: 1.1 }} id="imghgt">
                <Box
                  px={5}
                  mr={5}
                  py={2}
                  my={2}
                  bg={bg}
                  // opacity={0.5}
                  // w={'100%'}
                  alignItems="center"
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'visible'}
                >
                  <Text
                    fontFamily="cursive"
                    fontWeight={'bold'}
                    bgGradient="linear(to-t, purple.700, blue.500)"
                    bgClip={'text'}
                    textAlign="center"
                  >
                    # {item}
                  </Text>
                </Box>
              </motion.div>
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};

export default QuickLink;
