import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import mail from "../assets/mail/mail-blue.png";
import whatsapp from "../assets/whatsapp/whatsapp-blue.png";
import instagram from "../assets/instagram/instagram-blue.png";

const SocialMedia2 = () => {
  return (
    <SocialMediaContainer>
      <Circle>
        <a href="mailto:oliviapollitzer@gmail.com">
          {" "}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={mail}
          />
        </a>
      </Circle>
      <Circle>
        <a href="https://www.instagram.com/olipollitzer/" target="_blank">
          <motion.img
            src={instagram}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </a>
      </Circle>
      <Circle>
        <a
          href="https://api.whatsapp.com/send/?phone=541151082715"
          target="_blank"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={whatsapp}
          />
        </a>
      </Circle>
    </SocialMediaContainer>
  );
};

const Circle = styled.div`
  height: 60px;
  width: 60px;
  /* background-color: #5f5f67; */
  margin: 0px 20px 0 0;
  border-radius: 50px;

  img {
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: 15px;

    :hover{
        scale:1.1;
    }
  }

  @media only screen and (max-width: 1045px) {
    height: 50px;
    width: 50px;

    img {
      height: 25px;
      width: 25px;
      margin-top: 12px;
      margin-left: 12.5px;
    }
  }
`;

const SocialMediaContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 50px;

`;
export default SocialMedia2;
