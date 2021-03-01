import React, { Component } from "react";
import Heading from "./components/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

export default class App extends Component {
  render() {
    const SearchBar = styled(Form)`
      display: flex;
      justify-content: center;
    `;
    return (
      <div>
        <Heading />
        <main>
          <div>
            <SearchBar inline>
              <Form.Control
                className="mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Search For News By Source"
              />
              <Button type="submit" className="mb-2">
                Search
              </Button>
            </SearchBar>
          </div>
        </main>
      </div>
    );
  }
}
