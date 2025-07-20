import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        
        {/* SLAM Enhancement Technique */}
        <div className="project-card">
          <h3>SLAM Enhancement Technique</h3>
          <p>
            A novel improvement over traditional SLAM pipelines by integrating <strong>Mask R-CNN</strong> for dynamic object filtering and using <strong>LSTM</strong> for temporal consistency. Achieves better loop closure recall and reduced ATE on the <strong>EuRoC MAV dataset</strong>.
          </p>
          <a
            href="https://github.com/33Sg/SLAM-Enhancement-Method" // <-- update this with your repo URL
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
            🔗 View on GitHub
          </a>
          <div className="project-tags">
            <span>Python</span>
            <span>SLAM</span>
            <span>Mask R-CNN</span>
            <span>LSTM</span>
            <span>EuRoC Dataset</span>
          </div>
        </div>

        {/* Genova */}
        <div className="project-card">
          <h3>Genova</h3>
          <p>
            Genova is an <strong>agentic multi-modal autonomous helpdesk system</strong> that automates the <strong>student admission</strong> and <strong>financial aid pipeline</strong> using AI agents and hybrid <strong>RAG pipelines</strong> for scalable decision-making.
          </p>
          <a
            href="https://github.com/33Sg/Agent-Based-Student-Automation-Helpdesk"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
            🔗 View on GitHub
          </a>
          <div className="project-tags">
            <span>AI</span>
            <span>NLP</span>
            <span>LangChain</span>
            <span>Multi-modal</span>
            <span>Autonomous Agents</span>
            <span>RAG</span>
          </div>
        </div>

        {/* FlexiSpot */}
        <div className="project-card">
          <h3>FlexiSpot</h3>
          <p>
            A real-time <strong>desk and workspace booking portal</strong> designed for hybrid offices. Supports <strong>booking rules, availability visualization, and analytics</strong> for improved resource utilization. Built using <strong>MERN stack</strong>.
          </p>
          <a
            href="https://github.com/33Sg/DeskBook" // <-- update this with your repo URL
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="icon" />
            🔗 View on GitHub
          </a>
          <div className="project-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>Booking System</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
