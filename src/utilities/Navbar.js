import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import Logo from "../components/Images/Michelle.gif";
import { Link } from "react-scroll";
import Menus from "./Menu";

const btns = [
  { title: "Home", to: "home" },
  { title: "About Me", to: "about" },
  { title: "Skills", to: "skills" },
  { title: "Projects", to: "project" },
  { title: "Contact", to: "contact" },
];

function Navbar() {
  return (
    <Flex
      display={"flex"}
      justify={"space-between"}
      px={{ base: 4, md: 10 }}
      p="1em"
      as="header"
      position="fixed"
      backgroundColor="rgba(255, 
        255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(0.5px)"
     top={0}
     w="100%"
     h={'fit-content'}
    >
      <Link
        activeClass="active"
        to="home"
        smooth={true}
        offset={-80}
        duration={500}
      >
        <Box
          fontFamily="Dancing Script"
          textShadow="4px 4px 4px #aaa"
        >
          {/* <Image
            src={Logo}
            w="70px"
            cursor={"pointer"}
            my={-3}
            h={"70px"}
            borderRadius={"50%"}
          /> */}
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
        {/* resume button */}
        <a href="https://drive.google.com/file/d/1s-R92_-qT7yQlM0i9dKE6cdqGhuCd022/view?usp=sharing">
          <button className="btn">
            <span>Resume</span>
          </button>
        </a>
      </Flex>
      <Menus />
    </Flex>
  );
}

export default Navbar;
