import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import './App.css'
import SignUpForm from './form/SignUpForm.js'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Link to='/'>Multilevel Form</Link>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/form' component={SignUpForm}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
