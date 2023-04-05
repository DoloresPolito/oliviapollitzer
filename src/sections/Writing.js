import { Section, Container } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styled from "styled-components";

const Writing = () => {
  const [t] = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Section>
        <Container>
          <Title2
            initial={{ y: "-40%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t("writing.title")}
          </Title2>
          <Text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            {t("writing.text")}
          </Text>
          <Text>{t("writing.text2")}</Text>
          <Text style={{ fontWeight: "600" }}>{t("writing.text3")}</Text>
        </Container>
      </Section>
    </motion.div>
  );
};

const Title2 = styled(motion.h2)`
  display: flex;
  align-self: start;
  font-size: 22px;
  font-family: "Poppins";
  line-height: 30px;
  font-weight: 700;
  color: #5f5f67;
`;

const Text = styled(motion.p)`
  /* display: flex;
justify-content: center; */
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  line-height: 40px;
  letter-spacing: 1.5px;
  font-weight: 400;
  /* align-self:center;
text-align:center; */
  padding-top: 10px;
  color: #5f5f67;
  width: 1000px;
  text-align: justify;
`;

export default Writing;
