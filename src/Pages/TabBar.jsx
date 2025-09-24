import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBook, FaSearch, FaUniversity, FaStar, FaCalendarAlt } from 'react-icons/fa';

import Tab1 from '../Components/Tab1';
import Tab2 from '../Components/Tab2';
import Tab3 from '../Components/Tab3';
import Tab4 from '../Components/Tab4';
import Tab5 from '../Components/Tab5';


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); }
`;


const TabContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const TabButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const TabButton = styled.button`
  flex: 1;
  min-width: 200px;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px 8px 0 0;
  background: ${props => props.active ? '#4299e1' : '#edf2f7'};
  color: ${props => props.active ? 'white' : '#4a5568'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: ${props => props.active ? '#3182ce' : '#e2e8f0'};
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.active ? '#ffffff' : 'transparent'};
    transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

const TabContent = styled.div`
  background: white;
  border-radius: 0 8px 8px 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  min-height: 400px;
  animation: ${fadeIn} 0.5s ease forwards;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #4299e1, #38b2ac);
  }
`;

const Decoration = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(66, 153, 225, 0.1);
  filter: blur(30px);
  z-index: 0;
  
  &:nth-child(1) {
    top: -50px;
    right: -50px;
    animation: ${pulse} 6s infinite;
  }
  
  &:nth-child(2) {
    bottom: -30px;
    left: -30px;
    background: rgba(56, 178, 172, 0.1);
    animation: ${pulse} 8s infinite 2s;
  }
`;

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: 'Web of Science Journal (SCIE/SSCI/AHCI/ESCI Indexed Journals)', icon: <FaBook /> },
    { id: 2, label: 'Scopus Index', icon: <FaSearch /> },
    { id: 3, label: 'UGC Care Journal', icon: <FaUniversity /> },
  
    { id: 5, label: 'Conference Proceedings', icon: <FaCalendarAlt /> },
  ];

  const renderTab = () => {
    switch (activeTab) {
      case 1: return <Tab1 />;
      case 2: return <Tab2 />;
      case 3: return <Tab3 />;
      
      case 5: return <Tab5 />;
      default: return <Tab1 />;
    }
  };

  return (
    <TabContainer>
      <TabButtons>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </TabButton>
        ))}
      </TabButtons>
      <TabContent>
        <Decoration />
        <Decoration />
        {renderTab()}
      </TabContent>
    </TabContainer>
  );
};

export default TabBar;