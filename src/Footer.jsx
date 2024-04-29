import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        Developed by Your Name
        <div className="contact-info">
          For more information, contact&nbsp;:&nbsp;
          <a href="https://wa.me/9440987902?text=Hello%20Girish...!" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="footer-icon whatsapp-icon" />
          </a>
          <a href="https://www.instagram.com/girish_._._._" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="footer-icon instagram-icon" />
          </a>
          <a href="https://www.linkedin.com/in/girish-sai-a-2626121b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon linkedin-icon" />
          </a>
        </div>
        <div>
          Copyright @2024 <b>Company name</b>. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
