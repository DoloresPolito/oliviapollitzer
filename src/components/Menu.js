import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";

import { LanguageButton } from "../styles";
const Menu = ({ open, setOpen, view }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <StyledMenu open={open} >
      <Tabs open={open} setOpen={setOpen} view={view}/>
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

  section {
    position: absolute;
    margin-top: 220px;
    left: 11px;
    align-self: center;
    font-size: 14px;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #EAE9E5 ;
  height: 100vh !important;
  text-align: left;
  padding: 150px 100px 30px 30px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom:0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};


`;

export default Menu;
