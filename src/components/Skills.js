import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'Java', link: 'https://www.oracle.com/java/' },
    { name: 'Spring Boot', link: 'https://spring.io/projects/spring-boot' },
    { name: 'J2EE', link: 'https://www.oracle.com/java/technologies/java-ee-glance.html' },
    { name: 'React.js', link: 'https://reactjs.org/' },
    { name: 'Node.js', link: 'https://nodejs.org/' },
    { name: 'Express.js', link: 'https://expressjs.com/' },
    { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Python', link: 'https://www.python.org/' },
    { name: 'C', link: 'https://en.cppreference.com/w/c' },
    { name: 'SQL', link: 'https://www.mysql.com/' },
    { name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { name: 'Git & GitHub', link: 'https://git-scm.com/' },
    { name: 'REST APIs', link: 'https://restfulapi.net/' },
    { name: 'Docker', link: 'https://www.docker.com/' },
    { name: 'AWS', link: 'https://aws.amazon.com/' },
    { name: 'Microsoft Azure', link: 'https://azure.microsoft.com/' },
    { name: 'Basic DevOps', link: 'https://azure.microsoft.com/en-in/resources/cloud-computing-dictionary/what-is-devops/' },
    { name: 'Postman', link: 'https://www.postman.com/' },
    { name: 'Linux', link: 'https://ubuntu.com/' },
    { name: 'IntelliJ IDEA', link: 'https://www.jetbrains.com/idea/' },
    { name: 'Machine Learning', link: 'https://scikit-learn.org/stable/' },
    { name: 'Deep Learning', link: 'https://www.tensorflow.org/' },
    { name: 'Computer Vision', link: 'https://opencv.org/' },
    { name: 'Natural Language Processing', link: 'https://www.nltk.org/'},
    { name: 'Mask R-CNN', link: 'https://arxiv.org/abs/1703.06870' },
    { name: 'LSTM', link: 'https://colah.github.io/posts/2015-08-Understanding-LSTMs/' },
    { name: 'LangChain', link: 'https://www.langchain.com/' },
    { name: 'RAG Pipelines', link: 'https://www.pinecone.io/learn/retrieval-augmented-generation/' },
    { name: 'OpenAI API', link: 'https://platform.openai.com/docs' },
    { name: 'Team Collaboration', link: 'https://slack.com/' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-tags">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-badge"
            title={`Learn more about ${skill.name}`}
          >
            {skill.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Skills;
