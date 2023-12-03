import { Heading } from '@chakra-ui/react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";




function NoteDetails() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      const response = await fetch(`http://localhost:3000/notes/${id}`);

      if (response.ok){
        const data = await response.json(); // Assuming the data is in JSON format
        setNote(data); //tset the fetched note to the note state
        console.log("individual note", note)
      } else {
        console.error("failed to load the note, sorry")
      }  
      


    };

    fetchNote()

  }, [id]) 
  

  if (!note) {
    return <div>Note not found.</div>; // Display a message for a missing note
  }

  return (
    
    <Card key={note.id} bg="pink">
    <CardHeader>
      <Heading size="md">{note.title}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{note.text}</Text>
    </CardBody>
  </Card>
  )
}

export default NoteDetails