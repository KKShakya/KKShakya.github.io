import {
  Box,
  Img,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
function Menus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        display={{ sm: "inherit", md: "none" }}
        variant="ghost"
        borderRadius={5}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        p={2}
        mr={6}
      >
        <Img
          w={5}
          src="https://static.vecteezy.com/system/resources/previews/009/362/781/non_2x/app-menu-icon-sign-symbol-design-free-png.png"
        />
      </MenuButton>
      <MenuList
        p={4}
        border="none"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        bg="#00a0f1"
      >
        <Box textAlign={"left"}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "#fe3201",
                cursor: "pointer",
              }}
              mx={3}
            >
              About
            </Text>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "#fe3201",
                cursor: "pointer",
              }}
              mx={3}
            >
              Skills
            </Text>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={600}
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "#fe3201",
                cursor: "pointer",
              }}
              mx={3}
            >
              Projects
            </Text>
          </Link>
          <a
            target={"blank"}
            href="https://drive.google.com/file/d/1s-R92_-qT7yQlM0i9dKE6cdqGhuCd022/view?usp=sharing"
          >
            <Text
              p={2}
              fontWeight={600}
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "#fe3201",
                cursor: "pointer",
              }}
              mx={3}
            >
              Resume
            </Text>
          </a>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Text
              p={2}
              fontWeight={500}
              _hover={{
                borderRadius: "5px",
                bg: "gray.100",
                color: "#fe3201",
                cursor: "pointer",
              }}
              mx={3}
            >
              Contact
            </Text>
          </Link>
        </Box>
      </MenuList>
    </Menu>
  );
}

export default Menus;
