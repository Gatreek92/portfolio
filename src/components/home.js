import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import Menu from "./menu.js";
import ContentContainer from "./contentContainer";
import Illustration from "./illustration.js";
import "../App.css";

const Home = () => (
  <div className="page-container">
    <Header />
    <div className="page-body">
      <Menu />
      <ContentContainer />
      <Illustration />
    </div>
    <Footer />
  </div>
);

export default Home;
