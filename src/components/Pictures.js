import React, { useState, useEffect } from "react";
import "../App.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import picture1 from "../assets/pictures/1*.jpeg";
import picture2 from "../assets/pictures/2*.jpeg";
import picture3 from "../assets/pictures/3*.jpeg";
import picture4 from "../assets/pictures/4*.jpeg";
import picture5 from "../assets/pictures/pic3.jpg";

import picture6 from "../assets/pictures/pic2.jpg";

const InstaResume = () => {
  const animation1 = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (inView) {
      animation1.start({
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation1.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <InstaResumeSection>
      <div ref={ref}>
        <ResumeGallery animate={animation1}>
          <>
            <div>
              <img src={picture1} className="gallery-image" alt="" />
            </div>
            <div>
              <img src={picture6} className="gallery-image" alt="" />
            </div>
            <div>
              <img src={picture2} className="gallery-image" alt="" />
            </div>
            <div>
              <img src={picture3} className="gallery-image" alt="" />
            </div>
          </>
        </ResumeGallery>
      </div>
    </InstaResumeSection>
  );
};

const InstaResumeSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  height: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #faf9f8;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const ResumeGallery = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 70%;
  }
  div {
    height: 250px;
    width: 250px;
    @media only screen and (max-width: 1100px) {
      height: 200px;
      width: 200px;
    }
    img {
      padding: 5px;

      @media only screen and (max-width: 799px) {
        padding: 10px;
        
      }
    }
  }
`;

export default InstaResume;
