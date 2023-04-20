import React, { useEffect } from "react";
import "../App.css";
import logo from "../assets/logo3/cuadrado-OLI_Black - Fondo Transparente (1).png";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Pictures from "../components/Pictures";
import Navbar from "../components/Navbar";
import { Page } from "../styles";
import ScrollToTop from "react-scroll-to-top";
import ServiceNew from "./Services";
import WorkProgress2 from "./WorkProgress2";
import books3 from "../assets/books/trasparent.png";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.hash.slice(1);
    console.log("section", section);
    if (section) {
      scroll.scrollTo(`#${section}`, { smooth: true });
    }
  }, [location]);

  return (
    <>
      <Page>
        <Navbar />
        <CoverSection>
          <Parallax speed={1}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <Logo src={logo} />
            </motion.div>
          </Parallax>
        </CoverSection>
        <section id="services">
          <ServiceNew />
        </section>
        <WorkProgress2 />

        <Pictures />

        <ScrollToTop
          style={{
            backgroundColor: "transparent",
          }}
          color="#5F5F67"
          smooth
        />
      </Page>
    </>
  );
};

const Logo = styled.img`
  position: absolute;
  top: 100px;
  left: -280px;
  height: 500px;
  width: 500px;
`;

const CoverSection = styled.div`
  width: 100%;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  height: auto;
  background: url(${books3}) no-repeat center center fixed;
  background-size: cover;
`;

export default Home;
