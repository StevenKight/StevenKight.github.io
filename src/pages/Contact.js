import React from 'react';

import './styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <p className="contact-text">
        I'm always open to new opportunities and collaborations. If you have a project in mind or just want to chat about AI, simulations, or anything else, feel free to reach out!
      </p>
      <p className="contact-links">
        Connect with me on{' '}
        <a href="https://www.linkedin.com/in/steven-kight-742729177/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        or check out my work on{' '}
        <a href="https://github.com/StevenKight" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>.
      </p>
      <p className="contact-email">
        Or shoot me an email at{' '}
        <a href="mailto:sgk0711@gmail.com">sgk0711@gmail.com</a>.
      </p>
    </div>
  );
}

export default Contact;