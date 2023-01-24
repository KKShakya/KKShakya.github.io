import {
  Box,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
function Menus() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu display={{sm:"flex",lg:"hidden"}}  >
      <MenuButton
        display={{ sm: "inherit", md: "none" }}
        variant="ghost"
        borderRadius={5}
        aria-label="Courses"
        fontWeight="normal"
        p={2}
        mr={6}
        w={[10]}
      >
        <Img
          w={5}
          src="https://static.vecteezy.com/system/resources/previews/009/362/781/non_2x/app-menu-icon-sign-symbol-design-free-png.png"
        />
      </MenuButton>
      <MenuList
        p={4}
        border="1px solid red"
        bg="#2196f3"
      >
      
       <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
           <MenuItem> <Text
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
            </Text></MenuItem>
          </Link>

          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          <MenuItem>  <Text
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
            </Text></MenuItem >
          </Link>
          
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           <MenuItem> <Text
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
            </Text></MenuItem>
          </Link>
          <a
            target={"blank"}
            href="https://drive.google.com/file/d/1s-R92_-qT7yQlM0i9dKE6cdqGhuCd022/view?usp=sharing"
          >
           <MenuItem> <Text
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
            </Text></ MenuItem>
          </a>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           <MenuItem> <Text
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
            </Text></MenuItem>
          </Link>

      </MenuList>
    </Menu>
  );
}

export default Menus;
