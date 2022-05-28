import React from 'react';
import { Box, Text, Stack, Image, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <Box>
      <Flex alignItems={'center'}>
        <motion.div whileHover={{ scale: 1.15 }} id="imghgt">
          {' '}
          <Image
            mr={5}
            border="2px"
            borderColor="cyan"
            // border={'black'}
            borderRadius="full"
            boxSize="100px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          ></Image>
        </motion.div>

        <Stack>
          <motion.div whileHover={{ scale: 1.05 }} id="imghgt">
            <Text
              fontSize="xl"
              fontWeight="bold"
              textAlign="start"
              bgGradient="linear(to-t, green.200, pink.500)"
              bgClip={'text'}
              fontFamily="heading"
            >
              Hii, <br />
              Saurabh Here!
            </Text>
          </motion.div>

          <Text fontFamily="serif">Full Stack Developer..!</Text>
        </Stack>
      </Flex>
      <Text mt={5} fontFamily="cursive">
        I am a full-stack developer, and now I am a First-year student pursuing
        a degree in Computer Science here in India. I am proficient in frontend
        development and backend development. Likewise, I have 3 years of
        experience in web development and 2 years in android app development. I
        have built and maintained web applications and android applications for
        clients. I am passionate about the technology industry and want to get
        involved in new opportunities.
      </Text>
      <Text
        mt={5}
        fontFamily="cursive"
        bgGradient="linear(to-t, purple.200, blue.500)"
        bgClip={'text'}
      >
        Currently i am working as a Flutter and Next Js developer at @NWG..
      </Text>
    </Box>
  );
};

export default Profile;
