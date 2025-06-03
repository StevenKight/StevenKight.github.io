
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import './styles/Home.css';

const TITLES = [
    "Software Engineer",
    "Full-Stack Developer",
    "Systems Programmer",
    "DevOps Engineer",
    "Machine Learning Developer",
    "AI Researcher",
    "High-Performance Computing Enthusiast",
    "Technical Problem Solver",
]

function Home() {
  return (
    <main className="homepage">
      <div className="content">
        <h1>
          Hi, I'm <span className="highlight">Steven Kight</span>
        </h1>

        <TypeAnimation
            sequence={[
              ...TITLES.flatMap((title, index) => [
                title,
                2500, // Pause for 2 seconds
                index === TITLES.length - 1 ? '' : '', // Clear the title after the last one
              ]),
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold' }}
            />

        <p className="description">
          I love to build things — from high-performance physics engines to smart assistants and scalable cloud systems.
        </p>

        <div className="buttons">
          <a href="https://github.com/StevenKight" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/steven-kight-742729177/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sgk0711@gmail.com">
            Contact Me
          </a>
          <a href="/assets/pdfs/Resume - Steven Kight.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;