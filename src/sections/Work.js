import { Section, Title2, Container, Page, Title, Text } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Work = () => {
  const [t] = useTranslation("global");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar view="work" />

        <Section>
          <WorkContainer>
            <Title2>Work</Title2>
            <motion.ul variants={container} initial="hidden" animate="show">
              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Editing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Writing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>

              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Editing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Writing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>

              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Editing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Writing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>

              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Editing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>
              <motion.li variants={item}>
                <WorkLi>
                  <WorkTitle>Writing</WorkTitle>
                  <WorkText>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s.
                  </WorkText>
                </WorkLi>
              </motion.li>
            </motion.ul>
          </WorkContainer>
        </Section>
      </motion.div>
    </Page>
  );
};

const WorkTitle = styled.h4`
  display: flex;
  align-self: start;
  font-size: 15px;
  font-family: "Poppins";
  line-height: 10px;
  font-weight: 600;
  color: #dad6cc;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

const WorkText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  line-height: 30px;
  letter-spacing: 0.5px;
  font-weight: 400;

  padding-top: 5px;
  color: #dad6cc;
  width: 1000px;
  text-align: justify;
  width: 700px;
`;

const WorkLi = styled.div`
  margin-bottom: 40px;
`;

const WorkContainer = styled.div`
  /* margin: auto; */
  max-width: 800px;
  align-self: start;
  margin-left: 180px;

  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 24px;
    /* padding 24px 0;  */
  }
`;

export default Work;
