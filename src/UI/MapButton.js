import React, { Component } from "react";
import styled from "styled-components";
import mapbox from "./location.svg";

const MapButton = styled.button`
  background: url(${mapbox}) no-repeat center;
  padding: 20px;
  position: absolute;
  left: calc(100% - 44px);
  bottom: 15px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  box-shadow: 0px 2px 3px rgba(72, 72, 72, 0.3);
  opacity: 0.8;

  @media (min-width: 768px) {
    bottom: 25px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default props => {
  return <MapButton />;
};
