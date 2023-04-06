import { Section, Title2, Text, Container } from "../styles";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import InstagramFeed from "../components/InstagramFeed";
const Work = () => {
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
          <Title2> Work</Title2>
          <Text>{t("about.text")}</Text>
        </Container>
        {/* <InstagramFeed/> */}
      </Section>
    </motion.div>
  );
};

export default Work;
