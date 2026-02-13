
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">Forest Poultry</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/offering">Offering</NavLink>
      </div>
    </nav>
  );
}
