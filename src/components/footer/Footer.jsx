import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer id='footer' className='container'>

       <div className="footer__container">
            <div className="footer__top">
               <h2>Saw Eh Dar Ler <li>Java Developer</li></h2>
               <li></li>
            </div>
            <div className="footer__mid">
               <li className='iron1'></li>
               <a href="#">Home</a>
               <a href="#about">About</a>
               <a href="#experience">Experience</a>
               <a href="#portfolio">Portfolio</a>
               <a href="#contact">Contact</a>
               <li className='iron2'></li>
            </div>
            <div className="footer__bottom">
               <div className="footer__socials">
                  <a href="https://facebook.com"><FaFacebookF/></a>
                  <a href="https://twitter.com"><BsTwitter/></a>
               </div>
               <small> © DER.COM All rights reserviced</small>
            </div>
       </div>

    </footer>
  )
}

export default footer