import React, { useEffect } from 'react';
import '../Design/Internship.css';
import intenship from '../Assets/Internship Program.png'

const Internship = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.step-card, .process-intro, .cta-section').forEach(el => {
      observer.observe(el);
    });


    return () => {
      document.querySelectorAll('.step-card, .process-intro, .cta-section').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="internship-container">
      <div className="internship-header">
        <h1>Internship <span>Program</span></h1>
        <p className="subtitle">Launch your career with hands-on experience at RRC</p>
      </div>

      <div className="process-container">
        <div className="process-intro">
          <h2>Our Structured Internship Process</h2>
          <p>
            At RRC, we offer internship opportunities for passionate and curious students who want to gain real-world experience in research, writing, and technical implementation. To ensure a smooth and formal onboarding, we follow a simple yet structured internship process:
          </p>
        </div>

        <div className="processInt-steps">
          <div className="step-card">
            <div className="step-content">
              <h3>Application Submission</h3>
              <p>Interested students can apply by filling out our internship application form available on the website with their resume and area of interest.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-content">
              <h3>Interview Process</h3>
              <p>Shortlisted candidates will be invited for an offline interview to assess their skills, interest areas, and suitability for available internship roles.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-content">
              <h3>Permission Letter</h3>
              <p>Selected candidates must submit a formal Permission Letter signed by their Faculty Coordinator and countersigned by the Head of the Department (HOD).</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-content">
              <h3>Offer Letter</h3>
              <p>Once the permission letter is received and verified, RRC will issue a formal Internship Offer Letter with project details, duration, and learning outcomes.</p>
            </div>
          </div>

          <div className="step-card">
            <div className="step-content">
              <h3>Onboarding</h3>
              <p>Interns will be onboarded and assigned to a mentor or project team to contribute to real-time academic or technical projects with continuous guidance.</p>
            </div>
          </div>
        </div>
 <div className="intenship-poster">
        <img src={intenship} alt="Internship Poster" />
      </div>
        <div className="cta-section">
          <h3>Ready to begin your professional journey?</h3>
          <button 
            className="apply-btn"
            onClick={() => window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSdj155XsIvFVeLBh2ybxWfXJn-WMGRqcLHdmnXdOyX-TwH8Kw/viewform',
              '_blank',
              'noopener,noreferrer'
            )}
          >
            Apply for Internship
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Internship;
