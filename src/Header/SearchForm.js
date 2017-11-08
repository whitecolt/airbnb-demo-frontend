import React from "react";
import styled from "styled-components";
import find from "./inputFind.svg";

const SearchForm = styled.input`background: url(inputFind.svg);`;

export default () => {
  return <SearchForm type="text" placeholder="Try &quot;Miami&quot;" />;
};
