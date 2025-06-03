
import React from 'react';

import { 
  faHouse, faIdBadge, 
  faCode, faTableList, faAddressBook
} from '@fortawesome/free-solid-svg-icons';

import NavBar from './components/NavBar';
import Section from './components/Section';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './styles/App.css';

function App() {

  return (
    <div className="App">
      <NavBar />

      <div style={{ width: '100%'}}>
        <Section icon={faHouse} title="Home" disableHeader>
          <Home />
        </Section>
        <Section icon={faIdBadge} title="About"
          disableOverlap className="about-section">
          <About />
        </Section>
        <Section icon={faCode} title="Skills">
          <Skills />
        </Section>
        <Section icon={faTableList} title="Projects" className="projects-section">
          <Projects />
        </Section>
        <Section icon={faAddressBook} title="Contact">
          <Contact />
        </Section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
