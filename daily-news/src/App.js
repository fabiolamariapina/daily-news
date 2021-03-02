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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            <SearchBar inline onSubmit={this.handleSubmit}>
              <Form.Control
                className="mb-2 mr-sm-2"
                id="inlineFormInputName2"
                value={this.state.source}
                onChange={this.handleChange}
                placeholder="Search by Source"
              />
              <Button type="submit" className="mb-2">
                Search
              </Button>
              <a href={this.state.searchURL}>{this.state.searchURL}</a>
            </SearchBar>
          </div>
        </main>
      </div>
    );
  }
}
