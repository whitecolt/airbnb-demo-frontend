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

const Name = styled.span``;

const Price = styled.span`
  display: inline-block;
  font-size: 15px;
  line-height: 18px;
  font-family: "CircularAir", Helvetica, Arial, sans-serif;
  font-weight: bold;
  margin-right: 3px;
`;

const Info = styled.p`
  margin-top: 8px;
  margin-bottom: 4px;
  flex-basis: 100%;
`;

const Stars = styled.img`
  width: 76px;
  height: 12px;
  margin-right: 8px;
`;
const Reviews = styled.span`font: 12px/14px "Circular Air", sans-serif;`;

export default props => {
  return (
    <ExperienceCard>
      <Img src={props.img} alt={props.name} />
      <Info>
        <Price>{props.price}</Price>
        <Name>{props.name}</Name>
      </Info>
      <Stars src={props.img1} />
      <Reviews>{props.name1}</Reviews>
    </ExperienceCard>
  );
};
