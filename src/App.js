import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import './App.css'
import ExampleForm from './form/ExampleForm.js'
import Home from './Home'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import AppBar from 'material-ui/AppBar'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className='App'>
            <AppBar
              title={<Link to='/'>Multistep Form</Link>}
            />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/form' component={ExampleForm}/>
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
      );
  }
}

export default App;
