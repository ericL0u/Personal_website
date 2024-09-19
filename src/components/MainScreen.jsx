import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Work from './Work'
import './MainScreen.css'
import ResponsiveAppBar from './HeaderMenu';

function mainScreen() {
  const [finalMove, setFinalMove] = useState(false);
  const [showComponents, setShowComponents] = useState(false);
  useEffect(() => {

    setTimeout(() => {
      setFinalMove(true); 
      console.log(finalMove)
    }, 500); 

  }, []);

    return (
      <div className='page'>
      <div
        className={`animatedScreen1 ${finalMove ? 'final' : ''}`}
      ></div>
      <Header />
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      {/* needs adjustment for now */}
        <>
          <main>
            <About />
            {/* <Home />
            <Work /> */}
          </main>
          <Footer />
        </>

    </div>
    );
  }
  
  export default mainScreen;