import React from "react";
import "../Design/RRCDesign.css";
import { FaUsers, FaLock, FaFileAlt, FaUserCheck } from "react-icons/fa";

const RRCDesign = () => {
  return (
    <div className="rrc-container">
      <h2 className="rrc-title">HERE'S WHY RRC IS RIGHT FOR YOU</h2>
      <div className="rrc-grid">
        <div className="rrc-card">
          <div className="icon"><FaUsers /></div>
          <h3>Expert Team Selection</h3>
          <p>
            We select candidates who are highly skilled, experienced, and driven by a passion for continuous learning and innovation.
          </p>
        </div>
        <div className="rrc-card">
          <div className="icon"><FaLock /></div>
          <h3>Privacy Commitment</h3>
          <p>
            Your privacy is our priority! We never disclose your personal information to any third party, ensuring security and transparency.
          </p>
        </div>
        <div className="rrc-card">
          <div className="icon"><FaFileAlt /></div>
          <h3>Guaranteed Original Work</h3>
          <p>
            We deliver meticulously researched, high-quality, and plagiarism-free papers. Every document is verified through Turnitin.
          </p>
        </div>
        <div className="rrc-card">
          <div className="icon"><FaUserCheck /></div>
          <h3>Client-Centered Delivery</h3>
          <p>
            At RRC, client satisfaction is our priority! We align with your unique goals to ensure you get results that exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RRCDesign;