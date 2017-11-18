import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  height: auto;

  @media only screen and (min-width: 768px) {
    width: 96px;
    height: 72px;
  }
`;

const ExploreTitle = styled.h3`
  margin-left: 12px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;

  font: 12px/14px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-left: 24px;
  }
`;

const ExploreCard = styled.a`
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  color: #383838;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export default props => {
  return (
    <ExploreCard>
      <Img src={props.img} alt={props.name} />
      <ExploreTitle>{props.name}</ExploreTitle>
    </ExploreCard>
  );
};
