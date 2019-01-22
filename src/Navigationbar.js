import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Navigationbar extends Component {
  render() {
    return (
      <div className="Navigationbar">
        <h1 className="menuBorder"> ATT - 43 Navigationbar using Router</h1>
        <div className = "Menu-bar">
        	<ul className ="Menu">
        		<li><a className ="menubar-menu"><Link className= "menuLink" to="/home">Home</Link></a></li>
        		<li><a className ="menubar-menu"><Link className= "menuLink" to="/News">News</Link></a></li>
        		<li><a className ="menubar-menu"><Link className= "menuLink" to="/Latest Updates">Latest Updates</Link></a></li>
        		<li><a className ="menubar-menu"><Link className= "menuLink" to="/About Us">About Us</Link></a></li>
        		<li><a className ="menubar-menu"><Link className= "menuLink" to="/Contact Us">Contact Us</Link></a></li>
        	</ul>
        </div>
      </div>
    );
  }
}

export default Navigationbar;
