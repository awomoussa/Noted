// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Button, Link, SimpleGrid, Heading, Text } from "@chakra-ui/react";
// import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
// import { EditIcon, ViewIcon } from "@chakra-ui/icons";

// export default function Note() {

//   const notes = useLoaderData();
//   return (

//     {notes &&
//         notes.map((note) => (
//       <Card key={note.id} bg="pink">
//         <CardHeader>
//           <Heading size="md">{note.title}</Heading>
//         </CardHeader>
//         <CardBody>
//           <Text>{note.text}</Text>
//         </CardBody>
//         <CardFooter>
//           <Button variant="ghost" rightIcon={<ViewIcon />}>
//             View note
//           </Button>
//         </CardFooter>
//       </Card>

// ))}


//   );
// }

// export const notesLoader = async() => {
//   const res = await fetch("http://localhost:3000/notes");

// }