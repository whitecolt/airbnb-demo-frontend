import React from "react";
import styled from "styled-components";
import star from "./star.svg";

const Img = styled.img`
  width: 225px;
  height: 350px;
`;

const ExperienceCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

const Name = styled.span`
  font: 15px/18px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
`;

export const Price = styled.span`
  display: inline-block;
  font: 15px/18px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin-right: 3px;
`;

const Info = styled.p`
  margin-top: 8px;
  margin-bottom: 4px;
  flex-basis: 100%;
`;

export const Stars = styled.img`
  width: 76px;
  height: 12px;
  margin-right: 8px;
`;
const Reviews = styled.span`font: 12px/14px "Circular Air Book", sans-serif;`;

export default props => {
  return (
    <ExperienceCard>
      <Link href="#">
        <Img src={props.img} alt={props.name} />
        <Info>
          <Price>{props.price}</Price>
          <Name>{props.name}</Name>
        </Info>
      </Link>
      <Stars src={star} />
      <Reviews>{props.rating}</Reviews>
    </ExperienceCard>
  );
};
