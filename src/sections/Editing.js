import { Container, Page } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const Editing = () => {
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
          <div>
            <LeftBox>
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
              <Text1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >
                {t("editing.text")}
              </Text1>

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
            </LeftBox>
            {/* <Parallax speed={-10}> */}
            <RightBox
              initial={{ x: "70vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.75,
                bounce: 0.1,
              }}
            >
              <div>
                <p>{t("editing.text3")}</p>
              </div>
            </RightBox>
            {/* </Parallax> */}
          </div>
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
  flex-direction: row;
  color: #5f5f67;
  height: auto;
  background-color: #f6f6f6;
  justify-content: center;

  div {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const H2 = styled(motion.h2)`
  color: #959985;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 50px;
  margin-top: 30px;
  margin-left: -1px;
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #959985;
  height: 2px;
  max-width: 120px;
  margin-top: -45px;
  margin-bottom: 15px;
`;

export const Text1 = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 1.2px;
  font-weight: 400;
  padding-top: 10px;
  color: #252525;
  text-align: justify;
  margin-top: 50px;
  display: flex;
  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 32px;
  }
`;

export const Text3 = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 1px;
  font-weight: 400;
  padding-top: 10px;
  color: #252525;
  width: 600px;
  text-align: justify;
  margin-top: 30px;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  max-width: 100%;

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
  flex: 0 0 60%;

  @media only screen and (max-width: 1308px) {
    flex: 0 0 100%;
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

export default Editing;
