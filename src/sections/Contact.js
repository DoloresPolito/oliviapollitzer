import React, { useState } from "react";
import { Title, Subtitle, Page, Container } from "../styles";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { Parallax } from "react-scroll-parallax";
import { Ring } from "@uiball/loaders";
import SocialMedia from "../components/SocialMedia";


const Contact = () => {
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
    <Page >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar view="contact" />

        <ContactSection style={{backgroundColor: "#959985"}}>
          <Container>
            {messageSent ? (
              <>
                <Title>{t("contact.thankyou")}</Title>
                <Subtitle style={{ marginBottom: "200px" }}> {t("contact.messageSent")}</Subtitle>
                <SocialMedia />
              </>
            ) : (
              <>
                <Parallax speed={-3}>
                  <Title
                    as={motion.h2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    // animate={{ y: 0 }}
                    // initial={{ y: "100%" }}
                    // transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {" "}
                    {t("contact.title")}
                  </Title>
                  <Subtitle
                    as={motion.h2}
                    // animate={{ y: 0 }}
                    // initial={{ y: "100%" }}
                    // transition={{ delay: 0.5, duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                  >
                    {t("contact.subtitle")}
                  </Subtitle>
                </Parallax>

                {sending ? (
                  <RingContainer>
                    {" "}
                    <Ring color="#506072" size={35} />{" "}
                  </RingContainer>
                ) : (
                  <>
                    <FormContainer>
                      <Form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
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
                    <Parallax speed={2}>
                      <SocialMedia />
                    </Parallax>
                  </>
                )}
              </>
            )}
          </Container>
        </ContactSection>
      </motion.div>
    </Page>
  );
};

const ContactSection = styled.div`
  width: 100%;
  height: 700px;
  padding-top: 40px;
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #5f5f67;
`;

const RingContainer = styled.div`
  position: relative;
  top: 100px;
  left: 230px;

`;
const FormContainer = styled.div`
  width: 1000px;
  margin-top: -30px;

  @media only screen and (max-width: 1045px) {
    width: 500px;
  }

  /* @media only screen and (max-width: 535px) {
    width: 400px;
  } */
`;

const Form = styled(motion.form)`
  list-style: none;
  text-decoration: none !important;
  font-size: 20px !important;
  text-align: center;
  align-items: center;
  padding-top: 100px;
  max-width: 1000px;
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
    background-color: #959985;
    border: none;
    color: #f6f6f6;
    text-decoration: underline;
  }
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  height: 8px;
  margin: 0.5rem;
  background-color: #959985;
  border: none;
  border-bottom: 0.8px solid #f6f6f6;
  /* @media only screen and (max-width: 535px) {
      width: 350px;
    } */
`;

export default Contact;
