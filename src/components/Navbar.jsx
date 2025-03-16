import React, { useState, useEffect, useRef } from 'react'
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram, FaBars } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6 px-4'>
      <div className='relative flex items-center'>
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-white hover:text-gray-400 p-2"
        >
          <FaBars className="text-2xl" />
        </button>

        {isOpen && (
          <div ref={dropdownRef} className="absolute left-0 top-full mt-2 w-48 rounded-md bg-neutral-800 shadow-lg py-2 z-50">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-purple-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-purple-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-purple-500 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-white hover:bg-purple-500 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>

      <div className='flex items-center gap-4 text-2xl'>
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
