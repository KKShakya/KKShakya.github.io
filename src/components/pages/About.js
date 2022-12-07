import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Grid,
  Flex,
  background,
} from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import { FaGraduationCap } from "react-icons/fa";
import resume from "./Krishna_Shakya_Resume.pdf";
import timeline from "../data/timeline";
import "react-vertical-timeline-component/style.min.css";
import "../style/timeline.css";


function About() {
  return (
    <Box m="100px 0  0" id="about" background="#EDEDED" pt={'5rem'}>
      <Heading textAlign={"center"} color="#2196f3" >
        About Me
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "1.5fr 1fr" }}
        m="auto"
        mt={"5em"}
        w="80%"
      >
        <Box
          w={{ base: "90%", md: "80%", lg: "90%" }}
          m="40px auto 0"
          lineHeight={{ base: "7", md: "10" }}
        >
          <Text
            fontSize={{ base: 16, md: 18, lg: 20 }}
            textAlign={"center"}
            fontFamily="cursive"
          >
            Hello, glad to see you here. I'm an ordinary fella from a small town
            Shivpuri, Madhya Pradesh. I have done my graduation from Lovely
            Proffessional University, Phagwara Punjab. A Keen learner and
            passionate full stack web developer skilled in React, Redux,
            Chakra-UI, NodeJS, JavaScript.
          </Text>
        </Box>

        <Box>
          <Image
            src="https://avatars.githubusercontent.com/u/33806451?v=4"
            borderRadius={"50%"}
            h={{ base: "200px", md: "300px" }}
            m="auto"
            mb={"10px"}
          />
          <a href={resume} download="Krishna_Shakya_Resume.pdf">
            <Flex
              w={"200px"}
              gap={2}
              my="4"
              p={2}
              borderRadius={"2xl"}
              fontSize="20px"
              alignItems="center"
              justifyContent={"center"}
              classNameName="downloadbtn"
            >
              Resume
            </Flex>
          </a>
        </Box>
      </Grid>

      {/* ?timeline for Education */}

      <VerticalTimeline className="app__timeline-container">
        {timeline.map((elem) => (
          <VerticalTimelineElement
            key={elem.id}
            date={elem.date}
            dateClassName="timeline-date"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">{elem.title}</h3>
            <h4 className="app__university p-text">{elem.university}</h4>
            <h5 className="vertical-timeline-element-subtitle">
              {elem.location}
            </h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
}

export default About;