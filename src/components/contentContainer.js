import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./content/about";
import Experience from "./content/experience";
import Skills from "./content/skills";
import Projects from "./content/projects";
import Education from "./content/education";
import Contact from "./content/contact";
import Welcome from "./welcome.js";

const ContentContainer = () => (
  <div className="content-container">
    <Route exact path="/" component={Welcome} />
    <Route path="/about" component={About} />
    <Route path="/experience" component={Experience} />
    <Route path="/skills" component={Skills} />
    <Route path="/projects" component={Projects} />
    <Route path="/education" component={Education} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default ContentContainer;
