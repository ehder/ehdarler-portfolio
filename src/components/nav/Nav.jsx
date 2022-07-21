import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'

const nav = () => {
  return (
    <nav>
        <div className="nav__container">
          <a href="#"><FaHome/></a>
          <a href="#about"><FaUserCircle/></a>
          <a href="#contact"><AiOutlineMessage/></a>
        </div>
    </nav>
  )
}

export default nav