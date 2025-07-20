import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm <strong>Shruti Suman</strong>, a final-year B.Tech CSE student at <strong>IEM, Kolkata</strong>, with a strong inclination toward building intelligent systems and real-world software solutions.
      </p>
      <p>
        My technical interests span across <strong>AI-powered applications</strong>, <strong>robotics (SLAM)</strong>, and full-stack web development. I’ve built projects like <em>GENOVA</em>, an AI-driven helpdesk platform using multi-modal RAG pipelines, and <em>FlexiSpot</em>, a smart seat-booking system for hybrid workplaces.
      </p>
      <p>
        I’m currently working on enhancing traditional SLAM pipelines by integrating deep learning and semantic filtering techniques for robust real-world performance — evaluated using datasets like <strong>EuRoC MAV</strong>.
      </p>
      <p>
        I love writing clean, scalable code and enjoy turning complex ideas into usable, human-centric solutions. I'm always exploring the intersection of AI, software architecture, and user experience.
      </p>
    </section>
  );
}

export default About;
