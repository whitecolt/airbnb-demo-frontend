import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import styled from "styled-components";

import Landing from "./Landing";
import Homes from "./Homes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" component={Landing} />
          {/* <Route path="/homes" component={Homes} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
