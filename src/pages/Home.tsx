import { TypeAnimation } from 'react-type-animation';

import './styles/Home.css';

const TITLES = [
    'AI Engineer',
    'Physics Simulation Researcher',
    'Systems Programmer',
    'ML Systems Engineer',
    'HPC & Simulation Engineer',
    'High-Performance Computing Engineer',
];

function Home() {
    return (
        <main className="homepage">
            <div className="content">
                <h1>
                    Hi, I'm <span className="highlight">Steven Kight</span>
                </h1>

                <p className="visually-hidden">{TITLES.join(', ')}</p>

                <TypeAnimation
                    aria-hidden="true"
                    sequence={TITLES.flatMap((title) => [title, 2500])}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    preRenderFirstString={true}
                    style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold' }}
                />

                <p className="description">
                    I build GPU-accelerated simulations and applied ML systems that turn heavy computation into fast, usable tools.
                </p>

                <div className="buttons">
                    <a href="https://github.com/StevenKight" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/steven-g-kight/" target="_blank" rel="noopener noreferrer">
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
