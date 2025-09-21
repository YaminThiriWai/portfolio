import React from 'react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yamin-thiri-wai/',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yaminthiriwai',
      icon: '👨‍💻'
    },
    {
      name: 'Email',
      url: 'mailto:waiyaminthiri12@gmail.com',
      icon: '📧'
    },
    {
      name: 'Phone',
      url: 'tel:+84369956133',
      icon: '📞'
    }
  ];

  return (
    <motion.div 
      className="social-links"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + index * 0.1 }}
        >
          <span className="social-icon">{link.icon}</span>
          <span className="social-name">{link.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
