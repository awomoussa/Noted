import React from "react";
import Note from "../components/note";
// import { SimpleGrid } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const notes = useLoaderData();

  return (
    <SimpleGrid
      padding={10}
      spacing={8}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {/* <Note /> */}
      {notes.map((note) => (
          <Card key={note.id} bg="pink">
            <CardHeader>
              <Heading size="md">{note.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{note.text}</Text>
            </CardBody>
            <CardFooter>
              <Button variant="ghost" rightIcon={<ViewIcon />}>
                View note
              </Button>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const notesLoader = async () => {
  const res = await fetch("http://localhost:3000/notes");
  const data = await res.json() // Assuming the data is in JSON format
  return { notes: data };
};
