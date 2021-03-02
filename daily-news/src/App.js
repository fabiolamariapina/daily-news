import React, { Component } from "react";
import Heading from "./components/Heading";

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
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchURL:
        this.state.baseURL +
        this.state.apikey +
        this.state.query +
        this.state.source,
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
                placeholder="Type Source Here"
                value={this.state.source}
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
