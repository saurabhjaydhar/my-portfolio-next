import React from 'react';
import { Stack, Box, Container } from '@chakra-ui/react';
// import DeskNav from './DeskNav';
// import MobNav from './MobNav';
import NavBar from './NavBar';

import BubbleEffect from './BubbleEffect';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Stack
        px={{
          base: '3%',
          md: '10%',
        }}
        // alignItems={'normal'}
      >
        <BubbleEffect />
        {/* <Box borderBottomLeftRadius="full"> */}

        {/* </Box> */}
        <Box mt={'5%'}>{children}</Box>
      </Stack>
    </>
  );
};

export default Layout;
