import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";
import logo from "../assets/footer-olivia pollitzer__Black.png";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FooterNew = () => {
  const [t] = useTranslation("global");

  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.75,
          ease: "easeIn",
        },
      });
    }

    if (!inView) {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <FooterSection mode={width}>
      {width > 800 ? (
        <>
          <FooterContainer mode={width} ref={ref}>
            <motion.div>
              {" "}
              <Logo src={logo} />
            </motion.div>

            <Column1 animate={animation}>
              <FooterTitle>{t("footer.title")}</FooterTitle>
              <ul className="list">
                <a href="mailto:oliviapollitzer@gmail.com">
                  {" "}
                  <li>oliviapollitzer@gmail.com</li>
                </a>
                <a
                  href="https://www.instagram.com/olipollitzer/"
                  target="_blank"
                >
                  {" "}
                  <li>Instagram</li>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=541151082715"
                  target="_blank"
                >
                  {" "}
                  <li>LinkedIn</li>
                </a>
              </ul>
            </Column1>

            <Column2 animate={animation}>
              {" "}
              <ul className="list">
                <RouterLink to="/work">
                  {" "}
                  <li> {t("footer.work")}</li>{" "}
                </RouterLink>
                <RouterLink to="/about">
                  {" "}
                  <li>{t("footer.about")}</li>{" "}
                </RouterLink>
                <RouterLink to="/contact">
                  {" "}
                  <li>{t("footer.contact")}</li>{" "}
                </RouterLink>
              </ul>
            </Column2>

            <CopyRight animate={animation}>
              <p> {t("footer.rights")}</p>
            </CopyRight>
          </FooterContainer>
        </>
      ) : (
        <MobileSection>
          <MobileContainer>
            <FooterTitle>{t("footer.title")}</FooterTitle>
            <Div>
              <ul className="list">
                <a href="mailto:oliviapollitzer@gmail.com">
                  {" "}
                  <li>oliviapollitzer@gmail.com</li>
                </a>
                <a
                  href="https://www.instagram.com/olipollitzer/"
                  target="_blank"
                >
                  {" "}
                  <li>Instagram</li>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=541151082715"
                  target="_blank"
                >
                  {" "}
                  <li>LinkedIn</li>
                </a>
              </ul>{" "}
              <ul className="list">
                <RouterLink to="/work">
                  {" "}
                  <li> {t("footer.work")}</li>{" "}
                </RouterLink>
                <RouterLink to="/about">
                  {" "}
                  <li>{t("footer.about")}</li>{" "}
                </RouterLink>
                <RouterLink to="/contact">
                  {" "}
                  <li>{t("footer.contact")}</li>{" "}
                </RouterLink>
              </ul>
            </Div>
            <div>
              {" "}
              <Logo2 src={logo} />
            </div>

            <CopyRight2>
              <p> {t("footer.rights")}</p>
            </CopyRight2>
          </MobileContainer>
        </MobileSection>
      )}
    </FooterSection>
  );
};

const FooterSection = styled.div`
  height: 300px;
  background-color: #5F5F67;
  color: #f6f6f6;
  display: flex;
  width: 100%;
  margin: auto;
  height: ${(props) => (props.mode > 800 ? "300px" : "400px")};
`;

const FooterContainer = styled(motion.div)`
  display: flex;
  height: 200px;
  width: 85%;
  margin: auto;
  position: relative;
`;

const Logo = styled.img`
  position: relative;
  left: 20px;
  width: 380px;
  top: 10px;

  @media only screen and (max-width: 1150px) {
    width: 300px;
    top: 30px;
  }
`;

const Logo2 = styled.img`
  width: 240px;
`;

const Column1 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 310px;

  ul {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
    margin-left: -35px;
    margin-top: -5px;
  }

  li {
    text-decoration: underline #5F5F67;
    color: #f6f6f6;
    font-weight: 400;
  }

  @media only screen and (max-width: 1150px) {
    right: 160px;
    ul {
      font-size: 13px;
    }
  }
`;

const Column2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 67px;
  margin-right: 10px;
  position: absolute;
  right: 120px;

  ul {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
  }

  li {
    text-decoration: underline #5F5F67;
    color: #f6f6f6;
    font-weight: 400;
  }

  @media only screen and (max-width: 1150px) {
    right: 30px;
    ul {
      font-size: 13px;
    }
  }
`;

const FooterTitle = styled.h4`
  font-size: 20px;
  font-family: "Playfair Display";
  line-height: 30px;
  font-weight: 700;
  letter-spacing: 1px;

  @media only screen and (max-width: 800px) {
    margin-bottom: 20px;
    margin-top: 32px;
  }
`;

const CopyRight = styled(motion.div)`
  position: absolute;
  bottom: -40px;
  left: 90px;

  p {
    font-size: 13px;
    font-family: "Poppins";
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1150px) {
    left: 30px;
  }
`;

const CopyRight2 = styled.div`
  display: flex;

  p {
    font-size: 12px;
    font-family: "Poppins";
    line-height: 30px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 30px;

  ul {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    list-style: none;
    margin-right: 40px;
  }

  li {
    text-decoration: underline #5F5F67;
    color: #f6f6f6;
    font-weight: 400;
  }
`;

const MobileSection = styled.div`
  display: flex;
  justify-content: center !important;
  margin: 0 auto;
`;
export default FooterNew;
