import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tracker from "../Tracker/Tracker";
import LoginPage from "../Login/LoginPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/tracker" component={Tracker} />
        <Route exact path="/" component={LoginPage} />
        <Route path="*" component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
