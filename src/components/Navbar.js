import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import Menu from "./Menu";
import Tabs from "./Tabs";
import "../App.css";
import { Container} from "../styles";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const [isOpen, setOpen] = useState(false);
  const medium = 1045;
  const [t, i18n] = useTranslation("global");

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng)

    localStorage.setItem("lng", lng)

  }

  return (
    <NavbarSection>
      <NavbarContainer>
        {width >= medium ? (
          <>
            <Tabs mode="large" />
            <section>
              <buton style={{cursor: "pointer"}} onClick={() => handleChangeLng("es")}>ES  </buton>/
              <buton style={{cursor: "pointer"}} onClick={() => handleChangeLng("en")}>  EN</buton>
            </section>
        
          </>
        ) : (
          <div className="menu-box">
            <Hamburger toggled={isOpen} toggle={setOpen} />

            <Menu open={isOpen} />
          </div>
        )}
      </NavbarContainer>
    </NavbarSection>
  );
};

const NavbarSection = styled.div`
  display: flex;
  z-index: 100;
  background: transparent;
  width: 80%;
  border-bottom: 1px solid #5F5F67;
  height: 60px;
  margin: auto;
  color: #5F5F67;
  align-items: flex-end;
  justify-content: flex-start;



  

  @media only screen and (max-width: 700px) {
    /* margin-top: 10px ; */
  }
  .hamburger-react {
    position: relative;
    top:20px;
    left:-20px;
    z-index: 3;
    color: #5F5F67;
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
    left: 1230px;
    top:36px;
    align-self: center;
    font-size: 14px;
  }

  @media only screen and (max-width: 700px) {
    padding: 10px 0;
    align-items: center;
  }
`;

export default Navbar;
