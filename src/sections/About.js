import React from "react";
import { Page } from "../styles";
import Navbar from "../components/Navbar";
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
      <Page>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <Section>
            <Box
              initial={{ x: "-70vw"  }}
              animate={{ x: 0}}
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
                <a
                  href="https://www.instagram.com/olipollitzer/"
                  target="_blank"
                >
                  <img src={instagram} className="social" />
                </a>
                <a
                  href="https://www.instagram.com/olipollitzer/"
                  target="_blank"
                >
                  <img src={linkedin} className="social" />
                </a>
              </Social>
            </Box>
          </Section>
        </motion.div>
      </Page>
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
  position: relative;
  top: 110px;
  left: -300px;
  width: 650px;
  height: 500px;
  background-color: #a6aa97;
  margin-right: 190px;
  opacity: 0.9;

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

  p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1.2px;
    line-height: 35px;
    color: #ffffff;
    margin-top: 50px;
  }
`;

const H2 = styled(motion.h2)`
  color: #ffffff;
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 55px;
  margin-top: 50px;
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

  img {
    :hover {
      scale: 1.1;
    }
  }
`;

export default About;
