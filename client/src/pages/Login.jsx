import { Text } from "@chakra-ui/react";
import { Heading, Input } from "@chakra-ui/react";
import { Box, Button, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isEmailError = email === "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Flex
        flexDirection="column"
        // align="center"
        width="50vw"
        padding="20px"
        rounded="1rem"
        shadow="2xl"
      >
        <Stack align="center" >
          <Heading>Login to Your account</Heading>
          <Text align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit, facere.
          </Text>
        </Stack>

        <Box display="flex" flexDirection="column">
          <Stack >
            <FormControl id="email_id">
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={handleEmailChange} />
              {!isEmailError ? (
                <FormHelperText>
                  Enter the email you'd like to Login.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="password_id">
              <FormLabel>Password</FormLabel>

              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              ></Input>
            </FormControl>
          </Stack>
          <Button
          alignSelf="center"
          mt={8}
            // isLoading
            loadingText="Submitting"
            colorScheme="teal"
            // variant="outline"
          >
            Submit
          </Button>
          <Text alignSelf="center">
            If you dont have an account,
            <Link as={ReactRouterLink} to="/signup" color="teal">
              {" "}create one here.
            </Link>
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
