import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toplogo from "../assets/logo2/op-small.png";
import { Link as SmoothLink } from "react-scroll";

const Tabs = ({ mode, open, setOpen, view }) => {
  const [t] = useTranslation("global");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TabsBox mode={mode}>
      <Link to="/oliviapollitzer" onClick={() => handleClose()}>
        {" "}
        <Logo src={toplogo} />
      </Link>

      {view == "oliviapollitzer" || view == "oliviapollitzer?services" ? (
        <>
          <SmoothLink
            to="services"
            spy={true}
            smooth={true}
            offset={70}
            duration={800}
            className="navlist"
            onClick={() => handleClose()}
          >
            {t("navbar.0")}
          </SmoothLink>
        </>
      ) : (
        <>
          <Link to="/oliviapollitzer?services" onClick={() => handleClose()}>
            {t("navbar.0")}{" "}
          </Link>
        </>
      )}

      <Link to="/work" onClick={() => handleClose()}>
        {t("navbar.1")}
      </Link>
      <Link to="/bio" onClick={() => handleClose()}>
        {t("navbar.2")}
      </Link>
      <Link to="/contact" onClick={() => handleClose()}>
        {t("navbar.3")}
      </Link>
    </TabsBox>
  );
};

// NAVBAR ABIERTA (NO HAMBURGER)

const Logo = styled.img`
  cursor: pointer;
  position: absolute;
  left: 40px;
  top: 120px;
  height: 90px;
  width: 60px;
`;

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 5;
  margin-top: 80px;

  a {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: #5f5f67;
    cursor: pointer;
    padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")};
    border: 0px solid;
    display: flex;
    align-items: center;
    width: 100px;

    height: 40px;
    padding: 10px;
    margin: 0px 35px 0 0;
    &:hover,
    &:active,
    &:focus {
    }
  }
`;

export default Tabs;
