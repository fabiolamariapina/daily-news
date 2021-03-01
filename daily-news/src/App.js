import React, { Component } from "react";
import Heading from "./components/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://newsapi.org/v2/everything?",
      apikey: "apikey=" + "9b71ebb3bfe54ab7ba9718c6819745c7",
      query: "&t=",
      source: "",
      searchURL: "",
    };
  }
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
                placeholder="Search by Source"
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
