import React from 'react';
import '../Design/mainpage.css'; 

const Journal_client = () => {
  const handleJournalLogin = () => {
 
    window.location.href = '/journal-login';
  };

  const handleClientLogin = () => {
   
    window.location.href = '/client-login';
  };

  return (
    <div className="journal-container">
      <div className="company-name">Rooks Research Consultancy</div>
      <h1 className="journal-title">Journal Publication Portal</h1>
      
      <p className="welcome-txt">
        Welcome to the Rooks And Brooks journal management system. 
        Please select your login option below to access the platform.
      </p>
      
      <div className="button-container">
        <button 
          className="login-button journal-login" 
          onClick={handleJournalLogin}
        >
          Employee Login
        </button>
      </div>
    </div>
  );
};

export default Journal_client;