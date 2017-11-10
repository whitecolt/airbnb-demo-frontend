import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 147px;
  height: 220px;
`;

const DestCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

const Name = styled.p`
  margin-top: 8px;
  color: #383838;
  font: Bold 15px/18px "CircularAir", sans-serif;
`;

export default props => {
  return (
    <DestCard>
      <Link href="#" />
      <Img src={props.img} alt={props.name} />
      <Name>{props.name}</Name>
    </DestCard>
  );
};
