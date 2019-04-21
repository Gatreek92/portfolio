import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import Menu from "./menu.js";
import ContentContainer from "./contentContainer";
import Illustration from "./illustration.js";
import { BrowserRouter as Router } from "react-router-dom";

import "../App.css";

const Home = () => (
  <div className="page-container">
    <Header />
    <div className="page-body">
      <Router>
        <Menu />
        <ContentContainer />
      </Router>
      <Illustration />
    </div>
    <Footer />
  </div>
);

export default Home;
