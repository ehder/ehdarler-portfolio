import React from 'react'
import './experience.css'
import { RiHtml5Line } from 'react-icons/ri'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { BsBootstrap } from 'react-icons/bs'
import { SiReact } from 'react-icons/si'
import { FaAngular } from 'react-icons/fa'

import { DiJava } from 'react-icons/di'
import { SiSpring } from 'react-icons/si'
import { SiSpringboot } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'


const frontendData = [
  {
    id: 1,
    icon: <RiHtml5Line className='experience_details-icon'/>,
    title: "HTML",
    skill: "Intermediate "
  },
  {
    id: 2,
    icon: <DiCss3 className='experience_details-icon'/>,
    title: "CSS",
    skill: "Intermediate "
  },
  {
    id: 3,
    icon: <IoLogoJavascript className='experience_details-icon'/>,
    title: "Javascript",
    skill: "Basic"
  },
  {
    id: 4,
    icon: <BsBootstrap className='experience_details-icon'/>,
    title: "Bootstrap",
    skill: "Basic"
  },
  {
    id: 5,
    icon: <FaAngular className='experience_details-icon'/>,
    title: "Angular",
    skill: "Basic"
  },
  {
    id: 6,
    icon: <SiReact className='experience_details-icon'/>,
    title: "React",
    skill: "Basic"
  },

]

const backendData = [
  {
    id: 1,
    icon: <DiJava className='experience_details-icon'/>,
    title: "Java SE",
    skill: "Intermediate "
  },
  {
    id: 2,
    icon: <DiJava className='experience_details-icon'/>,
    title: "Java EE",
    skill: "Intermediate "
  },
  {
    id: 3,
    icon: <SiSpring className='experience_details-icon'/>,
    title: "Spring Framework",
    skill: "Intermediate "
  },
  {
    id: 4,
    icon: <SiSpringboot className='experience_details-icon'/>,
    title: "Spring boot",
    skill: "Intermediate "
  },
  {
    id: 5,
    icon: <SiPostgresql className='experience_details-icon'/>,
    title: "Postgresql",
    skill: "Basic"
  },
  {
    id: 6,
    icon: <SiMysql className='experience_details-icon'/>,
    title: "MySQL",
    skill: "Basic"
  },

]

const Experience = () => {
  return (
    <section className='container' id='experience'>
        <div className='skill'>
          <h4>what skill I have</h4>
          <h2>My Experience</h2>
        </div>
        <div className='experience__container'>

            {/* ==============================frontend================================== */}
            <div className="frontend">
                <h4>Frontend Development</h4>
                <div className="experience__contact">
                  {
                    frontendData.map(({id, icon, title, skill})=>{
                        return (
                          <article key={id} className="experience__details">
                            {icon}
                            <div className='experience__detail'>
                                <h5>{title}</h5>
                                <small className='text-light'>{skill}</small>
                            </div>
                          </article>
                        )
                    })
                  }
                </div>
            </div>

            {/* ==============================backend==================================== */}
            <div className="backend">
            <h4>Backend Development</h4>
                <div className="experience__contact">
                    
                      {
                        backendData.map(({id, icon, title, skill})=>{
                          return (
                            <article key={id} className="experience__details">
                                {icon}
                                <div className='experience__detail'>
                                    <h5>{title}</h5>
                                    <small className='text-light'>{skill}</small>
                                </div>
                            </article>
                          )
                        })
                      }

                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience