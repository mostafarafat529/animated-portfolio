import React from 'react'
import "./herosection.css"
import { Typewriter } from "react-simple-typewriter";
import Reveal from "../components/Reveal";

const HeroSection = () => {
  return (
    <div className='hero-section' id='Home'>
      <div className='content-section1'>
        <Reveal variant="up">
          <h1>HELLO I'M</h1>
        </Reveal>

        <Reveal variant="zoom" delay={0.2}>
          <span style={{fontSize:"4rem" ,color:"red"}}>
            <Typewriter
              words={["ALAMIN MUSA", "WEB DESIGNER", "UI / UX DESIGNER"]}
              loop={0} 
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </Reveal>

        <Reveal variant="right" delay={0.4}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </Reveal>

        <Reveal variant="fade" delay={0.6}>
          <button>Download CV</button>
        </Reveal>
      </div>
    </div>
  )
}

export default HeroSection
