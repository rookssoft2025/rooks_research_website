import React from "react";
import { useEffect } from "react";
import { FaSearch, FaChartLine, FaGlobe, FaAward, FaCheckCircle, FaBookOpen, FaPenFancy, FaClipboardList, FaChartBar, FaComments, FaEdit, FaPaperPlane } from "react-icons/fa";
import "./Tab4.css";

const Tab4 = () => {

  return (
    <div className="sci-container">
      <div className="heroTab4-section" data-aos="fade-up">
        <div className="hero-content">
          <h1 className="hero-title">Indexed Publications</h1>
          <p className="hero-subtitle">Maximize your research impact with our expert guidance for SCIE/SSCI/AHCI/ESCI Indexed Journals publications</p>
        </div>
        
      </div>

      <div className="content-section" data-aos="fade-up">
        <div className="infoTab4-card">
          <h2 className="sectionTab4-title">
            <FaBookOpen className="iconTab4" /> SCI Indexed Journals
          </h2>
          <p className="section-text">
            An SCI-indexed journal refers to a scientific journal that is listed
            in the Science Citation Index (SCI), a globally recognized database
            maintained by Clarivate Analytics. These journals are selected based
            on rigorous criteria such as citation frequency, editorial quality,
            peer-review standards, and overall research impact. Publishing in an
            SCI-indexed journal is considered a prestigious achievement in
            academia, as it reflects the quality and credibility of your research.
            It also enhances your academic profile, increases the visibility of
            your work, and is often a requirement for doctoral research, academic
            promotions, and funding opportunities.
          </p>
        </div>
      </div>

      

      <div className="importance-section" data-aos="fade-up">
        <div className="infoTab4-card">
          <h2 className="sectionTab4-title">
            <FaAward className="iconTab4" /> Why SCI Indexing is More Important
          </h2>
          <p className="section-text">
            SCI indexing is regarded as a standard of excellence in academic
            publishing due to its strict selection criteria and global
            credibility. Here's why it's so significant:
          </p>
          <div className="importance-grid">
            <div className="importance-item" data-aos="zoom-in">
              <FaChartLine className="importance-icon" />
              <h3>Impact Factor</h3>
              <p>SCI journals typically have higher impact factors, indicating greater influence in their fields.</p>
            </div>
            <div className="importance-item" data-aos="zoom-in" data-aos-delay="100">
              <FaGlobe className="importance-icon" />
              <h3>Visibility</h3>
              <p>Your research gains global exposure to top researchers and institutions.</p>
            </div>
            <div className="importance-item" data-aos="zoom-in" data-aos-delay="200">
              <FaAward className="importance-icon" />
              <h3>Academic Recognition</h3>
              <p>Essential for PhD completion, promotions, and tenure decisions.</p>
            </div>
            <div className="importance-item" data-aos="zoom-in" data-aos-delay="300">
              <FaCheckCircle className="importance-icon" />
              <h3>Quality</h3>
              <p>Rigorous peer-review ensures only high-quality research is published.</p>
            </div>
            <div className="importance-item" data-aos="zoom-in" data-aos-delay="400">
              <FaChartLine className="importance-icon" />
              <h3>Credibility</h3>
              <p>Adds validation to your research findings and methodology.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="identification-section" data-aos="fade-up">
        <div className="infoTab4-card">
          <h2 className="sectionTab4-title">
            <FaSearch className="iconTab4" /> How to Identify an Indexed Journal
          </h2>
          <div className="steps-container">
            <div className="step" data-aos="fade-right">
              <div className="stepTab4-number">1</div>
              <div className="stepTab4-content">
                <h3>Visit the Master Journal List</h3>
                <p>Go to "Clarivate Web of Science Master Journal List"</p>
              </div>
            </div>
            <div className="step" data-aos="fade-right" data-aos-delay="100">
              <div className="stepTab4-number">2</div>
              <div className="stepTab4-content">
                <h3>Search by Journal Name or ISSN</h3>
                <p>Use the search function to find your target journal</p>
              </div>
            </div>
            <div className="step" data-aos="fade-right" data-aos-delay="200">
              <div className="stepTab4-number">3</div>
              <div className="stepTab4-content">
                <h3>Check the Indexing Category</h3>
                <p>Look for SCI or SCIE in the indexing information</p>
              </div>
            </div>
            <div className="step" data-aos="fade-right" data-aos-delay="300">
              <div className="stepTab4-number">4</div>
              <div className="stepTab4-content">
                <h3>Understand the Difference</h3>
                <p>Recognize whether it's SCI (core) or SCIE (expanded)</p>
              </div>
            </div>
            <div className="step" data-aos="fade-right" data-aos-delay="400">
              <div className="stepTab4-number">5</div>
              <div className="stepTab4-content">
                <h3>Check for Impact Factor</h3>
                <p>Verify the journal's impact factor and quartile ranking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="process-section" data-aos="fade-up">
        <div className="infoTab4-card">
          <h2 className="sectionTab4-title">
            <FaPenFancy className="iconTab4" /> Crafting a PhD Article for SCI Journal Publication
          </h2>
          <p className="section-text">
            Writing a PhD article for SCI publication isn't just about documenting
            research; it's about telling a story that's scientifically sound,
            academically rigorous, and globally relevant. It requires deep subject
            expertise, fluent academic writing, and a strategic approach to
            structure and submission.
          </p>
          
          {/* <div className="process-steps"> */}
            <div className="processTab4-item" data-aos="flip-left">
              <div className="processTab4-icon">
                <FaClipboardList />
              </div>
              <div className="processTab4-content">
                <h3>Choosing a Suitable Journal</h3>
                <p>
                  Success starts with strategy. We help you select the most suitable
                  SCI-indexed journal based on your research scope, target audience,
                  and impact goals, setting the tone for a smooth publication journey.
                </p>
              </div>
            </div>
            
            <div className="processTab4-item" data-aos="flip-left" data-aos-delay="100">
              <div className="processTab4-icon">
                <FaEdit />
              </div>
              <div className="processTab4-content">
                <h3>Crafting a Clear and Concise Abstract</h3>
                <p>
                  Your abstract is the first impression; we make sure it's powerful,
                  concise, and loaded with clarity, summarizing your research
                  highlights and inviting readers into your work.
                </p>
              </div>
            </div>
            
            <div className="processTab4-item" data-aos="flip-left" data-aos-delay="200">
              <div className="processTab4-icon">
                <FaBookOpen />
              </div>
              <div className="processTab4-content">
                <h3>Building a Strong Introduction</h3>
                <p>
                  A captivating introduction frames your research problem, justifies
                  its relevance, and hooks the reader with purpose. We help you lay
                  the perfect foundation for what's to come.
                </p>
              </div>
            </div>
            
            <div className="processTab4-item" data-aos="flip-left" data-aos-delay="300">
              <div className="processTab4-icon">
                <FaChartBar />
              </div>
              <div className="processTab4-content">
                <h3>Presenting Your Research Methods</h3>
                <p>
                  We assist you in presenting your methodology in a clear, replicable,
                  and scientifically valid manner, ensuring reviewers appreciate the
                  rigor behind your approach.
                </p>
              </div>
            </div>
            
            <div className="processTab4-item" data-aos="flip-left" data-aos-delay="400">
              <div className="processTab4-icon">
                <FaChartLine />
              </div>
              <div className="processTab4-content">
                <h3>Presenting Your Results</h3>
                <p>
                  Whether it's graphs, tables, or statistical outputs, we help you
                  showcase your results logically and visually, aligning with academic
                  expectations and journal standards.
                </p>
              </div>
            </div>
            
            <div className="processTab4-item" data-aos="flip-left" data-aos-delay="500">
              <div className="processTab4-icon">
                <FaComments />
              </div>
              <div className="processTab4-content">
                <h3>Providing a Discussion and Conclusion</h3>
                <p>
                  We guide you in interpreting your findings, comparing them with
                  existing literature, and closing with meaningful conclusions and
                  future research directions.
                </p>
              </div>
            </div>
            
            <div className="processTab4-item" data-aos="flip-left" data-aos-delay="600">
              <div className="processTab4-icon">
                <FaEdit />
              </div>
              <div className="processTab4-content">
                <h3>Revision and Editing</h3>
                <p>
                  Our expert editors meticulously polish your manuscript for grammar,
                  structure, coherence, and journal-specific formatting, ensuring it's
                  submission-ready.
                </p>
              </div>
            </div>
            
            <div className="processTab4-item" data-aos="flip-left" data-aos-delay="700">
              <div className="processTab4-icon">
                <FaPaperPlane />
              </div>
              <div className="processTab4-content">
                <h3>Seamless Manuscript Submission</h3>
                <p>
                  We handle the entire submission process, from cover letter
                  preparation to system upload, and keep you updated at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Tab4;