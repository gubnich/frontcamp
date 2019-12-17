import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './modules/main';
import Detail from './modules/detail';
import Page404 from './components/page404';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/search/:q' component={Main} />
            <Route exact path='/film/:id' component={Detail} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
