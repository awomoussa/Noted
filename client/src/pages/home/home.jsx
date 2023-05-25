import React from "react";
import "./home.scss"
import home from "../../assets/home.jpg"

export default function Home() {
  return (
    <section className="main-container">
      <div className="content">
        <div className="hero-section">
          <h1>Simplify Your Notes</h1>
          <div className="hero-content">
          <div className="hero-image">
            <img src={home}></img>
          </div>
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
            <div className="">STEP 1 instructions</div>
            <div className="">STEP 2 instructionsox</div>
            <div className="">STEP 3 instructions</div>
          </div>
        </div>

      </div>
    </section>
  );
}
