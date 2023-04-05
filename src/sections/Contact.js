import React, { useState } from "react";
import { Section, Title, Subtitle, Container } from "../styles";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import mail from "../assets/mail/new50.png";
import whatsapp from "../assets/whatsapp/50.png";
import instagram from "../assets/instagram/50.png";

const Contact = () => {
  const [t] = useTranslation("global");

  const frmContact = { userName: ``, userEmail: ``, message: `` };
  const [contact, setContact] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(`service_lsilwkf`, `template_zefnjzw`, contact, `F-wmz4d9VI_6zEds5`)
      .then(
        (response) => {
          console.log(`SUCCESS!`, response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log(`FAILED...`, err);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.75 , ease:"easeOut"}}
    >
      <ContactSection>
        <Container>
          <Title> {t("contact.title")}</Title>
          <Subtitle>{t("contact.subtitle")}</Subtitle>
          <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputs">
                <input
                  className="form-item"
                  placeholder={t("contact.fullname")}
                  type="text"
                  required
                  value={contact.userName}
                  name="userName"
                  onChange={handleChange}
                />

                <input
                  className="form-item"
                  placeholder={t("contact.email")}
                  value={contact.userEmail}
                  onChange={handleChange}
                  name="userEmail"
                  type="text"
                  required
                />

                <input
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
                  style={{ fontSize: "16px" }}
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>

          <SocialMedia>
            <Circle>
              <a href="mailto:oliviapollitzer@gmail.com">
                {" "}
                <img src={mail} />
              </a>
            </Circle>
            <Circle>
              <a href="https://www.instagram.com/olipollitzer/" target="_blank">
                <img src={instagram}  />
              </a>
            </Circle>
            <Circle>
              <a href="https://api.whatsapp.com/send/?phone=541151082715" target="_blank">
                <img src={whatsapp} />
              </a>
            </Circle> 
          </SocialMedia>
        </Container>
      </ContactSection>
    </motion.div>
  );
};

const ContactSection = styled.div`
  width: 100%;
  height: auto;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5f5f67;
`;

const Circle = styled.div`
  height: 60px;
  width: 60px;
  background-color: #5f5f67;
  margin: 0px 20px 0 0;
  border-radius: 50px;
  img {
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: 15px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export default Contact;
