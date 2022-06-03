import React, { useState } from 'react';
import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Button,
} from '@chakra-ui/react';
import { projectModel } from '../lib/model/ProjectModel';
import { motion } from 'framer-motion';
import projectImage from '../public/wallpaper.png';

// import { firestore } from '../firebase/clientApp';
// import firebase from 'firebase';

import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from '@firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Wrap, WrapItem } from '@chakra-ui/react';

// import { getFirestore } from 'firebase/firestore';

const Projects = () => {
  const [projectList, setProjectList] = useState(projectModel);
  const bg = useColorModeValue('blackAlpha.300', 'gray.200');
  // firebase

  // const todosCollection = collection(firestore, 'updateData');
  // console.log('firstValue', todosCollection);

  // const [todos, setTodos] =
  //   useState < QueryDocumentSnapshot < DocumentData > [] > [];
  // const [loading, setLoading] = useState < boolean > true;

  // const [votes, votesLoading, votesError] = useCollection(
  //   firebase.firestore().collection('updateData'),
  //   {}
  // );

  // if (!votesLoading && votes) {
  //   votes.docs.map((doc) => console.log(doc.data()));
  // }

  // end firebase
  // const { roomId } = useParams();
  // useEffect(() => {
  //   //  if (roomId) {
  //   var data = db
  //     .collection('updateData')
  //     .doc(roomId)
  //     .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
  //   console.log('data', data);
  //   //  }
  // }, []);

  // const todosCollection = collection(firestore, 'updateData');
  // console.log('check', todosCollection);

  // const [todos, setTodos] =
  //   useState < QueryDocumentSnapshot < DocumentData > [] > [];
  // const [loading, setLoading] = useState < boolean > true;

  return (
    <>
      <Stack
      //  alignItems={'start'}
      >
        <Text
          fontFamily="heading"
          fontWeight={'bold'}
          textAlign="start"
          fontSize={'xl'}
        >
          # Projects
        </Text>
        <Text
          fontFamily="cursive"
          fontWeight={'bold'}
          textAlign="start"
          pb={10}
        >
          List of public projects that I have done, and soon I am going to add
          open-source repo here.
        </Text>
        {projectList.map((project, index) => {
          return (
            <Stack mb={5} pb="10" key={index} cursor="pointer">
              <Text
                fontFamily="heading"
                fontWeight={'bold'}
                textAlign="center"
                fontSize={'xl'}
              >
                {project.project_name}
              </Text>
              <Text
                fontFamily="heading"
                fontWeight={'bold'}
                textAlign="center"
                fontSize={'md'}
              >
                {project.title}
              </Text>

              <Wrap>
                {project.tech.map((tech, index) => {
                  return (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      id="imghgt"
                      key={index}
                    >
                      <Box
                        // mx={5}
                        px={5}
                        py={1}
                        // my={5}
                        bg={bg}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'visible'}
                        // opacity={0.5}

                        alignItems="center"
                      >
                        <Text
                          fontFamily="heading"
                          fontWeight={'bold'}
                          textAlign="center"
                          fontSize={'md'}
                        >
                          #{tech}
                        </Text>
                      </Box>
                    </motion.div>
                  );
                })}
              </Wrap>

              <motion.div whileHover={{ scale: 1.05 }} id="imghgt">
                <Image
                  m={5}
                  // border={'black'}

                  // boxSize="100px"
                  src="https://codingstark.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fcodingstark%2Fproject%2Frefox_RYhbyquYW.webp%3FupdatedAt%3D1632005095578&w=3840&q=75"
                  alt="Dan Abramov"
                  borderRadius={'lg'}
                ></Image>
              </motion.div>

              <Text
                fontFamily="heading"
                fontWeight={'semibold'}
                textAlign="center"
                fontSize={'md'}
              >
                {project.desc}
              </Text>
              <Box h="5"></Box>
              <Button
                // leftIcon={<EmailIcon />}
                colorScheme="teal"
                variant="solid"
              >
                Visit Site
              </Button>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default Projects;
