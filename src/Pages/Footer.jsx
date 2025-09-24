import React from 'react';
import '../Design/Footer.css';
import { FaUniversity, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGithub ,FaWhatsapp} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/Annexure.png';
import image2 from '../Assets/Elsevier.png';
import image3 from '../Assets/IEEE.png';
import image4 from '../Assets/sci.png';
import image5 from '../Assets/Scopus.png';
import image6 from '../Assets/Springer.png';
import image7 from '../Assets/UGC.png';


const Footer = () => {
  const images = [
    image1,image2,image3,image4,image5,image6,image7
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: (1000), 
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section" style={{ animationDelay: '0.1s' }}>
          <h3 className="section2-title">Research Institution</h3>
          <p>Advancing knowledge through cutting-edge research in life science and human-computer interaction</p>
          <div className="social-links">
            <a href="https://in.linkedin.com/in/rooks-and-brooks-50794a343" target='blank' className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            {/* <a href="#" className="social-icon" target='blank' aria-label="Twitter"><FaTwitter /></a> */}
            <a href="https://wa.me/919443319914"  target='blank' className="social-icon" aria-label="GitHub"><FaWhatsapp /></a>
          </div>
        </div>

     
        <div className="footer-section" style={{ animationDelay: '0.2s' }}>
          <h3 className="section2-title">Quick Links</h3>
          <ul className="quick-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/splashscreen" className="footer-link">Client-Login</a></li>
            <li><a href="/support-services" className="footer-link">Support Services</a></li>
            <li><a href="/atoz-research" className="footer-link">A to Z Research</a></li>
            <li><a href="/journal" className="footer-link">Journal Publications</a></li>
            <li><a href="/achiever-services" className="footer-link">Achiever Services</a></li>
            <li><a href="/contactUs" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

   
        <div className="footer-section" style={{ animationDelay: '0.3s' }}>
          <h3 className="section2-title">Contact Us</h3>
          <div className="contact-item">
            <span className="icon-wrapper"><FaUniversity /></span>
            <div>
              <div>No. 1, Parvathavarthini Street</div>
              <div>Nagercoil,Tamil Nadu, India, 629 001.</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon-wrapper"><FaEnvelope /></span>
            <div className='icon-wrap'>
              <div>rooksresearch@gmail.com</div>
              <div>info@rooks.in</div>
            </div>
          </div>
          <div className="contact-item">
            <span className="icon-wrapper"><FaPhone /></span>
            <div>+91-9443319914</div>
          </div>
        </div>

      
        <div className="footer-section" style={{ animationDelay: '0.4s' }}>
          <h3 className="section2-title">Publication Support in</h3>
          <ul className="quick-links">
            <li><a target="blank" href="https://access.clarivate.com/login?app=wos&alternative=true&shibShireURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fauth%3DShibboleth&shibReturnURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fmode%3DNextgen%26action%3Dtransfer%26path%3D%252Fwos%26DestApp%3DUA&referrer=mode%3DNextgen%26path%3D%252Fwos%26DestApp%3DUA%26action%3Dtransfer&roaming=true" className="footer-link">Web of Science (SCIE/SSCI/AHCI/ESCI Indexed Journals)</a></li>
            <li><a target="blank" href="https://ondezx.com/Anna-University-Annexure-Journal" className="footer-link">Annexure Journals</a></li>
            <li><a target='blank' href="https://www.elsevier.com/" className="footer-link">Elsevier/IEEE/Wiley/Springer</a></li>
            <li><a target='blank' href="https://www.scopus.com/home.uri" className="footer-link">Scopus</a></li>
            <li><a target='blank' href="https://www.ugc-journal-list.website/" className="footer-link">UGC CARE Journals</a></li>
            <li><a target='blank' href="https://en.wikipedia.org/wiki/Conference_proceedings" className="footer-link">Conferences</a></li>
          </ul>
        </div>

    
        <div className="carousel-wrapper">
          <Slider {...carouselSettings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Gallery ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

 
      <div className="copyright">
        Copyright © 2023 Rooks and Brooks Technologies Pvt. Ltd - All Rights Reserved.  
      </div>
    </footer>
  );
};

export default Footer;