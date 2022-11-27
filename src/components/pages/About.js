import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Box m="100px 0  0" id="about">
      <Image src="https://avatars.githubusercontent.com/u/33806451?v=4" borderRadius={"50%"} h={"200px"} m='auto'  mb={'10px'}/>
      <Heading textAlign={"center"} style={{ color: "#fe3201" }}>
        About Me
      </Heading>
      <Box
        w={{ base: "90%", md: "80%", lg: "70%" }}
        m="40px auto 0"
        lineHeight={{ base: "7", md: "10" }}
      >
        <Text
          fontSize={{ base: 16, md: 18, lg: 20 }}
          textAlign={"center"}
          fontFamily="tangerine"
        >
          Hello, glad to see you here. I'm an ordinary fella from a small town
          Shivpuri, Madhya Pradesh. I have done my graduation from Lovely
          Proffessional University, Phagwara Punjab. A Keen learner and
          passionate full stack web developer skilled in React, Redux,
          Chakra-UI, NodeJS, JavaScript.
        </Text>
      </Box>
    </Box>
  );
}

export default About;
