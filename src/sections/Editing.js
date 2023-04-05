import { Section, Title2, Text, Container } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Editing = () => {
  const [t] = useTranslation("global");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.75 , ease:"easeOut"}}
    >
      <Section>
        <Container>
          <Title2>{t("editing.title")}</Title2>
          <Text>{t("editing.text")}</Text>
          <Text>{t("editing.text2")}</Text>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Editing;
