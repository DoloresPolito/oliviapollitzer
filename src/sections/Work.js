import { Page } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useEffect } from "react";

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

        <WorkSection>
          <motion.ul
            style={{ listStyle: "none" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>Jan 2023</WorkDate>
                <WorkTitle>Editing</WorkTitle>
                <More>Read more</More>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>Jun 2022</WorkDate>
                <WorkTitle>Writing</WorkTitle>
                <More>Read more</More>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>Sep 2018</WorkDate>
                <WorkTitle>Editing</WorkTitle>
                <More>Read more</More>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>Jan 2023</WorkDate>
                <WorkTitle>Editing</WorkTitle>
                <More>Read more</More>
              </WorkLi>
            </motion.li>

            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>Jan 2023</WorkDate>
                <WorkTitle>Editing</WorkTitle>
                <More>Read more</More>
              </WorkLi>
            </motion.li>
            <motion.li variants={item}>
              <WorkLi>
                <WorkDate>Jan 2023</WorkDate>
                <WorkTitle>Editing</WorkTitle>
                <More>Read more</More>
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
  padding-top: 80px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #eae9e5;
`;
const WorkLi = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  border-bottom: 1px solid #6a6f58;
  height: 90px;
  width: 600px;
`;
const WorkDate = styled.p`
  display: flex;
  color: #6a6f58;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  margin-top: 60px;
`;

const WorkTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: #6a6f58;
  margin-top: 45px;
  width: 300px;
  justify-self: center;
`;

const More = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
  margin-right: 0px;
  margin-top: 60px;
`;

export default Work;
