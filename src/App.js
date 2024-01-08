import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes from 'react-router-dom'
import Navbar from './Navbar'
import Home from './home';
import Portfolio from './portfolio';
import Skills from './skills';
import Contact from './contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>

        {/* Use Routes instead of Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
