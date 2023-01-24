import { Box, Flex, Grid, Heading, Image, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Frontend, Backend, Tools } from "../components/data/Skills";
import Git1 from "../components/Images/git1.png";
import Git2 from "../components/Images/git2.png";
import SkillsNavbar from "../components/skillsNavbar";
import style from "../components/style/Skills.module.css";

const Mapping = ({ data }) => {
  console.log(data.heading);
  return (
    <Box m="2em auto" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}>
      <Center>

        <Heading m={"1em"} fontSize={[15,20,25]}>{data.heading}</Heading>
      </Center>
      <Grid
      
        templateColumns={{
          base: "1fr",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        p="2rem"
        gap={"4em"}
        mt={"5rem"}
        w="40%"
        m="auto"
        flexWrap={"wrap"}
      >
        {data.data.map((skill) => (
          <Box  key={skill.id}>
            <Box>
              <Image w="100%" src={skill.img} alt={skill.name} />
            </Box>
            <Center>{skill.name}</Center>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

function Skills() {
  const [render, setRender] = useState({
    heading: "Frontend",
    data: Frontend,
  });

  const handleSkill = (dataset) => {
    if (dataset == "Frontend") {
      setRender({ heading: "Frontend", data: Frontend });
    } else if (dataset == "Backend") {
      setRender({ heading: "Backend", data: Backend });
    } else if (dataset == "Tools") {
      setRender({ heading: "Tools", data: Tools });
    }
  };

  return (
    <Box m="100px 0  10px" id="skills" p={"5rem"}>
      <Heading textAlign={"center"} color="#2196f3">
        Skills
      </Heading>

      {/* Skills mapping */}
      {/* {base:"1fr",sm:"1fr,1fr",md:"1fr,1fr,1fr"} */}

      <SkillsNavbar handleSkill={handleSkill} />

      <Mapping data={render} />

      {/* github Stats */}

      <Flex
        justify={{ base: "center", sm: "center", md: "center" }}
      
        m="auto"
        mt={"4rem"}
        w="80%"
        flexDirection={"column"}
        gap={20}
        
      >
        <Heading textAlign={"center"} color="#2196f3">
          GitHub Stats
        </Heading>
        <Box w={{base:"200%",sm:"100%"}} ml={{base:"-100px",sm:"inherit"}}>
        <GitHubCalendar
          username="KKShakya"
          blockMargin={10}
          blockSize={18}
          
        ></GitHubCalendar>
        </Box>
      </Flex>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={"4em"}
        mt={"5rem"}
      >
        <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} w="80%">
          <Image src={Git1} alt={Git1} />
        </Box>
        <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} w="80%">
          <Image src={Git2} alt={Git2} />
        </Box>
      </Grid>
    </Box>
  );
}

export default Skills;
