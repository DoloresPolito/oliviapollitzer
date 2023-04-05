import { Section, Title2, Text, Container } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const [t] = useTranslation("global");
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}

    transition={{duration: 0.75 , ease:"easeOut"}}
        exit={{ opacity: 0 }}
    >
      <Section>
        <Container>
        <Title2> {t("about.title")}</Title2>
        <Text>{t("about.text")}</Text>
        </Container>
      </Section>
    </motion.div>
  );
};

export default About;
