import React from "react";
import { Box, Grid, Button, Text, Image } from "@chakra-ui/react";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div style={{ margin: "auto", width: "100%", marginTop: "10rem" }}>
      <Grid
        templateColumns={{ base: "1fr"}}
        m="auto"
        mt={"2em"}
      >
        <Box fontWeight={"600"} fontSize={{ base: "2rem", md: "3rem" }}>
          <p>Hi, I'm Krishna Shakya</p>
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer",
                "Skilled in MERN Stack",
                "with 1200+hrs coding experience",
              ],
              autoStart: true,
              loop: true,
              cursor:"!",
              delay:70,
              deleteSpeed:100
            }}
          />
        </Box>
        
      </Grid>
      <About />
      {/* <Skills />
      <Projects />
      <Contact />
      <Resume /> */}
    </div>
  );
}

export default Home;

// 