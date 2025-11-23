import React, { useState, useEffect } from 'react';
import './ScrollToBottom.css';

const ScrollToBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user is not at the bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Show if not near bottom (within 100px of bottom)
      if (scrollTop + windowHeight < documentHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on mount

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`scroll-to-bottom ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToBottom} className="scroll-btn" aria-label="Scroll to bottom">
        <div className="scroll-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </button>
    </div>
  );
};

export default ScrollToBottom;
