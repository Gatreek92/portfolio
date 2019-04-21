import React from "react";
import About from "./content/about";
import Experience from "./content/experience";
import Skills from "./content/skills";
import Projects from "./content/projects";
import Education from "./content/education";
import Contact from "./content/contact";

const ContentContainer = () => (
  <div className="content-container">
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Education />
    <Contact />
  </div>
);

export default ContentContainer;
