import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import apparts from "./Apparts2x.png";

const ImgExplore = styled.img`
  width: 96px;
  height: 72px;
`;

const ItemExplore = styled.div`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);
  align-items: center;
`;

const H3 = styled.h3`margin-left: 24px;`;

export default function() {
  return (
    <ItemExplore>
      <ImgExplore src={apparts} alt="apparts.png" />
      <H3>Homes</H3>
    </ItemExplore>
  );
}
