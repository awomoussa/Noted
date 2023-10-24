import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Button, Link } from '@chakra-ui/react'

export default function Profile() {
  return (
    <Button colorScheme='teal'>
        <Link as={ReactRouterLink} to="/"> 
        Button
        </Link>
        </Button>
  )
}