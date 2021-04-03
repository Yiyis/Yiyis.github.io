import "./assets/bootstrap.css";
import "./assets/style.css";
import "./assets/navbar.css";
import React, { Component } from "react";
import Landing from "./components/landing";
import Portfolio from "./components/portfolio";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </main>
  );
}

export default App;
