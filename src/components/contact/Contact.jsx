import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3z8yxn', 'template_btbtcz5', form.current, 'rIIk-asbdQLSRCCZB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>k.makiashi@gmail.com</h5>
            <a href="mailto:k.makihashi@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>k.makiashi@gmail.com</h5>
            <a href="https://facebook.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>080-1639-4576</h5>
            <a href="https://api.whatsapp.com/send?phone+818016394576" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
      {/* End of contact options */}

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      </div>

    </section>
  )
}

export default Contact