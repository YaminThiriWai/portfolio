import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "FPT Information System (FPT IS)",
      period: "Apr 2025 – Sep 2025",
      description: [
        "Designed and implemented an automated data pipeline for monthly Excel ingestion into SQL Server",
        "Built Python scripts for consolidation, validation, and structured uploads with test/full modes",
        "Integrated SSAS Tabular models and developed Power BI dashboards for actionable insights",
        "Delivered reproducible workflows with operational checklist for monthly refreshes",
        "Technologies: Python (pandas, sqlalchemy, pyodbc), SQL Server, SSAS, Power BI"
      ]
    },
    {
      title: "Global Summer Engineering Program (Selected Participant)",
      company: "South China University of Technology (SCUT)",
      period: "Jul 2024",
      description: [
        "One of 5 students selected to represent Ton Duc Thang University",
        "Studied large language models, prompt engineering, and AI applications",
        "Collaborated with international peers on hands-on AI/ML projects",
        "Presented research outcomes and strengthened cross-cultural communication skills"
      ]
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "Ton Duc Thang University",
      period: "2022 – Present",
      description: [
        "Specializing in Data Science with a focus on machine learning and AI applications",
        "Relevant coursework: Algorithms, Data Structures, Machine Learning, Statistics",
        "Active participant in data competitions and hackathons"
      ]
    },
    {
      title: "Volunteer Teacher",
      company: "Ho Chi Minh Youth Union",
      period: "Summer 2023",
      description: [
        "Taught English to local kids and mentored them in their studies",
        "Engaged in community activities and educational outreach programs",
        "Developed communication and leadership skills through volunteer work"
      ]
    },
    {
      title: "Graphic Designer (Volunteer)",
      company: "Hypen Non-Profit Organization",
      period: "2022",
      description: [
        "Designed educational graphics and visual content for campaigns",
        "Supported the mission of providing equal education opportunities",
        "Collaborated with team members on creative and outreach projects"
      ]
    }
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">Experience & Education</h1>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="timeline-content">
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-company">{exp.company}</div>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
