import React, { useState, useEffect } from 'react';
import './NewPage.css'; // Import your styles

function NewPage() {
  const [finalMove, setFinalMove] = useState(false);

  useEffect(() => {
    // Perform the final lift-up when the new page loads
    setTimeout(() => {
      setFinalMove(true); // Trigger the lift-up
    }, 500); // Add a small delay for better smoothness
  }, []);

  return (
    <section className="new-page-section">
      <div className={`projectScreen ${finalMove ? 'final' : ''}`}></div>
      <div className="new-content2">
        <h1>Welcome to the New Page!</h1>
        <p>Here is the new content revealed after the transition.</p>
      </div>
    </section>
  );
}

export default NewPage;
