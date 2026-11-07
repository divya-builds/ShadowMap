import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <main className="dashboard-page">

        {/* HEADER */}
        <div className="dashboard-header">

          <div>
            <p className="section-label">ANALYSIS RESULTS</p>

            <h1>Rooftop Analysis</h1>

            <p>
              Sample analysis for Banasthali Vidyapith, Rajasthan
            </p>
          </div>

          <Link to="/analyze" className="new-analysis-btn">
            + New Analysis
          </Link>

        </div>

        {/* SCORE CARDS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">☀</div>

            <div>
              <p>Solar Suitability</p>
              <h2>82%</h2>
              <span className="positive">
                High potential
              </span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">◫</div>

            <div>
              <p>Usable Area</p>
              <h2>1,240 m²</h2>
              <span>
                Estimated rooftop area
              </span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">◒</div>

            <div>
              <p>Shaded Area</p>
              <h2>18%</h2>
              <span>
                Potentially affected
              </span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚡</div>

            <div>
              <p>Solar Potential</p>
              <h2>High</h2>
              <span className="positive">
                Suitable for analysis
              </span>
            </div>
          </div>

        </div>

        {/* MAIN DASHBOARD */}
        <div className="dashboard-grid">

          {/* MAP */}
          <div className="map-card">

            <div className="card-header">

              <div>
                <h2>Rooftop Suitability Map</h2>
                <p>
                  Estimated sunlight and shading distribution
                </p>
              </div>

              <div className="legend">

                <span>
                  <i className="good"></i>
                  High
                </span>

                <span>
                  <i className="medium"></i>
                  Medium
                </span>

                <span>
                  <i className="bad"></i>
                  Low
                </span>

              </div>

            </div>

            <div className="fake-map">

              <div className="map-rooftop">

                <div className="good-zone"></div>

                <div className="medium-zone"></div>

                <div className="bad-zone"></div>

                <div className="building">
                  Water Tank
                </div>

              </div>

            </div>

          </div>

          {/* RECOMMENDATION */}
          <div className="recommendation-card">

            <div className="recommendation-icon">
              ✓
            </div>

            <h2>Good Solar Potential</h2>

            <p>
              Most of the analyzed rooftop receives
              favorable sunlight. The highlighted areas
              are potentially better suited for solar panels.
            </p>

            <div className="recommendation-item">
              <span>Suitable area</span>
              <strong>82%</strong>
            </div>

            <div className="recommendation-item">
              <span>Shaded area</span>
              <strong>18%</strong>
            </div>

            <div className="recommendation-item">
              <span>Major obstacle</span>
              <strong>Water tank</strong>
            </div>

          </div>

        </div>

        {/* SUNLIGHT CHART */}
        <div className="chart-card">

          <div className="card-header">

            <div>
              <h2>Estimated Sunlight Exposure</h2>
              <p>
                Illustrative daily sunlight distribution
              </p>
            </div>

          </div>

          <div className="chart">

            <div className="bar" style={{ height: "40%" }}>
              <span>8 AM</span>
            </div>

            <div className="bar" style={{ height: "60%" }}>
              <span>10 AM</span>
            </div>

            <div className="bar" style={{ height: "90%" }}>
              <span>12 PM</span>
            </div>

            <div className="bar" style={{ height: "100%" }}>
              <span>2 PM</span>
            </div>

            <div className="bar" style={{ height: "75%" }}>
              <span>4 PM</span>
            </div>

            <div className="bar" style={{ height: "45%" }}>
              <span>6 PM</span>
            </div>

          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="disclaimer">

          <strong>Note:</strong>

          <span>
            These results are illustrative. Actual solar
            potential depends on location, weather,
            building geometry, seasonal sunlight and
            other environmental factors.
          </span>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;