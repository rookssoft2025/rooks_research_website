import React from "react";
import "../Design/planets.css"; 

import ethereumCover from "../Assets/ethereum.png";
import solidityCover from "../Assets/solidity.png";
import AdobeCover from "../Assets/Adobe.png";
import awsCover from "../Assets/Amazon_Web_Services.png";
import BootstrapCover from "../Assets/Bootstrap.png";
import CCover from "../Assets/C++.png";
import dartCover from "../Assets/Dart.png";
import dockerCover from "../Assets/Docker.png";
import EclipseCover from "../Assets/Eclipse.png";
import goDaddyCover from "../Assets/GoDaddy.png";
import javaCover from "../Assets/Java.png";
import kotlinCover from "../Assets/Kotlin.png";
import KubernetesCover from "../Assets/Kubernetes.png";
import linuxCover from "../Assets/Linux.png";
import VisioCover from "../Assets/Microsoft_Visio.png";
import MongoDBCover from "../Assets/MongoDB.png";
import MysqlCover from "../Assets/MySQL.png";
import postSQLcover from "../Assets/PostgreSQL.png";
import pythonCover from "../Assets/Python.png";
import RaspberryPiCover from "../Assets/Raspberry.png";
import reactCover from "../Assets/React.png";
import xaiCover from "../Assets/XAI.png";

const techCards = [
  { link: "https://en.wikipedia.org/wiki/Ethereum", cover: ethereumCover, name: "Ethereum", color: "#3c3c3d" },
  { link: "https://soliditylang.org/", cover: solidityCover, name: "Solidity", color: "#1e1e1e" },
  { link: "https://www.adobe.com/", cover: AdobeCover, name: "Adobe", color: "#ed2224" },
  { link: "https://aws.amazon.com/", cover: awsCover, name: "AWS", color: "#ff9900" },
  { link: "https://getbootstrap.com/", cover: BootstrapCover, name: "Bootstrap", color: "#7952b3" },
  { link: "https://isocpp.org/", cover: CCover, name: "C++", color: "#00599c" },
  { link: "https://dart.dev/", cover: dartCover, name: "Dart", color: "#0175c2" },
  { link: "https://www.docker.com/", cover: dockerCover, name: "Docker", color: "#2496ed" },
  { link: "https://www.eclipse.org/", cover: EclipseCover, name: "Eclipse", color: "#2c2255" },
  { link: "https://www.godaddy.com/", cover: goDaddyCover, name: "GoDaddy", color: "#1c9ac9" },
  { link: "https://www.java.com/", cover: javaCover, name: "Java", color: "#007396" },
  { link: "https://kotlinlang.org/", cover: kotlinCover, name: "Kotlin", color: "#7f52ff" },
  { link: "https://kubernetes.io/", cover: KubernetesCover, name: "Kubernetes", color: "#326ce5" },
  { link: "https://www.linux.org/", cover: linuxCover, name: "Linux", color: "#000000" },
  { link: "https://www.microsoft.com/en-us/microsoft-365/visio/", cover: VisioCover, name: "Visio", color: "#3955a3" },
  { link: "https://www.mongodb.com/", cover: MongoDBCover, name: "MongoDB", color: "#47a248" },
  { link: "https://www.mysql.com/", cover: MysqlCover, name: "MySQL", color: "#4479a1" },
  { link: "https://www.postgresql.org/", cover: postSQLcover, name: "PostgreSQL", color: "#336791" },
  { link: "https://www.python.org/", cover: pythonCover, name: "Python", color: "#3776ab" },
  { link: "https://www.raspberrypi.org/", cover: RaspberryPiCover, name: "Raspberry Pi", color: "#c51a4a" },
  { link: "https://react.dev/", cover: reactCover, name: "React", color: "#61dafb" },
  { link: "https://xai.company/", cover: xaiCover, name: "XAI", color: "#000000" },
];

export default function TechnologiesOrbit() {
 
  return (
    <div className="tech-container">
      <div className="tech-header">
        <h1 className="tech-title">Technologies We Specialize In</h1>
        <p className="tech-subtitle">Our expertise spans across multiple technology stacks and platforms</p>
      </div>
      
      <div className="tech-grid">
        {techCards.map((card, index) => (
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="tech-card"
            data-category={card.category || "tool"}
            aria-label={card.name}
          >
            <div className="tech-card-header">
              <img 
                src={card.cover} 
                alt={card.name} 
                className="tech-logo" 
                style={card.color ? { filter: `drop-shadow(0 2px 4px ${card.color}40)` } : {}}
              />
            </div>
            <div className="tech-card-body">
              <h3 className="tech-name">{card.name}</h3>
              <span className="tech-category">{card.category || "Tool"}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}