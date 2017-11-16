import styled from "styled-components";
import arrowdown from "./arrow-down.svg";

export const Footer = styled.footer`
  padding-top: 16px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);

  @media only screen and (min-width: 768px) {
    padding-top: 48px;
  }
`;

export const FooterWrap = styled.div`
  padding-bottom: 16px;
  @media only screen and (min-width: 768px) {
    padding-bottom: 48px;
  }

  @media only screen and (min-width: 992px) {
    padding-bottom: 36px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  appearance: none;
  background: transparent;
  background: url(${arrowdown}) no-repeat 90%;
  margin-bottom: 16px;
  padding-left: 10px;
  border-radius: 4px;
  font: 12px/14px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }

  @media only screen and (min-width: 992px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const Form = styled.form``;

export const Nav = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavTitle = styled.span`
  margin-bottom: 20px;
  font: 12px/14px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  color: #383838;

  @media only screen and (min-width: 992px) {
    margin-bottom: 16px;
    font-size: 15 px;
    line-height: 18px;
  }
`;

export const Link = styled.a`
  margin-bottom: 11px;
  text-decoration: none;
  color: #636363;
  font: 12px/14px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  @media only screen and (min-width: 992px) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 5px;
  }
`;

export const Buttons = styled.div`display: block;`;

export const Basement = styled.div`
  display: flex;
  padding-top: 35px;
  padding-bottom: 16px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    padding-bottom: 35px;
  }
`;

export const Inc = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-basis: 100%;
  align-items: center;
  font: 12px/14px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #636363;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Info = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 0;
  font: 12px/14px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const Logo = styled.img`margin-right: 12px;`;

export const InfoLink = styled.a`
  margin-right: 12px;
  text-decoration: none;
  color: #636363;
  font: 12px/14px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  white-space: nowrap;

  @media only screen and (min-width: 992px) {
    margin-right: 16px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
