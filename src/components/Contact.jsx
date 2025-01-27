import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Sekcja tytułowa */}
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      {/* Sekcja kontaktowa */}
      <div className="contact-content">
        {/* Informacje kontaktowe */}
        <div className="contact-info">
          <h2>Our Information</h2>
          <p>
            <span className="icon">📍</span> 23 Domaszewska, Kielce
          </p>
          <p>
            <span className="icon">📧</span> contact@shoppen.com
          </p>
          <p>
            <span className="icon">📞</span> 600 100 100
          </p>
        </div>

        {/* Formularz kontaktowy */}
        <div className="contact-form">
          <form>
            <div className="contact-form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Your Name" />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"
rows="4"></textarea>
            </div>

            <button type="submit" className="contact-submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
