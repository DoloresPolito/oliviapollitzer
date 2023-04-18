import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import plus from "../assets/icons/services/plus-blue.png";

const Services = () => {
  const animation1 = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  // const [showButton, setShowButton] = useState(false);

  const [t] = useTranslation("global");

  useEffect(() => {
    if (inView) {
      animation1.start({
        opacity: 1,
        transition: {
          duration: 0.75,
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
    <>
      <ServiceSection ref={ref}>
        <Parallax speed={-13}>
          <Box>
            <Content>
              <H2>{t("services.title")}</H2>
              <BoldLine />
              <motion.p animate={animation1}>{t("services.subtitle")}</motion.p>
            </Content>
          </Box>
        </Parallax>

        <ServicesContainer animate={animation1}>
          <Row1
            onClick={() => handleNavigate("editing")}
          >
            <div>
              <h4>{t("services.editionTitle")}</h4>
              <p>{t("services.editionText")}</p>

              <section>
                <img src={plus} />
              </section>
            </div>
          </Row1>

          <Line />

          <Row2 onClick={() => handleNavigate("writing")}>
            <div>
              <h4>{t("services.writingTitle")}</h4>
              <p>{t("services.writingText")}</p>
              <section>
                <img src={plus} />
              </section>
            </div>
          </Row2>
          <Line />
        </ServicesContainer>
      </ServiceSection>
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
`;

const Box = styled.div`
  position: relative;
  top: 10px;
  width: 600px;
  height: 370px;
  background-color: #506072;
  margin-right: 190px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1.1px;
    line-height: 30px;
    color: #ffffff;
    margin-top: 25px;
  }
`;

const H2 = styled.h2`
  color: #ffffff;
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 55px;
  margin-top: 50px;
`;

const ServicesContainer = styled(motion.div)`
  height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: -30px; */
`;

const Line = styled.div`
  border-top: 1px solid #506072;
  height: 2px;
  width: 470px;
  margin-left: 60px;
  /* margin-top: 20px; */
`;

const BoldLine = styled.div`
  border-top: 4px solid #ffffff;
  height: 2px;
  max-width: 120px;
  margin-top: -45px;
  margin-bottom: 15px;
`;

const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  margin-left: 50px;
  padding-left: 20px;
  width: 500px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1;

  :hover section {
    transform: translateX(0px);
    transition: 0.5s;
  }

  h4 {
    color: #506072;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 20px;
    font-style: bold;
    letter-spacing: 1px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1px;
    font-weight: 400;
    color: #506072;
    margin-top: -15px;
    width: 500px;
  }

  section {
    background-color: #eaeaea;
    /* opacity: 0.9; */
    height: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 470px;
    position: absolute;
    top: 1014px;
    z-index: -1;
    transform: translateX(100vw);

    img {
      height: 30px;
      width: 30px;
      margin-right: 30px;
      margin-bottom: 5px;
    }
  }


`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  margin-left: 50px;
  padding-left: 20px;
  width: 500px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1;

  :hover section {
    transform: translateX(0px);
    transition: 0.5s;
  }

  h4 {
    color: #506072;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 20px;
    font-style: bold;
    letter-spacing: 1px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1px;
    font-weight: 400;
    color: #506072;
    margin-top: -15px;
    width: 500px;
  }

  section {
    background-color: #e8e8e8;
    /* opacity: 0.9; */
    height: 137px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 470px;
    position: absolute;
    top: 1165px;
    z-index: -1;
    transform: translateX(50vw);

    img {
      height: 30px;
      width: 30px;
      margin-right: 30px;
      margin-bottom: 5px;
    }
  }

`;

const Button = styled.div``;

export default Services;
