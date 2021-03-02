import React, { Component } from "react";
import Heading from "./components/Heading";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://newsapi.org/v2/everything?",
      query: "q=",
      searchTerm: "",
      apiKey: "&apiKey=" + "9b71ebb3bfe54ab7ba9718c6819745c7",
      searchURL: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchURL:
        this.state.baseURL +
        this.state.query +
        this.state.searchTerm +
        this.state.apiKey,
    });
  }
  render() {
    return (
      <div>
        <Heading />
        <main>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                id="source"
                type="text"
                placeholder="Search for News"
                value={this.state.searchTerm}
                onChange={this.handleChange}
              />
              <input type="submit" value="Search" />
            </form>
            <a href={this.state.searchURL}>{this.state.searchURL}</a>
          </div>
        </main>
      </div>
    );
  }
}
