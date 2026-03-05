
import React from 'react';

import './styles/About.css';

function About() {
    return (
        <div className='about-container'>
            <div className='about-text'>
                <p>
                    I'm an AI engineer with a research focus that sits outside my day job. During the day I build 
                    production AI systems — LLM integrations, agent-based workflows, containerized deployments on 
                    Azure. Outside of that I'm working on a physics simulation engine built in C++, Fortran, and 
                    CUDA, and an AI routing system that uses face and voice recognition to classify and dispatch tasks.
                </p>
                <p>
                    The work I find most interesting is where the math is hard and the compute constraints are real — 
                    which is what pulled me toward HPC simulation and why I ended up building things in Fortran and 
                    CUDA rather than staying in Python.
                </p>
                <p>
                    B.S. Computer Science from UWG with a Certificate in Data Science. Presented AI routing and 
                    classification research at the Georgia Undergraduate Research Conference. Been building in this 
                    space since 2020.
                </p>

                <hr className='about-divider' />
                <p className='about-tagline'>
                    Building at the intersection of high-performance computing and machine learning — where the math matters and the compute constraints are real.
                </p>
            </div>

            <div className='about-highlights'>
                <div className='highlight-card'>
                    <h3>Focus Areas</h3>
                    <ul>
                        <li>High-Performance Computing</li>
                        <li>Physics Simulation</li>
                        <li>ML Systems & LLM Integration</li>
                        <li>Intelligent Systems</li>
                    </ul>
                </div>

                <div className='highlight-card'>
                    <h3>Research</h3>
                    <ul>
                        <li>Physics Engine — C++, Fortran, CUDA</li>
                        <li>AI Routing & Classification</li>
                        <li>GURC Presenter, Nov 2023</li>
                        <li>Upsilon Pi Epsilon Member</li>
                    </ul>
                </div>

                <div className='highlight-card'>
                    <h3>Currently</h3>
                    <ul>
                        <li>AI Engineer @ Aptean</li>
                        <li>Building in Atlanta, GA</li>
                        <li>Open to research collaboration</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
