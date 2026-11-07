import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ☀ ShadowMap
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/analyze">Analyze Rooftop</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;