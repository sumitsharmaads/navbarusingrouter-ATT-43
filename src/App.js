import React, { Component } from 'react';
import './App.css';
import Navigationbar from './Navigationbar';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Switch} from "react-router-dom";
import News from './News';
import Latest from './Latest';
import About from './About';
import Contact from './Contact';
import Homebar from './Homebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Navigationbar />
              <Switch>
                <Route exactly component={News} path="/News" />
                <Route exactly component={Latest} path="/Latest Updates" />
                <Route exactly component={About} path="/About Us" />
                <Route exactly component={Contact} path="/Contact Us" />
                <Route exactly component={Homebar} path="/Home" />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
