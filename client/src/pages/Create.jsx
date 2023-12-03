import React from "react";
import { useState } from "react";
import { Form, redirect } from "react-router-dom"


import {
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
      <Form method="post" action="/create">

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

        <Button onSubmit={createAction} type="submit">Submit</Button>
      </FormControl>
      </Form>
    </Box>
  );
}

export default Create;

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const note = {
    title: data.get("title"),
    text: data.get("text"),    
  }

  console.log("NEW NOTE:",note)

  return redirect("/dashboard")
}
 
