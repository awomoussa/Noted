import {useState, useEffect} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link, SimpleGrid, Heading } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";


export default function Dashboard() {
  const [notes, setNotes] = useState([]) //you should initialize the notes state as an empty array [] to avoid potential map errors 
  const getData = () => {
    const requestOption = {
      method: "GET",
    };

    fetch("http://localhost:3000/notes", requestOption)
    .then((res)=> res.json())
    .then((result) => setNotes(result))
    .catch((error) => console.log("Error in data fetching:", error))
  };

  useEffect(() => {
    getData();
  }, [])
  
  console.log("NOTES:", notes)

  const maxNoteLength = 50
  return (
    <>
      <SimpleGrid
        padding={10}
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {notes.map((note) => (
          <Card size="sm" key={note.id} bg="pink">
            <CardHeader>
              <Heading size="md">{note.id}) {note.title}</Heading>
            </CardHeader>
            <CardBody>
              {note.text.length > maxNoteLength ? `${note.text.substring(0, maxNoteLength)}....` : note.text}
            </CardBody>
            <CardFooter>
              <Link as={ReactRouterLink} to={`/notes/${note.id}`}>
                <Button variant="ghost" rightIcon={<ViewIcon />}>
                  View Full Note Here
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
