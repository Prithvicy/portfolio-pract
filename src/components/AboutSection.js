import React from "react";
import prith from "../img/prith.jpg";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span> dreams</span> come
              {/*span used here for selecting one text*/}
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact me for any photography or videography ideas that you have we
          Have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={prith} alt="guy with cam" />
      </Image>
    </About>
  );
};

//styled component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 5em 10rem;
  justify-content: space-between;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  font-weight: lighter;
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div``;

export default AboutSection;
