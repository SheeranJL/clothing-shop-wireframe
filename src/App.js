import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header/header.js';
import FrontPage from './components/frontpage/frontpage.js';

import './app.scss';

const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <div className='app-container'>
          <Switch>
            <Route exact path='/' component={FrontPage}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
