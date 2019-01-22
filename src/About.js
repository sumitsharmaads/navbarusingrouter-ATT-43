import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1> I am in About component </h1>
      </div>
    );
  }
}

export default About;
