import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import Menu from "./Menu";
import "../App.css";
import { Container, LanguageButton } from "../styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import toplogo from "../assets/logo2/isologo_Black - Fondo Transparente.png";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram/instagram-blue.png";
import { Link as SmoothLink } from "react-scroll";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setView(window.location.href.split("/")[3]);
  }, []);

  const [view, setView] = useState("home");

  const [isOpen, setOpen] = useState(false);
  const medium = 1045;
  const [t, i18n] = useTranslation("global");

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);

    localStorage.setItem("lng", lng);
  };

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/oliviapollitzer");
  };

  return (
    <NavbarSection view={view}>
      <Logo src={toplogo} onClick={() => handleHome()} />

      <NavbarContainer view={view}>
        {width >= medium ? (
          <>
            <TabsBox view={view} mode="large">
              {view === "oliviapollitzer" ? (
                <>
                  <SmoothLink
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={800}
                  >
                    {t("navbar.0")}
                  </SmoothLink>
                </>
              ) : (
                <></>
              )}

              <Link to="/work" onClick={() => setView("work")}>
                {t("navbar.1")}
              </Link>

              <Link to="/about" onClick={() => setView("about")}>
                {t("navbar.2")}
              </Link>

              <Link to="/contact" onClick={() => setView("contact")}>
                {t("navbar.3")}
              </Link>

              <a href="https://www.instagram.com/olipollitzer/" target="_blank">
                <img src={instagram} className="social" />
              </a>
            </TabsBox>

            <section>
              <LanguageButton view={view} onClick={() => handleChangeLng("es")}>
                ES{" "}
              </LanguageButton>
              /
              <LanguageButton view={view} onClick={() => handleChangeLng("en")}>
                {" "}
                EN
              </LanguageButton>
            </section>
          </>
        ) : (
          <div className="menu-box">
            <Hamburger toggled={isOpen} toggle={setOpen} />

            <Menu view={view} open={isOpen} />
          </div>
        )}
      </NavbarContainer>
    </NavbarSection>
  );
};

const Logo = styled.img`
  cursor: pointer;
  position: absolute;
  left: -30px;
  top: -103px;
  height: 280px;
  width: 160px;

  @media only screen and (max-width: 1045px) {
    display: none;
  }
`;

const NavbarSection = styled.div`
  display: flex;
  z-index: 1;
  background: "#f6f6f6";
  width: 100%;
  height: 75px;
  align-items: center;
  justify-content: flex-end;
  /* border-bottom: 1px solid #5f5f67; */

  @media only screen and (max-width: 700px) {
    /* margin-top: 10px ; */
  }
  .hamburger-react {
    position: relative;
    top: 20px;
    left: -40px;
    z-index: 3;
    color: #5f5f67;
  }

  .isClosed .hamburger-react :nth-child(3) {
    background: #6f5358 !important;
    left: 22px !important;
    width: 18px !important;
  }
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;

  section {
    position: absolute;
    left: 130px;
    top: 30px;
    align-self: center;
    font-size: 14px;
    color: #5f5f67;
  }

  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
`;

const TabsBox = styled.div`
  margin-top: px;
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 0;

  a {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    color: #5f5f67;
    cursor: pointer;

    /* padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")}; */
    padding-right: 50px;
    background: transparent;
    border: 0px solid;
    display: block;
    height: 30px;
    display: flex;
    align-items: center;
    &:hover,
    &:active,
    &:focus {
      /* text-decoration: underline; */
      font-weight: 600;
    }
  }
  img {
    height: 25px;
    width: 25px;
  }
`;

export default Navbar;
