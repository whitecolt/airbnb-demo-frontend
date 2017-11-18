import React, { Component } from "react";
import styled from "styled-components";
import next from "./next-page.svg";

export const NextCard = styled.button`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: none;
    position: absolute;
    right: -20px;
    z-index: 10;
    width: 40px;
    height: 40px;
    background: url(${next}) no-repeat 0 0;
    background-size: contain;
  }
`;
