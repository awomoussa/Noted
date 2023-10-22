import React from "react"
import { Flex } from "@chakra-ui/react"
// import NavBar from "../components/NavBar"
// import Footer from "../components/Footer" // will add this in the part 2

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      {/* <NavBar /> */}
      {props.children}
    </Flex>
  )
}