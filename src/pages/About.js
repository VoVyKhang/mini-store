import React from 'react'

import MultiplePizzas from '../assets/images/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p></p>
        </div>
    </div>
  )
}

export default About