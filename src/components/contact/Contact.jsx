import React from 'react'
import './contact.css'

import  {AiOutlineMail}  from 'react-icons/ai'
import  {RiMessengerLine}  from 'react-icons/ri'
import  {BsWhatsapp}  from 'react-icons/bs'
import  emailjs  from '@emailjs/browser'
import { useRef } from 'react'

const data = [
  {
    id: 1, 
    icon: <AiOutlineMail className='contact__option-icon'/>,
    title: "Email",
    subTitle: "ehderlel@gmail.com",
    address: "mailto:ehderlel@gmail.com"
  },
  {
    id: 2, 
    icon: <RiMessengerLine className='contact__option-icon'/>,
    title: "Messenger",
    subTitle: "Saw Eh Dar Ler",
    address: "https://m.me/ehdarler"
  },
  {
    id: 3, 
    icon: <BsWhatsapp className='contact__option-icon'/>,
    title: "WhatsApp",
    subTitle: "Saw Eh Dar Ler",
    address: "https://web.whatsapp.com/send?phone+959799623994"
  }
]

const Contact = () => {

  const form = useRef();

  const sendEmail = (email) => {
    email.preventDefault();
    emailjs.sendForm('service_6s7a55x', 'template_e1bhq4w', form.current, 'xoDl_9sgvK4QSGM-m') 
    .then(
    (response)=>{
        alert(`Thank you, your email was successfully send to me`, response)
    },
    (error) => {
        alert(`FAILED! Something went wrong please try again later.`, error)
    }
    )
    email.target.reset();
  };

  return (
    <div id='contact' className='container'>
          <div className='contact'>
            <h3>Get In Touch</h3>
            <h2>contact me</h2>
          </div>
          
          <div className='contact__container'>

              <div className="contact__options">

                  {
                    data.map(({id, icon, title, subTitle, address})=> {
                        return (
                          <article key={id} className="contact__option">
                          {icon}
                             <p>{title}</p>
                             <p>{subTitle}</p>
                             <a href={address} target="_blank">Send a message</a>
                          </article>
                        )
                    })
                  }
              </div>

              <div className="compose_directly">
                  <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name ='email' placeholder='Your Email'/>
                    <textarea name='message' id='' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Contact