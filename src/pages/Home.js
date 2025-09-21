import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TypewriterEffect from '../components/TypewriterEffect';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <motion.div className="hero-text" variants={itemVariants}>
          <h1>
            Hi, I'm <span className="highlight">Yamin Thiri Wai</span>
          </h1>
          <div className="typewriter-container">
            <TypewriterEffect
              texts={[
                "Computer Science Student",
                "AI Enthusiast", 
                "Turning Data into Insights",
                "Passionate Problem Solver",
                "Deep Learning Explorer",
                "Building with Data & Code"
              ]}
            />
          </div>
          <p className="hero-description">
            Passionate about transforming data into insights and building 
            AI-driven solutions that make a difference.
          </p>
        </motion.div>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button 
            className="cta-button primary"
            onClick={() => navigate('/projects')}
          >
            View My Work
          </button>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/contact')}
          >
            Let's Connect
          </button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="hero-stats"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="stat-item">
            <div className="stat-number">6</div>
            <div className="stat-label">Months Internship</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Top 20</div>
            <div className="stat-label">Power BI Competition <br />🏆 Judge’s Choice Award</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Top 10</div>
            <div className="stat-label">Hackathon <br />🎖️ Consolation Prize</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">82</div>
            <div className="stat-label">Google Cloud Labs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">19</div>
            <div className="stat-label">GCP Skill Badges</div>
          </div>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div 
          className="nav-hint"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <p>Explore my journey through the navigation above</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
