import React from 'react';
import { Stack, Box } from '@chakra-ui/react';

const BubbleEffect = () => {
  return (
    <Stack dir="column" position="absolute" alignSelf="center">
      <Box
        alignSelf={'start'}
        mx={20}
        mt={10}
        h={'100px'}
        w="100px"
        bg="orange.200"
        opacity="0.2"
        borderRadius={'full'}
        // justifyContent="flex-start"
        // zIndex="1"
      ></Box>
      <Box h="5"></Box>
      <Box
        alignSelf={'end'}
        mx={20}
        h={'100px'}
        w="100px"
        bg="green.300"
        opacity="0.2"
        // position="absolute"
        borderRadius={'full'}
        justifyContent="center"
        // zIndex="1"
      ></Box>
      <Box h="5"></Box>
      <Box
        alignSelf={'start'}
        mx={20}
        h={'100px'}
        w="100px"
        bg="pink.300"
        opacity="0.2"
        // position="absolute"
        borderRadius={'full'}
        justifyContent="center"
        // zIndex="1"
      ></Box>
      <Box
        alignSelf={'end'}
        mx={20}
        h={'100px'}
        w="100px"
        bg="purple.300"
        opacity="0.2"
        // position="absolute"
        borderRadius={'full'}
        justifyContent="end"
        // zIndex="1"
      ></Box>
    </Stack>
  );
};

export default BubbleEffect;
