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

            <Parrafo>
              <div>
                <BoxText>{t("editing.text3")}</BoxText>{" "}
              </div>
              <p> {t("editing.text")}</p>
            </Parrafo>

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
    font-size: 16px;
  }

  :hover {
    font-weight: 500;
  }
`;

export const Text3Bold = styled(motion.p)`
  font-weight: 700;
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

const Parrafo = styled.div`
  width: 1040;
  height: 440;
  padding: 20px 20px;
  font-size: 15px;
  line-height: 1.5;
  border-radius: 5px;


  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 1.2px;
  font-weight: 500;
  padding-top: 10px;
  color: #5f5f67;
  margin-right: 200px;

  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 32px;
    margin-right: 0px;
  }

  div {
    width: 250px;
    height: auto;
    float: right !important;
    background-color: #959985;
    color: white;
    margin: 10px;

    @media only screen and (max-width: 500px) {
  width: 100%;
  }
  }
`;

export default Editing2;
