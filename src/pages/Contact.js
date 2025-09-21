import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Get In Touch</h1>
      
      <motion.p
        style={{ textAlign: 'center', fontSize: '1.2rem', color: '#34495E', marginBottom: '3rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Let's connect! I'm always interested in new opportunities and collaborations.
      </motion.p>

      <form 
        className="contact-form" 
        action="https://formspree.io/f/mgvnwepo"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
