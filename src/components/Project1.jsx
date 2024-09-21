import React, { useState, useEffect } from 'react';
import './Project1.css'; // Import your styles
import Header from './Header';
import ProjectIntro from './ProjectIntro'
import Footer from './Footer';
function NewPage() {
  const [finalMove, setFinalMove] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFinalMove(true); 
    }, 500); 
  }, []);

  return (
    <div>
    <Header bgColor={"#f6d2bd"}></Header>
    <section className="Main">
    <div className={`projectScreen ${finalMove ? 'final' : ''}`}></div>
    <ProjectIntro></ProjectIntro>
    </section>
    <Footer></Footer>
    </div>
  );
}

export default NewPage;
