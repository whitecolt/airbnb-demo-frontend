import React, { Component } from "react";
import Header from "./Header/Header";
import Explore from "./Explore/Explore";
import "./App.css";
import styled from "styled-components";
import "flexboxgrid2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Explore />
      </div>
    );
  }
}

export default App;
