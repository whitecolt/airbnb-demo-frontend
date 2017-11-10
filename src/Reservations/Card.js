import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 229px;
  height: 164px;
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
  font: 10px/12px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;
`;

const Title = styled.p`
  margin-top: 2px;
  margin-bottom: 4px;
  font: 18px/21px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
`;

const Check = styled.p`
  margin-top: 0;
  font: 18px/21px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  opacity: 0.9;
  color: #383838;
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
