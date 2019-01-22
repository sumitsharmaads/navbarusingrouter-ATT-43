import React, {Component} from 'react';
import App from './App';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import News from './News';
import Latest from './Latest';
import About from './About';
import Contact from './Contact';

class Home extends Component {
  render() {
  	return (
  	  <Router>
  	  <div>
      <switch>
  	  <Route exact path="/" component={App} />
      <Route path="/News" component={News} />
      <Route path="/Latest Updates" component={Latest} />
      <Route path="/About Us" component={About} />
      <Route path="/Contact Us" component={Contact} />
      </switch>	
  	  </div>
  	  </Router>
  	);
  }
}

export default Home;