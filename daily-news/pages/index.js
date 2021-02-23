import React, { Component } from "react";
import styled from "styled-components";

export default class index extends Component {
  render() {
    const AppName = styled.h1`
      text-align: center;
      font-size: 40px;
    `;
    return (
      <div>
        <AppName>Daily News</AppName>
      </div>
    );
  }
}
