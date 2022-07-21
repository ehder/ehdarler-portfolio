import React, { useState } from 'react'
import './header.css'
import CTA from './CallToAction'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/me.png'

const Header = () => {

  return (
      <header>
          <div className="container header__container" id=''>

            <CTA/>
            <HeaderSocial/>
              <div className="me">
                <img src={ME} alt="" />
              </div>


            <div className='intro__text'>
                <h2>Hello, I am </h2>
                <h1>Eh Dar Ler</h1>
                <h3>Web Developer</h3>
            </div>

          </div>
          
      </header>
  )
}

export default Header