import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toplogo from "../assets/logo2/isologo_Black - Fondo Transparente.png";
import toplogoWhite from "../assets/logo2/isologo_Grey - Fondo Transparente.png";

const Tabs = ({ mode}) => {
  const [t] = useTranslation("global");


  return (
    <TabsBox mode={mode} >
       {/* {view === "work" || view === "oliviapollitzer"? (
        <Logo src={toplogoWhite} />
      ) : ( */}
        {/* <Logo src={toplogo} /> */}
      {/* )} */}
      <Link to="/oliviapollitzer">HOME</Link>
      <Link to="/work">{t("navbar.1")}</Link>
      <Link to="/about">{t("navbar.2")}</Link>
      <Link to="/contact">{t("navbar.3")}</Link>
      <Link to="/blog">{t("navbar.4")}</Link>
    </TabsBox>
  );
};

// NAVBAR ABIERTA (NO HAMBURGER)

const Logo = styled.img`
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 300px;
  width: 190px;
`;

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 0;
  margin-top: 140px;
  /* padding-top: 100px; */
/* margin: auto; */


  a {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-decoration: none;
    color: #5f5f67;
    cursor: pointer;
    padding: ${(props) => (props.mode === "large" ? "0 50px" : "25px 0")};
    /* background: transparent; */
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

`;

export default Tabs;
