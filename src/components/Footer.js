import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
        <p> &copy; 2022 burger33.com</p>
        <div className='socialMedia'>           
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
        </div>
    </div>
  )
}

export default Footer;