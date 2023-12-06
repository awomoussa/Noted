import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, Link as ReactRouterLink } from "react-router-dom";
import { Form, redirect } from "react-router-dom"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Textarea,
  Button, 
  Input,
} from "@chakra-ui/react";

function Edit() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`http://localhost:3000/notes/${id}`);

      if (response.ok) {
        const data = await response.json(); // Assuming the data is in JSON format
        setNote(data); //tset the fetched note to the note state
        console.log("individual note", note);
      } else {
        console.error("failed to load the note, sorry");
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <div>Note not found.</div>; // Display a message for a missing note
  }

  return (
    <Box display="flex" flexDirection="column" mb="40px" padding="60px">
       <Heading>{note.id} {note.text}</Heading>
   
    </Box>
  );
}

export default Edit;
