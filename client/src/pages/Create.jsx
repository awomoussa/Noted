import React from 'react'
import {
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,Textarea
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

function Create() {
  return (
    <Box display="flex" flexDirection="column"   mb="40px" padding="60px">

      <FormControl mb="40px" >
        <FormLabel isRequired >Title</FormLabel>
        <Input type="text" name="title"></Input>
      </FormControl>

      <FormControl mb="40px">
        <FormLabel isRequired >Note Body</FormLabel>
        <Textarea  type="text" name="note" placeholder='Here is a sample placeholder'></Textarea>
        
      </FormControl>

    </Box>
  )
}

export default Create