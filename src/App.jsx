import React from 'react';
import Mainscreen from './components/MainScreen';
import Project1 from './components/Project1';
import ScrollToTop from './components/ScrollTop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import Routers

function App() {
  return (
    <Router>
    <ScrollToTop/>
    
    <Routes>
      <Route path="/Personal_website/" element={<Mainscreen />} />
      <Route path="/Personal_website/about-me/" element={<Project1 />} />
    </Routes>
  </Router>
  );
}

export default App;
