import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 7px 16px;
  margin-right: 12px;

  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  text-align: center;
  color: #383838;
  background-color: transparent;
  font: 14px/16px "Circular Air Book", "Helvetica Neue", "Helvetica", "Arial",
    sans-serif;
`;

const Filters = styled.div`
  margin-top: 12px;
  padding-bottom: 12px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  box-shadow: 0 0.5px 0 0 rgba(72, 72, 72, 0.08);
`;

export default props => {
  return (
    <Filters>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Button>Dates</Button>
            <Button>Guests</Button>
            <Button>More filters</Button>
          </div>
        </div>
      </div>
    </Filters>
  );
};
