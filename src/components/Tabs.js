import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Tabs = ({ mode }) => {
  const [t] = useTranslation("global");

  return (
    <TabsBox mode={mode}>
      {/* <Link to="" spy={true} smooth={false} offset={-50} duration={800}>
  
        </Link>
        <Link to="" spy={true} smooth={false} offset={-13} duration={800}>
  
        </Link> */}
      {/* <Link to="" spy={true} smooth={false} offset={70} duration={800}>
          {t("navbar.3")}
        </Link> */}
      {/* <Link to="" spy={true} smooth={false} offset={70} duration={800}>
          {t("navbar.4")}
        </Link> */}

      <RouterLink to="/work">{t("navbar.1")}</RouterLink>

      <RouterLink smooth duration={3000} to="/about">
        {t("navbar.2")}
      </RouterLink>
      <RouterLink smooth duration={3000} to="/contact">
        {t("navbar.3")}
      </RouterLink>
      {/* <RouterLink  to="/blog" >
        {t("navbar.4")}
          </RouterLink> */}
    </TabsBox>
  );
};

// NAVBAR ABIERTA (NO HAMBURGER)

const TabsBox = styled.div`
  margin-top: 18px;
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 0;
  

  a {
    font-family: "Poppins";
    font-weight: 400;
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

  div {
    background-color: blue;
    display: flex;
    background-color: violet;
  }
`;

export default Tabs;
