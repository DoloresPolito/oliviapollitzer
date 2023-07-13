import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import plus from "../assets/icons/services/plus-blue.png";

const ServiceHover = () => {
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const [t] = useTranslation("global");

  useEffect(() => {
    if (inView) {

      animation3.start({
        opacity: 1,
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
      });
      animation2.start({
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeIn",
        },
      });

      animation1.start({
        x: 0,
        transition: {
          duration: 0.75,
          bounce: 0.5,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation3.start({
        opacity: 0,
      });
      animation2.start({
        opacity: 0,
      });

      animation1.start({
        x: "20%",
      });
    }
  }, [inView]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <>
      <>
        <ServiceSection ref={ref}>
    
          {width >= 1160 ? (<>
                <Parallax speed={-8}>
            <Box animate={animation2}>
            <Content>
              <H2>{t("services.title")}</H2>
              <BoldLine />
              <motion.p animate={animation2}>{t("services.subtitle")}</motion.p>
            </Content>
          </Box>
              </Parallax>
          </>)
          : (<>
          
          <Box >
          <Parallax speed={3}>
            <Content>
              <H2 animate={animation3}>{t("services.title")}</H2>
              <BoldLine animate={animation3} />
              <motion.p animate={animation3}>{t("services.subtitle")}</motion.p>
            </Content>
            </Parallax>
          </Box>
          </>)}
         
      

          {width >= 1160 ? (
            <>
              <ServicesContainer animate={animation2}>
                <div className="hoverable-container">
                  <div className="hoverable">
                    <h4>{t("services.editionTitle")}</h4>
                    <p>{t("services.editionText")}</p>

                    <div className="overlay">
                      <a

                        onClick={() => handleNavigate("editing")}
                      >
                        <img src={plus} alt="plus" />
                      </a>
                    </div>
                  </div>
                  <div className="hoverable">
                    <h4>{t("services.writingTitle")}</h4>
                    <p>{t("services.writingText")}</p>
                    <div className="overlay">
                      <a
                        onClick={() => handleNavigate("writing")}
                      >
                        <img src={plus} alt="plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </ServicesContainer>
            </>
          ) : (
            <>
              <ServiceContainerMobile 
              // animate={animation1}
              >
                <div onClick={() => handleNavigate("editing")}>
                  <h4>{t("services.editionTitle")}</h4>
                  <p>{t("services.editionText")}</p>
                </div>
                <MobileLine />
                <div onClick={() => handleNavigate("writing")}>
                  <h4>{t("services.writingTitle")}</h4>
                  <p>{t("services.writingText")}</p>
                </div>
                <MobileLine />
              </ServiceContainerMobile>
            </>
          )}
        </ServiceSection>
      </>
    </>
  );
};

const ServiceSection = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f6f6f6;
  color: #5f5f67;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 1160px) {
    flex-wrap: wrap;
    align-items: start;
    height: auto;
  }
`;

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 370px;
  background-color: #a6aa97;



  @media only screen and (max-width: 1160px) {
    width: 100%;
    height: 320px;
  }

  @media only screen and (max-width: 500px) {
    height: 400px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;


  @media only screen and (max-width: 1160px) {
    width: 70%;
  }

  p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1.1px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 500;
    margin-top: 25px;
    text-align: left;
  }
`;

const H2 = styled(motion.h2)`
  color: #ffffff;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 50px;
`;

const ServicesContainer = styled(motion.div)`
  width: 550px !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 180px;

  p{
    font-weight: 500;
    color: #5F5F67;
  }
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #ffffff;
  height: 2px;
  max-width: 120px;
  margin-top: -45px;
  margin-bottom: 15px;
`;

const ServiceContainerMobile = styled(motion.div)`
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 70%;
    height: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;


    h4 {
      color: #5F5F67;
      font-size: 25px;
      font-family: "Bebas Neue", cursive;
      font-weight: 600;
      letter-spacing: 1.8px;
    }

    p {
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 1px;
      font-weight: 500;
      color: #5F5F67;
      text-align: left;
      margin-top: -10px;

      @media only screen and (max-width: 700px) {
        font-size: 13px;
  
      }
    }
  }
`;

const MobileLine = styled.div`
  border-top: 1.5px solid #5F5F67;;
  width: 100%;
  height: 2px !important;
  margin-top: 10px !important;

  @media only screen and (max-width: 500px) {
    margin-top: 30px !important;
  }

  @media only screen and (max-width: 380px) {
    margin-top: 70px !important;
  }

  @media only screen and (max-width: 310px) {
    margin-top: 70px !important;
  }
`;

export default ServiceHover;
