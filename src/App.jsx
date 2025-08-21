import "./assets/bootstrap.css";
import "./assets/style.css";
import "./assets/navbar.css";
import "./assets/style2.css";
import React from "react";
import Landing from "./components/landing.jsx";
import Portfolio from "./components/portfolio.jsx";
import About from "./components/about.jsx";
import Rabbot from "./components/rabbot.jsx";
import Vpia from "./components/vpia.jsx";
import Dreamworld from "./components/dreamworld.jsx";
import Maidenpink from "./components/maidenpink.jsx";
import Thehats from "./components/thehats.jsx";
import Sleepers from "./components/sleepers.jsx";
import Moongaze from "./components/moongaze.jsx";
import Lovemeloveyou from "./components/lovemeloveyou.jsx";
import Pollhuetion from "./components/pollhuetion.jsx";
import Emolace from "./components/emolace.jsx";
import Mai from "./components/mai.jsx";
import ScholarshipPromotion from "./components/scholarshipPromotion.jsx";
import CourseIcon from "./components/courseicon.jsx";
import LeafletsDesign from "./components/leafletsdesign.jsx";
import FloralWatercolour from "./components/floralWatercolour.jsx";
import CakeLogo from "./components/cakelogo.jsx";
import DiveIntoDigital from "./components/diveIntoDigital.jsx";
import UniverseConcert from "./components/universeConcert.jsx";
import EM from "./components/EM.jsx";
import TR from "./components/TR.jsx";
import E from "./components/E.jsx";
import F from "./components/F.jsx";
import R from "./components/R.jsx";
import DG from "./components/DG.jsx";
import BS from "./components/BS.jsx";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/rabbot" element={<Rabbot />} />
        <Route path="/vpia" element={<Vpia />} />
        <Route path="/dreamworld" element={<Dreamworld />} />
        <Route path="/maidenpink" element={<Maidenpink />} />
        <Route path="/thehats" element={<Thehats />} />
        <Route path="/sleepers" element={<Sleepers />} />
        <Route path="/moongaze" element={<Moongaze />} />
        <Route path="/lovemeloveyou" element={<Lovemeloveyou />} />
        <Route path="/pollhuetion" element={<Pollhuetion />} />
        <Route path="/emolace" element={<Emolace />} />
        <Route path="/mai" element={<Mai />} />
        <Route
          path="/scholarshippromotion"
          element={<ScholarshipPromotion />}
        />
        <Route path="/courseicon" element={<CourseIcon />} />
        <Route path="/leafletsdesign" element={<LeafletsDesign />} />
        <Route path="/FloralWatercolour" element={<FloralWatercolour />} />
        <Route path="/CakeLogo" element={<CakeLogo />} />
        <Route path="/DiveIntoDigital" element={<DiveIntoDigital />} />
        <Route path="/UniverseConcert" element={<UniverseConcert />} />
        <Route path="/EM" element={<EM />} />
        <Route path="/TR" element={<TR />} />
        <Route path="/E" element={<E />} />
        <Route path="/F" element={<F />} />
        <Route path="/R" element={<R />} />
        <Route path="/DG" element={<DG />} />
        <Route path="/BS" element={<BS />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
