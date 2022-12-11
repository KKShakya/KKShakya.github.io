import React from "react";
import { Box, Grid,Text } from "@chakra-ui/react";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div style={{ margin: "auto", width: "100%", marginTop: "10rem" }}>
      <Grid templateColumns={{ base: "1fr" }} m="auto" mt={"2em"}>
        <Box fontWeight={"600"} fontSize={{ base: "2rem", md: "3rem" }}>
          <Text color="#3C4048">Hi, I'm Krishna Shakya</Text>
        <Box bgGradient={"linear-gradient(to top, #F9F9F9, #2f9cf3)"} bgClip="text" >
        <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer",
                "Skilled in MERN Stack",
                "with 1200+hrs coding experience",
              ],
              autoStart: true,
              loop: true,
              cursor: "!",
              delay: 70,
              deleteSpeed: 100,
            }}
           
          />
        </Box>
        </Box>
      </Grid>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;

//
