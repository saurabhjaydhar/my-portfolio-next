import React from 'react';
import { Stack, Box, Container } from '@chakra-ui/react';
import DeskNav from './DeskNav';
import MobNav from './MobNav';
import BubbleEffect from './BubbleEffect';

const Layout = ({ children }) => {
  return (
    <div>
      <Stack pb={20} px={'10%'}>
        <BubbleEffect />
        <Box borderBottomLeftRadius="full">
          <DeskNav />
          <MobNav />
        </Box>
        <Container>{children}</Container>
      </Stack>
    </div>
  );
};

export default Layout;
