import React from 'react';
import { motion } from 'framer-motion';
import { Text, Box, Stack, useColorModeValue } from '@chakra-ui/react';

const QuickLink = () => {
  const bg = useColorModeValue('blackAlpha.300', 'gray.200');
  return (
    <>
      {' '}
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
      <Box
        // flexDir={{ base: 'row', md: 'row' }}
        // alignItems="center"
        alignContent={'center'}
        alignSelf="center"
        display={'flex'}
      >
        <motion.div whileHover={{ scale: 1.1 }} id="imghgt">
          <Box
            px={0}
            py={3}
            bg={bg}
            // opacity={0.5}
            w={150}
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
              # Projects
            </Text>
          </Box>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} id="imghgt">
          <Box
            ml={5}
            px={0}
            py={3}
            bg={bg}
            // opacity={0.5}
            w={150}
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
              # Achievements
            </Text>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default QuickLink;
