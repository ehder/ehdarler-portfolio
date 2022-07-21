import React from 'react'
import CV from '../../assets/resume.pdf'
import './header.css'

const CallToAction = () => {
  return (
    <div className='call_to_action'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CallToAction