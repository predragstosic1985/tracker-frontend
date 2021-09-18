import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/tracker" component={Layout} />
        <Route exact path="/" component={Layout} />
        <Route path="*" component={Layout} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
