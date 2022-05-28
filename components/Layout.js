import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
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
        <Box>{children}</Box>
      </Stack>
    </div>
  );
};

export default Layout;
