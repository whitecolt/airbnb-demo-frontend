import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "react-dates/initialize";

import "./App.css";
import styled from "styled-components";

import Landing from "./Landing";
import Homes from "./Homes/Content";

const PageWrap = styled.div``;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/homes" component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
