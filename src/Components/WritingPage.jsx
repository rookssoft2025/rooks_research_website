import React, { useEffect } from 'react';
import '../Components/WritingPage.css';

const WritingPage = () => {
  useEffect(() => {
   
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elTop < windowHeight - 100) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); 
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <div className="writing-page">
  
      <section className="hero-banner">
        <div className="container">
          <h1 className="heroWri-title animate-on-scroll">
            Elevate your ideas. Empower your voice. Express through RRC!
          </h1>
          <p className="heroWri-subtitle animate-on-scroll">
            Premier research paper writing services at affordable prices
          </p>
        </div>
      </section>

    
      <section className="intro-section">
        <div className="container">
          <div className="intro-content animate-on-scroll">
            <h2>RRC Paper Writing Services</h2>
            <p>
              RRC is the best research paper writing service, offering premier research papers at affordable prices. 
              Our company understands that a research paper is more than just academic writing; it's a reflection 
              of your ideas, your effort, and your scholarly contribution. Our expert team consists of top-notch research paper writers who provide reliable and well-structured research papers for PhD scholars. 
              We also provide comprehensive services like research paper writing, thesis writing, review paper writing, 
              and more services at affordable prices. Our expert team guarantees to deliver the best research paper 
              writing services that adhere to all your specific needs and expectations.
            </p>
          </div>
        </div>
      </section>

    
      <section className="features-section">
        <div className="container">
          <h2 className="section1-title animate-on-scroll">Our Guarantees</h2>
          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">✍️</div>
              <h3>Guaranteed Original Writing</h3>
              <p>Less than 10% Plagiarism and Zero AI-generated content</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">🔄</div>
              <h3>Free Revisions</h3>
              <p>Until you are completely satisfied</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">📚</div>
              <h3>Latest References</h3>
              <p>Up-to-date academic sources</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">✅</div>
              <h3>Zero Grammar Errors</h3>
              <p>Polished, publication-ready documents</p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="journals-section">
        <div className="container">
          <h2 className="section1-title animate-on-scroll">Journal Writing Services</h2>
          <p className="section-subtitle animate-on-scroll">
            We specialize in providing top-tier academic writing services customized to help scholars publish their papers in high-ranked journals.
          </p>
          <div className="journal-list animate-on-scroll">
            <div className="journal-item">SCI Paper Writing</div>
            <div className="journal-item">Scopus Paper Writing</div>
            <div className="journal-item">UGC Paper Writing</div>
            <div className="journal-item">ANNEXURE Paper Writing</div>
            <div className="journal-item">IEEE</div>
            <div className="journal-item">SPRINGER</div>
            <div className="journal-item">ELSEVIER</div>
          </div>
        </div>
      </section>


      <section className="structure-section">
        <div className="container">
          <h2 className="section1-title animate-on-scroll">Research Paper Structure</h2>
          <p className="section-subtitle animate-on-scroll">
            We adhere to internationally accepted research paper structures:
          </p>
          <div className="structure-list animate-on-scroll">
            <div className="structure-item">1. Title</div>
            <div className="structure-item">2. Abstract</div>
            <div className="structure-item">3. Introduction</div>
            <div className="structure-item">4. Literature Review</div>
            <div className="structure-item">5. Methodology</div>
            <div className="structure-item">6. Results & Discussion</div>
            <div className="structure-item">7. Conclusion</div>
            <div className="structure-item">8. References</div>
          </div>
        </div>
      </section>

      
      <section className="process-section">
        <div className="container">
          <h2 className="section1-title animate-on-scroll">Our Paper Writing Process</h2>
          <p className="section-subtitle animate-on-scroll">
            At RRC, every research paper is built with strategy, clarity, and precision. Here's how we transform your ideas into publication-ready papers:
          </p>
          
          <div className="processW-steps">
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">1</div>
              <div className="stepW-content">
                <h3>Initial Consultation & Requirement Gathering</h3>
                <p>We begin with a detailed discussion to understand your domain, objectives, target journal/university, and expectations.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">2</div>
              <div className="stepW-content">
                <h3>Topic Selection & Research Gap Analysis</h3>
                <p>We help you choose a focused, relevant, and research-worthy topic by identifying current gaps in existing literature.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">3</div>
              <div className="stepW-content">
                <h3>Collecting Relevant Data</h3>
                <p>From peer-reviewed journals to authentic databases, we gather only the most credible and up-to-date data to strengthen your paper.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">4</div>
              <div className="stepW-content">
                <h3>Analyzing Data Sources</h3>
                <p>Using both qualitative and quantitative methods, we interpret the data with precision to draw valid, research-backed conclusions.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">5</div>
              <div className="stepW-content">
                <h3>Paper Structuring & Draft Development</h3>
                <p>We follow standard academic structures and tailor the flow to your research focus, ensuring logical coherence and clarity.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">6</div>
              <div className="stepW-content">
                <h3>Content Creation with Data Support</h3>
                <p>Each section is written with critical analysis, accurate citations, and, where applicable, data visualization and statistical interpretation.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">7</div>
              <div className="stepW-content">
                <h3>Plagiarism Check & Editing</h3>
                <p>We run the paper through Turnitin, refine grammar, formatting, and improve academic tone while ensuring originality.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="stepW-number">8</div>
              <div className="stepW-content">
                <h3>Final Review & Submission-Ready Formatting</h3>
                <p>After quality checks, we format the paper per your journal/university guidelines, ready for submission or publication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="benefits-section">
        <div className="container">
          <h2 className="section1-title animate-on-scroll">Why Hire RRC Professionals?</h2>
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll">
              <h3>Domain Expertise Across Disciplines</h3>
              <p>Our team consists of professionals with hands-on experience across diverse fields who bring domain-specific knowledge, ensuring your paper reflects academic depth and clarity.</p>
            </div>
            <div className="benefit-card animate-on-scroll">
              <h3>Novelty & Innovation in Every Paper</h3>
              <p>We focus on delivering fresh perspectives and unique contributions to your research goals without templates or short cuts, we concentrate on providing original work supported by reliable data.</p>
            </div>
            <div className="benefit-card animate-on-scroll">
              <h3>Value Client Feedback</h3>
              <p>Your feedback shapes our work. We pay attention, make adjustments, and rewrite until your expectations are not only fulfilled but exceeded.</p>
            </div>
            <div className="benefit-card animate-on-scroll">
              <h3>Exceptional Service & Ongoing Support</h3>
              <p>From the first draft to the final submission, we're with you. Timely updates, responsive communication, and personalized attention to make your research paper stand out.</p>
            </div>
            <div className="benefit-card animate-on-scroll">
              <h3>Plagiarism-Free, Publication-Ready Content</h3>
              <p>We combine scholarly accuracy with strict plagiarism checks via Turnitin, formatting as per journal guidelines, and editing for a polished finish.</p>
            </div>
            <div className="benefit-card animate-on-scroll">
              <h3>Quality That Meets Global Standards</h3>
              <p>From structure to citations, our papers reflect international academic standards and are formatted as per your target publication's requirements.</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default WritingPage;