import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer"
import Work from "./sections/Work";
import About from "./sections/About";
import Editing2 from "./sections/Editing2";
import Writing2 from "./sections/Writing2";
import ScrollToTop from "./components/ScrollToTop";
import {AnimatePresence} from "framer-motion"
import Home from "./sections/Home"
import Navbar from "./components/Navbar";
import Route404 from "./sections/Route404";

function App() {
  const location = useLocation()
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <>


      <div className="page-container">
      <Navbar />
      <ScrollToTop/>
        <AnimatePresence initial={false} mode={'wait'}>
        <Routes location={location} key={location.pathname}>
          <>
 
          
            <Route path="/oliviapollitzer" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/bio" element={<About />} />
            <Route path="/editing" element={<Editing2 />} />
            <Route path="/writing" element={<Writing2 />} />
            <Route path="*" element={<Route404/>} />
                   
          </>
        </Routes>
        </AnimatePresence>
        <Footer />
      </div>

    </>
  );
}


export default App;
