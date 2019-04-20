import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import Menu from "./menu.js";
import ContentContainer from "./contentContainer";
import Illustration from "./illustration.js";

const Home = () => (
  <div>
    <Header />
    <Menu />
    <ContentContainer />
    <Illustration />
    <Footer />
  </div>
);

export default Home;
