import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/wallpaper.png'
import '../Design/SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/client-portal'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img 
          src={logo}
          alt="Company Logo" 
          className="splash-logo animate-pulse" 
        />
        
        <div className="splash-spinner"></div>
      </div>
    </div>
  );
};

export default SplashScreen;