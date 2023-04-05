import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FooterNew from "./sections/FooterNew"
import Work from "./sections/Work";
import About from "./sections/About";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Editing from "./sections/Editing";
import Writing from "./sections/Writing";
import toplogo from "./assets/logo2/lastisologo_Beige II.png";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollToTop";
import {AnimatePresence} from "framer-motion"

function App() {

  const navigate = useNavigate()
  const location = useLocation()

  const handleHome = () => {
    navigate('/')
  }
  return (
    <>

      <Logo src={toplogo} onClick={() => handleHome()} />

      <div className="page-container">
      <ScrollToTop/>
        <Navbar />
        <AnimatePresence initial={false} mode={'wait'}>
        <Routes location={location} key={location.pathname}>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/editing" element={<Editing />} />
            <Route path="/writing" element={<Writing />} />

            {/* <Route path="*" element={<Route404/>} /> */}
          </>
        </Routes>
        </AnimatePresence>
        <FooterNew />
      </div>

    </>
  );
}

const Logo = styled.img`
  cursor: pointer;  
  position: absolute;
  left: -30px;
  top: -5px;
  height: 120px;
  width: 190px;

`;

export default App;
