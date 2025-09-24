import "../Design/ScrollButton.css";
import { useState, useEffect } from "react";
import { FaUniversity, FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGithub ,FaWhatsapp} from 'react-icons/fa';
import { TiArrowUpThick } from "react-icons/ti";
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <>
     <button
      className={`scroll-to-top ${visible ? "" : "hidden"}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <TiArrowUpThick />
    </button>

    <a href="https://wa.me/919443319914" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
  <FaWhatsapp/>
</a>

    </>
   
  );
}
export default ScrollToTopButton;
