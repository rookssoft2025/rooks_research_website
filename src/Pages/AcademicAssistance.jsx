import React, { useState } from 'react';
import '../Design/AcademicAssistance.css';

const AcademicAssistance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will contact you shortly.');
  };

  return (
    <div className="assistance-container">
      <div className="header-section">
        <h1>Elevate Your Academic Work With Expert Guidance</h1>
        <p className="subtitle">From concept to publication - comprehensive support for your research journey</p>
      </div>

      <div className="benefits-section">
        <div className="benefit-card">
          <div className="icon">✍️</div>
          <h3>Research Writing</h3>
          <p>Expert assistance with literature reviews, methodology, and thesis writing</p>
        </div>
        
        <div className="benefit-card">
          <div className="icon">🔍</div>
          <h3>Editing & Proofreading</h3>
          <p>Polishing your work to meet the highest academic standards</p>
        </div>
        
        <div className="benefit-card">
          <div className="icon">📊</div>
          <h3>Data Analysis</h3>
          <p>Statistical support and implementation of complex methodologies</p>
        </div>
        
        <div className="benefit-card">
          <div className="icon">📚</div>
          <h3>Publication Support</h3>
          <p>Guidance through journal selection and submission process</p>
        </div>
      </div>

      <div className="contact-section">
        <h2>Start Your Research Journey Today</h2>
        <p>Get in touch with our team of subject-matter experts</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group phone-group">
            <select 
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+65">🇸🇬 +65</option>
            </select>
            <input 
              type="tel" 
              name="phone"
              placeholder="Mobile Number" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="cta-button">Get Expert Consultation</button>
        </form>
      </div>

      <div className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>"The guidance I received helped me publish in a top-tier journal. Highly recommended!"</p>
            <div className="client-info">
              <strong>Dr. Ananya Patel</strong>
              <span>PhD in Biotechnology</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Excellent statistical analysis support that made my research much stronger."</p>
            <div className="client-info">
              <strong>Prof. Michael Zhang</strong>
              <span>University of Sydney</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicAssistance;