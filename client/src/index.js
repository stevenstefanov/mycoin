import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
// import {LoginProvider} from './Utils/loginState';
// import {Canvas} from '@react-three/fiber'
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory({});

ReactDOM.render(
  <Router history={customHistory}>
    <Route
      component={({ history }) => {
        window.appHistory = history;
        return <App />;
      }}
    />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
