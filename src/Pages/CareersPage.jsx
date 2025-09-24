import React, { useRef, useState } from "react";
import QR from "../Assets/frame.png";
import emailjs from "@emailjs/browser";
import "../Design/CareersPage.css";

const CareersPage = () => {
  const form = useRef();
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file.");
        e.target.value = ""; // Clear the file input
        return;
      }
      setResume(file);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      
      const formData = new FormData(form.current);
      const contactData = {
        user_name: formData.get('user_name'),
        user_phone: formData.get('user_phone'),
        user_email: formData.get('user_email'),
        user_location: formData.get('user_location'),
        job_category: formData.get('job_category'),
        user_skills: formData.get('user_skills'),
        interview_availability: formData.get('interview_availability'),
      };

      const emailjsResponse = await emailjs.sendForm(
        'service_pdgut6p', 
        'template_93nu028', 
        form.current,
        'LagwncKRDGGjN2mtN' 
      );

      if (emailjsResponse.status !== 200) {
        throw new Error('Email sending failed');
      }

      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="careers-wrapper">
      <header className="header-careers">
        <span className="research-header">Join Rooks Research Consultancy</span>
        <div className="title1-decoration">
          <div className="line1"></div>
          <div className="circle1"></div>
          <div className="line1"></div>
        </div>
        {/* <p className="tagline1">Innovate. Inspire. Implement. Publish.</p> */}
      </header>

      <div className="careers-main">
        <div className="left-animation">
          <div className="animated-box">
            <div className="book-circle">
              <img src={QR} alt="Book Circle" className="book-circle-image" />
            </div>
            <p className="animate-text">Scan Me</p>
          </div>
        </div>

        <div className="right-form glassmorphism">
          <h2>✨ Apply Now</h2>
          {submitStatus === "success" && (
            <div className="alert success">
              Your application has been submitted successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="alert error">
              There was an error submitting your application. Please try again.
            </div>
          )}
          <form ref={form} onSubmit={sendEmail} className="job-form">
            <input
              type="text"
              name="user_name"
              placeholder="👤 Your Name"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="📞 Phone Number"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="📧 Email Address"
              required
            />
            <input
              type="text"
              name="user_location"
              placeholder="📍 Your Location"
              required
            />
            <select name="job_category" required>
              <option value="">🎯 Select Job Category</option>
              <option value="Research">Research</option>
              <option value="Technical Writing">Technical Writing</option>
              <option value="Implementation">Implementation</option>
              <option value="Book Publication">Book Publication</option>
            </select>
            <input
              type="text"
              name="user_skills"
              placeholder="🛠️ Your Skills (comma separated)"
              required
            />
            <input
              type="text"
              name="interview_availability"
              placeholder="🗓️ When are you available for interview?"
              required
            />
            <button type="submit" className="Dis-But">
              🚀 Submit Application
            </button>
          </form>
        </div>
      </div>

      <section className="why-join-section">
        <h2>🌟 Why Join Rooks?</h2>
        <div className="reasons-grid1">
          <div className="reason-card glassmorphism">
            <h3>📚 Knowledge Hub</h3>
            <p>Be at the center of breakthrough research and publications.</p>
          </div>
          <div className="reason-card glassmorphism">
            <h3>✍️ Create Impact</h3>
            <p>Write, present, and publish work that shapes industries.</p>
          </div>
          <div className="reason-card glassmorphism">
            <h3>🛠️ Practical Skills</h3>
            <p>Work hands-on in real projects that go beyond theory.</p>
          </div>
          <div className="reason-card glassmorphism">
            <h3>🎓 Continuous Learning</h3>
            <p>Upskill with new tools, tech, and academic networks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
