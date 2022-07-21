import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/portfolioImage/portfolio-music.jpg'
import portfolio2 from '../../assets/portfolioImage/portfolio-dictionary.jpg'
import portfolio3 from '../../assets/portfolioImage/portfolio-note.jpg'
import portfolio4 from '../../assets/portfolioImage/portfolio-phone.jpg'
import portfolio5 from '../../assets/portfolioImage/portfolio-todo.jpg'
import portfolio6 from '../../assets/portfolioImage/portfolio-angularPortfolio.png'
import portfolio7 from '../../assets/portfolioImage/portfolio-reactPortfolio.png'

const data = [
  {
    id: 1,
    image: portfolio1,
    title: 'simple music app in andorid (java)',
    github: 'https://github.com/ehder/music-player-app',
    demo: ''
  },
  {
    id: 2,
    image: portfolio2,
    title: 'simple dictionary app in andorid (java)',
    github: 'https://github.com/ehder/Dictionary',
    demo: ''
  },
  {
    id: 3,
    image: portfolio3,
    title: 'simple note app in andorid (java)',
    github: 'https://github.com/ehder/MyNote',
    demo: ''
  },
  {
    id: 4,
    image: portfolio4,
    title: 'simple phone app in andorid (java)',
    github: 'https://github.com/ehder/EPhone',
    demo: ''
  },
  {
    id: 5,
    image: portfolio5,
    title: 'simple todo app in andorid (java)',
    github: 'https://github.com/ehder/Todoister',
    demo: ''
  },

  {
    id: 6,
    image: portfolio6,
    title: 'simple portfolio website (angular)',
    github: 'https://github.com/ehder/ed-portfolio',
    demo: 'https://simple--portfolio-1.herokuapp.com'
  },

  {
    id: 7,
    image: portfolio7,
    title: 'simple portfolio website (React)',
    github: 'https://github.com/ehder/ed-portfolio',
    demo: 'https://react--portfolio--0.herokuapp.com'
  },
]

const Portfolio = () => {

  return (
    <section className='container' id='portfolio'>
      <div className="portfoio__container">
          <h1>Portfolio</h1>
          <div className='portfolio'>
             
          {
            data.map( ({id, image, title, github, demo})=> {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target='_blank'>Github</a>
                    { demo !== '' ? <a className='btn' href={demo} target='_blank'>Demo</a>: "" }
                  </div>
                </article>
              )
            } )
          }
          </div>
      </div>
    </section>
  )
}

export default Portfolio