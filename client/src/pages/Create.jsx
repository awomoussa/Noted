import React from "react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

function Create() {
  let [title, setTitle] = useState("");

  let handleTitleChange = (e) => {
    let inputTitle = e.target.value;
    setTitle(inputTitle);
  };

  let [text, setText] = useState("");

  let handleTextChange = (e) => {
    let inputText = e.target.value;
    setText(inputText);
  };



  return (
    <Box display="flex" flexDirection="column" mb="40px" padding="60px">
      <FormControl mb="40px">
        <FormLabel isRequired>Title</FormLabel>
        <Input 
          type="text" 
          name="title" 
          value={title}
          onChange={handleTitleChange}>  
        </Input>
      </FormControl>

      <FormControl mb="40px">
        <FormLabel isRequired>Note Body</FormLabel>
        <Textarea
          type="text"
          name="note"
          placeholder="Here is a sample placeholder"
          value={text}
          onChange={handleTextChange}
        ></Textarea>

        <Button type="submit">Submit</Button>
      </FormControl>
    </Box>
  );
}

export default Create;
