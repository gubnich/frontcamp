import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from './modules/main';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <BrowserRouter>
          <Route exact path="/" component={Main} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
