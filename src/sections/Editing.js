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
          <Container>
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
            <Parallax speed={-10}>
              <RightBox
                initial={{ x: "70vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.75,
                  bounce: 0.1,
                }}
              >
                <div>
                <Text2 style={{ fontWeight: "600" }}>
                  {t("editing.text3")}
                </Text2>
                </div>
              </RightBox>
            </Parallax>
          </Container>
        </WritingSection>
      </motion.div>
    </Page>
  );
};

const WritingSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #5f5f67;
  /* height: auto; */
  background-color: #f6f6f6;
`;

const H2 = styled(motion.h2)`
  color: #959985;
  font-family: 'Bebas Neue', cursive;
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
  /* display: flex;
justify-content: center; */
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: 1.2px;
  font-weight: 400;
  /* align-self:center;
text-align:center; */
  padding-top: 10px;
  color: #252525;
  width: 700px;
  text-align: justify;
  margin-top: 50px;
`;

export const Text2 = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  font-weight: 500;
  padding-top: 0px;
  color: #959985;
  width: 200px;
  text-align: left;
  text-transform: uppercase;

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

  :hover {
    font-weight: 500;
  }
`;

export const Text3Bold = styled(motion.p)`
  font-weight: 700;
`;

const LeftBox = styled.div`
  margin-left: 200px;
`;

const RightBox = styled(motion.div)`
  margin-left: 940px;
  margin-top: -480px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    border-left: 4px solid #959985;
    border-bottom: 4px solid #959985;
    padding-bottom: 0px;
      padding-left: 14px;

    p {

    }
  }
`;

export default Editing;
