import React from 'react';
import '../Design/mainpage.css';

const JournalPortal = () => {
  const handleJournalLogin = () => {
 
    window.location.href = '/journal-login';
  };

  const handleClientLogin = () => {
    
    window.location.href = '/client-login';
  };

  return (
    <div className="journal-container">
      <div className="company-name">Rooks Research Consultancy</div>
      <h1 className="journal-title">Welcome to Your RRC Dashboard!</h1>
      
      <p className="welcome-txt">
      As soon as you log in, you’ll land on your personalized dashboard where everything is streamlined for your convenience. With just a click, you can access:<br/>
      <b>Live Paper Status Tracking</b><br/>
      <b>Reviewer Response Tracker </b><br/>
      <b>Secure File Sharing </b><br/>
      <b>Communication Hub </b><br />
      <b>Deadline Alerts & Notifications </b><br />
      At RRC, we’re committed to keeping you informed and involved at every step of the way. Welcome aboard, and let’s bring your research to life with clarity and confidence! <br />    </p>
      
      <div className="button-container">
       
        <button 
          className="login-button client-login" 
          onClick={handleClientLogin}
        >
          Client Login
        </button>
      </div>
    </div>
  );
};

export default JournalPortal;