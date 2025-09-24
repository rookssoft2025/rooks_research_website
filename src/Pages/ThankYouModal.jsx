import { motion, AnimatePresence } from "framer-motion";
import "../Design/ThankYouModal.css"; 
    
const ThankYouModal = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="thank-you-modal-overlay">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              damping: 20,
              stiffness: 300
            }}
            className="thank-you-modal-content"
          >
            <div className="thank-you-modal-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </div>
            <h2 className="thank-you-modal-title">Thank You!</h2>
            <p className="thank-you-modal-message">
              We have received your details.<br />Your <strong>10% discount</strong> will be applied!
            </p>
            <button
              onClick={onClose}
              className="thank-you-modal-button"
            >
              OK
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouModal;