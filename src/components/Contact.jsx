import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    const loadingToast = toast.loading('Sending message...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.dismiss(loadingToast);
        toast.success('Message sent successfully!');
        form.current.reset();
        setIsSending(false);
      })
      .catch((error) => {
        toast.dismiss(loadingToast);
        toast.error('Failed to send message. Please try again.');
        console.error(error.text);
        setIsSending(false);
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
            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
