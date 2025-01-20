import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='text-center mt-20 bg-gray-600 flex gap-4 justify-evenly  text-white w-full p-5 relative bottom-0 '>
      <div>
        <ul>
          <h2 className='text-white text-lg mb-4'>Resources</h2>
          <li>
          <NavLink to="/"  className={({ isActive }) => `text-lg hover:text-rose-500 duration-200 ${isActive ? 'text-rose-600' : ''}`}>
                    Home
                  </NavLink>
            </li>
          <li>
                  <NavLink to="/about"   className={({ isActive }) => `text-lg hover:text-rose-500 duration-200 ${isActive ? 'text-rose-500' : ''}`}>
                    About
                  </NavLink>
            </li>
            <li>
                  <NavLink to="/Room"   className={({ isActive }) => `text-lg hover:text-rose-500 duration-200 ${isActive ? 'text-rose-500' : ''}`}>
                    Room
                  </NavLink>
            </li>
            <li>
                  <NavLink to="/Gallery"   className={({ isActive }) => `text-lg hover:text-rose-500 duration-200 ${isActive ? 'text-rose-500' : ''}`}>
                    Gallery
                  </NavLink>
            </li>
        </ul>
      </div>
      <div>
        <ul>
          <h2 className='text-white text-lg mb-4'>Legal</h2>
          <li>
            <Link className='hover:text-rose-500 duration-200'>
            Term & conditions
            </Link>
          </li>
          <li>
            <Link className='hover:text-rose-500 duration-200'>
            Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className='text-white text-lg mb-4'>Follow us on</p>
       <div className='flex flex-wrap gap-4 text-2xl overflow-hidden'>
        <Link className='hover:scale-110 h-12 duration-200'>
        <FaFacebook />
        </Link>
        <Link className='hover:scale-110 h-10 '>
        <FaInstagram />
        </Link>
        <Link className='hover:scale-110 h-10 duration-200'>
        <FaSquareXTwitter />
        </Link>
        <Link className='hover:scale-110 h-10 duration-200'>
        <FaGithub />
        </Link>
       </div>

      </div>
      </div>
  )
}

export default Footer

