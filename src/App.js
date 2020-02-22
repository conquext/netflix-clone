import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages";
import Login from "./pages/Login";

import ChoosePlan from "./pages/ChoosePlan";

import "./css/App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/choose-plan" component={ChoosePlan} />
    </Switch>
  );
}

export default App;
