import React from "react";
import { FaSearch, FaBook, FaGlobe, FaHistory, FaUserEdit, FaLanguage, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import "./Tab3.css"; 

const Tab3 = () => {
  return (
    <div className="ugc-care-container">
      <header className="ugc-header">
        <h1 className="main-title">UGC Care Journal</h1>
        <div className="title-decoration">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
          </div>
      </header>

      <div className="ugc-section animate-fade-in">
        <div className="infoTab3-card card-purple">
          <h2 className="sectionTab3-title">
            <FaBook className="iconTab3" /> What is UGC CARE Journal Publication?
          </h2>
          <p className="sectionTab3-content">
            UGC CARE (Consortium for Academic and Research Ethics) is an initiative launched by the University Grants Commission (UGC), India, to promote high-quality research and maintain publication ethics in academia. The UGC CARE List contains a curated set of journals that follow strict standards for authenticity, peer review, and ethical publishing practices.
          </p>
        </div>
      </div>

      <div className="ugc-section animate-fade-in">
        <div className="infoTab3-card card-blue">
          <h2 className="sectionTab3-title">
            <FaGlobe className="iconTab3" /> UGC-CARE Journal Categories: A Smarter Way to Publish
          </h2>
          <p className="sectionTab3-content">
            Navigating the world of academic publishing just got easier! The UGC-CARE List has revolutionized the way researchers and educators choose credible journals by categorizing them into four smart groups.
          </p>

          <div className="categories-grid">
            <div className="category-card card-group-a animate-slide-up">
              <h3 className="category-title">Group A - Globally Indexed Excellence</h3>
              <p className="category-content">
                This elite category features journals that are indexed in both Scopus and SCI (Science Citation Index) including, SSCI, AHCI, and SCI-Expanded. These publications are internationally recognized for their broad subject coverage.
              </p>
              <div className="category-badge">Premium</div>
            </div>

            <div className="category-card card-group-b animate-slide-up">
              <h3 className="category-title">Group B - Legacy Journals with Proven Merit</h3>
              <p className="category-content">
                These journals were part of the original UGC-Approved List and have undergone a severe re-evaluation based on updated quality standards. They retain their place because of consistent academic contribution.
              </p>
              <div className="category-badge">Established</div>
            </div>

            <div className="category-card card-group-c animate-slide-up">
              <h3 className="category-title">Group C - Expert-Nominated, Quality-Checked</h3>
              <p className="category-content">
                Group C comprises journals that are nominated by UGC-CARE Council Members across diverse disciplines. They pass through quantitative evaluations and content screening to ensure academic integrity.
              </p>
              <div className="category-badge">Verified</div>
            </div>

            <div className="category-card card-group-d animate-slide-up">
              <h3 className="category-title">Group D - Diverse Voices in Every Language</h3>
              <p className="category-content">
                This category celebrates academic diversity, featuring journals across all languages and subject areas, submitted by institutions and validated through analytical screening.
              </p>
              <div className="category-badge">Diverse</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ugc-section animate-fade-in">
        <div className="infoTab3-card card-green">
          <h2 className="sectionTab3-title">
            <FaFileAlt className="iconTab3" /> Journal Process for Publication
          </h2>
          <p className="section-content">
            UGC publication is not an easy process. You have to select the exact journal for the paper. But you don't worry. We have an expert team in publication.
          </p>

          <div className="processTab3-steps">
            <div className="processTab3-step animate-bounce-in">
              <div className="step-number">1</div>
              <div className="stepTab3 -content">
                <h3>Examine the paper standard for publication</h3>
                <p>We begin by thoroughly reviewing your manuscript to assess its quality, originality, and alignment with academic norms.</p>
              </div>
            </div>

            <div className="processTab3-step animate-bounce-in">
              <div className="step-number">2</div>
              <div className="stepTab3-content">
                <h3>We make your paper to journal standard</h3>
                <p>Our team enhances your paper's structure, clarity, language, and academic tone.</p>
              </div>
            </div>

            <div className="processTab3-step animate-bounce-in">
              <div className="step-number">3</div>
              <div className="stepTab3-content">
                <h3>Find the exact match journals</h3>
                <p>We search the official UGC CARE database to find perfect fit journals.</p>
              </div>
            </div>

            <div className="processTab3-step animate-bounce-in">
              <div className="step-number">4</div>
              <div className="stepTab3-content">
                <h3>Formatting</h3>
                <p>We format your paper according to the selected journal's specific submission guidelines.</p>
              </div>
            </div>

            <div className="processTab3-step animate-bounce-in">
              <div className="step-number">5</div>
              <div className="stepTab3-content">
                <h3>Submit your paper</h3>
                <p>We assist in submitting your paper to the target journal.</p>
              </div>
            </div>

            <div className="processTab3-step animate-bounce-in">
              <div className="step-number">6</div>
              <div className="stepTab3-content">
                <h3>Journal revision</h3>
                <p>We work with you to address reviewer feedback promptly.</p>
              </div>
            </div>

            <div className="processTab3-step animate-bounce-in">
              <div className="step-number">7</div>
              <div className="stepTab3-content">
                <h3>Paper acceptance</h3>
                <p>We celebrate your paper's final acceptance!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ugc-section animate-fade-in">
        <div className="infoTab3-card card-orange">
          <h2 className="sectionTab3-title">
            <FaSearch className="iconTab3" /> How to check UGC Care-approved Journals
          </h2>
          <div className="check-steps">
            <div className="check-step">
              <FaCheckCircle className="check-icon" />
              <span>Visit the Official UGC CARE Portal </span>
            </div>
            <div className="check-step">
              <FaCheckCircle className="check-icon" />
              <span>Click on "Search Journals" to access the journal search page</span>
            </div>
            <div className="check-step">
              <FaCheckCircle className="check-icon" />
              <span>Log in or register (if required) to access full journal details</span>
            </div>
            <div className="check-step">
              <FaCheckCircle className="check-icon" />
              <span>Search for the Journal using the journal title, ISSN number, or publisher name</span>
            </div>
            <div className="check-step">
              <FaCheckCircle className="check-icon" />
              <span>View details including index group, subject category, and publisher information</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab3;