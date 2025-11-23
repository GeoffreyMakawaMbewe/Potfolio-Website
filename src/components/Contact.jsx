import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        setStatus('error');
        console.error(error.text);
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm currently available for freelance work and full‑time opportunities.
            </p>
            <a href="mailto:geoffreymakawa04@gmail.com" className="email-link">
              geoffreymakawa04@gmail.com
            </a>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="user_name" id="user_name" placeholder=" " required />
              <label htmlFor="user_name">Name</label>
            </div>
            <div className="form-group">
              <input type="email" name="user_email" id="user_email" placeholder=" " required />
              <label htmlFor="user_email">Email</label>
            </div>
            <div className="form-group">
              <textarea name="message" id="message" rows="5" placeholder=" " required></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
            {status === 'error' && <p className="error-msg">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
