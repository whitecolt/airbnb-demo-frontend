import React, { Component } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Wrap = styled.div`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    position: fixed;
    left: calc(50% + 170px);
    top: 140px;
    right: 0;
    bottom: 0;
  }
`;

export default props => {
  return (
    <Wrap>
      <GoogleMapReact
        bootstrapURLKeys={process.env.REACT_APP_MAP_KEY}
        defaultZoom={8}
        defaultCenter={{ lat: -41.718108, lng: 147.108374 }}
      />
    </Wrap>
  );
};
