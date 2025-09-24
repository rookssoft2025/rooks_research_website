import React, { useEffect } from 'react';
import '../Design/AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.about-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="research-header">About RRC</h1>
        <div className="title1-decoration">
            <div className="line1"></div>
            <div className="circle1"></div>
            <div className="line1"></div>
          </div>
      </div>
      
      <div className="about-content">
        <div className="about-section mission-section">
          <h2>Our Vision</h2>
          <p>
            To empower academicians and corporate researchers for technology-based research and innovations.
          </p>
        </div>
        
        <div className="about-section expertise-section">
          <h2>Our Expertise</h2>
          <p>
            We are specialized in research on strategic intelligence related to customer needs and experiences, 
            focusing on evidence-based strategies, evaluations, performance measurement, and innovation. 
            We have 20+ years of experience in market research and a strong team of curious research minds, 
            delivering exclusive primary researched insights and recommendations for societal growth and 
            expansion to our clients.
          </p>
        </div>
        
        <div className="about-section community-section">
          <h2>Our Community</h2>
          <p>
            The organization was created to build a community of individuals who are passionate about 
            research and growing in their respective research journeys.
          </p>
        </div>
        
        <div className="about-section solutions-section">
          <h2>Our Solutions</h2>
          <p>
            Our solutions give clients a competitive edge by offering expertise in designing and developing 
            customized strategies tailored to their specific needs. We focus on maximizing client satisfaction, 
            maintaining quality, reducing risk, and raising research curiosity in society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;