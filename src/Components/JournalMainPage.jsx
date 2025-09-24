import React, { useState } from 'react';
import '../Components/JournalMainPage.css';
import { FaPenNib,
    FaFingerprint,
    FaSearchPlus,
    FaFileAlt,
    FaUserEdit,
    FaClipboardCheck,
    FaComments,
    FaTools,
    FaUpload,
    FaCertificate,
    FaArrowRight,
    FaRegFileAlt,
    FaBullseye,
    FaUsers,
    FaCompressArrowsAlt,
    FaThumbsUp,
    FaClock
 } from 'react-icons/fa';
import { motion } from 'framer-motion';

const JournalMainPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 1 }
        }
    };

   
    const sections = {
        overview: {
            title: "Journal Publication Services",
            content: [
                "At RRC, we know that publishing your research in a reputable journal is pivotal in your academic journey. Our journal publication services are designed to guide you through this intricate process, ensuring your work reaches the right audience on the most prestigious platforms.",
                "We provide journal publication services for clients across the globe. RRC is one of the top research paper publishers and offers scholars comprehensive PhD journal publication assistance. Our services include selecting the right journal, improving the manuscript, formatting as per journal guidelines, and handling the post-submission process. We help enhance the visibility of your research and maximize your chances of acceptance in top-tier journals indexed in Scopus and Web of Science, and SCI. Whether you’re an experienced researcher or publishing for the first time, our expert assistance ensures your work is submission-ready, impactful, and aligned with global publishing standards.We provide journals publication services for clients across the globe. RRC is one of the top research paper publishers and offers scholars comprehensive PhD journal publication assistance. Our services include selecting the right journal, improving the manuscript, formatting as per journal guidelines, and handling the post-submission process."
            ]
        },
        process: [
            { icon: <FaPenNib />, title: "Drafting the Manuscript", description: "Writing a high-quality manuscript tailored to your research goals" },
            { icon: <FaFingerprint />, title: "Plagiarism Check", description: "Through advanced plagiarism screening" },
            { icon: <FaSearchPlus />, title: "Identifying Journals", description: "Choosing relevant journals suitable for your research theme" },
            { icon: <FaFileAlt />, title: "Manuscript Formatting", description: "Formatting the manuscript as per journal-specific guidelines" },
            { icon: <FaUserEdit />, title: "Author Profile Setup", description: "Creating your author profile on the journal’s submission portal" },
            { icon: <FaClipboardCheck />, title: "Editorial Screening", description: "Journal editors evaluating suitability and scope alignment" },
            { icon: <FaComments />, title: "Expert Review", description: "Peer review by subject matter experts for constructive feedback" },
            { icon: <FaTools />, title: "Manuscript Revision", description: "Revising the manuscript based on reviewer feedback" },
            { icon: <FaUpload />, title: "Resubmission", description: "Resubmit the revised version after addressing the reviewer’s concerns" },
            { icon: <FaCertificate />, title: "Acceptance & Publication", description: "The journal gives acceptance and publishes as per the journal process" }
        ],
        Targeting: [
            {
                icon: <FaRegFileAlt />, 
                title: "Tailored Content and Structure",
                description: "Different journals have varying requirements regarding manuscript structure, formatting, and style. By knowing your target journal in advance, you can tailor your writing to fit their guidelines, saving you from unnecessary revisions later."
            },
            {
                icon: <FaBullseye />, 
                title: "Alignment with Journal Scope",
                description: "Each journal has a specific focus or field of interest. By selecting a journal early, you can ensure that your research aligns with the topics they publish, increasing the chances of acceptance. It also helps you identify the type of research they prioritize, whether it’s theoretical, experimental, or applied."
            },
            {
                icon: <FaUsers />, 
                title: "Understanding the Audience",
                description: "Journals provide different readerships, from specialists to generalists. Knowing your target journal allows you to adjust the tone, complexity, and presentation of your research to better resonate with your intended audience."
            },
            {
                icon: <FaCompressArrowsAlt />,
                title: "Choosing the Right Length and Depth",
                description: "Some journals have strict word limits or specific requirements regarding the depth of analysis. By selecting the journal beforehand, you can adjust the scope of your manuscript to meet those limits and avoid wasting time on unnecessary sections."
            },
            {
                icon: <FaThumbsUp />, 
                title: "Increased Chances of Acceptance",
                description: "Submitting to a journal that is closely aligned with your research focus enhances the likelihood of your manuscript being accepted. Understanding the journal's preferences and ensuring your paper fits their expectations gives you a better chance of success."
            },
            {
                icon: <FaClock />,
                title: "Efficient Use of Time and Resources",
                description: "Preparing your manuscript with a specific journal in mind allows you to focus on what truly matters, minimizing the need for major revisions if the manuscript is rejected or needs to be adapted for another journal."
            }
            

        ],
        indexing: ["Web of Science (SCIE/SSCI/AHCI/ESCI Indexed Journals)",
             "Scopus (Q1/Q2/Q3/Q4)", "Google Scholar", "A* Conference Proceedings", "Conference Proceedings","Other Conference Proceedings"]
    };

    return (
        <div className="alt-journal-page">
          
            <motion.section
                className="alt-hero-banner"
              
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="hero-content">
                    <h1>Elevate Your Research with Professional Publication Services</h1>
                </div>
            </motion.section>

           
            <nav className="alt-tab-nav">
                {Object.keys(sections).map((tab) => (
                    <button
                        key={tab}
                        className={`alt-tab-btn ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </nav>

      
            <main className="alt-main-content">
                
                {activeTab === 'overview' && (
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="alt-section"
                    >
                        <motion.h2 variants={fadeIn}>{sections.overview.title}</motion.h2>
                        {sections.overview.content.map((text, index) => (
                            <motion.p key={index} variants={fadeIn} className="alt-content-text">
                                {text}
                            </motion.p>
                        ))}
                    </motion.section>
                )}

               
                {activeTab === 'process' && (
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="alt-section"
                    >
                        <motion.h2 variants={fadeIn}>Our Publication Process</motion.h2>
                        <motion.p variants={fadeIn} className="alt-section-intro">
                            We assist you in each and every step for your successful publications. Our streamlined journal publication process involves
                        </motion.p>

                        <div className="alt-process-grid">
                            {sections.process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    className="alt-process-card"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="alt-process-icon">{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <span className="alt-step-number">{index + 1}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                
                {activeTab === 'Targeting' && (
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="alt-section"
                    >
                        <motion.h2 variants={fadeIn}>Why do you need to choose your target journal before you start writing your manuscript?</motion.h2>
                        <motion.p variants={fadeIn} className="alt-section-intro">
                        It is very crucial to choose the right journal for your research paper, and it is also considered a very critical decision that can thoroughly impact the success and visibility of your work across the world. However, it is very important to choose your target journal before you start writing your manuscript for several reasons.</motion.p>
                        <div className="alt-benefits-grid">
                            {sections.Targeting.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    className="alt-benefit-card"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="alt-benefit-icon">{benefit.icon}</div>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                
                {activeTab === 'indexing' && (
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="alt-section"
                    >
                        <motion.h2 variants={fadeIn}> Indexing support</motion.h2>

                        <div className="alt-indexing-grid">
                            {sections.indexing.map((partner, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    className="alt-index-card"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <h3>{partner}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

            </main>
        </div>
    );
};

export default JournalMainPage;