import React from "react";
import home from "../../assets/home.jpg"
import { Button, Flex, Image } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex align="center"
    justify="space-around"
    wrap="no-wrap"
     minH="70vh"
    >
      <Stack
        spacing={4}
        direction='column'
        mr={2}
        >
      <Heading as="h1">Simplify Your Notes</Heading>
      <Text >Noted - the perfect note-taking app where every idea, is duly noted.</Text>
      <Link>
      <Button colorScheme='teal'>
        <Link as={ReactRouterLink} to="/profile"> 
        Button
        </Link>
        </Button>
      </Link>
    </Stack>
    <Box maxW='sm'>
      <Image src={home} size="100%" rounded="1rem" shadow="2xl"/>
    </Box>
    </Flex>

  );
}
