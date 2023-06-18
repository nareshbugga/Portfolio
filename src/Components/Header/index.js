import { Link, useLocation } from "react-router-dom";

import "./index.css";
const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const aboutActiveButton = pathname === "/" ? "active-link" : "nav-link";
  const educationActiveButton =
    pathname === "/education" ? "active-link" : "nav-link";
  const skillsActiveButton =
    pathname === "/skills" ? "active-link" : "nav-link";
  const projectActiveButton =
    pathname === "/projects" ? "active-link" : "nav-link";
  const achievementsActiveButton =
    pathname === "/achievements" ? "active-link" : "nav-link";
  return (
    <nav className="nav">
      <div className="container">
        <div>
          <h1 className="portfolio">Portfolio</h1>
        </div>
        <ul className="nav-items-container">
          <Link to="/" className="text-link">
            <li className={`${aboutActiveButton}`}>About</li>
          </Link>
          <Link to="/education" className="text-link">
            <li className={`${educationActiveButton}`}>Education</li>
          </Link>
          <Link to="/skills" className="text-link">
            <li className={`${skillsActiveButton}`}>Skills</li>
          </Link>
          <Link to="/projects" className="text-link">
            <li className={`${projectActiveButton}`}>Projects</li>
          </Link>
          <Link to="/achievements" className="text-link">
            <li className={`${achievementsActiveButton}`}>Achievements</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
