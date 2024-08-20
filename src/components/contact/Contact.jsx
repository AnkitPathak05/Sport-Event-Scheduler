import React from 'react';
import './Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className='contact-box'>
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
        <form className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      
    </div>
  );
};

export default ContactUs;
