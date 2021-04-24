import * as React from "react";
import Home from "./home";
import Auth from "./auth";
import { Router } from "@reach/router";
import { RouteComponentProps } from '@reach/router';

export interface ISignupPageProps extends RouteComponentProps {
  path: string;
}

const IndexPage = () => {
  return (
    <Router>
      <Home path="/" />
      <Auth path="/auth" />
    </Router>
  );
};

export default IndexPage;
