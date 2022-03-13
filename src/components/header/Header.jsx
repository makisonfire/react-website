import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Katsuhiro Makihashi</h1>
        <h5 className="text-light">Frontend Engineer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="ME" />
          <a href="#contact" className="scroll__down">Scroll Down</a>
          <HeaderSocials />
        </div>
      </div>
    </header>

  )
}

export default Header