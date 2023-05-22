import React, { useEffect, useState } from "react";
import "../App.css";
// import logo from "../assets/logo3/cuadrado-OLI_Black - Fondo Transparente (1).png";
// import logo1 from "../assets/logo3/OLI_Beige I.png";
import logo2 from "../assets/logo3/OLI_Beige II.png";
// import logo3 from "../assets/logo3/cuadrado-OLI_Black - Fondo Transparente (1).png";
// import logo4 from "../assets/logo3/cuadrado-OLI_Black - Fondo Transparente (1).png";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Pictures from "../components/Pictures";
import { Page } from "../styles";
import ScrollToTop from "react-scroll-to-top";
import WorkProgress2 from "./WorkProgress2";
import books3 from "../assets/books/po.jpg";
import { useLocation } from "react-router-dom";
import ServiceHover from "./ServicesHover";

const Home = () => {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const medium = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    const section = location.search.slice(1);

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Page>
        <CoverSection>
          <Parallax speed={1}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Logo src={logo2} />
            </motion.div>
          </Parallax>
        </CoverSection>
        <section id="services">
          {/* <ServiceNew /> */}
          <ServiceHover />
        </section>
        <section id="work-progress">
          <WorkProgress2 />
        </section>
        <section id="pictures">
          <Pictures />
        </section>

        {width >= medium ? (
          <>
            <ScrollToTop
              style={{
                backgroundColor: "transparent",
              }}
              color="#5F5F67"
              smooth
            />
          </>
        ) : (
          <></>
        )}
      </Page>
    </>
  );
};

const Logo = styled.img`
  position: absolute;
  height: 1300px;
  width: 750px;
  top: -300px;

  @media only screen and (max-width: 1160px) {
    height: 1000px;
    width: 600px;
    top: -180px;
  }

  @media only screen and (max-width: 700px) {
    display: none;


    /* height: 1000px;
    width: 600px;
    top: -180px; */
    /* height: 300px;
  width: 300px;

  left: -160px; */
  }
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
