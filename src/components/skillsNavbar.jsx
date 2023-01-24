import { Box, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';


function SkillsNavbar({handleSkill}) {
 const[style,setStyle] = useState({color:"black",bg:"#5eb3f6"});
const handleClick = (dataset="2") =>{
setStyle({color:"White",bg:"red"});
handleSkill(dataset);
}

  return (
   <Box>
    <Flex gap='1em' m="2em auto"  justify={'center'}>
    <Button fontSize={[10,12,15]} onClick={()=>handleClick("Frontend")} color="black" _focus={{color:"#fff", bg:"red"}}>Frontend</Button>
    <Button fontSize={[10,12,15]} onClick={()=>handleClick("Backend")}  color="black" _focus={{color:"#fff", bg:"red"}}>Backend</Button>
    <Button fontSize={[10,12,15]} onClick={()=>handleClick("Tools")}  color="black" _focus={{color:"#fff", bg:"red"}}>Tools</Button>
    </Flex>
   </Box>

  )
}

export default SkillsNavbar