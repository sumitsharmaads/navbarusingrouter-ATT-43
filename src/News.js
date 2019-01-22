import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

class News extends Component {
  render() {
    return (
      <div className="News">
        <h1> I am in News component </h1>
      </div>
    );
  }
}

export default News;
