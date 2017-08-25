import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'
import SignUpForm from './form/SignUpForm.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Link to='/#1'>Multilevel Form</Link>
          <Route path='/' component={SignUpForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
