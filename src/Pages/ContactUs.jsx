import React, { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../Design/ContactUs.css';

export default function ContactUs() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const formData = new FormData(form.current);
      const contactData = {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        user_phone: formData.get('user_phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      const emailjsResponse = await emailjs.sendForm(
        'service_pdgut6p', 
        'template_5f723y9', 
        form.current,
        'LagwncKRDGGjN2mtN' 
      );

      if (emailjsResponse.status !== 200) {
        throw new Error('Email sending failed');
      }

      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help and answer any questions you might have.</p>
        </div>
      </section>

      <div className="contact-container">
    
        <div className="contact-info-section">
          <div className="contact-card">
            <div className="card-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>Our Location</h3>
            <p>No. 1, Parvathavarthini Street, Nagercoil, 629 001</p>
          </div>

          <div className="contactemail-card">
            <div className="card-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <div className="email-list">
            
              <p>info@rooks.in</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon">
              <FaPhoneAlt />
            </div>
            <h3>Call Us</h3>
            <p>+91 9443319914</p>
          </div>
        </div>

       
        <div className="contact-form-section">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you soon</p>
          </div>
          
          {submitStatus === 'success' && (
            <div className="form-alert success">
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="form-alert error">
              There was an error sending your message. Please try again later.
            </div>
          )}
          
          <form ref={form} onSubmit={sendEmail} className="modern-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  placeholder="Enter your email" 
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="user_phone"
                  placeholder="Enter your phone number" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  placeholder="What's this about?" 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="5" 
                placeholder="How can we help you?" 
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <span className="btn-arrow">→</span>}
            </button>
          </form>
        </div>
      </div>

    
      <div className="additional-info">
        <div className="working-hours">
          <FaClock className="info-icon" />
          <div>
            <h3>Working Hours</h3>
            <p>Monday - Saturday: 9:00 AM to 5:30 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://in.linkedin.com/in/rooks-and-brooks-50794a343" target='blank' aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://wa.me/919443319914" target='blank' aria-label="Whatsapp"><FaWhatsapp/></a>
          </div>
        </div>
      </div>

     
      <div className="map-section">
        <h2>Find Us on Map</h2>
        <div className="responsive-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.324365315557!2d77.4265453147863!3d8.480079993961792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429c6d5e8a7a5%3A0x4a1f8a6e6b7e7b7!2sParvathavarthini%20Street%2C%20Nagercoil%2C%20Tamil%20Nadu%20629001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            title="Rooks Research Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}