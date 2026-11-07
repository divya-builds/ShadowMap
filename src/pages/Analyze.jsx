import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Analyze() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAnalyze = () => {
    if (!location && !image) {
      alert("Please enter a location or upload a rooftop image.");
      return;
    }

    // Temporary navigation.
    // Later your backend/AI model will be called here.
    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />

      <main className="analyze-page">

        <div className="page-heading">
          <p className="section-label">ROOFTOP ANALYSIS</p>

          <h1>
            Analyze your <span>rooftop</span>
          </h1>

          <p>
            Provide your location or upload a rooftop image
            to begin the ShadowMap analysis.
          </p>
        </div>

        <div className="analysis-container">

          {/* LOCATION CARD */}
          <div className="input-card">

            <div className="card-icon">📍</div>

            <h2>Enter Location</h2>

            <p>
              Enter the address or location of the rooftop.
            </p>

            <input
              type="text"
              placeholder="e.g. Banasthali Vidyapith, Rajasthan"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <button className="location-btn">
              Use Current Location
            </button>

          </div>

          <div className="or-divider">
            <span>OR</span>
          </div>

          {/* IMAGE UPLOAD */}
          <div className="input-card upload-card">

            <div className="card-icon">📷</div>

            <h2>Upload Rooftop Image</h2>

            <p>
              Upload a clear image of the rooftop for analysis.
            </p>

            <label className="upload-area">

              {preview ? (
                <img
                  src={preview}
                  alt="Rooftop preview"
                  className="image-preview"
                />
              ) : (
                <>
                  <div className="upload-icon">↑</div>

                  <strong>Click to upload</strong>

                  <span>
                    PNG, JPG or JPEG
                  </span>
                </>
              )}

              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleImageChange}
                hidden
              />

            </label>

          </div>

        </div>

        {/* ANALYZE BUTTON */}
        <div className="analyze-button-container">

          <button
            className="analyze-btn"
            onClick={handleAnalyze}
          >
            Analyze Rooftop →
          </button>

        </div>

        <div className="privacy-note">
          🔒 Your uploaded data is used only for rooftop analysis.
        </div>

      </main>
    </div>
  );
}

export default Analyze;