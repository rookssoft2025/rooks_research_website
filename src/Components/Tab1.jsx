import React from "react";
import './Tab1.css';
import { FaSearch, FaLock, FaStar, FaHeadset, FaFileAlt, FaListAlt, FaEdit, FaPaperPlane, FaComments, FaCheckCircle } from 'react-icons/fa';
import Tab4 from "./Tab4";

const Tab1 = () => {
  return (
    <div className="tab1-container">
      
      <div className="hero1-section">
        <div className="hero-content">
          <h2 className="hero-title animate-fade-in">Web of Science Journals <br/>
          <h3>(SCIE/SSCI/AHCI/ESCI Indexed Journals)</h3></h2>
          <div className="hero-divider"></div>
          <p className="hero-text animate-slide-up">
            Web of Science is a leading research database that indexes only
            high-quality journals from diverse subject fields. It is one of the
            world's most trusted and comprehensive research indexing and citation
            databases, maintained by Clarivate.
          </p>
        </div>
      </div>

      
      <div className="section-card animate-fade-in">
        <div className="section-content">
          <p>
            Web of Science serves as a powerful platform for accessing high-impact academic literature across multiple
            disciplines, including science, technology, engineering, medicine,
            social sciences, arts, and humanities. Web of Science is known as Web
            of Knowledge. It is a research platform that provides access to a
            larger collection of scholarly articles, journals, etc.
          </p>
          <p className="highlight-box">
            If you are seeking to publish in WoS journals and require professional
            support, RRC is here to help you achieve your academic goals
            thoroughly
          </p>
        </div>
      </div>

    
      <div className="section-card animate-slide-up">
        <h2 className="sectionTab1-title">
          <FaStar className="iconTab1" /> Reasons for Publishing in Web of Science Journals
        </h2>
        <div className="reasons-grid">
          <div className="reasonTab-item">
            <div className="reason-icon">✓</div>
            <h3>International Credibility</h3>
            <p>Journals indexed in Web of Science go through a strict evaluation process for quality, peer review, originality, and ethical publishing standards.</p>
          </div>
          <div className="reasonTab-item">
            <div className="reason-icon">✓</div>
            <h3>Global Visibility</h3>
            <p>Research published in WoS journals is accessible to scholars and institutions worldwide, increasing your visibility.</p>
          </div>
          <div className="reasonTab-item">
            <div className="reason-icon">✓</div>
            <h3>High Impact Factors</h3>
            <p>WoS journals often have high impact factors, meaning papers published here are more likely to be cited.</p>
          </div>
          <div className="reasonTab-item">
            <div className="reason-icon">✓</div>
            <h3>Academic Requirements</h3>
            <p>Many universities prioritize publications in WoS journals for thesis approval, doctoral evaluations, and promotions.</p>
          </div>
          <div className="reasonTab-item">
            <div className="reason-icon">✓</div>
            <h3>Collaboration Opportunities</h3>
            <p>Publishing in a globally respected journal opens doors to collaboration with international researchers.</p>
          </div>
        </div>
      </div>

  
      <div className="section-card animate-fade-in">
        <h2 className="sectionTab1-title">
          <FaSearch className="iconTab1" /> How to Check Web of Science Journal List
        </h2>
        <div className="steps-container">
          <div className="stepTab1">
            <div className="stepTab1-number">1</div>
            <p>Visit the Web of Science Master Journal List page (https://mjl.clarivate.com).</p>
          </div>
          <div className="stepTab1">
            <div className="stepTab1-number">2</div>
            <p>Enter the journal name, ISSN, or publisher name in the search bar.</p>
          </div>
          <div className="stepTab1">
            <div className="stepTab1-number">3</div>
            <p>Click on the relevant journal to view its entire details.</p>
          </div>
          <div className="stepTab1">
            <div className="stepTab1-number">4</div>
            <p>Ensure that the journal is currently indexed in one of the Web of Science core collections.</p>
          </div>
        </div>
      </div>


      <div className="section-card animate-slide-up">
        <h2 className="sectionTab1-title">Services Offered in Publication Process of Web of Science</h2>
        <div className="services-grid">
          <div className="serviceTab-card">
            <FaLock className="service-icon" />
            <h3>Confidentiality</h3>
            <p>
              We strictly protect your intellectual property. Every document and
              communication remain secure, and we never share your work with third
              parties under any circumstances.
            </p>
          </div>
          <div className="serviceTab-card">
            <FaStar className="service-icon" />
            <h3>Quality</h3>
            <p>
              Our team of experts and academic editors guarantees top-tier
              quality, ensuring that your work aligns with the publication
              standards of elite WoS journals.
            </p>
          </div>
          <div className="serviceTab-card">
            <FaHeadset className="service-icon" />
            <h3>24*7 Support</h3>
            <p>
              Whether you need updates, revisions, or have last-minute queries,
              we're always available. Our dedicated support team works round the
              clock to assist you.
            </p>
          </div>
        </div>
      </div>

      <div className="section-card animate-fade-in">
        <h2 className="sectionTab1-title">Benefits of Publishing in Web of Science</h2>
        <div className="benefits-container">
          <ul className="benefits-list">
            <li><span className="benefit-icon">→</span> Improved citation metrics</li>
            <li><span className="benefit-icon">→</span> Opportunities for academic collaboration</li>
            <li><span className="benefit-icon">→</span> Increase high visibility and global research</li>
            <li><span className="benefit-icon">→</span> Enhance recognition and credibility of research</li>
            <li><span className="benefit-icon">→</span> Better career advancement</li>
          </ul>
        </div>
      </div>


      <div className="section-card animate-slide-up">
        <h2 className="sectionTab1-title">Step-by-Step Publication Process</h2>
        <p className="process-intro">
          At RRC, we follow a systematic, transparent, and scholar-friendly
          process to ensure your manuscript gets the best chance of acceptance
          in a Web of Science-indexed journal
        </p>
        
        <div className="processTab-steps">
          <div className="processTab1-step">
            <div className="step-header">
              <div className="step-icon"><FaFileAlt /></div>
              <h3>Manuscript Assessment</h3>
            </div>
            <p>
              Our experts thoroughly review your research manuscript to assess its 
              originality, structure, academic depth, and readiness for publication.
            </p>
          </div>
          
          <div className="processTab1-step">
            <div className="step-header">
              <div className="step-icon"><FaListAlt /></div>
              <h3>Journal Shortlisting</h3>
            </div>
            <p>
              Based on your research area, we shortlist suitable Web of Science-indexed 
              journals considering impact factor, review time, and acceptance rate.
            </p>
          </div>
          
          <div className="processTab1-step">
            <div className="step-header">
              <div className="step-icon"><FaEdit /></div>
              <h3>Formatting & Language Editing</h3>
            </div>
            <p>
              We ensure your manuscript complies with journal guidelines. Our editors 
              enhance grammar, tone, and academic vocabulary for clarity.
            </p>
          </div>
          
          <div className="processTab1-step">
            <div className="step-header">
              <div className="step-icon"><FaPaperPlane /></div>
              <h3>Submission Assistance</h3>
            </div>
            <p>
              We complete the submission process, prepare cover letters, and handle 
              all required documentation for smooth submission.
            </p>
          </div>
          
          <div className="processTab1-step">
            <div className="step-header">
              <div className="step-icon"><FaComments /></div>
              <h3>Peer Review Support</h3>
            </div>
            <p>
              We help interpret reviewer feedback and draft well-structured responses 
              and revisions to address all concerns.
            </p>
          </div>
          
          <div className="processTab1-step">
            <div className="step-header">
              <div className="step-icon"><FaCheckCircle /></div>
              <h3>Revisions & Final Acceptance</h3>
            </div>
            <p>
              After revisions, we finalize the manuscript, recheck compliance, and 
              ensure all post-acceptance steps are completed.
            </p>
          </div>
        </div>
      </div>
      <Tab4/>
    </div>
  );
};

export default Tab1;