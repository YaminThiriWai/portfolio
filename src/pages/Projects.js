import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Email Spam Classification",
      description:
        "Developed a machine learning model using Support Vector Machine (SVM) and TF-IDF feature extraction to classify emails as spam or legitimate, achieving 95% accuracy on the test set.",
      tech: ["Python", "Scikit-learn", "SVM", "TF-IDF", "Pandas"],
    },
    {
      title: "Bé Tí – Vietnamese Water Puppetry App",
      description:
        "Built an interactive mobile app that revives traditional Vietnamese water puppetry using AI and voice technology. Selected as a Top 10 project at the UEH BizTech Hackathon 2025.",
      tech: ["Gemini API", "Speech-to-Text", "Text-to-Speech", "Mobile Development", "AI Integration"],
    },
    {
      title: "Power BI Revenue Analytics Dashboard",
      description:
        "Designed an end-to-end Power BI dashboard delivering insights on revenue growth, market trends, and risk assessment. Awarded Top 20 and Judge’s Choice Award at The Next Analyst Challenge.",
      tech: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "SQL"],
    },
    {
      title: "Haskell Memory Game",
      description:
        "Created a console-based memory game using functional programming principles in Haskell, featuring customizable difficulty levels and clean functional architecture.",
      tech: ["Haskell", "Functional Programming", "Game Logic", "Console Interface"],
    },
    {
      title: "NLTK Text Analysis Suite",
      description:
        "Implemented a text analysis toolkit with tokenization, frequency analysis, and sentiment detection using NLTK, supported by visualizations for insights.",
      tech: ["Python", "NLTK", "NLP", "Text Processing", "Matplotlib"],
    },
    {
      title: "Word Probability Calculator",
      description:
        "Built a statistical program to compute word probability distributions in text corpora, supporting linguistic analysis and NLP applications.",
      tech: ["Python", "Statistics", "Text Analysis", "Data Visualization"],
    },
  ];

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="page-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
