import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import style from '../components/style/Navbar.module.css'
import { Link } from "react-scroll";
import Menus from "./Menu";
import logo from "../components/Images/logo.png"
import resume from "../components/data/Krishna_Shakya_Resume.pdf";

const btns = [
  { title: "Home", to: "home" },
  { title: "About Me", to: "about" },
  { title: "Projects", to: "projects" },
  { title: "Skills", to: "skills" },
  { title: "Contact", to: "contact" },
];

function Navbar() {

  const handleResume = () => {
    window.open("https://drive.google.com/file/d/1s-R92_-qT7yQlM0i9dKE6cdqGhuCd022/view?usp=sharing");
  }


  return (
    <Flex
      display={"flex"}
      justify={"space-between"}
      px={{ base: 4, md: 10 }}
      p="1em"
      as="header"
      position="fixed"
      backgroundColor="#fff"
      backdropFilter="saturate(180%) blur(0.5px)"
      top={0}
      w="100%"
      h={'fit-content'}
      zIndex={999}
    >
      <Link
        activeClass="active"
        to="home"
        smooth={true}
        offset={-80}
        duration={500}
      >
        <Box w={["30%"]} onClick={() => (document.documentElement.scrollTop = 0)}>
          <Image src={logo} w="100%" borderRadius={"5%"} />
        </Box>
      </Link>
      <Flex
        gap={{ base: 5, md: 5, lg: 8 }}
        display={{ base: "none", md: "inherit" }}
      >
        {btns.map((btn, idx) => (
          <Link
            activeClass={style.active}
            to={btn.to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            key={idx}
          >
            <button className="btn">
              <Text fontWeight={500}>{btn.title}</Text>
            </button>
          </Link>
        ))}
        {/* resume button */}
        <a href={resume}
          download="fw20_0217-Krishna-Shakya-Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          onClick={handleResume}
          >
          <button className="btn">
            <Text fontWeight={500}>Resume</Text>
          </button>
        </a>
      </Flex>
      <Box display={{ sm: "flex", lg: "hidden" }}><Menus /></Box>
    </Flex>
  );
}

export default Navbar;
