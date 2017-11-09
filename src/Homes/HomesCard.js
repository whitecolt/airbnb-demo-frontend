import React from "react";
import styled from "styled-components";
import { Stars, Price } from "../Experiences/ExperiencesCard";
import star from "./star.svg";

const Img = styled.img`
  width: 310px;
  height: 204px;
`;

const HomesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;

  color: #383838;
`;

const Name = styled.span`font: Bold 15px/18px "CircularAir", sans-serif;`;

const Info = styled.p`
  margin-top: 8px;
  margin-bottom: 2px;
  flex-basis: 100%;
`;

const Details = styled.p`
  margin-top: 2px;
  font: 15px/18px "CircularAir", sans-serif;
  color: #383838;
  margin-bottom: 8px;
  flex-basis: 100%;
`;

const Access = styled.span`
  display: inline-block;
  margin-right: 8px;
`;

const Beds = styled.span`display: inline-block;`;

const Rank = styled.span`
  font: 12px/14px "CircularAir", sans-serif;
  color: #383838;
`;

export default props => {
  return (
    <HomesCard>
      <Link href="#">
        <Img src={props.img} alt={props.name} />
        <Info>
          <Price>{props.price}</Price>
          <Name>{props.name}</Name>
        </Info>
      </Link>
      <Details>
        <Access>{props.access}</Access>
        <Beds>{props.beds}</Beds>
      </Details>
      <Stars src={star} />
      <Rank>{props.rank}</Rank>
    </HomesCard>
  );
};
