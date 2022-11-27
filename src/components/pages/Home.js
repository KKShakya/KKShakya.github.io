import React from 'react'
import { Grid,  Heading, Text } from '@chakra-ui/react'


import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'

function Home() {
  return (
    <div>
    
      <About />
      {/* <Skills />
      <Projects />
      <Contact />
      <Resume /> */}
    </div>
  )
}

export default Home