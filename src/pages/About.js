import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">About Me</h1>
      
      <div className="about-content">
        <div className="about-image">
          <img 
            src="/yamin.jpg" 
            alt="Yamin Thiri Wai" 
            className="profile-photo"
          />
        </div>
        
        <div className="about-text">
          <p>
            Hi! I'm <strong>Yamin Thiri Wai</strong>, a final-year Computer Science student 
            specializing in <strong>Data Science</strong> at Ton Duc Thang University, Ho Chi Minh City.
          </p>
          
          <h3>🎯 My Journey</h3>
          <p>
            I recently completed a 6-month internship at <strong>FPT IS</strong>, 
            where I worked on <strong>data pipelines, SQL Server, SSAS,</strong> and <strong>Power BI</strong>, 
            gaining hands-on experience in enterprise data solutions.
          </p>
          
          <h3>💡 What Drives Me</h3>
          <p>
            I'm deeply passionate about <strong>Deep Learning, Natural Language Processing (NLP),</strong> 
            and <strong>AI-powered solutions</strong>. I believe in using data and AI to solve complex 
            challenges and create meaningful impact.
          </p>
          
          <h3>🏆 Achievements</h3>
          <p>My work has been recognized in multiple international competitions:</p>
          <ul className="achievement-list">
            <li>
              <strong>Top 20</strong> with a <em>Judge's Choice Award</em> in <strong>The Next Analyst Challenge</strong>
              <a 
                href="https://starttrain.edu.vn/du-an-cuoc-thi-the-next-analyst-challenge-4/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dashboard-link inline-link"
              >
                View Dashboard
              </a>
            </li>
            <li>
              <strong>Top 10</strong> in the <strong>UEH BizTech Hackathon 2025</strong>
            </li>
            <li>
              Reached the <strong>Semi-Finals</strong> of the <strong>4th PIM International Hackathon</strong> in Thailand, 
              where we proposed the idea of an AI-powered weather forecasting model with business insights
            </li>
            <li>
                <strong>Google Cloud AI Study Jam Season 5 Tier 2</strong> - Completed <strong>82 labs</strong> and earned <strong>19 skill badges</strong> 
                in Vertex AI, BigQuery, AI/ML, Data, and Security
                <a 
                href="https://lnkd.in/gBTKiXd3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-link"
                >
                View Profile
                </a>
            </li>
          </ul>
          
          <h3>🌟 Looking Forward</h3>
          <p>
            I'm eager to apply my skills in <strong>Data Science, Machine Learning,</strong> and 
            <strong> NLP</strong>. My goal is to contribute to innovative projects that harness 
            AI and data to make a positive difference.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
