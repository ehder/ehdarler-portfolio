import React from 'react'
import './about.css'
import AboutMe from '../../assets/photo6.jpg'

const About = () => {
  return (
    <div id='about' className='container'>

        <div className='about'>
            <h4>Get To Know</h4>
            <h2>About Me</h2>
        </div>

      <div className='about__container'>

          <div className="about__me">
              <img src={AboutMe} alt="" />
          </div>

            <div className="about__content">

                <div className="about__cards">
                    <article className="about__card">
                          <h5>Experience</h5>
                          <small>1 + Years <br/> Working</small>
                    </article>

                    <article className="about__card">
                          <h5>Client</h5>
                          <small>no client<br/> currently</small>
                    </article>

                    <article className="about__card">
                          <h5>Project</h5>
                          <small>7 + project <br/> completed</small>
                    </article>
                </div>

                <p>A proficient professional with a clear
                    goal to ensure continuous learning for
                    developing professional career path
                    and to get those opportunities form
                    this organization an expert that my
                    ability and skills will be useful for the
                    organization.</p>
                  
                  <p>1+ years on work and still learning no client currently and 
                    completed 7 project as shown below.
                  </p>

              </div>
          

      </div>

    </div>
  )
}

export default About