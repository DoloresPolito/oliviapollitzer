import React, { useEffect, useState } from "react";
import styled from "styled-components";
import text from "../assets/icons/work-progress/writing/edit.png";
import dialogo from "../assets/icons/work-progress/dialogo/2.png";
import book from "../assets/icons/work-progress/book/book1.png";
import computer from "../assets/icons/work-progress/computer/computer.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const WorkProgress = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const [t] = useTranslation("global");

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1.5,
          bounce: 0.1,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <>
      <WorkProgressSection ref={ref}>

        <Content animate={shouldAnimate ? animation : {}}>
          <Icons>
            <img src={dialogo} alt="discuss"/>
            <img src={computer} alt="computer"/>
            <img src={text} alt="text"/>
            <img src={book} alt="book"/>
          </Icons>

          <Numbers>
            <p>1. </p>
            <p>2.</p>
            <p>3.</p>
            <p>4.</p>
          </Numbers>
          <Titles>
            <p>{t("work-progress.title1")}</p>
            <p>{t("work-progress.title2")}</p>
            <p>{t("work-progress.title3")}</p>
            <p>{t("work-progress.title4")}</p>
          </Titles>

          <Texts>
            <p>{t("work-progress.text1")}</p>
            <p>{t("work-progress.text2")}</p>
            <p>{t("work-progress.text3")}</p>
            <p>{t("work-progress.text4")}</p>
          </Texts>
        </Content>
      </WorkProgressSection>
    </>
  );
};

const WorkProgressSection = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  color: #5f5f67;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;

`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  width: 80%;
  img {
    height: 50px;
    width: 50px;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  width: 80%;
  margin-top: 20px;




  p {
    font-family: 'Bebas Neue', cursive;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 2px;
    font-weight: 600;
    color: #252525;
    text-align: center;
    width: 250px;




  }
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  width: 80%;
  margin-top: 20px;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 600;
    color: #252525;
    text-align: center;
    width: 250px;
  }
`;

const Texts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  padding: 5px;
  margin-top: 20px;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 400;
    color: #252525;
    text-align: center;
    width: 230px;
  }
`;

export default WorkProgress;
