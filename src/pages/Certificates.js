import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      title: "Google Cloud AI Study Jam Season 5 - Tier 2",
      issuer: "Google Cloud",
      date: "2024",
      category: "Cloud & AI",
      image: "/certificates/ChaiyoGCP.png",
      link: "https://lnkd.in/gBTKiXd3",
      description: "Completed 82 hands-on labs and earned 19 skill badges in Vertex AI, BigQuery, AI/ML, Data, and Security",
      featured: true,
      skills: ["Vertex AI", "BigQuery", "Google Cloud AI", "Machine Learning", "Data Engineering", "Cloud Security"]
    },
    {
      title: "SCUT Global Summer Engineering Program",
      issuer: "South China University of Technology",
      date: "2024",
      category: "Education",
      image: "/certificates/Yamin_Thiri_Wai_SCUT_Summer_School_Completion_2024.png",
      description: "Selected as one of 5 students to represent Ton Duc Thang University in international AI/ML program",
      skills: ["Machine Learning", "Large Language Models", "Prompt Engineering", "AI Applications"]
    },
    {
      title: "4th PIM International Hackathon - Semi-Finalist",
      issuer: "Panyapiwat Institute of Management, Thailand",
      date: "2024",
      category: "Competition",
      image: "/certificates/PimInterHackathon.png",
      description: "Advanced to Semi-Final Round among international teams with AI-powered weather forecasting model",
      skills: ["AI Development", "Weather Forecasting", "Business Strategy", "International Collaboration"]
    },
    {
        title: "The Next Analyst Challenge 4 - Top 20 + Judge's Choice Award",
        issuer: "Start Train Academy",
        date: "2024",
        category: "Competition",
        image: "/certificates/powerbi.jpg", 
        link: "https://starttrain.edu.vn/du-an-cuoc-thi-the-next-analyst-challenge-4/",
        description: "Achieved Top 20 ranking and Judge's Choice Award for creating comprehensive Power BI dashboard with business insights and recommendations",
        skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Data Visualization", "Analytics"]
    },

    {
      title: "Outstanding Volunteer Award",
      issuer: "Ho Chi Minh City Youth Union",
      date: "2023",
      category: "Volunteer & Leadership",
      image: "/certificates/Yamin_Thiri_Wai_Volunteer_Award_2023_HCM_YouthUnion.png",
      description: "Awarded for outstanding participation and organization in international volunteer activities during the 2023 summer volunteer campaign",
      skills: ["Leadership", "Community Service", "International Relations", "Project Management"]
    },
    {
      title: "Thank You Letter - Summer Volunteer Campaign",
      issuer: "Ho Chi Minh Communist Youth Union - District 11",
      date: "2023",
      category: "Volunteer & Leadership",
      image: "/certificates/Yamin_Thiri_Wai_ThankYouLetter_District11_2023.png",
      description: "Received recognition for accompanying and supporting summer volunteer campaigns and programs in 2023",
      skills: ["Community Engagement", "Educational Outreach", "Volunteer Coordination", "Social Impact"]
    }
  ];

  const categories = [...new Set(certificates.map(cert => cert.category))];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Certificates & Recognition</h1>
      
      <motion.p 
        style={{ textAlign: 'center', fontSize: '1.2rem', color: '#34495E', marginBottom: '3rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Professional development, academic achievements, and community recognition
      </motion.p>

      {/* Featured Certificate */}
      {certificates.filter(cert => cert.featured).map((cert, index) => (
        <motion.div
          key={index}
          className="featured-certificate"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="featured-badge">🌟 Featured Achievement</div>
          <div className="featured-content">
            <div className="featured-image">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="featured-details">
              <h2>{cert.title}</h2>
              <p className="featured-issuer">{cert.issuer} • {cert.date}</p>
              <p className="featured-description">{cert.description}</p>
              <div className="featured-stats">
                <span className="stat-highlight">82 Labs Completed</span>
                <span className="stat-highlight">19 Skill Badges</span>
              </div>
              <div className="certificate-skills">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                  View Profile
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          className="certificate-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + categoryIndex * 0.2 }}
        >
          <h2 className="category-title">{category}</h2>
          
          <div className="certificates-grid">
            {certificates
              .filter(cert => cert.category === category && !cert.featured)
              .map((cert, index) => (
                <motion.div
                  key={index}
                  className="certificate-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (categoryIndex * 0.2) + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                  
                  <div className="certificate-content">
                    <h3 className="certificate-title">{cert.title}</h3>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <p className="certificate-date">{cert.date}</p>
                    <p className="certificate-description">{cert.description}</p>
                    
                    <div className="certificate-skills">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                    
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                        View Certificate
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Certificates;
