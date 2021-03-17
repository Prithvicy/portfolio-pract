import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span> dreams</span> come
              {/*span used here for selecting one text*/}
            </h2>
            <div className="hide">
              <h2>true</h2>
            </div>
          </div>
        </div>
        <p>
          Contact me for any photography or videography ideas that you have we
          Have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="huy with cam" />
      </div>
    </div>
  );
};

export default AboutSection;
