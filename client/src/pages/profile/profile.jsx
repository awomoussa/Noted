import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

export default function Profile() {
  return (
    <SimpleGrid
    padding={10}
      spacing={8}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {/* <Button colorScheme='teal'>
        <Link as={ReactRouterLink} to="/"> 
        Button
        </Link>
        </Button> */}
      <Card bg="pink">
        <CardHeader>
          <Heading size="md"> Note Title</Heading>
        </CardHeader>
        <CardBody>
          <Text>preview of the note.</Text>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" rightIcon={<ViewIcon />}>
            View note
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md"> Note Title</Heading>
        </CardHeader>
        <CardBody>
          <Text>preview of the note.</Text>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" rightIcon={<ViewIcon />}>
            View note
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md"> Note Title</Heading>
        </CardHeader>
        <CardBody>
          <Text>preview of the note.</Text>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" rightIcon={<ViewIcon />}>
            View note
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md"> Note Title</Heading>
        </CardHeader>
        <CardBody>
          <Text>preview of the note.</Text>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" rightIcon={<ViewIcon />}>
            View note
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md"> Note Title</Heading>
        </CardHeader>
        <CardBody>
          <Text>preview of the note.</Text>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" rightIcon={<ViewIcon />}>
            View note
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}
