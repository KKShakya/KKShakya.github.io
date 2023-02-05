import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsPerson,
  BsReverseLayoutTextWindowReverse,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";







function Contact() {
  const { hasCopied, onCopy } = useClipboard("krishnashakya7272@gmail.com");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ax2gtj",
        "template_hnyf23b",
        form.current,
        "i24miur4mshSqYuSd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
 console.log(process.env.REACT_APP_SERVICE_KEY,"public"+ process.env.REACT_APP_PUBLIC_KEY)


  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
     
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              color="rgb(243, 14, 79)"
            >
              Get in Touch
            </Heading>
            
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
              
                </Tooltip>


                <Tooltip
                  label={hasCopied ? "Contact Copied!" : "Copy Contact"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="telephone"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsFillTelephoneFill />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://www.github.com/KKShakya/" isExternal>
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/krishnashakya/" isExternal>
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                      color: useColorModeValue("white", "gray.700"),
                    }}
                    isRound
                  />
                </Link>
              </Stack>
              <form ref={form} onSubmit={sendEmail}>
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Subject</FormLabel>

                      <InputGroup>
                        <InputLeftElement
                          children={<BsReverseLayoutTextWindowReverse />}
                        />
                        <Input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      type="submit"
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </form>
            </Stack>
          
          </VStack>
        </Box>
        <VStack align="center" m={'2rem'} ml={{base:0,md:'170px'}} spacing={{ base: 2, md: 4, lg: 5 }}>
          <Box fontWeight={700} color="red.500">Made By - krishna Kumar Shakya</Box>
          <Flex gap={'5px'} fontWeight={700} color="red.500"><MdEmail/><p>Krishnashakya7272@gmail.com</p></Flex>
          <Flex gap={'5px'} fontWeight={700} color="red.500"><BsFillTelephoneFill/><p>+917987905532</p></Flex>
          <Flex gap={'5px'} fontWeight={700} color="red.500" fontSize="10"><p>Ref From: Akash Kumar Panda </p></Flex>
          
        </VStack>
        
      </Box>

    </Flex>
  );
}

export default Contact;
