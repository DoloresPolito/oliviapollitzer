import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";

const Menu = ({ open }) => {
  const [ i18n] = useTranslation("global");
  return (
    <StyledMenu open={open}>
      <Tabs open={open} />
      <section>
        <buton onClick={() => i18n.changeLanguage("es")}>ES</buton>/
        <buton onClick={() => i18n.changeLanguage("en")}>EN</buton>
      </section>
    </StyledMenu>
  );
};

export const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #dad6cc;
  height: 100vh;
  width: ${({ open }) => (open ? "80%" : "0px")};
  padding: 50px 30px 30px 40px;
  position: absolute;
  top: 0px;
  right: 0px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  text-align: center;
  z-index: -1 !important;

  section {
    position: absolute;
    margin-top: 370px;
    left: 40px;
    align-self: center;
    font-size: 14px;
  }
`;

export default Menu;
