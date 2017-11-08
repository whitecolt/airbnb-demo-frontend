import React from "react";
import styled from "styled-components";
import logo from "./Shape.svg";

export default function() {
  return (
    <a href="#">
      <img src={logo} className="Header-logo" alt="airbnb-logo" />;
    </a>
  );
}
