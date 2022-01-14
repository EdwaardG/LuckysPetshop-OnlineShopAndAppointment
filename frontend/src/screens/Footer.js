import React from 'react';
import  '../styles/Footer.css';
// import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer-container'>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h5>Lucky's Petshop</h5>
            <p> 11-C Narra St, Project 3 Quezon City, Philippines</p>
          </div>
          <div className='footer-link-items'>
            <h5>Useful Links</h5>
            <Link to='/'>Home</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/services'>Services</Link>
          </div>
          <div className='footer-link-items'>
            <h5>General</h5>
            <Link to='/TermsAndCondi'>Terms and Conditions</Link>
            <Link to='/PrivacyPolicy'>Privacy Policy</Link>
           </div>
        </div>
        
          <div className='footer-link-items'>
            <h5>Social Media</h5>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Email</Link>
          </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Lucky's Petshop © 2020. All rights reserved.</small>
          <div className='social-icons'>
  



          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;