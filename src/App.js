import "./assets/bootstrap.css";
import "./assets/style.css";
import "./assets/navbar.css";
import "./assets/style2.css";
import React, { Component } from "react";
import Landing from "./components/landing";
import Portfolio from "./components/portfolio";
import Rabbot from "./components/rabbot";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/rabbot" component={Rabbot} />
      </Switch>
    </main>
  );
}

export default App;
