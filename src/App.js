import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact2 from "./sections/Contact2";
import Footer from "./sections/Footer"
// import Work from "./sections/Work";
import About from "./sections/About";
import Editing from "./sections/Editing";
import Writing from "./sections/Writing";
import ScrollToTop from "./components/ScrollToTop";
import {AnimatePresence} from "framer-motion"
import Home from "./sections/Home"

function App() {
  const location = useLocation()

  return (
    <>


      <div className="page-container">
      <ScrollToTop/>
        <AnimatePresence initial={false} mode={'wait'}>
        <Routes location={location} key={location.pathname}>
          <>
            <Route path="/oliviapollitzer" element={<Home />} />
            <Route path="/contact" element={<Contact2 />} />
            {/* <Route path="/work" element={<Work />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/editing" element={<Editing />} />
            <Route path="/writing" element={<Writing />} />

            {/* <Route path="*" element={<Route404/>} /> */}
          </>
        </Routes>
        </AnimatePresence>
        <Footer />
      </div>

    </>
  );
}


export default App;
