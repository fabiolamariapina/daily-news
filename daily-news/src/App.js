import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";

// constructor(props) {
//   super(props);
//   this.state = {
//     baseURL: "https://newsapi.org/v2/everything?",
//     query: "q=",
//     searchTerm: "",
//     apiKey: "&apiKey=" + "9b71ebb3bfe54ab7ba9718c6819745c7",
//     searchURL: "",
//   };
//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
// handleChange(event) {
//   this.setState({ [event.target.id]: event.target.value });
// }
// handleSubmit(event) {
//   event.preventDefault();
//   this.setState({
//     searchURL:
//       this.state.baseURL +
//       this.state.query +
//       this.state.searchTerm +
//       this.state.apiKey,
//   });
// }

// add news API URL
const NEWS_API_URL = "https://newsapi.org/v2/everything?";
// add API Key
const API_KEY = "9b71ebb3bfe54ab7ba9718c6819745c7";

const App = () => {
  return (
    <div>
      <Heading />
      <main>
        <div>
          <Search />
        </div>
      </main>
    </div>
  );
};
