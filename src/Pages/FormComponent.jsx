import React, { useState } from 'react';
import '../Design/FormComponent.css';
import emailjs from 'emailjs-com';  

const FormComponent = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [individualForm, setIndividualForm] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: '',
    query: ''
  });
  const [bulkForm, setBulkForm] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: '',
    query: '',
    quantity: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSubmitted(false);
  };

  const handleIndividualChange = (e) => {
    const { name, value } = e.target;
    setIndividualForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBulkChange = (e) => {
    const { name, value } = e.target;
    setBulkForm(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = (formData) => {
    const messageData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      queryType: formData.queryType,
      query: formData.query,
      quantity: formData.quantity || 'N/A', 
      time: new Date().toLocaleString(), 
    };
  
    emailjs.send(
      'service_2z0r1me',
      'template_s9i7mzm',
      messageData,
      'L1LG5rDdyFwEk5UMY'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  const handleIndividualSubmit = (e) => {
    e.preventDefault();
    console.log('Individual Form Submitted:', individualForm);
    sendEmail(individualForm); 
    setSubmitted('individual');
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    console.log('Bulk Form Submitted:', bulkForm);
    sendEmail(bulkForm);
    setSubmitted('bulk');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={`form-container ${activeTab}-mode`}>
      <h1 className="form-title" >
        {activeTab === 'individual' ? 'Individual Inquiry' : 'Bulk Inquiry'}
      </h1>
      
      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === 'individual' ? 'active' : ''}`}
          onClick={() => handleTabChange('individual')}
        >
          <span className="tab-icon">👤</span> Individual
        </button>
        <button
          className={`tab-button ${activeTab === 'bulk' ? 'active' : ''}`}
          onClick={() => handleTabChange('bulk')}
        >
          <span className="tab-icon">📦</span> Bulk
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'individual' ? (
          <form onSubmit={handleIndividualSubmit} className={`form-content individual-form ${activeTab === 'individual' ? 'active' : ''}`}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={individualForm.name}
                onChange={handleIndividualChange}
                required
                className="individual-input"
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={individualForm.email}
                onChange={handleIndividualChange}
                required
                className="individual-input"
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={individualForm.phone}
                onChange={handleIndividualChange}
                required
                className="individual-input"
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="queryType">Query Related To</label>
              <select
                id="queryType"
                name="queryType"
                value={individualForm.queryType}
                onChange={handleIndividualChange}
                className="individual-input"
              >
                <option value="Journal related">Journal</option>
                <option value="Thesis related">Thesis</option>
                <option value="Conference related">Conference </option>
                <option value="Others">Others</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="query">Query</label>
              <textarea
                id="query"
                name="query"
                value={individualForm.query}
                onChange={handleIndividualChange}
                required
                rows="5"
                className="individual-input"
              ></textarea>
              <span className="input-highlight"></span>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Approximate Quantity Required</label>
              <input
              
                id="quantity"
                name="quantity"
                value="Quantity is not Applicable"
                onChange={handleBulkChange}
              
                min="1"
                className="bulk-input"
                placeholder='Quantity is not Applicable'
              />
              <span className="input-highlight"></span>
            </div>
            
            <button type="submit" className="submit-button individual-submit">
              Submit Inquiry
            </button>
            
            {submitted === 'individual' && (
              <div className="success-message individual-success">
                <div className="success-icon">✓</div>
                <div>Thank you for your individual submission! We'll get back to you soon.</div>
              </div>
            )}
          </form>
        ) : (
          <form onSubmit={handleBulkSubmit} className={`form-content bulk-form ${activeTab === 'bulk' ? 'active' : ''}`}>
            <div className="form-group">
              <label htmlFor="bulkName">Name</label>
              <input
                type="text"
                id="bulkName"
                name="name"
                value={bulkForm.name}
                onChange={handleBulkChange}
                required
                className="bulk-input"
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="bulkEmail">Email</label>
              <input
                type="email"
                id="bulkEmail"
                name="email"
                value={bulkForm.email}
                onChange={handleBulkChange}
                required
                className="bulk-input"
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="bulkPhone">Phone Number</label>
              <input
                type="tel"
                id="bulkPhone"
                name="phone"
                value={bulkForm.phone}
                onChange={handleBulkChange}
                required
                className="bulk-input"
              />
              <span className="input-highlight"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="bulkQueryType">Query Related To</label>
              <select
                id="bulkQueryType"
                name="queryType"
                value={bulkForm.queryType}
                onChange={handleBulkChange}
                className="bulk-input"
              >
                <option value="Journal related">Journal related</option>
                <option value="Thesis related">Thesis related</option>
                <option value="Conference related">Conference related</option>
                <option value="Others">Others</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="bulkQuery">Query</label>
              <textarea
                id="bulkQuery"
                name="query"
                value={bulkForm.query}
                onChange={handleBulkChange}
                required
                rows="5"
                className="bulk-input"
              ></textarea>
              <span className="input-highlight"></span>
            </div>
            
            <div className="form-group">
              <label htmlFor="quantity">Approximate Quantity Required</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={bulkForm.quantity}
                onChange={handleBulkChange}
                required
                min="1"
                className="bulk-input"
              />
              <span className="input-highlight"></span>
            </div>
            
            <button type="submit" className="submit-button bulk-submit">
              Submit Bulk Request
            </button>
            
            {submitted === 'bulk' && (
              <div className="success-message bulk-success">
                <div className="success-icon">✓</div>
                <div>Thank you for your bulk submission! We'll contact you shortly.</div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
