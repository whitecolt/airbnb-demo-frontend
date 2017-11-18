import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 144px;
  height: 108px;
  @media (min-width: 768px) {
    width: 240px;
    height: 164px;
  }

  @media (min-width: 992px) {
    width: 229px;
    height: 164px;
  }
`;

const ReservCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

const Kitchen = styled.p`
  margin-top: 12px;
  margin-bottom: 2px;
  font: 8px/9px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const Title = styled.p`
  margin-top: 2px;
  margin-bottom: 4px;
  font: 14px/16px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const Check = styled.p`
  margin-top: 0;
  font: 12px/14px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  opacity: 0.9;
  color: #383838;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export default props => {
  return (
    <ReservCard>
      <Link href="#">
        <Img src={props.img} alt={props.name} />
        <Kitchen>{props.kitchen}</Kitchen>
        <Title>{props.name}</Title>
      </Link>
      <Check>{props.check}</Check>
    </ReservCard>
  );
};
