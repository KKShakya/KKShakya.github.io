import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import Logo from "../components/Images/Michelle.gif";
import { Link } from "react-scroll";

const btns = [
  { title: "Home", to: "home" },
  { title: "About Me", to: "about" },
  { title: "Skills", to: "skills" },
  { title: "Projects", to: "project" },
  { title: "Contact", to: "contact" },
  { title: "Resume", to: "resume" },
];

function Navbar() {
  return (
    <Flex
      display={"flex"}
      justify={"space-between"}
      px={{ base: 4, md: 10 }}
      p="1em"
      box-shadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"
    >
      <Link
        activeClass="active"
        to="home"
        smooth={true}
        offset={-80}
        duration={500}
      >
        <Box fontFamily= 'Dancing Script' textShadow= "4px 4px 4px #aaa">
          <Image
            src={Logo}
            w="70px"
            cursor={"pointer"}
            my={-3}
            h={"70px"}
            borderRadius={"50%"}
          />
          Krishna Shakya
        </Box>
      </Link>
      <Flex
        gap={{ base: 5, md: 5, lg: 8 }}
        display={{ base: "none", md: "inherit" }}
      >
        {btns.map((btn, idx) => (
          <Link
            activeClass="active"
            to={btn.to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            key={idx}
          >
            <button className="btn">
              <span>{btn.title}</span>
            </button>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default Navbar;
