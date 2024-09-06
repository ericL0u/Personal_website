import React, { useState, useEffect } from 'react';
import './Project1.css'; // Import your styles
import Header from './Header';

function NewPage() {
  const [finalMove, setFinalMove] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFinalMove(true); 
    }, 500); 
  }, []);

  return (
    <div>
    <Header bgColor={"#f6d2bd"}/>
    <section className="Main">
      {/* Lift up cover animation must have projectScreen */}
      <div className={`projectScreen ${finalMove ? 'final' : ''}`}></div>

      
      <div className="new-content2">
        <h1>Welcome to the New Page!</h1>
        <p>Here is the new content revealed after the transition.</p>
      </div>


    </section>
    </div>
  );
}

export default NewPage;
