import React from 'react';
import Mainscreen from './components/MainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import Routers

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/Personal_website/" element={<Mainscreen />} />
    </Routes>
  </Router>
  );
}

export default App;
