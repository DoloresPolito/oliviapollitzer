import "../App.css";
import { HomeSection, Section, Title, Subtitle } from "../styles";
import logo from "../assets/logo3/lastOLI_Beige II.png";
import styled from "styled-components";
import Services from "./Services";
import { motion } from "framer-motion";
import InstagramFeed from "../components/InstagramFeed";

const Home = () => {

  console.log("token", process.env.REACT_APP_INS_TOKEN)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // transition={{duration: 0.75 , ease:"easeOut"}}
    >
      <HomeSection>
        <Section>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          > */}
            <Logo src={logo} />
          {/* </motion.div> */}
        </Section>

        <Services />
        <InstagramFeed/>
      </HomeSection>
    </motion.div>
  );
};

const Logo = styled.img`
  position: absolute;
  top: 30px;
  height: 750px;
  width: 950px;
`;

export default Home;
