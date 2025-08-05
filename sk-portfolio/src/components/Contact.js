import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Contact.css"

const ClosingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle email click with proper fallback logic
  const handleEmailClick = () => {
    const email = "sanakhademi13@gmail.com";
    const subject = "Hello! Let's connect";
    const body = "Hi Sana,\n\nI'd love to connect with you!\n\nBest regards";
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Create a hidden iframe to test if mailto works
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = mailtoLink;
    document.body.appendChild(iframe);
    
    // Check if the page loses focus (indicates mail app opened)
    let mailAppOpened = false;
    
    const focusHandler = () => {
      mailAppOpened = true;
      window.removeEventListener('blur', focusHandler);
    };
    
    window.addEventListener('blur', focusHandler);
    
    // Clean up and check after a delay
    setTimeout(() => {
      document.body.removeChild(iframe);
      window.removeEventListener('blur', focusHandler);
      
      // If mail app didn't open, show clipboard fallback
      if (!mailAppOpened) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(email).then(() => {
            alert("📧 Email copied to clipboard!");
          }).catch(() => {
            alert(`Email me at: ${email}`);
          });
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert("📧 Email copied!");
        }
      }
    }, 2000);
  };

  return (
    <>
      <motion.section
        className="closing-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="closing-content">
          <motion.h2
            className="closing-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            get in touch.
          </motion.h2>
          <motion.button
            onClick={openModal}
            className="cta-button"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            say hello
          </motion.button>
        </div>
      </motion.section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-portal">
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
            />
            <motion.div
              className="modal-container"
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ 
                duration: 0.3, 
                type: "spring", 
                stiffness: 300, 
                damping: 25 
              }}
            >
              <div className="modal-header">
                <h3 className="modal-title">Let's Connect!</h3>
                <button 
                  className="modal-close" 
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path 
                      d="M18 6L6 18M6 6L18 18" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              
              <div className="modal-body">
                <p className="modal-description">
                  Choose how you'd like to connect with me:
                </p>
                
                <div className="contact-links">
                  <motion.a
                    href="https://linkedin.com/in/sanakhademi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link linkedin"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="link-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="link-content">
                      <h4>LinkedIn</h4>
                      <p>Connect professionally</p>
                    </div>
                    <div className="link-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.a>

                  <motion.button
                    onClick={handleEmailClick}
                    className="contact-link email"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="link-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div className="link-content">
                      <h4>Email</h4>
                      <p>Send me a message</p>
                    </div>
                    <div className="link-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClosingSection;