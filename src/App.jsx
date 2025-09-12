import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutme';
import Projects from './pages/project';
import Contact from './pages/contact';
import Skills from './pages/skills';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;