import React from "react";
import ServicesSection from "../components/ServicesSection";
//importing page components here since like all part of the page
import AboutSection from "../components/AboutSection";

import FaqSection from "../components/FaqSection";

const AboutUs = () => {
  return (
    <div>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
};

export default AboutUs;
