import React, { Component } from "react";
import styled from "styled-components";
import map from "./map.svg";

const Info = styled.p`
  margin: 0;
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

export default props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Info>
            Enter dates to see full pricing. Additional fees apply. Taxes may be
            added.
          </Info>
          <MapLink>
            <img src={map} alt="" />
          </MapLink>
        </div>
      </div>
    </div>
  );
};
