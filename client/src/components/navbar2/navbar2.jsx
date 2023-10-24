import React from 'react'
import { Flex, Box, Spacer} from "@chakra-ui/react"
import { Heading, Text, Button } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'

export default function Navbar2() {
  return (
    <Flex as="nav" wrap="wrap" p="10px" alignItems="center">
      <Heading as="h1">Noted</Heading>
      <Spacer />
      <HStack spacing="20px">
      <Box bg="gray.100" p="10px">SI</Box>
      <Text>About us</Text>
      <Button colorScheme="teal">Sign in</Button>
      <Button colorScheme="teal">Log out</Button>
      </HStack>


      
    </Flex>
  )
}

