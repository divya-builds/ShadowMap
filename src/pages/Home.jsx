import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">AI-POWERED SOLAR ANALYSIS</p>

          <h1>
            Find the
            <span> Best Spot </span>
            for Solar.
          </h1>

          <p className="hero-text">
            ShadowMap analyzes rooftop sunlight, shadows and obstacles
            to help identify areas suitable for solar panel installation.
          </p>

          <div className="hero-buttons">
            <Link to="/analyze" className="primary-btn">
              Analyze My Rooftop →
            </Link>

            <a href="#how-it-works" className="secondary-btn">
              How It Works
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="sun">☀</div>

          <div className="rooftop">
            <div className="panel-grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="shadow-shape"></div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem-section">
        <p className="section-label">THE PROBLEM</p>

        <h2>
          Not every part of a rooftop gets
          <span> equal sunlight.</span>
        </h2>

        <p>
          Buildings, trees, water tanks and other obstacles can create
          shadows and reduce the efficiency of solar panels.
          ShadowMap helps visualize these areas before installation.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-section">
        <p className="section-label">HOW IT WORKS</p>

        <h2>Three simple steps</h2>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Select Location</h3>
            <p>
              Enter your location or provide a rooftop image for analysis.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Analyze Shadows</h3>
            <p>
              ShadowMap identifies rooftop areas affected by obstacles
              and limited sunlight.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Get Insights</h3>
            <p>
              View a suitability map and identify potentially better
              areas for solar installation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to explore your rooftop?</h2>

        <p>
          Turn rooftop data into smarter solar planning.
        </p>

        <Link to="/analyze" className="primary-btn">
          Start Analysis →
        </Link>
      </section>

      <footer>
        <div>☀ ShadowMap</div>
        <p>AI-Powered Solar Rooftop Analysis</p>
      </footer>
    </div>
  );
}

export default Home;