import React from "react";
import styled from "styled-components";
import logo from "./airbnbLogo.svg";
import Findpicture from "./inputFind.svg";
import arrow from "./arrowdown.svg";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  box-shadow: 0 1px 0 0 rgba(72, 72, 72, 0.08);
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 250px;
  height: 48px;
  padding-left: 35px;
  margin-left: 8px;
  font: 14px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  background-image: url(${Findpicture});
  background-repeat: no-repeat;
  background-position: 12px center;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 5px;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    width: 432px;
    padding-left: 49px;
    margin-left: 17px;
    font-weight: 16px;
    line-height: 24px;
  }
  @media only screen and (min-width: 992px) {
    width: 392px;
    padding-left: 49px;
    margin-left: 53px;
  }
`;

export const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: none;
  @media only screen and (min-width: 769px) {
    display: flex;
  }
`;

export const MenuLink = styled.a`
  display: inline-block;
  padding: 0 3px;
  margin-right: 8px;
  text-decoration: none;
  color: #383838;
  font: 14px/24px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
`;

export const MenuBtn = styled.button`
  display: block;
  border: none;
  width: 11px;
  height: 6px;
  background: url(${arrow}) no-repeat 0 0;
  background-size: cover;
  margin-left: 7px;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
