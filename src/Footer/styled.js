import styled from "styled-components";
import arrowdown from "./arrow-down.svg";

export const Footer = styled.footer`
  padding-top: 48px;
  padding-bottom: 35px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

export const FooterWrap = styled.div`padding-bottom: 48px;`;

export const Select = styled.select`
  width: 75%;
  height: 48px;
  appearance: none;
  background: transparent;
  background: url(${arrowdown}) no-repeat 90%;
  margin-bottom: 16px;
  padding-left: 10px;
  border-radius: 4px;
  font: 18px/21px "Circular Air Light", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #383838;
`;

export const Form = styled.form``;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavTitle = styled.span`
  margin-bottom: 12px;
  font: 15px/18px "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  color: #383838;
`;

export const Link = styled.a`
  margin-bottom: 5px;
  text-decoration: none;
  color: #383838;
  font: 15px/18px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
`;

export const Basement = styled.div`
  display: flex;
  padding-top: 35px;
  padding-bottom: 35px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

export const Inc = styled.div`
  display: flex;
  align-items: center;
  font: 15px/18px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
  color: #636363;
`;

export const Info = styled.nav`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`margin-right: 12px;`;

export const InfoLink = styled.a`
  margin-right: 16px;

  text-decoration: none;
  color: #636363;
  font: 15px/18px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
`;
