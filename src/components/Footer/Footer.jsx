import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://x.com/spardha_iitbhu/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-twitter-logo-icon-download-in-svg-png-gif-file-formats--x-new-sign-logos-pack-icons-7651211.png?f=webp&w=256" alt="Twitter Logo" />
        </a>
        <a href="https://www.facebook.com/Spardha.IIT.BHU/" target="_blank" rel="noopener noreferrer">
           <img src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-logo-icon-download-in-svg-png-gif-file-formats--fb-new-color-social-media-logos-icons-1350125.png?f=webp&w=256" alt="facbook logo" />
        </a>
        <a href="https://www.instagram.com/spardha_iitbhu/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-1583142.png?f=webp&w=256" alt="Instagram Logo" />
        </a>
        <a href="https://in.linkedin.com/company/spardha" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/linkedin-2752135-2284952.png?f=webp&w=256" alt="Linkedin logo" />
        </a>
      </div>
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#terms">Terms and conditions</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
