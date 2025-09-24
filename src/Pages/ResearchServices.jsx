import React, { useState } from "react";
import "../Design/ResearchServices.css";
import { Link } from "react-router-dom";


const ResearchServices = () => {
  const [modalData, setModalData] = useState({ open: false, title: "", content: [] });

  const services = [
    {
      title: "Research Paper Writing Services",
      content: [
        "100% Original Research Papers Crafted from Scratch, Tailored to Meet Your Objectives",
        "Handled by Research Professionals with Domain Expertise",
        "Plagiarism-Free Manuscript",
        "AI free Manuscript",
        "Aligned With University Guidelines and Journal Standards",
        "Access To Unlimited Revisions Until You’re Satisfied",
      ],
      link: "/writingPage"
    },
    {
      title: "Thesis Writing Services",
      content: [
        "Well-Structured, Original Thesis Documents",
        "Developed with Academic Rigor and Depth",
        "Personalized Content Based on Your University Syllabus",
        "Thorough Review to Ensure Zero Plagiarism",
        "Plagiarism free content",
      ],
      link: "/thesis-page",
    },
    {
      title: "Journal Publication Support",
      content: [
        "Complete Guidance for Journal Submission",
        "Publication in High-Impact, Indexed Journals",
        "Support for SCI, Scopus, Elsevier, UGC, and More",
        "Fast-tracked Free Journal Publication Across Domains",
        "Complete support with cover letters, reviewer responses, and formatting",
      ],
      link: "/journal-page",
    },
    {
      title: "Implementation Support",
      content: [
        "Real-Time Code Execution with Live Demos",
        "Tailored Implementation for Research Projects",
        "Get support in Python, MATLAB, Java, NS2, Blockchain & more",
      ],
      link: "/implementation",
    },
  ];

  const openModal = (service) => {
    setModalData({ open: true, title: service.title, content: service.content });
  };

  const closeModal = () => {
    setModalData({ ...modalData, open: false });
  };

  return (
    <div className="services-container">
      <h1 className="research-header">Our Services</h1>

 <div className="title1-decoration">
            <div className="line1"></div>
            <div className="circle1"></div>
            <div className="line1"></div>
          </div>
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <h2>{service.title}</h2>
          <ul>
            {service.content.slice(0, 3).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <Link to={service.link} className="my-button ">
  View Details &rarr;
</Link>
        </div>
      ))}

     
    </div>
  );
};

export default ResearchServices;
