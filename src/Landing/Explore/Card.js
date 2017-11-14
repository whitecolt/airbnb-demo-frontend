import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 78px;

  @media only screen and (min-width: 768px) {
    width: 96px;
    height: 72px;
  }
`;

const ExploreTitle = styled.h3`
  margin-left: 24px;
  font: 12px/14px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

const ExploreCard = styled.a`
  display: block;
  box-sizing: border-box;
  text-decoration: none;
  color: #383838;
  border: 1px solid rgba(72, 72, 72, 0.2);

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export default props => {
  return (
    <ExploreCard href={props.link}>
      <Img src={props.img} alt={props.name} />
      <ExploreTitle>{props.name}</ExploreTitle>
    </ExploreCard>
  );
};
