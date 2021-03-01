import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    const AppName = styled.h1`
      font-family: "Newsreader", serif;
      font-weight: 800px;
      text-align: center;
    `;
    return (
      <header>
        <AppName>Daily News</AppName>
      </header>
    );
  }
}
