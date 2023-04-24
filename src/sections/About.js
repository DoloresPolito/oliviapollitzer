import React from "react";
import { Page } from "../styles";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import about from "../assets/books/about-tras.png";
import instagram from "../assets/instagram/instagram-white.png";
import linkedin from "../assets/linkedin/linkedin-white.png";
import { motion } from "framer-motion";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        exit={{ opacity: 0 }}
      >
        <Section>
          <Box
            initial={{ x: "-70vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.75,
              bounce: 0.1,
            }}
          >
            <Content>
              <H2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeIn" }}
              >
                {" "}
                {t("about.title")}
              </H2>
              <BoldLine
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeIn" }}
              />
              <p>{t("about.text")}</p>
            </Content>

            <Social>
              <a href="https://www.instagram.com/olipollitzer/" target="_blank">
                <img src={instagram} className="social" />
              </a>
              <a href="https://www.linkedin.com/in/olivia-pollitzer-31396817a/" target="_blank">
                <img src={linkedin} className="social" />
              </a>
            </Social>
          </Box>
        </Section>
      </motion.div>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  height: auto;
  background: url(${about}) no-repeat center top;
  background-size: cover;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 180px;
  left: 0px;
  width: 650px;
  height: 500px;
  background-color: #a6aa97;
  margin-right: 190px;
  opacity: 0.9;

  @media only screen and (max-width: 1000px) {
    width: 550px;
    height: 450px;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
    top: 75px;
  }

  img {
    opacity: 0.8;
    height: 320px;
    width: 450px;
    margin-left: 100px;
    border-radius: 4px;
  }

  .social {
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: 15px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 1000px) {
    height: 400px;
  }

  @media only screen and (max-width: 550px) {
    justify-content: center;
  }

  p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1.2px;
    line-height: 35px;
    color: #ffffff;
    margin-top: 50px;
    text-align: left;

    @media only screen and (max-width: 1000px) {
      margin-top: 20px;
      line-height: 30px;
    }
    @media only screen and (max-width: 550px) {
      font-size: 13px;
    }
  }
`;

const H2 = styled(motion.h2)`
  /* color: #ffffff;
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 55px;
  margin-top: 50px; */

  color: #ffffff;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 50px;
  @media only screen and (max-width: 1000px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 550px) {
    margin-top: 150px;
  }
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #ffffff;
  height: 2px;
  max-width: 40px;
  margin-top: -45px;
  margin-bottom: 15px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 60px;
  margin-top: 20px;

  @media only screen and (max-width: 1000px) {
    margin-left: 40px;
    margin-top: -30px;
  }

  @media only screen and (max-width: 550px) {
    margin-left: 30px;
    margin-top: 100px !important;
  }

  img {
    :hover {
      scale: 1.1;
    }
  }
`;

export default About;
