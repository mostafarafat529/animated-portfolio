import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import About from './About'
import Services from './Services'
import Counter from './Counter'
import Portfolio from './portfolio'
import Slider from './Slider'
import Communication from './Communication'

const Home = () => {
  return (
    <div className='home-page'>
        <Header/>
        <HeroSection/>
        <About/>
        <Services/>
        <Counter/>
        <Portfolio/>
        <Slider/>
        <Communication/>
    </div>
  )
}

export default Home