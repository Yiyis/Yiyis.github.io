import "./assets/bootstrap.css";
import "./assets/style.css";
import "./assets/navbar.css";
import "./assets/style2.css";
import React from "react";
import Landing from "./components/landing";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Rabbot from "./components/rabbot";
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
      </Switch>
    </AnimatePresence>
  );
}

export default App;
