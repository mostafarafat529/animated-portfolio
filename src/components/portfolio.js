import React, { useState } from 'react'
import "./portfolio.css"
import image1 from "../images/istockphoto-1434116614-612x612.jpg"
import image2 from "../images/pngtree-wall-of-blue-and-orange-cubical-blocks-of-the-same-size-image_2668557.jpg"
import image3 from "../images/1m3lnn8g4gm91.png"
import image4 from "../images/Screenshot-2025-01-21-alle-15.45.48-scaled.jpg"
import image5 from "../images/speed_up_images_original_R8oje17ew.jpg"
import image6 from "../images/images (2).jpg"
import Reveal from "../components/Reveal"

const Portfolio = () => {
  const portfolioData = [
    { id: 1, cover: image1, category: "marketing" },
    { id: 2, cover: image2, category: "design" },
    { id: 3, cover: image3, category: "development" },
    { id: 4, cover: image4, category: "marketing" },
    { id: 5, cover: image5, category: "design" },
    { id: 6, cover: image6, category: "development" },
  ]

  const [category, setCategory] = useState("All")

  const filterdata = () => 
    category === "All" ? portfolioData : portfolioData.filter((item)=>item.category === category.toLowerCase());

  return (
    <div className='section-portfolio' id='Portfolio'>
      <Reveal variant="up">
        <h1>Portfolio</h1>
      </Reveal>

      <div className='content-portfolio'>
        <Reveal variant="fade" delay={0.2}>
          <div className='btns'>
            <button onClick={() => setCategory("All")}>All</button>
            <button onClick={() => setCategory("Marketing")}>Marketing</button>
            <button onClick={() => setCategory("Design")}>Design</button>
            <button onClick={() => setCategory("Development")}>Development</button>
          </div>
        </Reveal>

        <div className='images'>
          {filterdata().map((item, i) => (
            <Reveal key={item.id} variant="zoom" delay={i * 0.2}>
              <div className='img'>
                <img src={item.cover} alt="..." />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
