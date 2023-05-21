import React from "react";
import "./home.scss"

export default function Home() {
  return (
    <section className="main-container">
      <div className="content">
        <div className="hero-section">
          <h1>Simplify Your Notes</h1>
          <div className="hero-content">
          <div className="hero-image">IMAGE HERE</div>
          <p className="hero-text">Noted - the perfect note-taking app where every idea, is duly noted.</p>
          </div>
        </div>

        <div className="howto-section">
          <div className="howto-steps">
            <div className="step1">STEP 1 box</div>
            <div className="step2">STEP 2 box</div>
            <div className="step3">STEP 3 box</div>
          </div>
          <div className="howto-steps">
            <div className="step1">STEP 1 box</div>
            <div className="step2">STEP 2 box</div>
            <div className="step3">STEP 3 box</div>
          </div>
        </div>

      </div>
    </section>
  );
}
