import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
    <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
    <a href="http://github.com" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
</div>
  )
}

export default HeaderSocial