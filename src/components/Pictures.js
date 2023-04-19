import React, { useState, useEffect } from "react";
import "../App.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import picture1 from "../assets/pictures/1*.jpeg"
import picture2 from "../assets/pictures/2*.jpeg"
import picture3 from "../assets/pictures/3*.jpeg"
import picture4 from "../assets/pictures/4*.jpeg"
import picture5 from "../assets/pictures/pic3.jpg"

import picture6 from "../assets/pictures/pic2.jpg"

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
          {width > 1000 ? (
            <>
           
                <div >
                  <img
                    src={picture1}
                    className="gallery-image"
                    alt=""
                    style={{ padding: "2px" }}
                  />
                </div>
                <div >
                  <img
                    src={picture6}
                    className="gallery-image"
                    alt=""
                    style={{ padding: "2px" }}
                  />
                </div>
                <div >
                  <img
                    src={picture2}
                    className="gallery-image"
                    alt=""
                    style={{ padding: "2px" }}
                  />
                </div>
                <div >
                  <img
                    src={picture3}
                    className="gallery-image"
                    alt=""
                    style={{ padding: "2px" }}
                  />
                </div>
               
        
            </>
          ) : (
            <>
          
                <div >
                  <img
                    src={picture1}
                    className="gallery-image"
                    alt=""
                    style={{ padding: "2px" }}
                  />
                </div>
                <div >
                  <img
                    src={picture6}
                    className="gallery-image"
                    alt=""
                    style={{ padding: "2px" }}
                  />
                </div>
                <div >
                  <img
                    src={picture3}
                    className="gallery-image"
                    alt=""
                    style={{ padding: "2px" }}
                  />
                </div>
         
            </>
          )}
        </ResumeGallery>
      </div>
    </InstaResumeSection>
  );
};

const InstaResumeSection = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  height: 450px;
  background-color: #faf9f8;

  p {
    width: 200px;
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 15px;
    line-height: 28px;
    color: #5f5f67;
  }
`;

const ResumeGallery = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 190px;
  width: 950px;
`;

export default InstaResume;
