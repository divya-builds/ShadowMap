
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">☀</span>
        Shadow<span>Map</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/analyze">
          Map & Analyze
        </NavLink>

        <NavLink to="/dashboard">
          Analytics
        </NavLink>
      </div>

      <Link to="/analyze" className="nav-cta">
        Get Started <span>→</span>
      </Link>
    </nav>
  );
}

export default Navbar;
