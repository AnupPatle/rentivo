import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import Properties from "./components/Properties";
import HowItWorks from "./components/HowItWorks";
import Benifits from "./components/Benifits";
import Testimonials from "./components/Testimonials";
import PropertiesCategories from "./components/PropertiesCategories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SearchSection />
      <Properties />
      <HowItWorks />
      <Benifits />
      <Testimonials />
      <PropertiesCategories />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
