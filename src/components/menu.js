import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Menu = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/about">Level 1 : About me</Link>
        </li>
        <li>
          <Link to="/experience">Level 2 : Experience</Link>
        </li>
        <li>
          <Link to="/skills">Level 3 : Skills</Link>
        </li>
        <li>
          <Link to="/projects">Level 4 : Projects</Link>
        </li>
        <li>
          <Link to="/education">Level 5 : Education</Link>
        </li>
        <li>
          <Link to="/contact">Level 6 : Contact</Link>
        </li>
      </ul>
    </div>
  </Router>
);

export default Menu;
