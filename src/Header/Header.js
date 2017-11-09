import React from "react";
import styled from "styled-components";
import { Header, Wrap, Input, LogoSearch, Nav, MenuLink } from "./styled";
import logo from "./airbnbLogo.svg";

export default function() {
  return (
    <Header>
      <div className="container">
        <Wrap>
          <LogoSearch>
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <Input type="text" placeholder="Try &quot;Miami&quot;" />
          </LogoSearch>
          <Nav>
            <MenuLink href="#">Become a host</MenuLink>
            <MenuLink href="#">Help</MenuLink>
            <MenuLink href="#">Sign up</MenuLink>
            <MenuLink href="#">Log in</MenuLink>
          </Nav>
        </Wrap>
      </div>
    </Header>
  );
}
