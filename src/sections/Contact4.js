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

const Contact4 = () => {
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
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar view="contact" />

        <ContactSection style={{ backgroundColor: "#DAD6CC" }}>
          <Column1>
            {messageSent ? (
              <>
                <h2
                   style={{ color: "#A6AA97" }}>{t("contact.thankyou")}</h2>
                <h4 style={{  color: "#A6AA97"  }}
                >
                  {" "}
                  {t("contact.messageSent")}
                </h4>
                <SocialMedia />
              </>
            ) : (
              <>
                <Parallax speed={-3}>
                  <h2
                    as={motion.h2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    style={{ color: "#A6AA97" }}
                  >
                    {" "}
                    {t("contact.title")}
                  </h2>
                  <h4
                    as={motion.h2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    style={{ color: "#A6AA97" }}
                  >
                    {t("contact.subtitle2")}
                  </h4>
                </Parallax>
                <SocialMedia />
              </>
            )}
          </Column1>

          <Column2>
            <>
            {sending ? (
                  <RingContainer>
                    {" "}
                    <Ring color= "#A6AA97"  size={35} />{" "}
                  </RingContainer>
                ) : (

                    <FormContainer>
                    <Form2
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Input2
                        className="form-item"
                        placeholder={t("contact.fullname")}
                        type="text"
                        required
                        value={contact.userName}
                        name="userName"
                        onChange={handleChange}
                      />
    
                      <Input2
                        className="form-item"
                        placeholder={t("contact.email")}
                        value={contact.userEmail}
                        onChange={handleChange}
                        name="userEmail"
                        type="text"
                        required
                      />
    
                      <Input2
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
                    </Form2>
                  </FormContainer>
                )}
             
              <Parallax speed={2}></Parallax>
            </>
          </Column2>
        </ContactSection>
      </motion.div>
    </Page>
  );
};

const ContactSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  color: #7d785c;
  flex-wrap: wrap;


`;

const Column2 = styled.div`
  width: 700px;
  height: 400px;
  margin-top: 20px;

`

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;

  h2 {
  }

  h4 {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: "Bebas Neue", cursive;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 50px;
    margin-top: 50px;
  }
`;

const RingContainer = styled.div`
  position: relative;
  top: 100px;
  left: 330px;
`;

const FormContainer = styled.div`

  width: 500px;
  margin-left: 90px;
  margin-top: -40px;

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
    background-color: #dad6cc;
    border: none;
    color: #a6aa97;
    text-decoration: underline;
  }
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  height: 12px;
  margin: 0.5rem;
  background-color: #dad6cc;
  border: none;
  border-bottom: 1px solid #a6aa97;
  /* @media only screen and (max-width: 535px) {
      width: 350px;
    } */
`;

const Form2 = styled(motion.form)`
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
    margin-top: 30px;
    width: 80px;
    padding: 10px;
    font-style: italic;
    color: #dad6cc;

    background-color: #a6aa97;
    border-radius: 20px;
    border: 1px solid #a6aa97;
  }
`;

const Input2 = styled.input`
  padding: 20px;
  /* margin-top: 20px; */
  width: 100%;
  height: 12px;
  margin: 0.5rem;
  background-color: #dad6cc;
  border-radius: 20px;
  border: 1px solid #a6aa97;
  margin-bottom: 12px;
  /* @media only screen and (max-width: 535px) {
      width: 350px;
    } */
`;

export default Contact4;
