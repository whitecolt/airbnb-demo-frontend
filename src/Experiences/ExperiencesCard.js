import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 225px;
  height: 350px;
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Name = styled.p``;

const Price = styled.span`
  display: inline-block;
  font-size: 15px;
  line-height: 18px;
  font-family: "CircularAir", Helvetica, Arial, sans-serif;
  font-weight: bold;
  margin-right: 3px;
`;

export default props => {
  return (
    <ExperienceCard>
      <Img src={props.img} alt={props.name} />
      <Price>{props.price}</Price>
      <Name>{props.name}</Name>
    </ExperienceCard>
  );
};
