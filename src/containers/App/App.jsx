import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../../components/About';
import Home from '../Home';
import DrawerHeader from '../../components/DrawerHeader';

import './App.css';

const hours = new Date().getHours();
const scene = (hours < 18 && hours > 5) ? 'day' : 'night';

class App extends Component {
  constructor(props) {
    super(props);
    this.stet = {};
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
            >
              <DrawerHeader scene={scene}>
                <Home scene={scene} />
              </DrawerHeader>
            </Route>
            <Route
              path="/about"
            >
              <DrawerHeader scene={scene}>
                <About />
              </DrawerHeader>
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
