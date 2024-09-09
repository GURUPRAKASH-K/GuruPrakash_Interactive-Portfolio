import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import sym from '../assets/projects/file.png'

const NavBar = () => {
  return (
    <nav className='mb-20 flex item-center justify-between py-6'>
    <div className='flex flex-shrink-0 item-center'>
    <img className='mx-2 w-30 h-20' src={sym} alt=''></img>
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
    <a href='https://www.linkedin.com/in/guruprakash-kandasamy-672b38243?'><FaLinkedin/></a>
    <a href='https://github.com/GURUPRAKASH-K'><FaGithub/></a>
    <a href='https://www.instagram.com/06_guru_prakash?igsh=MWFwenE3ZmVybHV1aA=='><FaInstagram/></a>
    
    </div>
    </nav>
  )
}

export default NavBar