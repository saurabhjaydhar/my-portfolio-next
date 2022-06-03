import React from 'react';
import { motion } from 'framer-motion';
import { Text, Box, Stack, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Wrap, WrapItem } from '@chakra-ui/react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  TumblrShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const Social = () => {
  const bg = useColorModeValue('blackAlpha.300', 'gray.200');
  const tempArr = ['prjects'];
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

      <Wrap>
        <WrapItem>
          <motion.div whileHover={{ scale: 1.1 }} id="imghgt">
            <WhatsappShareButton url={'post_link'}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </motion.div>
        </WrapItem>

        <WrapItem>
          <motion.div whileHover={{ scale: 1.1 }} id="imghgt">
            <LinkedinShareButton edinShareButton url={'post_link'}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </motion.div>
        </WrapItem>
        <WrapItem>
          <motion.div whileHover={{ scale: 1.1 }} id="imghgt">
            <TwitterShareButton url={'post_link'}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </motion.div>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default Social;
