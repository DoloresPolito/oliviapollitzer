import { Page } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const Editing2 = () => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <WritingSection>
          <section>
            <H2
              initial={{ y: "-40%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t("editing.title")}
            </H2>
            <BoldLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
            />

            <div className="parrafo">
              <div>
                <BoxText>{t("editing.text3")}</BoxText>{" "}
              </div>
              <p> {t("editing.text")}</p>
            </div>

            <Text3
              onClick={() => handleContact()}
              initial={{ x: "-30vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                bounce: 0.1,
              }}
            >
              {t("editing.text2")}
            </Text3>
          </section>
        </WritingSection>
      </motion.div>
    </Page>
  );
};

const WritingSection = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  color: #5f5f67;
  height: auto;
  background-color: #f6f6f6;
  justify-content: center;

  section {
    width: 80%;
    margin: 0 auto;
  }

  /* 
  div {
    width: 70%;
    display: flex;
    flex-direction: column;
 
  } */
`;

const H2 = styled(motion.h2)`
  color: #959985;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 30px;
  margin-left: 20px;
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #959985;
  height: 2px;
  max-width: 120px;
  margin-top: -45px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

export const Text1 = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 1.2px;
  font-weight: 500;
  padding-top: 10px;
  color: #5f5f67;
  text-align: justify;
  margin-top: 50px;

  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 32px;
  }
`;

export const Text3 = styled(motion.p)`
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
  font-weight: 400;
  padding-top: 10px;
  color: #959985;
  width: 600px;
  text-align: justify;
  margin-top: 30px;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  max-width: 100%;
  margin-left: 20px;

  @media only screen and (max-width: 700px) {
    font-size: 13px;
  }

  :hover {
    font-weight: 500;
  }
`;

export const Text3Bold = styled(motion.p)`
  font-weight: 700;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column !important;
  /* flex: 0 0 80%; */
  width: 80%;
  background-color: red;

  section {
    overflow: auto;
    width: 700px;
    background-color: blue;

    div {
      float: right !important;
      margin-right: 20px;
    }

    p {
      font-family: "Montserrat", sans-serif;
      font-size: 15px;
      line-height: 36px;
      letter-spacing: 1.2px;
      font-weight: 500;
      padding-top: 10px;
      color: #5f5f67;
      /* text-align: justify;
      margin-top: 50px; */

      @media only screen and (max-width: 700px) {
        font-size: 13px;
        line-height: 32px;
      }
    }
  }
`;

const RightBox = styled(motion.div)`
  margin-left: 40px;
  flex: 30%;
  margin-top: 80px;

  @media only screen and (max-width: 1308px) {
    margin-left: 0px;
    margin-top: 0px;
  }

  div {
    border-left: 4px solid #959985;
    border-bottom: 4px solid #959985;
    padding-left: 24px;
    height: 180px;
    flex: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1308px) {
      border-left: none;
      border-bottom: none;
      padding-left: 0px;
      margin-top: -30px;
    }

    p {
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 1px;
      font-weight: 600;
      padding-top: 0px;
      color: #959985;
      text-align: left;
      text-transform: uppercase;
      @media only screen and (max-width: 700px) {
        font-size: 12px;
      }
    }
  }
`;

const BoxText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 600;
  padding-top: 0px;
  color: #fefefe;
  text-align: left;
  text-transform: uppercase;
  padding: 15px;
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export default Editing2;
