import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.article 
        className="blog-post"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <header className="blog-header">
          <h1 className="blog-post-title">My Journey into Data Science</h1>
          <div className="blog-meta">
            <span className="blog-date">September 15, 2025</span>
            <span className="blog-read-time">8 min read</span>
          </div>
        </header>

        <div className="blog-content">
          <p className="blog-intro">
            When I began studying Computer Science, I didn't imagine that my path would eventually lead me toward data science. 
            At first, I focused on general programming skills, algorithms, and software engineering. But as I advanced through my studies, 
            I realized that what fascinated me most wasn't just building systems, it was understanding patterns in data and using them to solve real-world problems.
          </p>

          <h2>The Turning Point</h2>
          <p>
            The real shift came when I joined the <strong>SCUT Global Summer Engineering Program in 2024</strong>. 
            It was my first international exposure to advanced topics like machine learning, large language models, 
            and prompt engineering. That program not only gave me a foundation in AI but also helped me see how 
            rapidly data science is shaping industries worldwide.
          </p>
          <p>
            During the program, I also had the opportunity to go on a <strong>field trip to Tencent</strong>, 
            where I learned about the latest technologies being developed at that time. It was eye-opening to see 
            how much <strong>data drives innovation</strong> in modern technology. That experience deepened my 
            understanding of the value of data and sparked a strong interest in pursuing <strong>data science</strong> further.
          </p>
          <p>
            Around the same time, I began experimenting with datasets in the Myanmar language and discovered the 
            challenges of working with under-resourced languages. This motivated me to explore 
            <strong>Natural Language Processing (NLP)</strong>, especially for Southeast Asia.
            </p>

          <h2>Applying Knowledge in Real Projects</h2>
          <p>
            Back at Ton Duc Thang University, I applied my learning in both coursework and competitions.
          </p>

          <h3>Hackathons & Competitions</h3>
          <p>
            At the <strong>Bé Tí App Hackathon</strong>, my team built a platform that combines AI with Vietnamese water puppetry. 
            We used Gemini AI, text-to-speech, and speech-to-text APIs to create an interactive cultural experience. It taught me not only 
            about technical implementation but also about teamwork and creative problem-solving.
          </p>
          <p>
            In another competition, my <strong>Power BI dashboard project earned Top 20 + Judge's Choice Award</strong>. I shared this dashboard 
            on the competition's website so others could explore how business intelligence tools reveal insights from data.
          </p>

          <h3>Internship at FPT IS</h3>
          <p>
            As a <strong>Data Science Intern</strong>, I worked with SQL Server, SSAS, and Power BI, learning how large companies manage their 
            data pipelines and build analytical solutions. This experience taught me the importance of scalability, clean data processing, 
            and collaboration in real-world projects.
          </p>

          <h2>Lessons Learned</h2>
          <p>Through these experiences, I've learned that data science isn't just about building models—it's about:</p>
          <ul>
            <li>Understanding the problem clearly.</li>
            <li>Choosing the right tools (sometimes simple dashboards are more valuable than complex models).</li>
            <li>Communicating results effectively to non-technical stakeholders.</li>
          </ul>
          <p>
            I also realized that continuous learning is essential. That's why I keep exploring new areas right now, I'm studying 
            <strong> Stanford's CS229 Machine Learning course</strong> to deepen my foundations.
          </p>

          <h2>Looking Forward</h2>
          <p>My next goals are to:</p>
          <ul>
            <li>Continue building NLP solutions for under-resourced languages like Myanmar.</li>
            <li>Strengthen my skills in deep learning and TensorFlow.</li>
            <li>Share my learning journey through blogs, videos, and open-source projects.</li>
          </ul>

          <div className="blog-conclusion">
            <p>
              👉 <strong>Data science, to me, is a journey of curiosity, learning, and applying knowledge to create meaningful impact.</strong> 
              I'm excited to see where this path leads and how I can contribute to making data more accessible and useful in Southeast Asia and beyond.
            </p>
          </div>
        </div>

        <footer className="blog-footer">
          <div className="blog-tags">
            <span className="tag">Data Science</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">NLP</span>
            <span className="tag">Career Journey</span>
            <span className="tag">Southeast Asia</span>
          </div>
          
          <div className="blog-cta">
            <p>📧 Want to discuss data science or collaborate on projects? <a href="/contact">Get in touch!</a></p>
          </div>
        </footer>
      </motion.article>
    </motion.div>
  );
};

export default Blog;
