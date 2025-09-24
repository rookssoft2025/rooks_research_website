
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'; 
import "../Design/jTeam.css";

const JournalLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
    
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      console.log('Login successful with:', credentials.email);

      
      navigate('/journal-dashboard');
    } catch (error) {
      console.error('Login error:', error);

      let errorMessage = 'Login failed. Please try again.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
      }

      alert(errorMessage); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="alt-login-container">
      <div className="alt-login-card">
        <div className="alt-brand-section">
          <div className="alt-logo">RB</div>
          <h1 className="alt-brand-name">Rooks & Brooks</h1>
          <p className="alt-brand-subtitle">Journal Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="alt-login-form">
          <h2 className="alt-form-title">Team Login</h2>

          <div className="alt-input-group">
            <label>Email Address</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="team@rooksandbrooks.com"
              required
            />
          </div>

          <div className="alt-input-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            className="alt-login-btn"
            disabled={loading}
          >
            {loading ? (
              <span className="alt-spinner"></span>
            ) : (
              'Sign In'
            )}
          </button>

          <div className="alt-helper-links">
            <a href="/reset-password">Forgot password?</a>
            <a href="/request-access">Request access</a>
          </div>
        </form>
      </div>

      <div className="alt-footer">
        <p>© {new Date().getFullYear()} Rooks & Brooks. Secure Journal Portal v2.4</p>
      </div>
    </div>
  );
};

export default JournalLogin;
