import React, { useEffect } from "react";
import "./ThesisWritingServices.css";

const ThesisWritingServices = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="thesis-wrapper">
      <header className="thesis-hero animate-on-scroll">
        <div className="hero-content">
          <h1 className="hero-title">Thesis Writing Services</h1>
          <div className="hero-divider"></div>
          <p className="hero-description">
            RRC offers the best thesis writing services in India, combining expert guidance, personalized support, and a commitment to quality that for Thesis writing services. We take pride in helping scholars turn complex research ideas into well-structured, plagiarism-free thesis tailored to their academic goals. From topic selection to final submission, our end-to-end support ensures a smooth and stress-free thesis journey. With a team of experienced writers and subject matter experts, we deliver high-quality, customized thesis on time and at affordable rates. At RRC, we don't just assist; we collaborate, innovate, and elevate your research, making us the trusted partner for scholars across India and Abroad.
          </p>
        </div>
      </header>

      <main className="thesis-content">
        <article className="feature-card animate-on-scroll">
          <div className="card-header">
            <h2 className="card-title">Why does RRC stand out as the best thesis writing service in India?</h2>
          </div>
          <div className="card-body">
            <ul className="feature-list">
              <li className="feature-item">
                <div className="feature-icon">💎</div>
                <div className="feature-text">
                  <h2>Expert Team of Writers:</h2> 
                  <p>RRC brings together a team of highly qualified researchers, subject matter experts, and academic writers with experience across diverse disciplines.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">🔄</div>
                <div className="feature-text">
                  <h2>End-to-End Thesis Support:</h2> 
                  <p>From topic selection to final submission, we offer complete guidance through every stage of the thesis writing process.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">✍️</div>
                <div className="feature-text">
                  <h2>Plagiarism-Free & Original Content:</h2> 
                  <p>We prioritize academic integrity by delivering 100% original, plagiarism-checked and Zero AI research content tailored to your research goals.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">💰</div>
                <div className="feature-text">
                  <h2>Affordable Pricing:</h2> 
                  <p>Our pricing is designed to be student-friendly without compromising on quality, with no hidden charges.</p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-icon">⏱️</div>
                <div className="feature-text">
                  <h2>Timely Delivery:</h2> 
                  <p>We strictly adhere to deadlines while maintaining high standards in content, formatting, and presentation.</p>
                </div>
              </li>
            </ul>
          </div>
        </article>

        <article className="info-card animate-on-scroll">
          <div className="card-header">
            <h2 className="card-title">Why does a thesis get rejected?</h2>
          </div>
          <div className="card-body">
            <h3 className="card-intro">A thesis can be rejected for several reasons, including</h3>
            <ul className="reasons-grid">
              <li className="reason-item">Lack of originality or plagiarism</li>
              <li className="reason-item">Weak thesis statements</li>
              <li className="reason-item">Poor structure or formatting</li>
              <li className="reason-item">Inadequate literature review</li>
              <li className="reason-item">Failure to meet guidelines</li>
              <li className="reason-item">Grammatical or language issues</li>
              <li className="reason-item">Missing references or citations</li>
              <li className="reason-item">Not proofreading thoroughly</li>
              <li className="reason-item">Improper defense/Proof of Concept</li>
            </ul>
            <p className="card-outro">
              At RRC, we help you avoid these pitfalls by offering expert guidance and rigorous quality checks to ensure your thesis meets academic standards and university guidelines.
            </p>
          </div>
        </article>

        <article className="process-card animate-on-scroll">
          <div className="card-header">
            <h2 className="card-title">Process of our thesis writing service</h2>
          </div>
          <div className="card-body">
            <p className="card-intro">Our process is designed to be simple, transparent, and scholar-friendly:</p>
            <ol className="process-steps">
              <li className="processth-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <strong>Order Placement:</strong> You submit your research topic, specific requirements, and deadline. We gather all the necessary details to understand your expectations and objectives.
                </div>
              </li>
              <li className="processth-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <strong>Discussion & Planning:</strong> Once we receive your order, our team schedules a detailed discussion to finalize the scope, outline, and timelines. We assign a suitable subject expert to your project and map out a customized work plan.
                </div>
              </li>
              <li className="processth-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <strong>Research & Drafting:</strong> Our research team conducts in-depth research and begins drafting your thesis, chapter by chapter, in alignment with academic standards and university guidelines.
                </div>
              </li>
              <li className="processth-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <strong>Client Review:</strong> We share each completed chapter for your feedback. You get the opportunity to suggest edits, ask questions, and stay actively involved in the writing process to ensure the content matches your expectations.
                </div>
              </li>
              <li className="processth-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <strong>Plagiarism Check:</strong> Before finalizing your thesis, we run it through trusted plagiarism detection tools to ensure it is 100% original. A detailed plagiarism report is also shared with you for full transparency.
                </div>
              </li>
              <li className="processth-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <strong>Proofreading & Editing:</strong> Our editorial team meticulously reviews the thesis for grammar, coherence, formatting, and reference style. We ensure your document is polished, professional, and academically sound.
                </div>
              </li>
              <li className="processth-step">
                <div className="step-number">7</div>
                <div className="step-content">
                  <strong>Final Delivery:</strong> Once all revisions are completed and you're fully satisfied, we deliver the final, formatted thesis within the agreed timeline, ready for submission.
                </div>
              </li>
              <li className="processth-step">
                <div className="step-number">8</div>
                <div className="step-content">
                  <strong>Post-Delivery Support:</strong> Our support doesn't end with delivery. We offer continued assistance with revisions (if needed), responses to reviewer feedback, and guidance until your thesis is successfully approved.
                </div>
              </li>
            </ol>
          </div>
        </article>

        <article className="format-card animate-on-scroll">
          <div className="card-header">
            <h2 className="card-title">What is the format of a thesis?</h2>
          </div>
          <div className="card-body">
            <p className="card-intro">
              A standard thesis format typically involves organizing your research and ideas into a clear and structured document that adheres to academic guidelines. Here is the step-by-step format to support you.
            </p>
            <div className="format-grid">
              <div className="format-item">Title Page</div>
              <div className="format-item">Declaration & Certificate</div>
              <div className="format-item">Abstract</div>
              <div className="format-item">Acknowledgments</div>
              <div className="format-item">Table of Contents</div>
              <div className="format-item">List of Tables</div>
              <div className="format-item">List of Figures</div>
              <div className="format-item">List of Abbreviations</div>
              <div className="format-item">Chapter 1: Introduction</div>
              <div className="format-item">Chapter 2: Literature Review</div>
              <div className="format-item">Chapter 3: Research Methodology</div>
              <div className="format-item">Chapter 4: Results & Discussion</div>
              <div className="format-item">Chapter 5: Conclusion</div>
              <div className="format-item">References/Bibliography</div>
              <div className="format-item">Appendices (if any)</div>
            </div>
            <p className="card-outro">
              Formatting (font, spacing, citation style) depends on the university. RRC ensures compliance with all requirements.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ThesisWritingServices;