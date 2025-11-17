import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="nav-logo">Reading Hub</h2>

      <ul className="nav-menu">
        <li><Link to="/class-reading">Class Reading</Link></li>
        <li><Link to="/school-reading">School Reading</Link></li>
      </ul>
    </nav>
  );
}
