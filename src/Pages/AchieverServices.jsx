import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import ThankYouModal from "./ThankYouModal"; // Make sure this file exists
import "../Design/AchieverServices.css";

const AchieverServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2z0r1me',   // your service ID
      'template_qcr74om',  // your template ID
      form.current,
      'L1LG5rDdyFwEk5UMY'  // your public key
    )
    .then((result) => {
      console.log(result.text);
      setShowModal(true);
    }, (error) => {
      console.log(error.text);
      alert("Oops! Something went wrong. Please try again.");
    });

    e.target.reset();
  };

  return (
    <div className={`achiever-services-container ${isVisible ? 'visible' : ''}`}>
      <h1 className="research-header">Achiever Services</h1>
      <div className="title1-decoration">
        <div className="line1"></div>
        <div className="circle1"></div>
        <div className="line1"></div>
      </div>
      
      {/* Services Cards */}
      <div className="serviceAch-card">
        <h2>Book Publication</h2>
        <p>At RRC, we offer comprehensive book publication services designed to support authors, researchers, and professionals in transforming their ideas or academic work into professionally published books. We provide end-to-end support, expert editing, ISBN registration, copyright consulting, and ensure your book meets international publishing standards. We assist with print and digital publication across major platforms. Trust us to transform your manuscript into a global, impactful publication that showcases your expertise.</p>
      </div>

      <div className="serviceAch-card">
        <h2>Book Chapter Publication</h2>
        <p>RRC provides expert guidance for book chapter publication in reputed edited volumes and conference proceedings. We assist in opportunity identification, content alignment, formatting, peer review support, and citation indexing like Scopus/Web of Science. We focus on academic rigor, visibility, and timely delivery to elevate your research profile.</p>
      </div>

      <div className="serviceAch-card">
        <h2>Patent Publication</h2>
        <p>We empower inventors to protect their innovations through patent publication services including patentability assessment, prior art search, drafting, filing assistance, and IP management. RRC ensures confidentiality, compliance, and innovation impact with national and international filing systems like PCT, USPTO, and EPO.</p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>RRC's Special Features</h2>
        <ul className="features-list">
          <li>Personalized Consultations with Experts</li>
          <li>Advanced Plagiarism Protection</li>
          <li>High-quality Proofreading works</li>
          <li>24/7 Support</li>
          <li>Global Publishing & Indexing Reach</li>
          <li>Confidentiality</li>
          <li>Flexible, Affordable Packages</li>
        </ul>
      </div>

      {/* Enquiry Form Section */}
      <div className="enquiry-box">
        <div className="offer-banner">SPECIAL OFFER! 10% DISCOUNT</div>
        <h3>Enquire Now</h3>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your email ID</label>
            <input type="email" name="user_email" id="email" required placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter your phone number</label>
            <input type="tel" name="user_phone" id="phone" required placeholder="+91 9876543210" />
          </div>
          <div className="form-group">
            <label htmlFor="query">Your Query</label>
            <textarea name="user_query" id="query" required placeholder="Tell us about your publication or patent needs"></textarea>
          </div>
          <button type="submit" className="enquire-button">Enquire Now & Claim 10% Off</button>
        </form>
        <div className="offer-note">* Limited time offer</div>
      </div>

      {/* Modal Popup */}
      <ThankYouModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default AchieverServices;
