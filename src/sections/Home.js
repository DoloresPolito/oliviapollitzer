import React, { useEffect, useState } from "react";
import "../App.css";
// import logo from "../assets/logo3/cuadrado-OLI_Black - Fondo Transparente (1).png";
// import logo1 from "../assets/logo3/OLI_Beige I.png";
import logo2 from "../assets/logo3/cuadradoOLI_Grey.png";
// import logo3 from "../assets/logo3/cuadrado-OLI_Black - Fondo Transparente (1).png";
// import logo4 from "../assets/logo3/cuadrado-OLI_Black - Fondo Transparente (1).png";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Pictures from "../components/Pictures";
import { Page } from "../styles";
import ScrollToTop from "react-scroll-to-top";
import WorkProgress2 from "./WorkProgress2";
import books from "../assets/photos/herolow.jpg";
import booksmobile from "../assets/photos/herolowmobile.png";
import { useLocation } from "react-router-dom";
import ServiceHover from "./ServicesHover";

const Home = () => {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const medium = 800;
  const small = 450;

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

      {width >= small ? (<>
        <CoverSection width={width}>
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
      
      </>) : (<>
      
        <CoverSectionMobile width={width}>
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
        </CoverSectionMobile></>)}
       
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
  height: 600px;
  width: 600px;
  top: 40px;

  @media only screen and (max-width: 1160px) {
    height: 500px;
    width: 500px;
    top: 80px;
  }

  @media only screen and (max-width: 700px) {
    height: 400px;
    width: 400px;
    top: 110px;
  }

  @media only screen and (max-width: 450px) {
    height: 300px;
    width: 300px;
    top: 110px;
  }
`;

const CoverSection = styled.div`
  width: 100%;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  /* height: auto; */
  background: url(${books}) no-repeat center center fixed;
  background-size: cover;



  @media only screen and (max-width: 450px) {
    height: 500px !important;
  }
`;

const CoverSectionMobile = styled.div`
  width: 100%;
  /* height: 100vh !important; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;

  background: url(${booksmobile}) no-repeat center center;
  background-size: cover;

  /* height: calc(100vh - 100px); */

height: 80vh;
`;

export default Home;
