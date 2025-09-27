import React from 'react'
import "./counter.css"
import { IoCloudOutline, IoPersonOutline } from 'react-icons/io5'
import { MdFavoriteBorder, MdPublic } from 'react-icons/md'
import CountUp from 'react-countup'
import Reveal from "../components/Reveal"

const Counter = () => {
  const project = [
    { id: 1, icon: <IoCloudOutline />, num: "89", title: "HAPPY CLIENTS" },
    { id: 2, icon: <MdFavoriteBorder />, num: "231", title: "PROJECTS COMPLEATED" },
    { id: 3, icon: <MdPublic />, num: "108", title: "FILES DOWNLOADED" },
    { id: 4, icon: <IoPersonOutline />, num: "1446", title: "LIENS OF CODE" },
  ]

  return (
    <div className='section-counter'>
      <div className='container'>
        {project.map((item, i) => (
          <Reveal key={item.id} variant="up" delay={i * 0.2}>
            <div className='box'>
              <i>{item.icon}</i>
              <h1 className='heading'>
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Counter
