import React from 'react'
import { LuSend } from 'react-icons/lu'
import "./communication.css"
import Reveal from "../components/Reveal"

const Communication = () => {
  return (
    <div className="six-section" id='Communication'>
      <div className="contact">
        <Reveal variant="up">
          <h1>get in touch</h1>
        </Reveal>

        <Reveal variant="right" delay={0.2}>
          <p>Ready to turn your ideas into reality? Let's collaborate.</p>
        </Reveal>

        <form>
          <Reveal variant="left" delay={0.4}>
            <div className="feild">
              <label>full name</label>
              <input type="text" placeholder="your full name"/>
            </div>
          </Reveal>

          <Reveal variant="left" delay={0.6}>
            <div className="feild">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com"/>
            </div>
          </Reveal>

          <Reveal variant="left" delay={0.8}>
            <div className="feild">
              <label>Your Message</label>
              <textarea  placeholder="share your thoughts"/>
            </div>
          </Reveal>

          <Reveal variant="zoom" delay={1}>
            <button><LuSend/> send message</button>
          </Reveal>
        </form>
      </div>
    </div>
  )
}

export default Communication
