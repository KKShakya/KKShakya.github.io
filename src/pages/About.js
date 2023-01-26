import React from "react";
import { Box, Heading, Text, Image, Grid } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FaGraduationCap } from "react-icons/fa";
import resume from "../components/data/Krishna_Shakya_Resume.pdf";
import timeline from "../components/data/timeline";
import "react-vertical-timeline-component/style.min.css";
import "../components/style/timeline.css";

function About() {

  const handleResume = ()=>{
    window.open("https://drive.google.com/file/d/1s-R92_-qT7yQlM0i9dKE6cdqGhuCd022/view?usp=sharing" );
  }

  return (
    <Box m="100px 0  0" id="about" background="#F9F9F9" pt={"5rem"}>
      <Heading align={"center"} color="#2196f3">
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
            mb={"40px"}
          >
            Hello, glad to see you here. I'm an ordinary fella from a small town
            Shivpuri, Madhya Pradesh. I have done my graduation from Lovely
            Proffessional University, Phagwara Punjab. A Keen learner and
            passionate full stack web developer skilled in React, Redux,
            Chakra-UI, NodeJS, JavaScript.
          </Text>

          {/* resume button */}
          <a
            className="resume_button"
            textAlign={"center"}
            href={resume}
            download="Krishna_Shakya_Resume.pdf"
            onClick={handleResume}
          >
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            Resume
          </a>
        </Box>

        <Box mt={{ base: "50px", md: "10px" }}>
          {/* avatar profile pic */}
          <Box
            borderRadius={"30% 70% 70% 30% / 30% 30% 70% 70%  "}
            h="400px"
            background={"#2196f3"}
          >
            <Box
              borderRadius={"30% 70% 70% 30% / 30% 30% 70% 70%  "}
              h="300px"
              background={"#fff"}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/33806451?v=4"
                borderRadius={"30% 70% 70% 30% / 30% 30% 70% 70%  "}
                h={{ base: "200px", md: "300px" }}
                m="auto"
                mb={"10px"}
              />
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* ?timeline for Education */}

     <Box p={10} w="90%" m="auto">
     <VerticalTimeline className="app__timeline-container">
        {timeline.map((elem) => (
          <VerticalTimelineElement
            key={elem.id}
            date={elem.date}
            dateClassName="timeline-date"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
    </Box>
  );
}

export default About;
