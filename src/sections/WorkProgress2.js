import React, { useEffect, useState } from "react";
import styled from "styled-components";
import text from "../assets/icons/work-progress/writing/edit-green.png";
import dialogo from "../assets/icons/work-progress/dialogo/chat-green.png";
import book from "../assets/icons/work-progress/book/openbook-green.png";
import computer from "../assets/icons/work-progress/computer/computer-green.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const WorkProgress2 = () => {
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
          <div>
            <Icons>
              <img src={dialogo} alt="discuss" />
            </Icons>

            <Numbers>
              <p>1. </p>
            </Numbers>

            <Titles>
              <p>{t("work-progress.title1")}</p>
            </Titles>

            <Texts>
              <p>{t("work-progress.text1")}</p>
            </Texts>
          </div>

          <div>
            <Icons>
              <img src={computer} alt="computer" />
            </Icons>

            <Numbers>
              <p>2.</p>
            </Numbers>

            <Titles>
              <p>{t("work-progress.title2")}</p>
            </Titles>

            <Texts>
              <p>{t("work-progress.text2")}</p>
            </Texts>
          </div>

          <div>
            <Icons>
              <img src={text} alt="text" />
            </Icons>

            <Numbers>
              <p>3.</p>
            </Numbers>

            <Titles>
              <p>{t("work-progress.title3")}</p>
            </Titles>

            <Texts>
              <p>{t("work-progress.text3")}</p>
            </Texts>
          </div>

          <div>
            <Icons>
              <img src={book} alt="book" />
            </Icons>

            <Numbers>
              <p>4.</p>
            </Numbers>

            <Titles>
              <p>{t("work-progress.title4")}</p>
            </Titles>

            <Texts>
              <p>{t("work-progress.text4")}</p>
            </Texts>
          </div>
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
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    :hover {
      scale: 1.05;
      /* background-color: #f9f9f9 !important; */
    }
  }
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
    font-family: "Bebas Neue", cursive;
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
  justify-content: flex-start !important;

  height: 180px;
  width: 80%;
  padding: 5px;

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

export default WorkProgress2;
