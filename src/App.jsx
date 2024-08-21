import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work'

function App() {
  return (
    <div className='page'>
      <Header />
      <main>

        <About />
        <Home />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
