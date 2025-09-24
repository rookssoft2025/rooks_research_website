import React, { useState,useRef,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Design/AtoZResearch.css';
import ResearchCards from './ResearchCards';
import PhDResearchWebsite from './planets'
const researchData = [
  {
    title: "Engineering",
    content: [
      "Engineering research is at the heart of technological progress. At RRC, we help scholars explore complex systems, optimize designs, and create innovative solutions. Our team supports all major fields, turning your ideas into impactful and well-structured research in areas like:",
      "Smart Systems & Automation",
      "Artificial Intelligence Applications",
      "Signal & Image Processing",
      "Renewable Energy Technologies",
      "IoT & Embedded Systems",
      "Wireless Communication & 5G, and so on"
    ],
    color: "#0B3470"
  },
  {
    title: "Science & Humanities",
    content: [
      "We support researchers exploring natural phenomena, human behavior, and societal change. Whether it's quantum science or ethics, we offer a strong academic grounding and mentorship needed for deep exploration across science and humanities in domains like:",
      "Environmental Science",
      "Physics & Chemistry",
      "Psychology",
      "History & Cultural Studies",
      "Sociology, and so on"
    ],
    color: "#0B3470"
  },
  {
    title: "Arts",
    content: [
      "Arts research is all about exploring meaning, culture, and expression. At RRC, we assist with literature, analyzing poetry, modern media, or historical narratives. Our goal is to help your work reflect both intellectual depth and cultural relevance. We assist in:",
      "Comparative Literature",
      "Linguistics & Semiotics",
      "Visual & Performing Arts",
      "Gender Studies",
      "Media & Communication, and so on"
    ],
    color: "#0B3470"
  },
  {
    title: "Medical",
    content: [
      "Medical research requires precision, innovation, and ethics. We assist scholars in crafting research that contributes to better health outcomes and medical advancements. Our end-to-end support meets global standards and drives real healthcare progress in areas such as:",
      "Clinical Trials",
      "Epidemiology",
      "Biomedical Research",
      "Public Health Studies",
      "Pharmacy & Drug Discovery, and so on"
    ],
    color: "#0B3470"
  },
  {
    title: "Management",
    content: [
      "Business success starts with smart research. At RRC, we support future leaders and analysts in exploring the dynamics of organizations, markets, and people. Our guidance ensures your research is practical, relevant, and academically strong. We cover:",
      "Human Resource Management",
      "Marketing & Consumer Behavior",
      "Financial Analysis",
      "Supply Chain & Operations",
      "Entrepreneurship, and so on"
    ],
    color: "#0B3470"
  }
];
const AtoZResearch = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
     
      const isTitleBox = event.target.closest('.title-box');
      if (!isTitleBox) {
        setActiveIndex(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="research-container">
      <h1 className="research-header">Our Research Domains</h1>
      <div className="title1-decoration">
            <div className="line1"></div>
            <div className="circle1"></div>
            <div className="line1"></div>
          </div>
      
      <div className="title-row">
        {researchData.map((item, index) => (
          <motion.div
            key={index}
            className="title-box"
            style={{ backgroundColor: item.color }}
            onClick={() => toggleSection(index)}
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <h2>{item.title}</h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
  {activeIndex !== null && (
    <motion.div
      className="content-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={contentRef}
        className="content-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="content-box"
          style={{ borderTop: `5px solid ${researchData[activeIndex].color}`, position: 'relative' }}
        >
     
          <button
            onClick={() => setActiveIndex(null)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              fontSize: '40px',
              cursor: 'pointer',
            }}
            aria-label="Close"
          >
            &times;
          </button>

          
          {researchData[activeIndex].content.map((paragraph, pIndex) => (
            <p key={pIndex} className={pIndex > 0 ? "" : ''}>
              {pIndex > 0 && '• '}{paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      <ResearchCards/>
      <PhDResearchWebsite/>
    </div>
  );
};

export default AtoZResearch;