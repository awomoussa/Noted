import { Text } from "@chakra-ui/react";
import { Heading, Input } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const isEmailError = email === ''


  return (
    // <div className="login-section">
    //   <div className="login-header-box">
    //     <h1 className="login-header">Login</h1>

    //     <div className="form-box">
    //       <form className="form-container">
    //         <ul>
    //           <li>
    //             <label>
    //               Email:
    //               <input type="text" name="email" placeholder="Email" />
    //             </label>
    //           </li>

    //           <li>
    //             <label>
    //               Password:
    //               <input
    //                 type="password"
    //                 name="password"
    //                 placeholder="Password"
    //               />
    //             </label>
    //           </li>

    //           <li>
    //             <input type="submit" value="Submit" />
    //           </li>
    //         </ul>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <Flex
    // justifyContent="center"      
     justifyContent="space-evenly"
    flexDirection="column"
    wrap="no-wrap"
    minH="60vh"
    width="50vw"
    padding="20px"

    rounded="1rem" shadow="2xl"
     >
      <Stack
          align="center"
          >
        <Heading>Login to you account</Heading>
        <Text align="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, facere.</Text>
      </Stack>

      <Box>
        <Stack>
        <FormControl id="email_id">
        <FormLabel>Email</FormLabel>
        <Input type='email' value={email} onChange={handleEmailChange} />
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

          <Input type="password" value={password} onChange={handlePasswordChange}></Input>
        </FormControl>
        </Stack>
      </Box>
    </Flex>
  );
}
