import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { SkillsData } from "../data/Skills";
import style from "../style/Skills.module.css";




function Skills() {
  return (
    <Box m="100px 0  10px" id="skills" background="#EDEDED" p={"5rem"}>
      <Heading textAlign={"center"} color="#2196f3">
        Tools & Platforms
      </Heading>

      {/* Skills mapping */}
      {/* {base:"1fr",sm:"1fr,1fr",md:"1fr,1fr,1fr"} */}
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap={"4em"}
        mt={"5rem"}
      >
        {SkillsData.map((skill) => (
          <Box className={style.card} key={skill.id}>
            <Image src={skill.img} alt={skill.name} />
            <h2>{skill.name}</h2>
            <Box className={style.cont}>
              <p>{skill.desc}</p>
            </Box>
          </Box>
        ))}
      </Grid>


      {/* github Stats */}
      <Flex justify={'center'} alignContent="center" mt={'40px'} w={["300px","500px","100%"]} flexDirection={"column"} gap={20}  ml={10}>
      <Heading textAlign={"center"} color="#2196f3">
      GitHub Stats
      </Heading>
      <GitHubCalendar
      username="KKShakya"
      blockMargin={5}
      blockSize={18}
      >

      </GitHubCalendar>
      </Flex>
    </Box>
  );
}

export default Skills;
