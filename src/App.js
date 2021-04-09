import "./assets/bootstrap.css";
import "./assets/style.css";
import "./assets/navbar.css";
import "./assets/style2.css";
import React from "react";
import Landing from "./components/landing";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Rabbot from "./components/rabbot";
import Vpia from "./components/vpia";
import Dreamworld from "./components/dreamworld";
import Maidenpink from "./components/maidenpink";
import Thehats from "./components/thehats";
import Sleepers from "./components/sleepers";
import Moongaze from "./components/moongaze";
import Lovemeloveyou from "./components/lovemeloveyou";
import Pollhuetion from "./components/pollhuetion";
import Emolace from "./components/emolace";
import Mai from "./components/mai";
import ScholarshipPromotion from "./components/scholarshipPromotion";
import CourseIcon from "./components/courseicon";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Landing} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/rabbot" component={Rabbot} />
        <Route path="/vpia" component={Vpia} />
        <Route path="/dreamworld" component={Dreamworld} />
        <Route path="/maidenpink" component={Maidenpink} />
        <Route path="/thehats" component={Thehats} />
        <Route path="/sleepers" component={Sleepers} />
        <Route path="/moongaze" component={Moongaze} />
        <Route path="/lovemeloveyou" component={Lovemeloveyou} />
        <Route path="/pollhuetion" component={Pollhuetion} />
        <Route path="/emolace" component={Emolace} />
        <Route path="/mai" component={Mai} />
        <Route path="/scholarshippromotion" component={ScholarshipPromotion} />
        <Route path="/courseicon" component={CourseIcon} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
