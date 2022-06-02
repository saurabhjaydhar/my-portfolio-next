import React from 'react';
import { motion } from 'framer-motion';
import { Text, Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Social = () => {
  const bg = useColorModeValue('blackAlpha.300', 'gray.200');
  return (
    <>
      <Text
        mt={8}
        mb={3}
        fontFamily="cursive"
        fontWeight={'bold'}
        bgGradient="linear(to-t, red.700, pink.500)"
        bgClip={'text'}
      >
        Find Me On -
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
            px={5}
            py={3}
            bg={bg}
            // opacity={0.5}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'visible'}
          >
            <MoonIcon />
          </Box>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} id="imghgt">
          <Box
            ml={5}
            px={5}
            py={3}
            bg={bg}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'visible'}
            // opacity={0.5}

            alignItems="center"
          >
            <SunIcon />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default Social;
