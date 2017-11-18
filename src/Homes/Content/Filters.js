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
  margin-bottom: 24px;
  padding-bottom: 12px;
`;

const FixedContainer = styled.div`
  position: fixed;
  z-index: 21;
  left: 0;
  top: 82px;
  padding-top: 12px;
  padding-bottom: 13px;

  width: 100%;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  box-shadow: 0 0.5px 0 0 rgba(72, 72, 72, 0.08);

  background: #fff;
`;

const Invisible = styled.div`
  display: none;

  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
`;

export default props => {
  return (
    <Filters>
      <FixedContainer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Button>Dates</Button>
              <Button>Guests</Button>

              <Invisible>
                <Button>RoomType</Button>
                <Button>Price</Button>
                <Button>Instant book</Button>
              </Invisible>

              <Button>More filters</Button>
            </div>
          </div>
        </div>
      </FixedContainer>
    </Filters>
  );
};
