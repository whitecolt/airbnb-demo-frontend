import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";
import Filters from "./Filters";

export default () => (
  <div>
    <Header />
    <Filters />
    <div className="container" />
  </div>
);
