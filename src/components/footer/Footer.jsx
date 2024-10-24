import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Go to TOP</a>

      <ul className="permalinks">
        <li><a href="#main">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/SonuSwaroopRaj"><FaFacebookF/></a>
        <a href="https://www.instagram.com/sonuswaroopraj/"><FiInstagram /></a>
        <a href="https://www.twitter.com/sonuswaroopraj2"><IoLogoTwitter/></a>
      </div>

      
    </footer>
  )
}

export default Footer