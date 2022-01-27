import React from 'react';
import  '../styles/Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h5>Lucky's Petshop</h5>
            <a href='https://goo.gl/maps/KiKoEo5wtHLdEUh88'>11-C Narra St, Project 3 Quezon City, Philippines</a>

          </div>
          <div className='footer-link-items'>
            <h5>Useful Links</h5>
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/appointmentscreen'>Services</Link>
          </div>
          <div className='footer-link-items'>
            <h5>General</h5>
            <Link to='/TermsAndCondi'>Terms and Conditions</Link>
            <Link to='/PrivacyPolicy'>Privacy Policy</Link>
           </div>
        </div>
        
          <div className='footer-link-items'>
            <h5>Contact Us</h5>
            <a href="https://www.facebook.com/luckypetshop1230">Facebook</a>
            <a href="mailto:luckypetshop1230@gmail.com">Email Us</a>
          </div>

     

      </div>


      <div className='social-media-wrap'>
          <small className='website-rights'>Lucky's Petshop © 2020. All rights reserved.</small>
          <div className='social-icons'>
  



          </div>
        </div>

    </div>
  );
}

export default Footer;