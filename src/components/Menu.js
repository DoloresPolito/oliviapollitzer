import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";

import { LanguageButton } from "../styles";
const Menu = ({ open }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <StyledMenu open={open} >
      <Tabs open={open} />
      <section>
        <LanguageButton onClick={() => i18n.changeLanguage("es")}>
          ES
        </LanguageButton>
        /
        <LanguageButton onClick={() => i18n.changeLanguage("en")}>
          EN
        </LanguageButton>
      </section>
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  background-color: #f6f6f6 !important;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  height: 2685px;
  width: ${({ open }) => (open ? "50%" : "0px")};
  padding: 50px 30px 30px 40px;
  position: absolute;
  top: 0px;
  right: 0px;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  text-align: center;
  z-index: 2 !important;



  section {
    position: absolute;
    margin-top: 410px;
    left: 45px;
    align-self: center;
    font-size: 14px;
  }
`;

export default Menu;
