import React from 'react'
import "./services.css"
import { CiSettings } from 'react-icons/ci'
import { MdCropRotate, MdViewInAr } from 'react-icons/md'
import { BiBarChart, BiCode, BiPieChart } from 'react-icons/bi'
import Reveal from "../components/Reveal"

const Services = () => {
  const services = [
    { id: 1, icon: <CiSettings />, title: "Creative Design", desc: "Lorem Ipsum simply text..." },
    { id: 2, icon: <MdCropRotate />, title: "Clean Code", desc: "Lorem Ipsum simply text..." },
    { id: 3, icon: <MdViewInAr />, title: "Responsive Design", desc: "Lorem Ipsum simply text..." },
    { id: 4, icon: <BiPieChart />, title: "Material UI", desc: "Lorem Ipsum simply text..." },
    { id: 5, icon: <BiCode />, title: "Material UI Icons", desc: "Lorem Ipsum simply text..." },
    { id: 6, icon: <BiBarChart />, title: "Awesome Support", desc: "Lorem Ipsum simply text..." },
  ]

  return (
    <div className='section-services'>
      <Reveal variant="up">
        <h1>services</h1>
      </Reveal>

      <div className='content-services' id='Services'>
        {services.map((item, i) => (
          <Reveal key={item.id} variant="left" delay={i * 0.2}>
            <div className='box'>
              <span>{item.icon}</span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Services
