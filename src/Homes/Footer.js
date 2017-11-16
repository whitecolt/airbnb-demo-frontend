import React, { Component } from "react";
import styled from "styled-components";
import map from "./map.svg";
import MapButton from "../UI/MapButton";

const Info = styled.div`
  text-align: center;
  color: #636363;
  font: 16px/19px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
`;

export const MapLink = styled.a`
  display: flex;
  flex-direction: row-reverse;
  margin: 24px 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 90px;

  @media only screen and (min-width: 768px) {
    position: absolute;
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export default props => {
  return (
    <div className="container">
      <Footer>
        <Info>
          Enter dates to see full pricing. Additional fees apply. Taxes may be
          added.
        </Info>
        <MapContainer>
          <MapButton />
        </MapContainer>
      </Footer>
    </div>
  );
};
