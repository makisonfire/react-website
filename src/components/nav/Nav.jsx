import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#about"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BsFillBookFill /></a>
      <a href="#works"><RiServiceLine /></a>
      <a href="#contact"><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav