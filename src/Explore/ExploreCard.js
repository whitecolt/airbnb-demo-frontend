import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 96px;
  height: 72px;
`;

const ExploreTitle = styled.h3`margin-left: 24px;`;

const ExploreCard = styled.a`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  align-items: center;
  text-decoration: none;
  color: #383838;
  border-radius: 4px;
`;

export default props => {
  return (
    <ExploreCard href="#">
      <Img src={props.img} alt={props.name} />
      <ExploreTitle>{props.name}</ExploreTitle>
    </ExploreCard>
  );
};
