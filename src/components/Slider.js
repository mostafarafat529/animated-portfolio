import React, { useState } from 'react'
import { TfiLayoutSlider } from 'react-icons/tfi'
import "./slider.css"
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from 'react-icons/io5'
import { motion } from "framer-motion"
import image1 from "../images/cool-profile-picture-87h46gcobjl5e4xu.jpg"
import image2 from "../images/cool-profile-picture-ld8f4n1qemczkrig.jpg"
import image3 from "../images/download-2.jpeg"

const animationVariants = {
  up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  zoom: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
};

const Slider = () => {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor dapibus dictum.",
      image: image1,
      name: "Alamin Musa",
      post: "Front End Developer",
    },
    {
      id: 2,
      text: "Fusce faucibus ligula scelerisque, eleifend turpis in, viverra elit. Morbi euismod nisl nec.",
      image: image2,
      name: "Alex Ander",
      post: "Back End Developer",
    },
    {
      id: 3,
      text: "Curabitur non urna vitae lacus facilisis pretium. Integer volutpat efficitur nulla.",
      image: image3,
      name: "GorkCoder",
      post: "React Developer",
    },
  ]

  const funNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const funPrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <div className='slider-section' id='Testimonials'>
      <div className='prev'>
        <span onClick={funPrev}><IoArrowBackCircleSharp /></span>
      </div>

      <div className='content'>
        <motion.div
          className='one-slider'
          key={testimonials[current].id}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.6 }}
        >
          <motion.div variants={animationVariants.up}>
            <TfiLayoutSlider style={{ fontSize: "4rem", color: "rgb(14, 204, 204)", margin: "18px 0" }} />
          </motion.div>

          <motion.p
            style={{ color: "#fff", fontSize: "18px", width: "70%", textAlign: "center", margin: "auto", lineHeight: "2" }}
            variants={animationVariants.fade}
          >
            {testimonials[current].text}
          </motion.p>

          <motion.img
            style={{ width: "120px", borderRadius: "50%", margin: "20px 0" }}
            src={testimonials[current].image}
            alt='...'
            variants={animationVariants.zoom}
          />

          <motion.h1 style={{ color: "rgb(14, 204, 204)" }} variants={animationVariants.down}>
            {testimonials[current].name}
          </motion.h1>

          <motion.h5 style={{ color: "#fff" }} variants={animationVariants.fade}>
            {testimonials[current].post}
          </motion.h5>
        </motion.div>
      </div>

      <div className='next'>
        <span onClick={funNext}><IoArrowForwardCircleSharp /></span>
      </div>
    </div>
  )
}

export default Slider
