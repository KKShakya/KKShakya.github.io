import React from "react";
import {
  Box,
  Heading,
  Grid,
  Text,
  Flex,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { ProjectData } from "../data/ProjectData";

function Projects() {
 

  return (
    <Box mt={100} id="projects">
      <Heading textAlign={"center"} style={{ color: "rgb(243, 14, 79)" }}>
        My Projects
      </Heading>

      {ProjectData.map((project, index) => {
        return (
          <Grid
            w="80%"
            key={index}
            templateColumns={{ md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap={{ lg: "4" }}
            className="button"
            rounded="lg"
            m="40px auto"
            fontWeight="semibold"
            fontSize="14px"
            color="white"
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Grid boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
              <Image
                src={project.img}
                align="center"
                borderRadius="10px 10px 0 0"
              />
              <Box>
                <Flex
                  justifyContent={"center"}
                  gap={4}
                  mb={{ md: "2", lg: "4" }}
                  mt={4}
                >
                  <Link href={project.git} target="blank">
                    <Button
                      color={"white"}
                      bg="blue.400"
                      _hover={{ bg: "blue" }}
                    >
                      <Image
                        src="https://www.svgrepo.com/show/332084/github.svg"
                        w={7}
                        mr={2}
                      />
                      Github
                    </Button>
                  </Link>
                  <Link href={project.deploy} target="blank">
                    <Button
                      color={"white"}
                      bg="blue.400"
                      _hover={{ bg: "blue" }}
                    >
                      <LinkIcon mr={2} />
                      Deployed
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Grid>
            <Grid p={4} boxShadow={" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}>
              <Box mt={{ md: 0, lg: 4 }}>
                <Heading textAlign={"center"} style={{ color: " #2196f3" }}>
                  {project.name}
                </Heading>
                <Text color={"black"} mt={4}>
                  {project.desc}
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight={"bold"}
                  fontSize="20px"
                  color= " #003fa7"
                  borderBottom={"2px solid #003fa7"}
                  w="fit-content"
                >
                  Tech Stack
                </Text>
                <Flex wrap="wrap" w={{ base: "100%", md: "70%", lg: "70%" }}>
                  {project.techStack.map((tech, index) => {
                    return (
                      <Flex
                        key={index}
                        className="tech"
                        borderRadius={"30px"}
                        p="5px 10px"
                        m="1"
                        fontWeight="semibold"
                        fontSize="14px"
                        color="red"
                        transition="all 0.3s ease-in-out"
                        _hover={{ transform: "translate(-5px)" }}
                        gap="10px"
                      >
                        <Image src={tech.img} w="20px" h="20px" />
                        {tech.name}
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
}

export default Projects;
