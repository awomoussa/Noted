import React from "react";
import Note from "../components/note";
// import { SimpleGrid } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Box, Link, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  //this is the destructuring statement
  const { notes } = useLoaderData(); // It's a shorthand way of writing const notes = useLoaderData().notes; accesing the object with dot notation
  console.log("Notes:", notes);

  if (!notes || !Array.isArray(notes)) {
    //The conditional check ensures that before attempting to use the .map() function
    return <div>No notes available.</div>; //or perform operations on the 'notes' array, it is both existing and of the expected array type.
  }

  return (
    <>
      {/* <Box 
    // display="flex" 
    alignContent="center" 
    w="75%"
    >
      <Tabs align="end" variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box> */}

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
              <Link as={ReactRouterLink} to={`/notes/${note.id}`}>
                <Button variant="ghost" rightIcon={<ViewIcon />}>
                  View Note Here
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export const notesLoader = async () => {
  const res = await fetch("http://localhost:3000/notes");
  const data = await res.json(); // Assuming the data is in JSON format
  return { notes: data };
};
