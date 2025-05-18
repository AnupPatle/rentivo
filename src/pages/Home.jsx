import React from "react";
import Properties from "../components/Properties";
import HowItWorks from "../components/HowItWorks";

import Contact from "../components/Contact";
import PropertiesCategories from "../components/PropertiesCategories";
const Home = () => {
  return (
    <>
      <Header />

      <div id="hero">
        <Hero />
      </div>

      <div id="featured-properties">
        <Properties />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="property-categories">
        <PropertiesCategories />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
