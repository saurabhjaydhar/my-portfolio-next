// import React from 'react';
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Spacer,
//   useColorMode,
// } from '@chakra-ui/react';
// import { Stack, Box, Text, Button } from '@chakra-ui/react';
// import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const MobNav = () => {
//   const btnRef = React.useRef();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { colorMode, toggleColorMode } = useColorMode();
//   var isDarkModeOn = colorMode === 'dark';
//   return (
//     <Box
//       // w="100%"
//       // flexDir={{ base: 'row', md: 'column' }}
//       // alignItems="flex-start"
//       justifyContent={'space-between'}
//       // px={10}
//       display={{ base: 'flex', md: 'none' }}
//       // bgColor="red"
//     >
//       <Button ref={btnRef} variant="solid" border={'none'}>
//         <HamburgerIcon onClick={onOpen} />
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         // finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           {/* <DrawerHeader>Create your account</DrawerHeader> */}

//           <DrawerBody alignContent={'start'} alignItems="center">
//             {/* <Box h={20}></Box> */}

//             <Link href="/">
//               <motion.div whileHover={{ scale: 1.15 }} id="">
//                 <Text
//                   px={5}
//                   fontSize="md"
//                   fontWeight="bold"
//                   textAlign="center"
//                   // color="white"

//                   // bgClip={'text'}
//                 >
//                   Home
//                 </Text>
//               </motion.div>
//             </Link>

//             <Text
//               px={5}
//               fontSize="md"
//               fontWeight="bold"
//               textAlign="center"
//               // color="white"

//               // bgClip={'text'}
//             >
//               Blogs
//             </Text>
//             <Link href="/projects">
//               <Text
//                 px={5}
//                 fontSize="md"
//                 fontWeight="bold"
//                 textAlign="center"
//                 // color="white"

//                 // bgClip={'text'}
//               >
//                 Projects
//               </Text>
//             </Link>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//       {/* <Spacer /> */}
//     </Box>
//   );
// };

// export default MobNav;
