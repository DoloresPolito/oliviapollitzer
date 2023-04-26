import React, { useState } from "react";
import { Page } from "../styles";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >

        <ContactSection style={{ backgroundColor: "#EAE9E5" }}>
          {messageSent ? (
            <SentSection>
              <h2 style={{ color: "#6A6F58" }}>{t("contact.thankyou")}</h2>
              <h4 style={{ color: "#6A6F58" }}> {t("contact.messageSent")}</h4>
              <SocialMedia />
            </SentSection>
          ) : (
            <>
              <Column1>
                <Parallax speed={-3}>
                  <h4
                    as={motion.h2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                  >
                    {t("contact.subtitle2")}
                  </h4>
                </Parallax>
                <SocialMedia />
              </Column1>
              <Column2>
                <>
                  {sending ? (
                    <RingContainer>
                      {" "}
                      <Ring color="#A6AA97" size={35} />{" "}
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
            </>
          )}
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
  flex-wrap: wrap;
  @media only screen and (max-width: 1230px) {
    height: auto;
    padding-top: 20px;
  }
`;

const Column2 = styled.div`
  width: 700px;
  height: 400px;
  margin-top: 20px;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  margin-left: 30px;

  h4 {
    display: flex;
    justify-content: center;
    color: #6a6f58;
    font-family: "Bebas Neue", cursive;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 50px;
    margin-top: 50px;

    @media only screen and (max-width: 700px) {
      font-size: 40px;
      width: 400px;
    }

    @media only screen and (max-width: 535px) {
      font-size: 35px;
      width: 300px;
      margin-left: 40px;
   
    }
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

  @media only screen and (max-width: 1230px) {
    margin-top: -80px;
  }

  @media only screen and (max-width: 700px) {
    margin: -80px auto;
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

  @media only screen and (max-width: 700px) {
    width: 80%;
    /* margin: -80px auto; */
  }

  @media only screen and (max-width: 535px) {
    width: 70%;
    margin: -50px auto;

  }

  /* @media only screen and (max-width: 440px) {
  } */

  button {
    margin-top: 30px;
    width: 80px;
    padding: 10px;
    font-style: italic;
    color: #dad6cc;
    background-color: #6a6f58;
    border-radius: 20px;
    border: 1px solid #6a6f58;

    :hover {
      scale: 1.03;
      opacity: 0.8;
    }
  }
`;

const Input2 = styled.input`
  padding: 20px;
  width: 100%;
  height: 12px;
  margin: 0.5rem;
  background-color: #eae9e5;
  border-radius: 20px;
  border: 1px solid #6a6f58;
  margin-bottom: 12px;
  /* @media only screen and (max-width: 535px) {
      width: 350px;
    } */
`;

const SentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
  margin-top: -30px;

  h2 {
    @media only screen and (max-width: 700px) {
      margin-top: 80px;
    }
    @media only screen and (max-width: 440px) {
      margin-top: 100px;
      font-size: 14px;
    }
  }

  h4 {
    display: flex;
    justify-content: center;
    color: #6a6f58;
    font-family: "Bebas Neue", cursive;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 50px;
    margin-top: 50px;
    width: 600px;
    align-self: center;
    text-align: center;

    @media only screen and (max-width: 700px) {
      font-size: 40px;
      width: 400px;
    }

    @media only screen and (max-width: 440px) {
      font-size: 35px;
      width: 300px;
    }
  }
`;

export default Contact;
