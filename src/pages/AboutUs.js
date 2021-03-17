import React from "react";
import ServicesSection from "../components/ServicesSection";
//importing page components here since like all part of the page
import AboutSection from "../components/AboutSection";

const AboutUs = () => {
  return (
    <div>
      <AboutSection />
      <ServicesSection />
    </div>
  );
};

export default AboutUs;
