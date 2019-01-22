import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

class Homebar extends Component {
  render() {
    return (
      <div className="Homebar">
        <h1> I am in Homebar component </h1>
      </div>
    );
  }
}

export default Homebar;
