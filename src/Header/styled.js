import React from "react";
import styled from "styled-components";
import logo from "./airbnbLogo.svg";
import Findpicture from "./inputFind.svg";

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0 1px 0 0 rgba(72, 72, 72, 0.08);
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 392px;
  height: 48px;
  padding-left: 52px;
  margin-left: 50px;
  font: 16px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  background-image: url(${Findpicture});
  background-repeat: no-repeat;
  background-position: 12px center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-sizing: border-box;
`;

export const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`display: flex;`;

export const MenuLink = styled.a`
  display: inline-block;
  padding: 0 3px;
  margin-right: 8px;
  text-decoration: none;
  color: #383838;
  font: 14px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
`;
