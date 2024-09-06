import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Work from './Work'

function mainScreen() {
  // const mainColor = rbg()
    return (
      <div className='page'>
        <Header  />
        <main>
  
          <About />
          <Home />
          <Work />
        </main>
        <Footer />
      </div>
    );
  }
  
  export default mainScreen;