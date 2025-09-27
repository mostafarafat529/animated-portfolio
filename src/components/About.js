import React from "react";
import "./about.css";
import image2 from "../../src/images/man (1).png";
import Reveal from "../components/Reveal"; // تأكد من مكان الملف Reveal.js

const About = () => {
  return (
    <div className="section-about" id="About">
      <div className="container">
        <Reveal effect="left">
          <div className="image">
            <img src={image2} alt="..." />
          </div>
        </Reveal>

        <div className="right">
          <Reveal effect="up">
            <h1>About Me</h1>
          </Reveal>

          <Reveal effect="right" delay={0.2}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </Reveal>

          <Reveal effect="right" delay={0.4}>
            <p>
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </Reveal>
          <Reveal effect="zoom" delay={0.6}>
            <button className="primaryBtn">Download CV</button>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default About;
