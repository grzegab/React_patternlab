import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './patternlab/global.scss';
import Navigation from './patternlab/2-molecules/0-navbar/index';

import Nucleus from './patternlab/0-nucleus/index';
import Atoms from './patternlab/1-atoms/index';

const mainPage = () => {
  return (
      <div>Some descrption of this page and how it is organized.</div>
  );
};

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navigation/>
            <Route exact path="/" component={mainPage}/>
            <Route path="/nucleus" component={Nucleus}/>
            <Route path="/atoms" component={Atoms}/>
            <Route path="/molecules" component={Nucleus}/>
            <Route path="/organisms" component={Nucleus}/>
            <Route path="/creatures" component={Nucleus}/>
            <Route path="/page-1" component={Nucleus}/>
            <Route path="/page-2" component={Nucleus}/>
          </div>
        </Router>
    );
  }
}

export default App;
