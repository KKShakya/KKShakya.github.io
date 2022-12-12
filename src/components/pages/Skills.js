import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Frontend,Backend,Tools} from "../data/Skills";
import Git1 from '../Images/git1.png' 
import Git2 from '../Images/git2.png' 
import style from "../style/Skills.module.css";



function Skills() {
  return (
    <Box m="100px 0  10px" id="skills" background="#EDEDED" p={"5rem"}>
      <Heading textAlign={"center"} color="#2196f3">
        Skills
      </Heading>

      {/* Skills mapping */}
      {/* {base:"1fr",sm:"1fr,1fr",md:"1fr,1fr,1fr"} */}
      <Heading m={"1em"} >Frontend</Heading>
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
        {Frontend.map((skill) => (
          <Box className={style.card} key={skill.id}>
            <Image src={skill.img} alt={skill.name} />
            <h2>{skill.name}</h2>
            <Box className={style.cont}>
              <p>{skill.desc}</p>
            </Box>
          </Box>
        ))}
      </Grid>

      <Heading m={"1em"} >Backend</Heading>
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
        {Backend.map((skill) => (
          <Box className={style.card} key={skill.id}>
            <Image src={skill.img} alt={skill.name} />
            <h2>{skill.name}</h2>
            <Box className={style.cont}>
              <p>{skill.desc}</p>
            </Box>
          </Box>
        ))}
      </Grid>
      
       <Heading m={"1em"} >Tools</Heading>
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
        {Tools.map((skill) => (
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


      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={"4em"}
        mt={"5rem"}
      >
      <Box><img src={Git1} alt={Git1} /></Box>
      <Box><img src={Git2} alt={Git2} /></Box>

      </Grid>
    </Box>
  );
}

export default Skills;
