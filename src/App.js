import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Nav">
          <NavBar />
        </div>
  
        <div className="Content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/works/:work" element={<Projects />} />
          </Routes>
        </div>
  
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
