import { Page } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
        <WorkSection>
          <motion.ul
            style={{ listStyle: "none" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate><p>{t(`work.1.year`)}</p></WorkDate>
                <Content>
                <WorkTitle>{t(`work.1.title`)}</WorkTitle>
                <More>{t(`work.1.subtitle`)}</More>
                </Content>
              
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate><p>{t(`work.2.year`)}</p></WorkDate>
                <Content>
                <WorkTitle>{t(`work.2.title`)}</WorkTitle>
                <More>{t(`work.2.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate><p>{t(`work.3.year`)}</p></WorkDate>
                <Content>
                  <WorkTitle>{t(`work.3.title`)}</WorkTitle>
                  <More>{t(`work.3.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.4.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.4.title`)}</WorkTitle>
                <More>{t(`work.4.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.5.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.5.title`)}</WorkTitle>
                <More>{t(`work.5.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.6.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.6.title`)}</WorkTitle>
                <More>{t(`work.6.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.7.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.7.title`)}</WorkTitle>
                <More>{t(`work.7.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.8.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.8.title`)}</WorkTitle>
                <More>{t(`work.8.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.9.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.9.title`)}</WorkTitle>
                <More>{t(`work.9.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.10.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.10.title`)}</WorkTitle>
                <More>{t(`work.10.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.11.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.11.title`)}</WorkTitle>
                <More>{t(`work.11.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
              <WorkDate><p>{t(`work.12.year`)}</p></WorkDate>
              <Content>
                <WorkTitle>{t(`work.12.title`)}</WorkTitle>
                <More>{t(`work.12.subtitle`)}</More>
                </Content>
              </WorkLi>
            </motion.li>
          </motion.ul>
        </WorkSection>
      </motion.div>
    </Page>
  );
};

const WorkSection = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: auto; */
  background-color: #eae9e5;
`;
const WorkLi = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  border-bottom: 1px solid #6a6f58;
`;



const WorkDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: #6a6f58;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  }


  /* margin-top: 60px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

`;
const WorkTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: #6a6f58;
  margin:0;

`;

const More = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
`;

export default Work;
