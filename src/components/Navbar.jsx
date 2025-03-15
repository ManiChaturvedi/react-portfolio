import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import {SiLeetcode} from 'react-icons/si'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-10" src={logo} alt=""/>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://leetcode.com/u/manichaturvedi17_/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-white hover:text-gray-400"/>
        </a>
        <a href="https://www.linkedin.com/in/mani-chaturvedi-9a357a241/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-gray-400"/>
        </a>
        <a href="https://github.com/ManiChaturvedi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-400"/>
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="text-white hover:text-gray-400"/>
        </a>
        <a href="https://www.instagram.com/chaturvedi_17_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-gray-400"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
