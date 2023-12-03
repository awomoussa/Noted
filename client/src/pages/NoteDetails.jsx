import { CardFooter, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

import { useParams, Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Text,
} from "@chakra-ui/react";

function NoteDetails() {
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
    <Box
      paddingTop="90px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card key={note.id} bg="pink" size="lg">
        <CardHeader>
          <Heading size="md">
            {note.id}) {note.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>{note.text}</Text>
        </CardBody>
          <Button
            as={ReactRouterLink}
            to="/dashboard"
            variant="ghost"
            rightIcon={<EditIcon />}
          >
            Edit
          </Button>
      </Card>
    </Box>
  );
}

export default NoteDetails;
