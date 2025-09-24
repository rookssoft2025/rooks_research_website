import React, { useState, useEffect } from "react";
import "../Design/SchoolNews.css";
import researchImg from "../Assets/home1.png";
import successImg from "../Assets/home2.png";
import serviceIcon from "../Assets/service-icon.png";
import checkmarkIcon from "../Assets/check-icon.png";
import animationData from '../Assets/lottie.json';
import animationData1 from '../Assets/phd1.json';
import logo from '../Assets/wallpaper.png';
import { Player } from '@lottiefiles/react-lottie-player';
import { getDatabase, ref, set, onValue, increment } from "firebase/database";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const db = getDatabase();
    const counterRef = ref(db, 'visitorCount');

    // Update visitor count in Firebase
    set(counterRef, increment(1)).catch((error) => {
      console.error("Error updating visitor count:", error);
      // Fallback to localStorage if Firebase fails
      const storedCount = localStorage.getItem('visitorCount');
      let initialCount = storedCount ? parseInt(storedCount) : 1238;
      initialCount += 1;
      setCount(initialCount);
      localStorage.setItem('visitorCount', initialCount);
    });

    // Listen for real-time updates
    const unsubscribe = onValue(counterRef, (snapshot) => {
      const data = snapshot.val();
      setCount(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="visitor-counter animate-on-scroll">
      <div className="counter-icon">👥</div>
      <div className="counter-content">
        <span className="counter-number">{count.toLocaleString()}</span>
        <span className="counter-label">Website Visitors</span>
      </div>
      <div className="counter-decoration"></div>
    </div>
  );
};

const SchoolNews = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long", 
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); 

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <div className="rrc-consultancy">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      <header className="rrc-header animate-on-scroll">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="RRC Logo" className="logo" />
          </div>
          <div className="header-meta">
            <VisitorCounter />
            <span className="date">{currentDate}</span>
          </div>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-content animate-on-scroll">
          <h2 className="main-title">
            <span className="highlight">ROOKS</span>
            <span className="highlight">RESEARCH</span>
            <span className="highlight">CONSULTANCY</span>
          </h2>

          <div className="title-decoration">
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="main-grid">
        <aside className="services-sidebar animate-on-scroll">
          <div className="sidebar-header">
            <h2>Our Comprehensive Services</h2>
          </div>

          <ServiceCategory
            title="Initial Phase Services"
            icon={serviceIcon} 
            items={["PhD Topic Selection", "PhD Assistance & Guidance"]}
          />

          <ServiceCategory
            title="Professional Writing"
            icon={serviceIcon} 
            items={[
              "PhD Proposal Writing",
              "PhD Review Paper writing",
              "PhD Research Paper Writing",
              "PhD Conference Paper Writing",
              "Thesis Writing",
              "Synopsis Writing",
              "Book Writing",
            ]}
          />

          <ServiceCategory
            title="Editing Services"
            icon={serviceIcon}
            items={[
              "PhD Research Paper Editing",
              "PhD Review Paper Editing",
              "PhD Conference Paper Editing",
              "Thesis Editing",
              "Synopsis Editing",
              "Book Editing",
              "Conference/Journal/Thesis Editing"
            ]}
          />

          <ServiceCategory
            title="Technical Implementation"
            icon={serviceIcon}
            items={[
              "Python Implementation",
              "MATLAB Implementation",
              "NS2 Implementation",
              "Java Implementation",
              "Blockchain Implementation",
              "Hardware Implementation"
            ]}
          />

          <ServiceCategory
            title="Publication Support"
            icon={serviceIcon}
            items={[
              "Scopus Journals",
              "Sci Journals",
              "Conference Proceedings",
              "A* Conference",
              "National Conference",
              "Book Publication",
              "Book Chapter Publication",
              "UGC Care"
            ]}
          />

          <ServiceCategory
            title="Final Stage Services"
            icon={serviceIcon}
            items={[
              "Journal Publication Assistance",
              "Proofreading services",
              "Plagiarism Checking",
              "Submission Assistance",
              "Revision Support",
              "PhD viva process Guidance"
            ]}
          />
        </aside>

        <main className="main-articles">
          <ArticleCard
            image={researchImg}
            content="We specialize in Research Paper Writing, Thesis Writing, PhD Assistance, and Journal Publications, including Web of Science, Scopus, and Sci journals. Our expert team ensures that your research meets the highest academic standards, helping scholars and students across India achieve academic excellence."
          />

          <ArticleCard
            title="Personalized Research Assistance for Exceptional Results"
            content="What sets us apart is our personalized approach. Every researcher has unique requirements when it comes to research writing assistance. That's why we provide personalized assistance for each client by understanding their specific needs. From topic selection to final submission, our team provides customized solutions to ensure your research stands out and exceeds expectations."
            highlight={true}
          />

          <ArticleCard
            image={successImg}
            content="With a proven track record of success, our clients have successfully published in high-quality journals and completed their academic journeys with confidence. Our skilled professionals bring years of experience in academic writing, offering expert guidance at every stage."
          />
        </main>

        <aside className="info-sidebar">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: '300px', width: '300px' }}
          />
          <InfoCard
            title="Why RRC?"
            content="At RRC, we provide top-notch services that fit your budget and timeline. Whether you're working on a PhD thesis, research paper, or publication, we are here to guide you every step of the way with high-quality academic support tailored to your needs."
            highlight={true}
          />

          <InfoCard
            title="Our Exclusive Tailored Services"
            content="We provide comprehensive research support for our clients at every stage of their academic journey. Explore our wide range of specialized services, designed to assist PhD scholars achieve excellence from start to finish."
            highlight={true}
          />

          <InfoCard
            title="End-to-End Research Support"
            content="We offer comprehensive support that covers everything from brainstorming and research to writing, editing, formatting, and citation guidance. Our meticulous quality assurance process ensures that your work is original, well-structured, and meets university guidelines."
            highlight={true}
          />

          <InfoCard
            title="Timely & Quality-Driven Support"
            content="Time is crucial in academic research, and we ensure timely delivery without compromising quality. Our efficient workflow and dedicated team help you meet deadlines with ease, reducing stress and ensuring a seamless research experience."
            highlight={true}
          />

          <InfoCard
            title="Affordable Academic Support"
            content="At RRC, we believe that quality academic support should be accessible to all researchers. Our services are competitively priced, offering exceptional value without compromising on excellence. Let's work together to turn your research vision into reality!"
            highlight={true}
          />
          <Player
            autoplay
            loop
            src={animationData1}
            style={{ height: '300px', width: '300px' }}
          />
        </aside>
      </div>
      <section className="vm-section">
        <div className="vm-container">
          <VMCard
            type="vision"
            title="Vision"
            content="To empower academicians and corporate researchers for technology-based research and innovations."
          />

          <VMCard
            type="mission"
            title="Mission"
            content="To stand with academicians and corporate researchers in all their research endeavors through our research-based support services, and convert their research dreams into a reality."
          />
        </div>
      </section>
    </div>
  );
};

const ServiceCategory = ({ title, icon, items }) => (
  <div className="service-category">
    <div className="service-category-header">
      <img src={icon} alt={`${title} Icon`} className="service-category-icon" />
      <h3>{title}</h3>
    </div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <img src={checkmarkIcon} alt="✓" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ArticleCard = ({ image, title, content, highlight = false }) => (
  <article className={`article-card ${highlight ? 'highlight' : ''} animate-on-scroll`}>
    {image && (
      <div className="article-image">
        <img src={image} alt="Research" />
      </div>
    )}
    <div className="article-content">
      {title && <h2>{title}</h2>}
      <p>{content}</p>
    </div>
  </article>
);

const InfoCard = ({ title, content, highlight = false }) => (
  <div className={`info-card ${highlight ? 'highlight' : ''} animate-on-scroll`}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const VMCard = ({ type, title, content }) => (
  <div className={`vm-card ${type} animate-on-scroll`}>
    <div className="card1-header">
      <h3>{title}</h3>
      <div className="icon">{type === 'vision' ? '👁️' : '🎯'}</div>
    </div>
    <p>{content}</p>
    <div className="glow-effect"></div>
  </div>
);

export default SchoolNews;