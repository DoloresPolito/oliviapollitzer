import React, { useState } from "react";
import { Page, Subtitle } from "../styles";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
// import books from "../assets/books/books2-tras.png";
import SocialMedia from "../components/SocialMedia";
import emailjs from "emailjs-com";
import { Ring } from "@uiball/loaders";
import { motion } from "framer-motion";
import books from "../assets/pictures/3*.jpeg";

const Contact2 = () => {
  const [t] = useTranslation("global");

  const frmContact = { userName: ``, userEmail: ``, message: `` };
  const [contact, setContact] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(`service_lsilwkf`, `template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)
      .then(
        (response) => {
          console.log(`SUCCESS!`, response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
          setSending(false);
          setMessageSent(true);
        },
        (err) => {
          console.log(`FAILED...`, err);
        }
      );
  };

  return (
    <>
      <Page>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
          <Section>
            <Box
              initial={{ x: "70vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.75,
                bounce: 0.1,
              }}
            >
              <Content>
                {messageSent ? (
                  <>
                    <H2>{t("contact.thankyou")}</H2>
                    <Subtitle style={{ marginBottom: "100px", color: "white" }}>
                      {" "}
                      {t("contact.messageSent")}
                    </Subtitle>
                    <SocialMedia />
                  </>
                ) : (
                  <>
                    <H2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.75, ease: "easeIn" }}
                    >
                      {t("contact.title")}
                    </H2>
                    <BoldLine
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.75, ease: "easeIn" }}
                    />

                    {sending ? (
                      <RingContainer>
                        {" "}
                        <Ring color="#ffffff" size={35} />{" "}
                      </RingContainer>
                    ) : (
                      <>
                        <FormContainer>
                          <Form onSubmit={handleSubmit}>
                            <Input
                              className="form-item"
                              placeholder={t("contact.fullname")}
                              type="text"
                              required
                              value={contact.userName}
                              name="userName"
                              onChange={handleChange}
                            />

                            <Input
                              className="form-item"
                              placeholder={t("contact.email")}
                              value={contact.userEmail}
                              onChange={handleChange}
                              name="userEmail"
                              type="text"
                              required
                            />

                            <Input
                              className="form-item"
                              placeholder={t("contact.message")}
                              value={contact.message}
                              onChange={handleChange}
                              name="message"
                              type="text"
                              required
                            />

                            <button
                              type="submit"
                              className="bottom-form"
                              style={{ fontSize: "16px", cursor: "pointer" }}
                            >
                              {t("contact.send")}
                            </button>
                          </Form>
                        </FormContainer>
                      </>
                    )}
                  </>
                )}
              </Content>
            </Box>
            <Box2
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            >
              <Subtitle
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >{t("contact.subtitle2")}</Subtitle>
              <SocialMedia />
            </Box2>
          </Section>
        </motion.div>
      </Page>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
  height: auto;
  background: url(${books}) no-repeat center top;
  background-size: cover;
`;

const Box = styled(motion.div)`
  position: relative;
  top: 80px;
  left: 465px;
  width: 1100px;
  height: 850px;
  background-color: #5f5f67;
  margin-right: 190px;
  opacity: 0.9;
`;

const Box2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -460px;
  left: -450px;
  width: 300px;
  height: 400px;
  background-color: #5f5f67;
  opacity: 0.8 !important;
  padding: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  p {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 1px;
    line-height: 25px;
    color: #ffffff;
    margin-top: 10px;
  }
`;

const H2 = styled(motion.h2)`
  color: #ffffff;
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 55px;
  margin-top: 50px;
`;

const BoldLine = styled(motion.div)`
  border-top: 4px solid #ffffff;
  height: 2px;
  max-width: 70px;
  margin-top: -45px;
  margin-bottom: 15px;
`;

const FormContainer = styled.div`
  width: 1000px;
  margin-bottom: 60px;

  @media only screen and (max-width: 1045px) {
    width: 500px;
  }

  /* @media only screen and (max-width: 535px) {
    width: 400px;
  } */
`;

const Form = styled.form`
  list-style: none;
  text-decoration: none !important;
  font-size: 20px !important;
  text-align: center;
  align-items: center;
  padding-top: 70px;
  max-width: 680px;
  font-weight: 300;
  letter-spacing: 2px;
  vertical-align: middle !important;

  @media only screen and (max-width: 535px) {
    width: 350px;
  }
  @media only screen and (max-width: 535px) {
    width: 400px;
  }

  button {
    padding-top: 50px;
    background-color: #5f5f67;
    border: none;
    color: #ffffff;
    text-decoration: underline;
  }
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  height: 8px;
  margin: 0.5rem;
  background-color: #5f5f67;
  border: none;
  border-bottom: 0.8px solid #f6f6f6;
  /* @media only screen and (max-width: 535px) {
      width: 350px;
    } */
`;

const RingContainer = styled.div`
  position: relative;
  top: 100px;
  left: 230px;
`;

export default Contact2;
