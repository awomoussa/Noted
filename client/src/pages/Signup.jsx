import { Text } from "@chakra-ui/react";
import { Heading, Input } from "@chakra-ui/react";
import { Box, Button } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { InputRightElement } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
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
import { Link } from "@chakra-ui/react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
        <Stack align="center">
          <Heading>Sign Up</Heading>
          <Text align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit, facere.
          </Text>
        </Stack>

        <Box display="flex" flexDirection="column">
          <Stack>
            <HStack>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>

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
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
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
            If you already have an account,
            <Link as={ReactRouterLink} to="/login" color="teal">
              {" "}log in here
            </Link>
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
