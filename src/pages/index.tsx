import * as React from "react";
import Home from "./home";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const IndexPage = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact render={() => <Home/>}/>
    </Switch>
    </BrowserRouter>
  );
};

export default IndexPage;
