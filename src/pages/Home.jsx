
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  
const features = [
  {
    icon: "☀",
    title: "Solar Analysis",
    description: "Understand rooftop sunlight exposure.",
    to: "/analyze",
  },
  {
    icon: "⌖",
    title: "Location Insights",
    description: "Explore rooftops around your location.",
    to: "/analyze",
  },
  {
    icon: "▥",
    title: "Smart Insights",
    description: "Understand your rooftop analysis.",
    to: "/dashboard",
  },
  {
    icon: "♧",
    title: "Greener Tomorrow",
    description: "Make smarter solar energy choices.",
    to: "/dashboard",
  },
];


  return (
    <div className="home-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            ☀ AI-POWERED SOLAR ANALYSIS
          </span>

          <h1>
            Find Your
            <br />
            <span>Solar</span> Potential.
          </h1>

          <p className="hero-text">
            Explore sunlight, shading and rooftop solar
            opportunities with ShadowMap.
          </p>

          <div className="hero-buttons">
            <Link to="/analyze" className="primary-btn">
              ▶ Start Analysis <span>→</span>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="sun-glow"></div>
          <div className="sun-icon">☀</div>

          <div className="house">
            <div className="house-roof">
              <div className="solar-panels">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div className="solar-panel" key={index}></div>
                ))}
              </div>
            </div>

            <div className="house-body">
              <div className="house-window"></div>
              <div className="house-door"></div>
              <div className="house-window"></div>
            </div>
          </div>

          <div className="house-ground"></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        {features.map((feature, index) => (
          
<Link to={feature.to} className="feature-card" key={index}>
  <div className="feature-icon">{feature.icon}</div>

  <div className="feature-content">
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </div>

  <span className="feature-arrow">→</span>
</Link>

        ))}
      </section>

      {/* LOCATION ANALYSIS */}
      <section className="location-section">
        <div className="location-content">
          <span className="quick-start">⚡ Quick Start</span>

          <h2>Analyze Any Location</h2>

          <p>
            Search for an address or upload a rooftop image
            to begin exploring its solar potential.
          </p>

          <Link to="/analyze" className="location-btn">
            Start Exploring <span>→</span>
          </Link>
        </div>

        <div className="location-visual">
          
<div className="map-preview">
  <div className="map-road road-one"></div>
  <div className="map-road road-two"></div>

  <div className="map-building building-one"></div>
  <div className="map-building building-two"></div>
  <div className="map-building building-three"></div>

  <div className="map-park"></div>
  

  <div className="map-label map-label-one">
    ROOFTOP AREA
  </div>

  <div className="map-label map-label-two">
    GREEN ZONE
  </div>

  <div className="map-compass">N</div>

  <div className="map-pin">⌖</div>
</div>


          <div className="potential-card">
            <h3>☀ Solar Potential</h3>
            <div className="potential-circle">92%</div>
            <span>Illustrative Preview</span>
            <p>Explore your rooftop to get an analysis.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <h3>☀ Shadow<span>Map</span></h3>
        <p>Explore sunlight. Discover solar potential.</p>
        <p>© 2026 ShadowMap</p>
      </footer>
    </div>
  );
}

export default Home;
